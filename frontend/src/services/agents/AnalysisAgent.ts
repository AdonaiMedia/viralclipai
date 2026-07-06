import { Agent } from "./AgentRegistry";
import { AIEngine } from "@/services/engine/AIEngine";

export class AnalysisAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("ANALYSIS AGENT");
    console.log("================================");

    return await AIEngine.analyze({
      videoId: payload.videoId,
      userId: payload.userId,
    });

  }

}