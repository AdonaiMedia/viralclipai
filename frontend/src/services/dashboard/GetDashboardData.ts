import { supabase } from "@/lib/supabase";
import {
  Analysis,
  Clip,
  DashboardVideo,
  Video,
} from "@/types/Dashboard";

export async function getDashboardData(): Promise<DashboardVideo[]> {

  const { data: videos, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  const dashboard: DashboardVideo[] = [];

  for (const rawVideo of videos ?? []) {

    const video = rawVideo as Video;

    const { data: analyses } = await supabase
      .from("viral_analysis")
      .select("*")
      .eq("video_id", video.id)
      .order("created_at", { ascending: false });

    const analysis: Analysis | null =
      analyses && analyses.length > 0
        ? (analyses[0] as Analysis)
        : null;

    const { data: clipsData } = await supabase
      .from("clips")
      .select("*")
      .eq("video_id", video.id)
      .order("created_at", { ascending: true });

    const clips: Clip[] = (clipsData ?? []) as Clip[];

    dashboard.push({
      id: video.id,
      title: video.file_name,
      thumbnail: video.thumbnail,
      status: video.status,
      duration: video.duration,
      createdAt: video.created_at,

      video,
      analysis,
      clips,
    });

  }

  return dashboard;

}