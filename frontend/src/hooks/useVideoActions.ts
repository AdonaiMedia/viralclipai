"use client";

import { supabase } from "@/lib/supabase";

export function useVideoActions() {

  async function deleteVideo(
    fileName: string,
    id: number
  ) {

    await supabase.storage
      .from("videos")
      .remove([fileName]);

    await supabase
      .from("videos")
      .delete()
      .eq("id", id);

  }

  async function generateClip(
    id: number
  ) {

    const response = await fetch(
      "/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          videoId: id,
        }),
      }
    );

    return response.json();

  }

  return {

    deleteVideo,

    generateClip,

  };

}