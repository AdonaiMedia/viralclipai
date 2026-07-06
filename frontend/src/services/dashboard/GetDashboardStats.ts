import { supabase } from "@/lib/supabase";
import { DashboardStats } from "@/types/Dashboard";

export async function getDashboardStats(): Promise<DashboardStats> {

  const { count: totalVideos, error: videoError } =
    await supabase
      .from("videos")
      .select("*", {
        count: "exact",
        head: true,
      });

  if (videoError) throw videoError;

  const { count: totalClips, error: clipError } =
    await supabase
      .from("clips")
      .select("*", {
        count: "exact",
        head: true,
      });

  if (clipError) throw clipError;

  const { data: analysis, error: analysisError } =
    await supabase
      .from("viral_analysis")
      .select("overall_score");

  if (analysisError) throw analysisError;

  const averageScore =
    analysis && analysis.length > 0
      ? Math.round(
          analysis.reduce(
            (sum, item) => sum + item.overall_score,
            0
          ) / analysis.length
        )
      : 0;

  const { count: completedVideos, error: completedError } =
    await supabase
      .from("videos")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("status", "completed");

  if (completedError) throw completedError;

  return {
    totalVideos: totalVideos ?? 0,
    totalClips: totalClips ?? 0,
    averageScore,
    completedVideos: completedVideos ?? 0,
  };

}