import { supabaseServer } from "@/lib/supabase-server";

export async function saveTranscript(
  videoId: number,
  transcript: string,
  language: string = "en"
) {
  try {
    console.log("Saving transcript...");

    const { data, error } = await supabaseServer
      .from("transcripts")
      .insert({
        video_id: videoId,
        transcript,
        language,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log("Transcript saved.");

    return data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}