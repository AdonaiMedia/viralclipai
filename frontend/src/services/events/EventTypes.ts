export interface ProcessingEvent {
  stage:
    | "upload"
    | "inspection"
    | "audio"
    | "transcription"
    | "analysis"
    | "clips"
    | "thumbnails"
    | "database"
    | "completed"
    | "failed";

  progress: number;

  message: string;

  createdAt: Date;
}