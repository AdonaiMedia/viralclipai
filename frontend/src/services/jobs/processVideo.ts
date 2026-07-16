import { runAIOrchestrator } from "@/services/ai/AIOrchestrator";
import { saveProcessingProgress } from "@/services/database/saveProcessingProgress";
import { supabaseServer } from "@/lib/supabase-server";
import { emitProcessingEvent } from "@/services/events";
import { runVideoPipeline } from "@/services/pipelines/VideoPipeline";
import { runAudioPipeline } from "@/services/pipelines/AudioPipeline";
import { runTranscriptPipeline } from "@/services/pipelines/TranscriptPipeline";
import { runClipPipeline } from "@/services/pipelines/ClipPipeline";
import { runThumbnailPipeline } from "@/services/pipelines/ThumbnailPipeline";
import { runDatabasePipeline } from "@/services/pipelines/DatabasePipeline";
export async function processVideo(
  videoId: number
) {

  const startedAt = Date.now();

  try {
    console.log("================================");
    console.log("VIRALCLIP AI ENGINE");
    console.log("================================");

    await saveProcessingProgress(
      videoId,
      "upload",
      5,
      "Initializing AI Engine..."
    );

    const { data: video, error } =
      await supabaseServer
        .from("videos")
        .select("*")
        .eq("id", videoId)
        .single();

    if (error) throw error;
if (!video) {
  throw new Error(`Video ${videoId} not found.`);
}
    console.log("VIDEO:", video);

    await emitProcessingEvent({
      stage: "upload",
      progress: 10,
      message: "Video uploaded successfully.",
      createdAt: new Date(),
    });

    await supabaseServer
      .from("videos")
      .update({
        status: "processing",
      })
      .eq("id", videoId);

    /*
    ====================================
    VIDEO PIPELINE
    ====================================
    */

    const {
      localVideo,
      inspection,
    } = await runVideoPipeline(
      video.file_name
    );

    console.log("VIDEO PIPELINE COMPLETE");

    await saveProcessingProgress(
      videoId,
      "inspection",
      20,
      "Inspecting video..."
    );

    await emitProcessingEvent({
      stage: "inspection",
      progress: 20,
      message: "Video inspection completed.",
      createdAt: new Date(),
    });

    /*
    ====================================
    AUDIO PIPELINE
    ====================================
    */

    const {
      extractedAudio,
      audioInspection,
    } = await runAudioPipeline(
      localVideo
    );

    console.log("AUDIO PIPELINE COMPLETE");

    await saveProcessingProgress(
      videoId,
      "audio",
      35,
      "Analyzing audio..."
    );

    /*
    ====================================
    TRANSCRIPTION
    ====================================
    */

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
} =
  await runTranscriptPipeline(
    videoId,
    extractedAudio
  );

  const aiContent =
  await runAIOrchestrator({

    transcript,

    topic: intelligence.topic,

    platform: "youtube",

    language: "en",

  });
const fullIntelligence = {
  ...intelligence,
  ai: aiContent,
};

console.log("================================");
console.log("AI CONTENT");
console.log("================================");
console.log(aiContent);

    console.log(
      "TRANSCRIPT PIPELINE COMPLETE"
    );

    await saveProcessingProgress(
      videoId,
      "transcription",
      50,
      "Understanding speech..."
    );

    await emitProcessingEvent({
      stage: "transcription",
      progress: 50,
      message: "Transcript generated.",
      createdAt: new Date(),
    });

    /*
    ====================================
    ANALYSIS
    ====================================
    */

    const overallScore = Math.round(
      (
        inspection.qualityScore +
        audioInspection.audioQuality +
        inspection.viralPotential
      ) / 3
    );

    console.log(
      "OVERALL SCORE:",
      overallScore
    );

    await saveProcessingProgress(
      videoId,
      "analysis",
      65,
      "Finding viral moments..."
    );

    await emitProcessingEvent({
      stage: "analysis",
      progress: 65,
      message: "AI analysis completed.",
      createdAt: new Date(),
    });

    /*
    ====================================
    CLIP GENERATION
    ====================================
    */

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

    console.log(
      "CLIP PIPELINE COMPLETE"
    );

    await saveProcessingProgress(
      videoId,
      "clips",
      80,
      "Generating clips..."
    );

    await emitProcessingEvent({
      stage: "clips",
      progress: 80,
      message: "AI clips generated.",
      createdAt: new Date(),
    });

    /*
    ====================================
    THUMBNAILS
    ====================================
    */

    await runThumbnailPipeline(
      localVideo,
      transcript,
      videoId
    );

    console.log(
      "THUMBNAIL PIPELINE COMPLETE"
    );

    await saveProcessingProgress(
      videoId,
      "thumbnail",
      90,
      "Generating thumbnails..."
    );

    await emitProcessingEvent({
      stage: "thumbnails",
      progress: 90,
      message:
        "AI thumbnails generated.",
      createdAt: new Date(),
    });

    /*
    ====================================
    DATABASE
    ====================================
    */

    await runDatabasePipeline(
  videoId,
  fullIntelligence,
  viralMoments,
  overallScore,
  generatedClips
);

    console.log(
      "DATABASE PIPELINE COMPLETE"
    );

    await saveProcessingProgress(
      videoId,
      "database",
      97,
      "Saving results..."
    );

    /*
    ====================================
    COMPLETE
    ====================================
    */

    await supabaseServer
      .from("videos")
      .update({
        status: "completed",
      })
      .eq("id", videoId);

    await saveProcessingProgress(
      videoId,
      "completed",
      100,
      "Finished successfully."
    );

    await emitProcessingEvent({
      stage: "completed",
      progress: 100,
      message:
        "Processing completed successfully.",
      createdAt: new Date(),
    });

    console.log(
      "STATUS: COMPLETED"
    );

    console.log("================================");
    console.log("MISSION COMPLETE");
    console.log("================================");

console.log(
  `TOTAL PROCESSING TIME: ${Date.now() - startedAt} ms`
);

return {
  success: true,
  overallScore,
  clipsGenerated: generatedClips.length,
  scoredClips,
  bestClips,
};

} catch (error) {

  console.error(
    "PROCESS VIDEO ERROR:",
    error
  );

  await supabaseServer
    .from("videos")
    .update({
      status: "failed",
    })
    .eq("id", videoId);

  await saveProcessingProgress(
    videoId,
    "failed",
    100,
    "Processing failed."
  );

  await emitProcessingEvent({
    stage: "failed",
    progress: 100,
    message: "Processing failed.",
    createdAt: new Date(),
  });

 throw error;

}

}