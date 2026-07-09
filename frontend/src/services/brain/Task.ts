import { AgentName } from "@/services/agents/AgentRegistry";

export interface Task {

  id: string;

  agent: AgentName;

  name: string;

  payload: any;

  completed: boolean;

  dependsOn?: string[];

}