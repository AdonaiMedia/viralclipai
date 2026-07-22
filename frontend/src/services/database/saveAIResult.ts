import { supabaseServer } from "@/lib/supabase-server";

interface SaveAIResult {
  videoId: number;
  tool: string;
  title: string;
  content: string;
}

export async function saveAIResult({
  videoId,
  tool,
  title,
  content,
}: SaveAIResult) {
  const { error } = await supabaseServer
    .from("ai_results")
    .insert({
      video_id: videoId,
      tool,
      title,
      content,
    });

  if (error) {
    console.error(
      "Save AI Result Error:",
      error.message
    );

    throw error;
  }

  return true;
}