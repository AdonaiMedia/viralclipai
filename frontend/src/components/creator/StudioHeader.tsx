"use client";

import { Sparkles } from "lucide-react";

export default function StudioHeader() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_35%)]" />

      <div className="relative flex items-center justify-between px-6 py-5">

        <div>

          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1">

            <Sparkles className="h-3.5 w-3.5 text-blue-400" />

            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-300">
              AI Creator Platform
            </span>

          </div>

          <h1 className="text-2xl font-bold text-white">
            ViralClip AI Studio
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Upload once • AI analyzes • Generate clips • Publish everywhere
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">

          <Sparkles className="h-6 w-6 text-blue-400" />

        </div>

      </div>

    </header>
  );
}