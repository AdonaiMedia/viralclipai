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

    const { data: video, error } =
      await supabaseServer
        .from("videos")
        .select("*")
        .eq("id", videoId)
        .single();

    if (error) throw error;

    console.log("VIDEO:", video);
    const {

  localVideo,

  inspection,

} = await runVideoPipeline(
  video.file_name
);


console.log("VIDEO PIPELINE COMPLETE");
await supabaseServer
  .from("videos")
  .update({
    status: "completed",
  })
  .eq("id", videoId);

console.log("VIDEO STATUS UPDATED");
const {

  extractedAudio,

  audioInspection,

} = await runAudioPipeline(
  localVideo
);

console.log("AUDIO PIPELINE COMPLETE");
const {

  transcript,

  intelligence,

  viralMoments,

} = await runTranscriptPipeline(
  extractedAudio
);
const overallScore = Math.round(
  (
    inspection.qualityScore +
    audioInspection.audioQuality +
    inspection.viralPotential
  ) / 3
);

console.log("OVERALL SCORE:", overallScore);
console.log("TRANSCRIPT PIPELINE COMPLETE");
const {

  scoredClips,

  bestClips,

  generatedClips,

} = await runClipPipeline(

  videoId,

  localVideo,

  viralMoments

);

console.log("CLIP PIPELINE COMPLETE");
const thumbnail = await runThumbnailPipeline(

  localVideo,

  transcript,

  videoId

);

console.log("THUMBNAIL PIPELINE COMPLETE");
const database = await runDatabasePipeline(

  videoId,

  intelligence,

  viralMoments,

  overallScore,

  generatedClips

);

console.log("DATABASE PIPELINE COMPLETE");
 } catch (error) {

  console.error(error);

  await supabaseServer
    .from("videos")
    .update({
      status: "failed",
    })
    .eq("id", videoId);

  throw error;

}

  

}