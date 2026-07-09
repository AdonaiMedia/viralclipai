"use client";

import { useEffect, useState } from "react";

import { processingBus } from "@/services/events/ProcessingEvents";
import type { ProcessingEvent } from "@/services/events/EventTypes";

export interface MissionControlState {
  stage: string;
  progress: number;
  message: string;
  active: boolean;
}

export function useMissionControl() {

  const [mission, setMission] =
    useState<MissionControlState>({
      stage: "Idle",
      progress: 0,
      message: "Waiting for upload...",
      active: false,
    });

  useEffect(() => {

    const listener = (payload: unknown) => {

      const event =
        payload as ProcessingEvent;

      setMission({
        stage: event.stage,
        progress: event.progress,
        message: event.message,
        active: event.stage !== "completed",
      });

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

  return mission;

}