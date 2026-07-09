"use client";

import {
  Activity,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { useMissionActivity } from "@/hooks/useMissionActivity";

export default function MissionActivityFeed() {

  const events = useMissionActivity();

  return (

    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <Activity className="h-6 w-6 text-blue-400" />

        <div>

          <h3 className="text-2xl font-bold text-white">
            Mission Activity
          </h3>

          <p className="text-sm text-slate-400">
            Live AI processing events
          </p>

        </div>

      </div>

      <div className="max-h-[420px] space-y-4 overflow-y-auto">

        {events.length === 0 && (

          <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">

            <Loader2 className="mx-auto h-8 w-8 animate-spin text-slate-500" />

            <p className="mt-4 text-slate-400">
              Waiting for AI mission...
            </p>

          </div>

        )}

        {events.map((event, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-700 bg-slate-800 p-4"
          >

            <div className="flex items-start justify-between">

              <div>

                <h4 className="font-semibold text-white">
                  {event.message}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  {event.stage.toUpperCase()}
                </p>

              </div>

              <CheckCircle2 className="h-5 w-5 text-emerald-400" />

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">

              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{
                  width: `${event.progress}%`,
                }}
              />

            </div>

            <div className="mt-2 flex justify-between text-xs text-slate-500">

              <span>{event.progress}%</span>

              <span>
                {new Date(
                  event.createdAt
                ).toLocaleTimeString()}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}