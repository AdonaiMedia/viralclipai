import { generateThumbnailVariations } from "../thumbnails/GenerateThumbnailVariations";
import { ViralScoringEngine } from "../ai/ViralScoringEngine";
import { ClipRankingEngine } from "../ai/ClipRankingEngine";
import { generateMultipleClips } from "../storage/GenerateMultipleClips";
import { extractThumbnailFrame } from "../thumbnails/ThumbnailFrameExtractor";
import { analyzeThumbnail } from "../thumbnails/ThumbnailIntelligence";
import { generateThumbnailPrompt } from "../thumbnails/ThumbnailPromptEngine";
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
import { saveClip } from "../database/saveClip";
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
const scoredClips =
  ViralScoringEngine(viralMoments);

const bestClips =
  ClipRankingEngine(scoredClips, 5);
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
// =============================
// THUMBNAIL AI
// =============================

const thumbnailPath =
  await extractThumbnailFrame(
    generatedClip.clipPath,
    `thumbnail_${videoId}.jpg`
  );

const thumbnailAnalysis =
  await analyzeThumbnail(
    thumbnailPath
  );

const thumbnailPrompt =
  await generateThumbnailPrompt(
    thumbnailAnalysis,
    transcript
  );

const thumbnailVariations =
await generateThumbnailVariations(
    thumbnailPrompt.prompt
);
  

console.log("================================");
console.log("THUMBNAIL READY");
console.log("================================");

console.log(thumbnailPrompt);
    // -----------------------------
    // SAVE CLIP
    // -----------------------------

    const savedClip = await saveClip(
      videoId,
      0,
      10,
      clipUrl,
      overallScore
    );
console.log("================================");
console.log("GENERATING MULTIPLE CLIPS");
console.log("================================");

const generatedClips =
  await generateMultipleClips(
    videoId,
    localVideo,
    bestClips
  );

console.log(
  "Generated:",
  generatedClips.length,
  "clips"
);
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
  generatedClips,
  bestClips,
  

  thumbnailPath,
  thumbnailAnalysis,
  thumbnailPrompt,
  thumbnailVariations,
  
};

} catch (error) {
  console.error(error);
  throw error;
}
}