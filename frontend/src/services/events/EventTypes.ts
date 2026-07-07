export interface ProcessingEvent {

  stage:
    | "upload"
    | "inspection"
    | "transcription"
    | "analysis"
    | "viral"
    | "clips"
    | "thumbnails"
    | "publishing"
    | "completed";

  progress: number;

  message: string;

  createdAt: Date;

}