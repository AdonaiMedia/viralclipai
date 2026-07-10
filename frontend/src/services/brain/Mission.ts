import type { Mission } from "./Mission";
import type { Task } from "./Task";

import { MemoryManager } from "./memory";

export class MissionPlanner {

  constructor(
    private memory: MemoryManager
  ) {}

  plan(
    mission: Mission
  ): Task[] {

    const tasks: Task[] = [];

    switch (mission.type) {

      case "analysis":

        tasks.push({
          id: "analysis",
          agent: "analysis",
          name: "Analyze Video",
          payload: mission.payload,
          completed: false,
        });

        break;

      case "clips":

        tasks.push(
          {
            id: "analysis",
            agent: "analysis",
            name: "Analyze Video",
            payload: mission.payload,
            completed: false,
          },
          {
            id: "clip",
            agent: "clip",
            name: "Generate Viral Clips",
            payload: mission.payload,
            completed: false,
            dependsOn: ["analysis"],
          },
          {
            id: "thumbnail",
            agent: "thumbnail",
            name: "Generate Thumbnail",
            payload: mission.payload,
            completed: false,
            dependsOn: ["clip"],
          },
          {
            id: "title",
            agent: "title",
            name: "Generate Titles",
            payload: mission.payload,
            completed: false,
            dependsOn: ["clip"],
          }
        );

        break;

      case "translation":

        tasks.push({
          id: "translation",
          agent: "translation",
          name: "Translate Video",
          payload: mission.payload,
          completed: false,
        });

        break;

      case "publishing":

        tasks.push({
          id: "publishing",
          agent: "publishing",
          name: "Publish Content",
          payload: mission.payload,
          completed: false,
        });

        break;

      default:

        console.warn(
          `Mission type '${mission.type}' has no planner yet.`
        );

    }

    return tasks;

  }

}