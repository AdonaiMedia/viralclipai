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
  console.log("========================");
  console.log("VIDEO ID:", videoId);
  console.log("VIDEO ERROR CODE:", videoError.code);
  console.log("VIDEO ERROR MESSAGE:", videoError.message);
  console.log("VIDEO ERROR DETAILS:", videoError.details);
  console.log("VIDEO ERROR HINT:", videoError.hint);
  console.log("========================");

  throw new Error(videoError.message);
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