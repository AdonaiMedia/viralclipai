"use server";

import { supabaseServer } from "@/lib/supabase-server";

export async function getDashboardStats() {

  const { count: videos } =
    await supabaseServer
      .from("videos")
      .select("*", {
        count: "exact",
        head: true,
      });

  const { count: clips } =
    await supabaseServer
      .from("clips")
      .select("*", {
        count: "exact",
        head: true,
      });

  const { data: viralAnalysis } =
    await supabaseServer
      .from("viral_analysis")
      .select("overall_score");

  const averageScore =
    viralAnalysis && viralAnalysis.length > 0
      ? Math.round(
          viralAnalysis.reduce(
            (sum, row) =>
              sum + (row.overall_score || 0),
            0
          ) / viralAnalysis.length
        )
      : 0;

  return {

    totalVideos: videos || 0,

    totalClips: clips || 0,

    averageScore,

    totalThumbnails: clips || 0,

  };

}