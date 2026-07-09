import { ViralProcessingEngine } from "@/services/orchestrator/ViralProcessingEngine";

import type { Mission } from "./Mission";

export class MissionRunner {

  private engine =
    new ViralProcessingEngine();

  async run(
    mission: Mission
  ) {

    console.log(
      `Running mission ${mission.id}`
    );

    await this.engine.process(
      mission
    );

  }

}