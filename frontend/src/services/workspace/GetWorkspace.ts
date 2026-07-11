import { supabaseServer } from "@/lib/supabase-server";

export async function getWorkspace(videoId: number) {

  /*
  ====================================
  VIDEO
  ====================================
  */

  const { data: video } = await supabaseServer
    .from("videos")
    .select("*")
    .eq("id", videoId)
    .single();

  /*
  ====================================
  AI ANALYSIS
  ====================================
  */

  const { data: analyses } = await supabaseServer
    .from("viral_analysis")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", {
      ascending: false,
    });

  /*
  ====================================
  CLIPS
  ====================================
  */

  const { data: clips } = await supabaseServer
    .from("clips")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", {
      ascending: true,
    });

  /*
  ====================================
  LATEST ANALYSIS
  ====================================
  */

  const analysis =
    analyses && analyses.length > 0
      ? {
          ...analyses[0],

          intelligence: analyses[0].intelligence
            ? JSON.parse(analyses[0].intelligence)
            : null,

          viral_moments: analyses[0].viral_moments
            ? JSON.parse(analyses[0].viral_moments)
            : [],
        }
      : null;

  /*
  ====================================
  RETURN WORKSPACE
  ====================================
  */

  return {

    video,

    analysis,

    clips: clips || [],

  };

}