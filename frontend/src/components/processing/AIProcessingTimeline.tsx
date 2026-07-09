"use client";

import {
  CheckCircle2,
  Loader2,
  Circle,
} from "lucide-react";

export interface ProcessingStep {
  id: string;
  title: string;
  status: "waiting" | "running" | "completed";
}

interface Props {
  steps: ProcessingStep[];
}

export default function AIProcessingTimeline({
  steps,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        AI Processing Pipeline
      </h2>

      <div className="space-y-5">

        {steps.map((step) => (

          <div
            key={step.id}
            className="flex items-center gap-4"
          >

            {step.status === "completed" && (
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
            )}

            {step.status === "running" && (
              <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
            )}

            {step.status === "waiting" && (
              <Circle className="h-6 w-6 text-slate-500" />
            )}

            <span
              className={`text-lg ${
                step.status === "completed"
                  ? "text-white"
                  : step.status === "running"
                  ? "text-blue-300"
                  : "text-slate-500"
              }`}
            >
              {step.title}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}