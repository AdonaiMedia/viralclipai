"use client";

import { useState } from "react";
import { ProcessingStep } from "@/components/processing/AIProcessingTimeline";

const defaultSteps: ProcessingStep[] = [
  {
    id: "upload",
    title: "Uploading Video",
    status: "waiting",
  },
  {
    id: "audio",
    title: "Extracting Audio",
    status: "waiting",
  },
  {
    id: "transcript",
    title: "Transcribing Speech",
    status: "waiting",
  },
  {
    id: "viral",
    title: "Detecting Viral Moments",
    status: "waiting",
  },
  {
    id: "clips",
    title: "Generating AI Clips",
    status: "waiting",
  },
  {
    id: "captions",
    title: "Generating Captions",
    status: "waiting",
  },
  {
    id: "thumbnail",
    title: "Generating Thumbnails",
    status: "waiting",
  },
  {
    id: "publish",
    title: "Preparing Publishing Workspace",
    status: "waiting",
  },
];

export function useAIProcessing() {
  const [steps, setSteps] =
    useState<ProcessingStep[]>(defaultSteps);

  function reset() {
    setSteps(defaultSteps);
  }

  function startStep(id: string) {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === id
          ? { ...step, status: "running" }
          : step
      )
    );
  }

  function completeStep(id: string) {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === id
          ? { ...step, status: "completed" }
          : step
      )
    );
  }

  return {
    steps,
    reset,
    startStep,
    completeStep,
  };
}