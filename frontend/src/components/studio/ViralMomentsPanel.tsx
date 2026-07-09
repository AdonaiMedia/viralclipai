"use client";

import {
  Flame,
  Play,
  Scissors,
  Star,
} from "lucide-react";

const moments = [
  {
    id: 1,
    title: "Opening Hook",
    start: "00:18",
    end: "00:42",
    score: 98,
  },
  {
    id: 2,
    title: "Audience Reaction",
    start: "02:13",
    end: "02:40",
    score: 95,
  },
  {
    id: 3,
    title: "Power Quote",
    start: "04:51",
    end: "05:18",
    score: 93,
  },
];

export default function ViralMomentsPanel() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">

          <Flame className="text-orange-400" />

          Viral Moments

        </h2>

        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
          {moments.length} Found
        </span>

      </div>

      <div className="space-y-4">

        {moments.map((moment) => (

          <div
            key={moment.id}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-orange-500"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold text-white">
                  {moment.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {moment.start} → {moment.end}
                </p>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

                <Star className="h-4 w-4 text-emerald-400" />

                <span className="text-sm font-bold text-emerald-400">

                  {moment.score}

                </span>

              </div>

            </div>

            <div className="mt-5 flex gap-3">

              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">

                <Play className="h-4 w-4" />

                Preview

              </button>

              <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">

                <Scissors className="h-4 w-4" />

                Generate Clip

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}