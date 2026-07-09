"use client";

import { useEffect, useState } from "react";

import { processingBus } from "@/services/events/ProcessingEvents";

import type { ProcessingEvent } from "@/services/events/EventTypes";

export function useMissionMonitor() {

  const [currentStage, setCurrentStage] =
    useState("Waiting");

  const [progress, setProgress] =
    useState(0);

  const [message, setMessage] =
    useState("No active mission");

  useEffect(() => {

    const listener = (payload: unknown) => {

      const event = payload as ProcessingEvent;

      setCurrentStage(event.stage);

      setProgress(event.progress);

      setMessage(event.message);

    };

    processingBus.on(
      "processing.updated",
      listener
    );

    return () => {

      processingBus.off(
        "processing.updated",
        listener
      );

    };

  }, []);

  return {

    currentStage,

    progress,

    message,

  };

}