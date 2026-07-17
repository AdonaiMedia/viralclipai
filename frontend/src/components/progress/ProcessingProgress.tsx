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
    <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

        <div className="flex items-center gap-2">

          <div className="rounded-lg bg-blue-500/10 p-2">

            <Cpu className="h-4 w-4 text-blue-400" />

          </div>

          <div>

            <h3 className="text-sm font-semibold text-white">
              AI Engine
            </h3>

            <p className="text-[11px] text-slate-500">
              Processing...
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-2 py-1">

          <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-400" />

          <span className="text-xs font-semibold text-blue-400">
            {percentage}%
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-4">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs text-slate-400">
            Progress
          </span>

          <span className="text-xs font-semibold text-white">
            {percentage}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <div className="mt-3 flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/60 p-3">

          <Sparkles className="mt-0.5 h-4 w-4 text-cyan-400" />

          <div>

            <p className="text-xs font-semibold text-white">
              Current Task
            </p>

            <p className="mt-1 text-[11px] leading-5 text-slate-400">
              {message}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}