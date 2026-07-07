import { MissionPlanner } from "@/services/brain/MissionPlanner";
import { WorkflowState } from "@/services/brain/WorkflowState";
import { AIExecutor } from "@/services/executor/AIExecutor";

import type { Mission } from "@/services/brain/Mission";

export class ViralProcessingEngine {

  async process(
    mission: Mission
  ) {

    console.log("================================");
    console.log("STARTING VIRAL PROCESS");
    console.log("================================");

    const planner = new MissionPlanner();

    const workflow = new WorkflowState();

    const executor = new AIExecutor(workflow);

    const tasks = planner.plan(mission);

    for (const task of tasks) {

      console.log(
        `Running ${task.agent}...`
      );

      await executor.execute(
        task.agent,
        task.payload
      );

      task.completed = true;

    }

    console.log("================================");
    console.log("MISSION COMPLETED");
    console.log("================================");

  }

}