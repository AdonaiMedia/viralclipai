import { supabase } from "@/lib/supabase";
import { DashboardStats } from "@/types/Dashboard";

export async function getDashboardStats(): Promise<DashboardStats> {
  // Total Videos
  const { count: totalVideos, error: videoError } = await supabase
    .from("videos")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (videoError) throw videoError;

  // Total Clips
  const { count: totalClips, error: clipError } = await supabase
    .from("clips")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (clipError) throw clipError;

  // Completed Videos
  const { count: completedVideos, error: completedError } = await supabase
    .from("videos")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "completed");

  if (completedError) throw completedError;

  // Processing Videos
  const { count: processingVideos, error: processingError } = await supabase
    .from("videos")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "processing");

  if (processingError) throw processingError;

  // Viral Scores
  const { data: analyses, error: analysisError } = await supabase
    .from("viral_analysis")
    .select("overall_score");

  if (analysisError) throw analysisError;

  const averageViralScore =
    analyses && analyses.length > 0
      ? Math.round(
          analyses.reduce(
            (sum, item) => sum + (item.overall_score ?? 0),
            0
          ) / analyses.length
        )
      : 0;

  return {
    totalVideos: totalVideos ?? 0,
    totalClips: totalClips ?? 0,
    completedVideos: completedVideos ?? 0,
    processingVideos: processingVideos ?? 0,
    averageViralScore,
  };
}