import type { Mission } from "@/services/brain/Mission";

import { runMission } from "./index";

export class AutonomousDirector {

  async evaluate(
    creatorId: string,
    videoId?: number
  ) {

    if (!videoId) {
      return;
    }

    const mission: Mission = {
      id: crypto.randomUUID(),
      creatorId,
      type: "analysis",
      status: "pending",
      payload: {
        videoId,
      },
      createdAt: new Date(),
    };

    console.log("================================");
    console.log("AUTONOMOUS DIRECTOR");
    console.log("Launching mission automatically...");
    console.log("================================");

    await runMission(mission);

  }

}