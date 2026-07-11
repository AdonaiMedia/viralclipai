import { Agent } from "./AgentRegistry";
import { generateCaption } from "@/services/ai/captionGenerator";

export class CaptionAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("CAPTION AGENT");
    console.log("================================");

    return await generateCaption({
      transcript: payload.transcript,
      topic: payload.topic ?? payload.title,
      title: payload.title,
      platform: payload.platform,
      language: payload.language ?? "en",
    });

  }

}