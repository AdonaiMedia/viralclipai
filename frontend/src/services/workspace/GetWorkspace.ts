import { supabaseServer } from "@/lib/supabase-server";

export async function getWorkspace(videoId: number) {

  // Video

  const { data: video } = await supabaseServer
    .from("videos")
    .select("*")
    .eq("id", videoId)
    .single();

  // AI Analysis

  const { data: analyses } = await supabaseServer
    .from("viral_analysis")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", {
      ascending: false,
    });

  // Clips

  const { data: clips } = await supabaseServer
    .from("clips")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", {
      ascending: true,
    });

  const analysis =
    analyses && analyses.length > 0
      ? analyses[0]
      : null;

  return {

    video,

    analysis,

    clips: clips || [],

  };

}