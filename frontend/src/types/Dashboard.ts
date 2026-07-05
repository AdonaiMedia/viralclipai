export interface Video {
  id: number;
  user_id: string;
  file_name: string;
  file_url: string;
  status: string;
  created_at: string;
}

export interface Clip {
  id: number;
  video_id: number;
  start_time: number;
  end_time: number;
  clip_path: string;
  viral_score: number;
  status: string;
  created_at: string;
}

export interface Analysis {
  id: number;
  video_id: number;
  intelligence: string;
  viral_moments: string;
  overall_score: number;
  created_at: string;
}

export interface DashboardVideo {
  video: Video;
  analysis: Analysis | null;
  clips: Clip[];
}

export interface DashboardStats {
  totalVideos: number;
  totalClips: number;
  averageScore: number;
  completedVideos: number;
}