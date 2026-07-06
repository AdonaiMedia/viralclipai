import { Mission } from "./Mission";
import { Task } from "./Task";

export class MissionPlanner {

  public plan(mission: Mission): Task[] {

    switch (mission.type) {

      case "analysis":
        return this.analysisMission(mission);

      case "clips":
        return this.clipMission(mission);

      case "recap":
        return this.recapMission(mission);

      case "publishing":
        return this.publishingMission(mission);

      default:
        return [];

    }

  }

  private analysisMission(
    mission: Mission
  ): Task[] {

    return [

      {
        id: crypto.randomUUID(),
        agent: "analysis",
        name: "Analyze Video",
        payload: mission.payload,
        completed: false,
      },

    ];

  }

  private clipMission(
    mission: Mission
  ): Task[] {

    return [

      {
        id: crypto.randomUUID(),
        agent: "clip",
        name: "Generate Clips",
        payload: mission.payload,
        completed: false,
      },

    ];

  }

  private recapMission(
    mission: Mission
  ): Task[] {

    return [

      {
        id: crypto.randomUUID(),
        agent: "recap",
        name: "Generate Recap",
        payload: mission.payload,
        completed: false,
      },

    ];

  }

  private publishingMission(
    mission: Mission
  ): Task[] {

    return [

      {
        id: crypto.randomUUID(),
        agent: "publishing",
        name: "Publish Content",
        payload: mission.payload,
        completed: false,
      },

    ];

  }

}