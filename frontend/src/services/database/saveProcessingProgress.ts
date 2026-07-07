import { supabaseServer } from "@/lib/supabase-server";

export async function saveProcessingProgress(
  videoId: number,
  stage: string,
  progress: number,
  message: string
) {
  const { error } = await supabaseServer
    .from("processing_progress")
    .insert({
      video_id: videoId,
      stage,
      progress,
      message,
    });

  if (error) {
    throw error;
  }
}