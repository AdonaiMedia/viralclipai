import { Agent } from "./AgentRegistry";
import { generateCoachingAdvice } from "@/services/coach/CoachEngine";

export class CoachAgent implements Agent {

  async execute(payload: any): Promise<any> {

    console.log("================================");
    console.log("COACH AGENT");
    console.log("================================");

    return await generateCoachingAdvice({
      transcript: payload.transcript,
      analytics: payload.analytics,
      platform: payload.platform,
    });

  }

}