export interface ProjectVideo {
  id: number;
  fileName: string;
  fileUrl: string;
  status:
    | "uploaded"
    | "processing"
    | "analyzing"
    | "generating"
    | "completed"
    | "failed";
  createdAt: string;
}

export interface ProjectAnalysis {
  intelligence: string;
  viralMoments: string;
  overallScore: number;
}

export interface ProjectClip {
  id: number;
  startTime: number;
  endTime: number;
  clipUrl: string;
  viralScore: number;
}

export interface ProjectThumbnail {
  url: string;
}

export interface Project {
  id: number;
  name: string;
  video: ProjectVideo;
  analysis?: ProjectAnalysis;
  clips: ProjectClip[];
  thumbnail?: ProjectThumbnail;
}