import { Mission } from "./Mission";
import { Task } from "./Task";

export class MissionPlanner {
  plan(mission: Mission): Task[] {
    switch (mission.type) {
      case "clips":
        return [
          {
            id: crypto.randomUUID(),
            name: "Analyze Video",
            agent: "analysis",
            payload: mission.payload,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            name: "Generate Clips",
            agent: "clip",
            payload: mission.payload,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            name: "Generate Titles",
            agent: "title",
            payload: mission.payload,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            name: "Generate Thumbnail",
            agent: "thumbnail",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "analysis":
        return [
          {
            id: crypto.randomUUID(),
            name: "Analyze Video",
            agent: "analysis",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "recap":
        return [
          {
            id: crypto.randomUUID(),
            name: "Create Recap",
            agent: "recap",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "translation":
        return [
          {
            id: crypto.randomUUID(),
            name: "Translate Content",
            agent: "translation",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "voice-clone":
        return [
          {
            id: crypto.randomUUID(),
            name: "Clone Voice",
            agent: "voice",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "lip-sync":
        return [
          {
            id: crypto.randomUUID(),
            name: "Generate Lip Sync",
            agent: "lipsync",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "thumbnail":
        return [
          {
            id: crypto.randomUUID(),
            name: "Generate Thumbnail",
            agent: "thumbnail",
            payload: mission.payload,
            completed: false,
          },
        ];

      case "publishing":
        return [
          {
            id: crypto.randomUUID(),
            name: "Publish Content",
            agent: "publishing",
            payload: mission.payload,
            completed: false,
          },
        ];

      default:
        return [];
    }
  }
}