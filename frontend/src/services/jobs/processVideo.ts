import { supabaseServer } from "@/lib/supabase-server";

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

    const overallScore = Math.round(
      (
        inspection.qualityScore +
        audioInspection.audioQuality +
        inspection.viralPotential
      ) / 3
    );

    console.log("OVERALL SCORE:", overallScore);

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

    await runThumbnailPipeline(
      localVideo,
      transcript,
      videoId
    );

    console.log("✅ THUMBNAIL PIPELINE COMPLETE");

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