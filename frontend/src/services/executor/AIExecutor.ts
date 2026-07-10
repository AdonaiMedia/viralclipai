import { AgentRegistry } from "@/services/agents/AgentRegistry";
import { WorkflowState, WorkflowStep } from "@/services/brain/WorkflowState";

import type { Task } from "@/services/brain/Task";

export class AIExecutor {

  constructor(
    private workflow: WorkflowState
  ) {}

  async execute(task: Task) {

    console.log("================================");
    console.log("EXECUTING TASK");
    console.log(task.name);
    console.log("================================");

    const stepMap: Partial<Record<typeof task.agent, WorkflowStep>> = {
      analysis: "analysis",
      clip: "clips",
      thumbnail: "thumbnails",
      title: "titles",
      publishing: "publishing",
    };

    const step = stepMap[task.agent];

    if (step) {
      this.workflow.start(step);
    }

    const agent = AgentRegistry.get(task.agent);

    const result = await agent.execute(task.payload);

    if (step) {
      this.workflow.complete(step);
    }

    return result;

  }

}