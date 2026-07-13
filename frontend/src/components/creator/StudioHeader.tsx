"use client";

import {
  Sparkles,
  Rocket,
  Activity,
  Cpu,
  Bell,
} from "lucide-react";

export default function StudioHeader() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="relative flex flex-col gap-6 p-7 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5">

            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              ViralClip AI Studio
            </span>

          </div>

          <h1 className="mt-4 text-4xl font-extrabold text-white">
            Creator Command Center
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Upload one video and let AI detect viral moments,
            generate captions, titles, thumbnails and publish
            across all major social platforms automatically.
          </p>

        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4 lg:w-[360px]">

          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">

            <Rocket className="mb-2 h-6 w-6 text-blue-400" />

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Status
            </p>

            <h3 className="mt-1 font-bold text-emerald-400">
              Ready
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">

            <Cpu className="mb-2 h-6 w-6 text-violet-400" />

            <p className="text-xs uppercase tracking-widest text-slate-500">
              AI Engine
            </p>

            <h3 className="mt-1 font-bold text-white">
              Online
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">

            <Activity className="mb-2 h-6 w-6 text-orange-400" />

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Queue
            </p>

            <h3 className="mt-1 font-bold text-white">
              0 Jobs
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">

            <Bell className="mb-2 h-6 w-6 text-cyan-400" />

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Notifications
            </p>

            <h3 className="mt-1 font-bold text-white">
              Active
            </h3>

          </div>

        </div>

      </div>

    </header>
  );
}