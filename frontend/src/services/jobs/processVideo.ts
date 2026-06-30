import { supabaseServer } from "@/lib/supabase-server";

import { downloadVideo } from "../storage/downloadVideo";
import { uploadClip } from "../storage/uploadClip";
import { generateClip } from "../storage/GenerateClip";

import { extractAudio } from "../ffmpeg/extractAudio";

import { transcribeAudio } from "../transcription/transcribe";

import { inspectVideo } from "../inspection/VideoInspection";
import { inspectAudio } from "../inspection/AudioInspection";

import { analyzeTranscript } from "../intelligence/TranscriptIntelligence";
import { detectViralMoments } from "../intelligence/ViralMomentDetector";

import { saveAnalysis } from "../database/saveAnalysis";


export async function processVideo(videoId: number) {
  try {
    console.log("==================================");
    console.log("PROCESSING VIDEO:", videoId);
    console.log("==================================");

    const { data: video, error } = await supabaseServer
      .from("videos")
      .select("*")
      .eq("id", videoId)
      .single();

    if (error) {
      throw error;
    }

    console.log("VIDEO FOUND:", video);

    // Download Video
    const localVideo = await downloadVideo(video.file_name);

    // Video Inspection
    const inspection = await inspectVideo(localVideo);

    if (!inspection.canProcess) {
      throw new Error("Video rejected by AI Inspection.");
    }

    // Extract Audio
    const audioPath = "storage/audio/audio.mp3";

    const extractedAudio = await extractAudio(
      localVideo,
      audioPath
    );

    // Audio Inspection
    const audioInspection = await inspectAudio(
      extractedAudio
    );

    // Overall Score
    const overallScore = Math.round(
      (
        inspection.qualityScore +
        audioInspection.audioQuality +
        inspection.viralPotential
      ) / 3
    );

    // Transcription
    const transcript = await transcribeAudio(
      extractedAudio
    );

    // AI Intelligence
    const intelligence = await analyzeTranscript(
      transcript
    );

    // Viral Detection
    const viralMoments = await detectViralMoments(
      transcript
    );

    // Save Analysis
    await saveAnalysis(
  videoId,
  intelligence ?? "",
  JSON.stringify(viralMoments),
  overallScore
);

    console.log("================================");
    console.log("ANALYSIS SAVED");
    console.log("================================");

    // -----------------------------
    // GENERATE CLIP
    // -----------------------------

    const outputName = `clip_${videoId}.mp4`;

    const generatedClip = await generateClip(
      videoId,
      localVideo,
      0,
      10,
      overallScore,
      outputName
    );

    // -----------------------------
    // UPLOAD CLIP
    // -----------------------------

    const clipUrl = await uploadClip(outputName);


    console.log("================================");
    console.log("FIRST CLIP GENERATED");
    console.log("================================");

    console.log("PUBLIC URL:", clipUrl);

    return {
      success: true,
      video,
      transcript,
      intelligence,
      viralMoments,
      overallScore,
      generatedClip,
      savedClip,
      clipUrl,
    };

  } catch (error) {
    console.error(error);
    throw error;
  }
}