"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface ProcessingProgress {
  stage: string;
  percentage: number;
  message: string;
}

export function useProcessingProgress(videoId: number) {
  const [progress, setProgress] =
    useState<ProcessingProgress | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const channel = supabase
      .channel(`processing-${videoId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "processing_progress",
          filter: `video_id=eq.${videoId}`,
        },
        (payload) => {
          setProgress(payload.new as ProcessingProgress);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [videoId]);

  return progress;
}