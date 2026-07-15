import type { Task } from "./Task";
import { MemoryManager } from "./memory";

export interface Mission {
  id: string;

  creatorId: string;

  type:
    | "analysis"
    | "clips"
    | "recap"
    | "translation"
    | "voice-clone"
    | "lip-sync"
    | "thumbnail"
    | "publishing"
    | "campaign";

  status:
    | "pending"
    | "running"
    | "completed"
    | "failed";

  payload: unknown;

  tasks?: Task[];

  memory?: MemoryManager;

  createdAt: Date;

  updatedAt?: Date;
}