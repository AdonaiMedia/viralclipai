import { supabase } from "@/lib/supabase";
import { Project } from "@/types/Project";

export async function getProjectById(
  id: number
): Promise<Project | null> {

  const { data: video, error } = await supabase
    .from("videos")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !video) {
    return null;
  }

  const { data: analyses } = await supabase
    .from("viral_analysis")
    .select("*")
    .eq("video_id", id)
    .order("created_at", {
      ascending: false,
    });

  const analysis =
    analyses && analyses.length > 0
      ? analyses[0]
      : null;

  const { data: clips } = await supabase
    .from("clips")
    .select("*")
    .eq("video_id", id)
    .order("created_at", {
      ascending: true,
    });

  return {
    id: video.id,

    name: video.file_name,

    video: {
      id: video.id,
      fileName: video.file_name,
      fileUrl: video.file_url,
      status: video.status,
      createdAt: video.created_at,
    },

    analysis: analysis
      ? {
          intelligence: analysis.intelligence,
          viralMoments: analysis.viral_moments,
          overallScore: analysis.overall_score,
        }
      : undefined,

    clips: (clips || []).map((clip) => ({
      id: clip.id,
      startTime: clip.start_time,
      endTime: clip.end_time,
      clipUrl: clip.clip_path,
      viralScore: clip.viral_score,
    })),

    thumbnail: undefined,
  };
}