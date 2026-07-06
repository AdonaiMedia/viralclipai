import { Agent } from "./AgentRegistry";
import { runClipPipeline } from "@/services/pipelines/ClipPipeline";

export class ClipAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("CLIP AGENT");
    console.log("================================");

    return await runClipPipeline(
      payload.videoId,
      payload.localVideo,
      payload.viralMoments
    );

  }

}