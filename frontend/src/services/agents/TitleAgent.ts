import { Agent } from "./AgentRegistry";
import { generateTitle } from "@/services/ai/generateTitle";

export class TitleAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("TITLE AGENT");
    console.log("================================");

 return await generateTitle({
  transcript: payload.transcript,
  topic: payload.topic,
  platform: payload.platform,
  language: payload.language,
});

  }

}