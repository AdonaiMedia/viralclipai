"use client";

export default function StudioHeader() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-extrabold text-white">
            ViralClip AI Studio
          </h1>

          <p className="mt-3 text-slate-300 text-lg">
            Create once. Publish everywhere.
          </p>

          <p className="mt-2 text-slate-500">
            AI Powered Creator Operating System
          </p>

        </div>

        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500 animate-pulse">

          <span className="text-3xl">
            🤖
          </span>

        </div>

      </div>

    </div>
  );
}