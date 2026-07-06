import { WorkflowState } from "@/services/brain/WorkflowState";
import { AgentRegistry, AgentName } from "@/services/agents/AgentRegistry";

export class AIExecutor {
  constructor(
    private workflow: WorkflowState
  ) {}

  async execute(
    agentName: AgentName,
    payload: any
  ) {
    const agent =
      AgentRegistry.get(agentName);

    if (!agent) {
      throw new Error(
        `Agent not found: ${agentName}`
      );
    }

    const result =
      await agent.execute(payload);

    switch (agentName) {
      case "analysis":
        this.workflow.complete("analysis");
        break;

      case "clip":
        this.workflow.complete("clips");
        break;

      case "recap":
        this.workflow.complete("clips");
        break;

      case "thumbnail":
        this.workflow.complete("thumbnails");
        break;

      case "title":
        this.workflow.complete("titles");
        break;

      case "publishing":
        this.workflow.complete("publishing");
        break;
    }

    return result;
  }
}