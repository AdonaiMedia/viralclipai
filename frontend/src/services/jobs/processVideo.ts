import { supabaseServer } from "@/lib/supabase-server";
import {  emitProcessingEvent,} from "@/services/events";
import { runVideoPipeline } from "../pipelines/VideoPipeline";
import { runAudioPipeline } from "../pipelines/AudioPipeline";
import { runTranscriptPipeline } from "../pipelines/TranscriptPipeline";
import { runClipPipeline } from "../pipelines/ClipPipeline";
import { runThumbnailPipeline } from "../pipelines/ThumbnailPipeline";
import { runDatabasePipeline } from "../pipelines/DatabasePipeline";

export async function processVideo(videoId: number) {
  try {
    console.log("================================");
    console.log("VIRALCLIP AI ENGINE");
    console.log("================================");

    const { data: video, error } = await supabaseServer
      .from("videos")
      .select("*")
      .eq("id", videoId)
      .single();

    if (error) throw error;

    console.log("VIDEO:", video);

    await emitProcessingEvent({
  stage: "upload",
  progress: 10,
  message: "Video uploaded successfully.",
  createdAt: new Date(),
});

    // Processing
    await supabaseServer
      .from("videos")
      .update({
        status: "processing",
      })
      .eq("id", videoId);

    const {
      localVideo,
      inspection,
    } = await runVideoPipeline(video.file_name);

    console.log("✅ VIDEO PIPELINE COMPLETE");

    await emitProcessingEvent({
  stage: "inspection",
  progress: 25,
  message: "Video inspection completed.",
  createdAt: new Date(),
});

    const {
      extractedAudio,
      audioInspection,
    } = await runAudioPipeline(localVideo);

    console.log("✅ AUDIO PIPELINE COMPLETE");

    // Analyzing
    await supabaseServer
      .from("videos")
      .update({
        status: "analyzing",
      })
      .eq("id", videoId);

    const {
      transcript,
      intelligence,
      viralMoments,
    } = await runTranscriptPipeline(extractedAudio);

    console.log("✅ TRANSCRIPT PIPELINE COMPLETE");

    await emitProcessingEvent({
  stage: "transcription",
  progress: 45,
  message: "Transcript generated.",
  createdAt: new Date(),
});

    const overallScore = Math.round(
      (
        inspection.qualityScore +
        audioInspection.audioQuality +
        inspection.viralPotential
      ) / 3
    );

    console.log("OVERALL SCORE:", overallScore);

    await emitProcessingEvent({
  stage: "analysis",
  progress: 60,
  message: "AI analysis completed.",
  createdAt: new Date(),
});

    // Generating
    await supabaseServer
      .from("videos")
      .update({
        status: "generating",
      })
      .eq("id", videoId);

    const {
      scoredClips,
      bestClips,
      generatedClips,
    } = await runClipPipeline(
      videoId,
      localVideo,
      viralMoments
    );

    console.log("✅ CLIP PIPELINE COMPLETE");

    await emitProcessingEvent({
  stage: "clips",
  progress: 80,
  message: "AI clips generated.",
  createdAt: new Date(),
});

    await runThumbnailPipeline(
      localVideo,
      transcript,
      videoId
    );

    console.log("✅ THUMBNAIL PIPELINE COMPLETE");

    await emitProcessingEvent({
  stage: "thumbnails",
  progress: 95,
  message: "AI thumbnails generated.",
  createdAt: new Date(),
});

    await runDatabasePipeline(
      videoId,
      intelligence,
      viralMoments,
      overallScore,
      generatedClips
    );

    console.log("✅ DATABASE PIPELINE COMPLETE");

    // Completed
    await supabaseServer
      .from("videos")
      .update({
        status: "completed",
      })
      .eq("id", videoId);

    console.log("STATUS: COMPLETED");

    return {
      
      success: true,
      overallScore,
      clipsGenerated: generatedClips.length,
      scoredClips,
      bestClips,
    };
    await emitProcessingEvent({
  stage: "completed",
  progress: 100,
  message: "Processing completed successfully.",
  createdAt: new Date(),
});
  } catch (error) {
    console.error("PROCESS VIDEO ERROR:", error);

    await supabaseServer
      .from("videos")
      .update({
        status: "failed",
      })
      .eq("id", videoId);

    throw error;
  }
}