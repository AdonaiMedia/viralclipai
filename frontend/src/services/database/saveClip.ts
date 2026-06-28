import { supabaseServer } from "@/lib/supabase-server";

export async function saveClip(
  videoId: number,
  startTime: number,
  endTime: number,
  clipUrl: string,
  viralScore: number
) {
  const { data, error } = await supabaseServer
    .from("clips")
    .insert([
      {
        video_id: videoId,
        start_time: startTime,
        end_time: endTime,
        clip_path: clipUrl,
        viral_score: viralScore,
        status: "created",
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}