import { supabaseServer } from "@/lib/supabase-server";

export async function saveAnalysis(
  videoId: number,
  intelligence: string,
  viralMoments: string,
  overallScore: number
) {

  const { data, error } = await supabaseServer
    .from("viral_analysis")
    .insert({
      video_id: videoId,
      intelligence: intelligence,
      viral_moments: viralMoments,
      overall_score: overallScore,
    })
    .select();

  if (error) {
    throw error;
  }

  return data;
}