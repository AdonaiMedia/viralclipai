"use client";

import {
  Cpu,
  Timer,
  Activity,
  Layers3,
} from "lucide-react";

import { useMissionControl } from "@/hooks/useMissionControl";

export default function MissionControl() {

  const mission = useMissionControl();

  return (

    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <Cpu className="h-7 w-7 text-cyan-400" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            Mission Control
          </h2>

          <p className="text-sm text-slate-400">
            Live processing mission overview
          </p>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* LEFT PANEL */}

        <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">

          <p className="text-sm text-slate-400">
            Current Mission
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">

            {mission.active
              ? "AI Mission Running"
              : "No Active Mission"}

          </h3>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-700">

            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-500"
              style={{
                width: `${mission.progress}%`,
              }}
            />

          </div>

          <div className="mt-3 flex items-center justify-between">

            <p className="text-sm text-slate-400">

              {mission.message}

            </p>

            <span className="text-sm font-semibold text-blue-400">

              {mission.progress}%

            </span>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="grid gap-4">

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">

            <div className="flex items-center gap-3">

              <Activity className="h-5 w-5 text-blue-400" />

              <div>

                <p className="text-xs text-slate-400">

                  Current Stage

                </p>

                <h4 className="font-semibold uppercase text-white">

                  {mission.stage}

                </h4>

              </div>

            </div>

          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">

            <div className="flex items-center gap-3">

              <Timer className="h-5 w-5 text-emerald-400" />

              <div>

                <p className="text-xs text-slate-400">

                  Estimated Time

                </p>

                <h4 className="font-semibold text-white">

                  Coming Soon

                </h4>

              </div>

            </div>

          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">

            <div className="flex items-center gap-3">

              <Layers3 className="h-5 w-5 text-orange-400" />

              <div>

                <p className="text-xs text-slate-400">

                  Queue

                </p>

                <h4 className="font-semibold text-white">

                  0 Pending Videos

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}