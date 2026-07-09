"use client";

import { useEffect, useState } from "react";

import { processingBus } from "@/services/events/ProcessingEvents";
import type { ProcessingEvent } from "@/services/events/EventTypes";

export function useMissionActivity() {

  const [events, setEvents] = useState<ProcessingEvent[]>([]);

  useEffect(() => {

    const listener = (payload: unknown) => {

      const event = payload as ProcessingEvent;

      setEvents((current) => [
        event,
        ...current,
      ]);

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

  return events;

}