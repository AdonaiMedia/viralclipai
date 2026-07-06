export type AgentName =
  | "analysis"
  | "clip"
  | "recap"
  | "translation"
  | "voice"
  | "lipsync"
  | "thumbnail"
  | "title"
  | "caption"
  | "publishing"
  | "coach";

export interface Agent {

  execute(
    payload: any
  ): Promise<any>;

}

export class AgentRegistry {

  private static agents =
    new Map<AgentName, Agent>();

  static register(
    name: AgentName,
    agent: Agent
  ) {

    this.agents.set(name, agent);

  }

  static get(
    name: AgentName
  ) {

    return this.agents.get(name);

  }

}