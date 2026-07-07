"use client";

import { useVideos } from "./useVideos";
import { useUploadVideo } from "./useUploadVideo";
import { useVideoActions } from "./useVideoActions";

export function useCreatorStudio() {

  const videoState = useVideos();

  const uploadState = useUploadVideo();

  const actions = useVideoActions();

  return {

    ...videoState,

    ...uploadState,

    ...actions,

  };

}