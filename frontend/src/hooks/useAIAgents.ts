"use client";

import { useEffect, useState } from "react";

import { processingBus } from "@/services/events/ProcessingEvents";
import type { ProcessingEvent } from "@/services/events/EventTypes";

export interface AIAgentState {
  name: string;
  description: string;
  status: "Waiting" | "Running" | "Completed";
}

const initialAgents: AIAgentState[] = [
  {
    name: "VisionAI",
    description: "Scene & transcript analysis",
    status: "Waiting",
  },
  {
    name: "ClipMind",
    description: "Detects viral moments",
    status: "Waiting",
  },
  {
    name: "ThumbForge",
    description: "Thumbnail generation",
    status: "Waiting",
  },
  {
    name: "TitleForge",
    description: "Titles & captions",
    status: "Waiting",
  },
  {
    name: "PublishFlow",
    description: "Publishing automation",
    status: "Waiting",
  },
];

export function useAIAgents() {

  const [agents, setAgents] =
    useState(initialAgents);

  useEffect(() => {

    const listener = (payload: unknown) => {

      const event =
        payload as ProcessingEvent;

      setAgents((current) =>
        current.map((agent) => {

          if (
            event.stage === "analysis" &&
            agent.name === "VisionAI"
          ) {
            return {
              ...agent,
              status: "Running",
            };
          }

          if (
            event.stage === "clips" &&
            agent.name === "ClipMind"
          ) {
            return {
              ...agent,
              status: "Running",
            };
          }

          if (
            event.stage === "thumbnails" &&
            agent.name === "ThumbForge"
          ) {
            return {
              ...agent,
              status: "Running",
            };
          }

          if (
            event.stage === "completed"
          ) {
            return {
              ...agent,
              status: "Completed",
            };
          }

          return agent;

        })
      );

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

  return agents;

}