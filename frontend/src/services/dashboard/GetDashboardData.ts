import { supabase } from "@/lib/supabase";

export async function getDashboardData() {

  const { data: videos, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  const dashboard = [];

  for (const video of videos || []) {

    const { data: analyses } = await supabase
      .from("viral_analysis")
      .select("*")
      .eq("video_id", video.id)
      .order("created_at", { ascending: false });

    const analysis =
      analyses && analyses.length > 0
        ? analyses[0]
        : null;

    const { data: clips } = await supabase
      .from("clips")
      .select("*")
      .eq("video_id", video.id)
      .order("created_at", { ascending: true });

    dashboard.push({

      video,

      analysis,

      clips: clips || [],

    });

  }

  return dashboard;

}