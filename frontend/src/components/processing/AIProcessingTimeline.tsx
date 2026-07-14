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
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-blue-400" />

            <h2 className="text-lg font-bold text-white">
              AI Processing Pipeline
            </h2>

          </div>

          <p className="mt-1 text-xs text-slate-500">
            AI is processing your video step by step
          </p>

        </div>

        <div className="text-right">

          <p className="text-2xl font-bold text-white">
            {percent}%
          </p>

          <p className="text-xs text-slate-500">
            {completed}/{steps.length} Complete
          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-700"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      {/* Steps */}

      <div className="space-y-3">

        {steps.map((step, index) => {

          const done =
            step.status === "completed";

          const running =
            step.status === "running";

          return (

            <div key={step.id}>

              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition hover:border-blue-500/30">

                <div className="flex items-center gap-3">

                  {done ? (

                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  ) : running ? (

                    <Loader2 className="h-5 w-5 animate-spin text-blue-400" />

                  ) : (

                    <Circle className="h-5 w-5 text-slate-600" />

                  )}

                  <div>

                    <p
                      className={`font-medium ${
                        done
                          ? "text-white"
                          : running
                          ? "text-blue-300"
                          : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </p>

                    <p className="text-xs text-slate-500">
                      {done
                        ? "Completed successfully"
                        : running
                        ? "AI is working..."
                        : "Waiting..."}
                    </p>

                  </div>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
                    : "Waiting"}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowRight className="h-4 w-4 text-slate-700" />
                </div>
              )}

            </div>

          );
        })}

      </div>

    </section>
  );
}