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
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-lg font-bold text-white">
          AI Processing
        </h2>

        <span className="text-xs text-slate-400">
          {steps.filter(s => s.status === "completed").length}
          {" / "}
          {steps.length}
        </span>

      </div>

      <div className="space-y-3">

        {steps.map((step) => {

          const completed =
            step.status === "completed";

          const running =
            step.status === "running";

          return (

            <div
              key={step.id}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
            >

              <div className="flex items-center gap-3">

                {completed && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                )}

                {running && (
                  <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
                )}

                {!completed && !running && (
                  <Circle className="h-5 w-5 text-slate-500" />
                )}

                <span
                  className={`font-medium ${
                    completed
                      ? "text-white"
                      : running
                      ? "text-blue-300"
                      : "text-slate-500"
                  }`}
                >
                  {step.title}
                </span>

              </div>

              <span
                className={`text-xs font-semibold rounded-full px-3 py-1 ${
                  completed
                    ? "bg-emerald-500/10 text-emerald-400"
                    : running
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                {completed
                  ? "Done"
                  : running
                  ? "Running"
                  : "Waiting"}
              </span>

            </div>

          );
        })}

      </div>

    </section>
  );
}