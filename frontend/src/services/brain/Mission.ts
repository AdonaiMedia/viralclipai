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

  payload: any;

  createdAt: Date;

}