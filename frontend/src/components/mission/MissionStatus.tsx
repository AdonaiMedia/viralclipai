"use client";

import {
  Activity,
  Cpu,
  Gauge,
} from "lucide-react";

interface Props {
  stage: string;
  progress: number;
  message: string;
}

export default function MissionStatus({
  stage,
  progress,
  message,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <Cpu className="h-8 w-8 text-cyan-400" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Mission Monitor
          </h2>

          <p className="text-slate-400">
            Real-time AI mission status
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <div>

          <div className="mb-2 flex justify-between">

            <span className="text-slate-300">
              Current Stage
            </span>

            <span className="font-bold capitalize text-cyan-400">
              {stage}
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        <div className="rounded-xl bg-slate-800 p-5">

          <div className="flex items-center gap-3">

            <Activity className="text-emerald-400" />

            <span className="text-slate-200">

              {message}

            </span>

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-xl bg-slate-800 p-5">

            <Gauge className="mb-2 text-blue-400" />

            <p className="text-sm text-slate-400">

              Progress

            </p>

            <h3 className="text-3xl font-bold text-white">

              {progress}%

            </h3>

          </div>

          <div className="rounded-xl bg-slate-800 p-5">

            <Cpu className="mb-2 text-violet-400" />

            <p className="text-sm text-slate-400">

              AI Engine

            </p>

            <h3 className="text-3xl font-bold text-emerald-400">

              ONLINE

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}