"use client";

import { BrainCircuit, Activity } from "lucide-react";

export default function ViralCorePanel() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-xl">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(37,99,235,0.18),transparent_45%)]" />

      <div className="relative flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-lg">

            <BrainCircuit className="h-10 w-10 text-blue-400" />

          </div>

          <div>

            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">

              <Activity className="h-4 w-4 text-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                AI ONLINE
              </span>

            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              ViralCore™ Intelligence Engine
            </h2>

            <p className="mt-3 text-base font-medium text-slate-200">
              The intelligence layer powering every AI workflow.
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              ViralCore coordinates analysis, scene detection, viral scoring,
              clip generation, captions, thumbnails and publishing across all
              AI agents in a single automated workflow.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-3 lg:min-w-[260px]">

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              STATUS
            </p>
            <p className="mt-2 font-semibold text-emerald-400">
              Operational
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              AI MODE
            </p>
            <p className="mt-2 font-semibold text-blue-300">
              Intelligent
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}