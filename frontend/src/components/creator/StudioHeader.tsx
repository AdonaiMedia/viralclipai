"use client";

import { Sparkles } from "lucide-react";

export default function StudioHeader() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-xl">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_40%)]" />

      <div className="relative flex items-center justify-between p-8 lg:p-10">

        <div className="max-w-2xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">

            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              AI Creator Platform
            </span>

          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white lg:text-5xl">
            ViralClip AI Studio
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-200">
            Create once. Publish everywhere.
          </p>

          <p className="mt-2 max-w-xl text-base leading-7 text-slate-400">
            Upload a video once and let ViralClip AI analyze your content,
            detect viral moments, generate clips, captions, thumbnails and
            prepare everything for publishing.
          </p>

        </div>

        <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-lg">

          <Sparkles className="h-10 w-10 text-blue-400" />

        </div>

      </div>

    </header>
  );
}