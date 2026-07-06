import { Agent } from "./AgentRegistry";

import {
  generateRecap,
} from "@/services/recap/RecapEngine";

export class RecapAgent implements Agent {

  async execute(payload: any) {

    return await generateRecap(

      payload.videoId,

      payload.options

    );

  }

}