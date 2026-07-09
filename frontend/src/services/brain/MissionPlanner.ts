import type { Mission } from "./Mission";
import type { Task } from "./Task";

import { MemoryManager } from "./memory";

export class MissionPlanner {
  constructor(
    private memory?: MemoryManager
  ) {}

  plan(
    mission: Mission
  ): Task[] {

    const tasks: Task[] = [];

    switch (mission.type) {

      case "analysis": {

        const analysisId = crypto.randomUUID();
        const thumbnailId = crypto.randomUUID();
        const titleId = crypto.randomUUID();

        tasks.push({
          id: analysisId,
          agent: "analysis",
          name: "Analyze Video",
          payload: mission.payload,
          completed: false,
        });

        tasks.push({
          id: thumbnailId,
          agent: "thumbnail",
          name: "Generate Thumbnail",
          payload: mission.payload,
          completed: false,
          dependsOn: [analysisId],
        });

        tasks.push({
          id: titleId,
          agent: "title",
          name: "Generate Title",
          payload: mission.payload,
          completed: false,
          dependsOn: [analysisId],
        });

        break;
      }

      case "clips": {

        const clipId = crypto.randomUUID();
        const captionId = crypto.randomUUID();
        const publishId = crypto.randomUUID();

        tasks.push({
          id: clipId,
          agent: "clip",
          name: "Generate Clips",
          payload: mission.payload,
          completed: false,
        });

        tasks.push({
          id: captionId,
          agent: "caption",
          name: "Generate Captions",
          payload: mission.payload,
          completed: false,
          dependsOn: [clipId],
        });

        tasks.push({
          id: publishId,
          agent: "publishing",
          name: "Publish Content",
          payload: mission.payload,
          completed: false,
          dependsOn: [clipId, captionId],
        });

        break;
      }

      default:
        break;
    }

    if (this.memory) {

      const summary =
        this.memory.getSummary();

      if (summary.averageProjectScore < 70) {

        tasks.push({
          id: crypto.randomUUID(),
          agent: "coach",
          name: "AI Coach Review",
          payload: {
            reason: "Low viral score",
          },
          completed: false,
        });

      }

    }

    return tasks;

  }

}