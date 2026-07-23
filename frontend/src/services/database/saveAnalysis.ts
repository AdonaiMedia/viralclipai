import { supabaseServer } from "@/lib/supabase-server";

export async function saveAnalysis(
  videoId: number,
  intelligence: string,
  viralMoments: string,
  overallScore: number
) {
  console.log("Saving analysis...");

  const { data, error } = await supabaseServer
    .from("viral_analysis")
    .insert({
      video_id: videoId,
      intelligence,
      viral_moments: viralMoments,
      overall_score: overallScore,
    })
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    throw error;
  }

  return data;
}