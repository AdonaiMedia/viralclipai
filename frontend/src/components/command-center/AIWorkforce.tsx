"use client";

import {
  BrainCircuit,
  Scissors,
  ImageIcon,
  Type,
  Send,
  CheckCircle2,
 Clock3,
  Loader2,
} from "lucide-react";

import { useAIAgents } from "@/hooks/useAIAgents";

const iconMap = {
  VisionAI: BrainCircuit,
  ClipMind: Scissors,
  ThumbForge: ImageIcon,
  TitleForge: Type,
  PublishFlow: Send,
};

const colorMap = {
  VisionAI: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  ClipMind: {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  ThumbForge: {
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  TitleForge: {
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  PublishFlow: {
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
};

export default function AIWorkforce() {

  const agents = useAIAgents();

  return (

    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold text-white">
            AI Workforce
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Live AI agents working together.
          </p>

        </div>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
          {agents.length} Active Agents
        </span>

      </div>

      <div className="grid gap-4 lg:grid-cols-2">

        {agents.map((agent) => {

          const Icon = iconMap[
            agent.name as keyof typeof iconMap
          ];

          const style =
            colorMap[
              agent.name as keyof typeof colorMap
            ];

          return (

            <div
              key={agent.name}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${style.color}`}
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-white">
                      {agent.name}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {agent.description}
                    </p>

                  </div>

                </div>

                {agent.status === "Completed" && (

                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

                    <CheckCircle2 className="h-4 w-4 text-emerald-400"/>

                    <span className="text-xs font-semibold text-emerald-300">
                      Completed
                    </span>

                  </div>

                )}

                {agent.status === "Running" && (

                  <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">

                    <Loader2 className="h-4 w-4 animate-spin text-blue-400"/>

                    <span className="text-xs font-semibold text-blue-300">
                      Running
                    </span>

                  </div>

                )}

                {agent.status === "Waiting" && (

                  <div className="flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1">

                    <Clock3 className="h-4 w-4 text-amber-400"/>

                    <span className="text-xs font-semibold text-amber-300">
                      Waiting
                    </span>

                  </div>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </section>

  );

}