import { UserMission } from "@/services/director/MissionIntent";
import type { Task } from "./Task";

export class MissionPlanner {

  plan(mission: UserMission): Task[] {

    const tasks: Task[] = [];

    const addTask = (
      id: string,
      agent: any,
      name: string
    ) => {

      tasks.push({
        id,
        agent,
        name,
        payload: {},
        completed: false,
      });

    };

    for (const intent of mission.intents) {

      switch (intent) {

        case "clips":
          addTask(
            "clip",
            "clip",
            "Generate Viral Clips"
          );
          break;

        case "captions":
          addTask(
            "caption",
            "caption",
            "Generate Captions"
          );
          break;

        case "titles":
          addTask(
            "title",
            "title",
            "Generate Titles"
          );
          break;

        case "thumbnails":
          addTask(
            "thumbnail",
            "thumbnail",
            "Generate Thumbnail"
          );
          break;

        case "publishing":
          addTask(
            "publish",
            "publishing",
            "Publish Video"
          );
          break;

        case "coaching":
          addTask(
            "coach",
            "coach",
            "Creator Coaching"
          );
          break;

      }

    }

    return tasks;

  }

}