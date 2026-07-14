"use client";

import {
  Loader2,
  Sparkles,
  Cpu,
} from "lucide-react";

interface Props {
  percentage: number;
  message: string;
}

export default function ProcessingProgress({
  percentage,
  message,
}: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-500/10 p-2">

            <Cpu className="h-5 w-5 text-blue-400" />

          </div>

          <div>

            <h3 className="font-bold text-white">
              AI Engine
            </h3>

            <p className="text-xs text-slate-500">
              Processing your video...
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1">

          <Loader2 className="h-4 w-4 animate-spin text-blue-400" />

          <span className="text-sm font-semibold text-blue-400">
            {percentage}%
          </span>

        </div>

      </div>

      {/* Progress */}

      <div className="px-5 py-5">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Progress
          </span>

          <span className="text-sm font-semibold text-white">
            {percentage}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4">

          <div className="flex items-start gap-3">

            <Sparkles className="mt-0.5 h-5 w-5 text-cyan-400" />

            <div>

              <p className="text-sm font-semibold text-white">
                Current Task
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {message}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}