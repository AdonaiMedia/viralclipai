import { supabaseServer } from "@/lib/supabase-server";

export async function getWorkspaceData(videoId: number) {
  const [{ data: video, error: videoError }, { data: analysis, error: analysisError }, { data: clips, error: clipsError }] =
    await Promise.all([
      supabaseServer
        .from("videos")
        .select("*")
        .eq("id", videoId)
        .single(),

      supabaseServer
        .from("viral_analysis")
        .select("*")
        .eq("video_id", videoId)
        .single(),

      supabaseServer
        .from("clips")
        .select("*")
        .eq("video_id", videoId)
        .order("viral_score", { ascending: false }),
    ]);

  if (videoError) {
  console.error("VIDEO ERROR:", videoError);
  throw videoError;
}

if (analysisError) {
  console.error("ANALYSIS ERROR:", analysisError);
  throw analysisError;
}

if (clipsError) {
  console.error("CLIPS ERROR:", clipsError);
  throw clipsError;
}

  console.log("VIDEO:", video);
console.log("FILE NAME:", video?.file_name);

return {
  video,
  analysis,
  clips,
};
}