import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {

  const { count: totalVideos } =
    await supabase
      .from("videos")
      .select("*", {
        count: "exact",
        head: true,
      });

  const { count: totalClips } =
    await supabase
      .from("clips")
      .select("*", {
        count: "exact",
        head: true,
      });

  const { data: analysis } =
    await supabase
      .from("viral_analysis")
      .select("overall_score");

  const averageScore =
    analysis && analysis.length > 0
      ? Math.round(
          analysis.reduce(
            (sum, item) => sum + item.overall_score,
            0
          ) / analysis.length
        )
      : 0;

  const { count: completedVideos } =
    await supabase
      .from("videos")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("status", "completed");

  return {

    totalVideos: totalVideos || 0,

    totalClips: totalClips || 0,

    averageScore,

    completedVideos: completedVideos || 0,

  };

}