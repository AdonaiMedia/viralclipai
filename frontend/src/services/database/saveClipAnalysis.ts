import { supabaseServer } from "@/lib/supabase-server";

export async function saveClipAnalysis(
  videoId: number,
  analysis: any,
  aiModel: string
) {
  const { data, error } = await supabaseServer
    .from("clip_analysis")
    .insert({
      video_id: videoId,
      analysis,
      ai_model: aiModel,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}