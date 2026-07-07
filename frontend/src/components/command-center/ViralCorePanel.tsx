"use client";

export default function ViralCorePanel() {

  return (

    <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl">

      <div className="flex items-center gap-6">

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500/10 animate-pulse">

          <span className="text-5xl text-blue-400">
            ◎
          </span>

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            ViralCore™
          </h2>

          <p className="mt-2 text-slate-300">
            AI Creator Operating System
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Every AI Agent works together to create viral content.
          </p>

        </div>

      </div>

    </div>

  );

}