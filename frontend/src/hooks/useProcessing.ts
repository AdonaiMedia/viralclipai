"use client";

import { useProcessingProgress } from "./useProcessingProgress";

export function useProcessing(videoId: number) {

  const progress =
    useProcessingProgress(videoId);

  return {

    progress,

    loading:
      progress === null,

  };

}