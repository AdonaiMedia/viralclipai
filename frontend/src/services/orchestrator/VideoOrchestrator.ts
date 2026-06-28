import { processVideo } from "../jobs/processVideo";

export async function VideoOrchestrator(videoId: number) {

  console.log("================================");
  console.log("ViralClip AI Orchestrator");
  console.log("================================");

  return await processVideo(videoId);

}