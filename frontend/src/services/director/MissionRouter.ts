import { MissionQueue } from "@/services/brain/MissionQueue";
import { MissionRunner } from "@/services/brain/MissionRunner";

import type { Mission } from "@/services/brain/Mission";

export class MissionRouter {

  private queue =
    new MissionQueue();

  private runner =
    new MissionRunner();

  async dispatch(
    mission: Mission
  ) {

    this.queue.add(
      mission
    );

    while (
      !this.queue.isEmpty()
    ) {

      const next =
        this.queue.next();

      if (!next) {
        continue;
      }

      await this.runner.run(
        next
      );

    }

  }

}