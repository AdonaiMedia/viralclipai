export type AgentStatus =
  | "waiting"
  | "running"
  | "completed"
  | "failed";

export interface AgentState {

  name: string;

  status: AgentStatus;

  progress: number;

  message: string;

}

export class ViralCoreState {

  private agents: AgentState[] = [

    {
      name: "VisionAI",
      status: "waiting",
      progress: 0,
      message: "",
    },

    {
      name: "ClipMind",
      status: "waiting",
      progress: 0,
      message: "",
    },

    {
      name: "ThumbForge",
      status: "waiting",
      progress: 0,
      message: "",
    },

    {
      name: "TitleForge",
      status: "waiting",
      progress: 0,
      message: "",
    },

    {
      name: "PublishFlow",
      status: "waiting",
      progress: 0,
      message: "",
    },

  ];

  getAgents() {

    return this.agents;

  }

  update(

    name: string,

    status: AgentStatus,

    progress: number,

    message: string

  ) {

    const agent = this.agents.find(

      a => a.name === name

    );

    if (!agent) return;

    agent.status = status;

    agent.progress = progress;

    agent.message = message;

  }

}