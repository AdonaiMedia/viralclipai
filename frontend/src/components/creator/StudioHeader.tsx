"use client";

import {
  Sparkles,
  Rocket,
  Activity,
  Cpu,
} from "lucide-react";

export default function StudioHeader() {
  return (
    <header className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.15),transparent_40%)]" />

      <div className="relative flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}

        <div className="min-w-0">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1">

            <Sparkles className="h-3.5 w-3.5 text-blue-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              ViralClip AI Studio
            </span>

          </div>

          <h1 className="mt-3 text-2xl font-bold text-white">
            Creator Command Center
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Upload one video and let AI automatically detect viral moments,
            generate captions, titles and clips for every platform.
          </p>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-2 lg:w-[260px]">

          <StatusCard
            icon={<Rocket className="h-4 w-4 text-blue-400" />}
            title="Status"
            value="Ready"
            valueColor="text-emerald-400"
          />

          <StatusCard
            icon={<Cpu className="h-4 w-4 text-violet-400" />}
            title="AI"
            value="Online"
          />

          <StatusCard
            icon={<Activity className="h-4 w-4 text-orange-400" />}
            title="Queue"
            value="0"
          />

          <StatusCard
            icon={<Sparkles className="h-4 w-4 text-cyan-400" />}
            title="Mode"
            value="Auto"
          />

        </div>

      </div>

    </header>
  );
}

function StatusCard({
  icon,
  title,
  value,
  valueColor = "text-white",
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-2.5">

      <div className="mb-2 flex items-center gap-2">

        {icon}

        <span className="text-[10px] uppercase tracking-wider text-slate-500">
          {title}
        </span>

      </div>

      <p className={`text-sm font-semibold ${valueColor}`}>
        {value}
      </p>

    </div>
  );
}