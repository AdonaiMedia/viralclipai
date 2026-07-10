import { Agent } from "./AgentRegistry";
import { runThumbnailPipeline } from "@/services/pipelines/ThumbnailPipeline";

export class ThumbnailAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("THUMBNAIL AGENT");
    console.log("================================");

    return await runThumbnailPipeline(
      payload.videoPath,
      payload.transcript,
      payload.videoId
    );

  }

}