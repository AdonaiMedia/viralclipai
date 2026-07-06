import { Mission } from "./Mission";
import { Task } from "./Task";
import { MissionPlanner } from "./MissionPlanner";

export class AIBrain {

  private planner = new MissionPlanner();

  public createTasks(
    mission: Mission
  ): Task[] {

    return this.planner.plan(mission);

  }

}