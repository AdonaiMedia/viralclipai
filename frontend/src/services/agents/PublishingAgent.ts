import { Agent } from "./AgentRegistry";
import { publishContent } from "@/services/publishing/publishContent";

export class PublishingAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("PUBLISHING AGENT");
    console.log("================================");

    return await publishContent({
      platform: payload.platform,
      videoPath: payload.videoPath,
      caption: payload.caption,
      title: payload.title,
      thumbnail: payload.thumbnail,
    });

  }

}