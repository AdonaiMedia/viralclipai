import { TaskScheduler } from "@/services/brain/TaskScheduler";
import { MissionPlanner } from "@/services/brain/MissionPlanner";
import { MemoryManager } from "@/services/brain/memory";

import type { Mission } from "@/services/brain/Mission";

export class ViralProcessingEngine {

  async process(
    mission: Mission
  ) {

    console.log("================================");
    console.log("STARTING VIRAL PROCESS");
    console.log("================================");

    const memory = new MemoryManager(
      mission.creatorId
    );

    const planner =
      new MissionPlanner(memory);

    const tasks =
      planner.plan(mission);

    const scheduler =
      new TaskScheduler();

    await scheduler.run(tasks);

    console.log("================================");
    console.log("MISSION COMPLETED");
    console.log("================================");

    console.table(
      memory.getSummary()
    );

  }

}