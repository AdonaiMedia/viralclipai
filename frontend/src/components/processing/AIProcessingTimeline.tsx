"use client";

import {
  CheckCircle2,
  Loader2,
  Circle,
  Sparkles,
  ArrowRight,
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
  const completed =
    steps.filter((s) => s.status === "completed").length;

  const percent =
    steps.length === 0
      ? 0
      : Math.round((completed / steps.length) * 100);

 return (
  <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-md">

    {/* Header */}

    <div className="mb-3 flex items-center justify-between">

      <div>

        <div className="flex items-center gap-2">

          <Sparkles className="h-4 w-4 text-blue-400" />

          <h2 className="text-base font-semibold text-white">
            AI Pipeline
          </h2>

        </div>

        <p className="mt-1 text-[11px] text-slate-500">
          Processing workflow
        </p>

      </div>

      <div className="text-right">

        <p className="text-lg font-bold text-white">
          {percent}%
        </p>

        <p className="text-[11px] text-slate-500">
          {completed}/{steps.length}
        </p>

      </div>

    </div>

    {/* Progress */}

    <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-slate-800">

      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-700"
        style={{
          width: `${percent}%`,
        }}
      />

    </div>

    {/* Steps */}

    <div className="space-y-2">

      {steps.map((step) => {

        const done = step.status === "completed";
        const running = step.status === "running";

        return (

          <div
            key={step.id}
            className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2"
          >

            <div className="flex items-center gap-2">

              {done ? (

                <CheckCircle2 className="h-4 w-4 text-emerald-400" />

              ) : running ? (

                <Loader2 className="h-4 w-4 animate-spin text-blue-400" />

              ) : (

                <Circle className="h-4 w-4 text-slate-600" />

              )}

              <div>

                <p
                  className={`text-sm font-medium ${
                    done
                      ? "text-white"
                      : running
                      ? "text-blue-300"
                      : "text-slate-500"
                  }`}
                >
                  {step.title}
                </p>

                <p className="text-[10px] text-slate-500">
                  {done
                    ? "Completed"
                    : running
                    ? "Running..."
                    : "Waiting"}
                </p>

              </div>

            </div>

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                done
                  ? "bg-emerald-500/10 text-emerald-400"
                  : running
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              {done
                ? "Done"
                : running
                ? "Running"
                : "Wait"}
            </span>

          </div>

        );

      })}

    </div>

  </section>
);

}