import { getDashboardData } from "@/services/dashboard/GetDashboardData";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  const dashboard = await getDashboardData();

  return dashboard.map((item) => ({
    id: item.video.id,
    name: item.video.file_name,

    video: {
      id: item.video.id,
      fileName: item.video.file_name,
      fileUrl: item.video.file_url,
      status: item.video.status as Project["video"]["status"],
      createdAt: item.video.created_at,
    },

    analysis: item.analysis
      ? {
          intelligence: item.analysis.intelligence,
          viralMoments: item.analysis.viral_moments,
          overallScore: item.analysis.overall_score,
        }
      : undefined,

    clips: item.clips.map((clip) => ({
      id: clip.id,
      startTime: clip.start_time,
      endTime: clip.end_time,
      clipUrl: clip.clip_path,
      viralScore: clip.viral_score,
    })),

    thumbnail: undefined,
  }));
}