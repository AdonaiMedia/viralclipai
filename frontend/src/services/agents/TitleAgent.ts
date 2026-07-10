import { Agent } from "./AgentRegistry";
import { generateTitle } from "@/services/ai/titleGenerator";

export class TitleAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("TITLE AGENT");
    console.log("================================");

    return await generateTitle({
      transcript: payload.transcript,
      platform: payload.platform,
      language: payload.language,
    });

  }

}