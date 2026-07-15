import { UserMission } from "@/services/director/MissionIntent";
import { Task } from "./Task";
import { MissionPlanner } from "./MissionPlanner";

export class AIBrain {

  private planner = new MissionPlanner();

  public createTasks(
    mission: UserMission
  ): Task[] {

    return this.planner.plan(mission);

  }

}