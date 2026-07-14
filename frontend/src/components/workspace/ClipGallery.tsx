"use client";

import {
  PlayCircle,
  Download,
  Share2,
  Trash2,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface Props {
  clips: any[];
}

export default function ClipGallery({
  clips,
}: Props) {
  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            ✂ AI Clip Gallery
          </h2>

          <p className="text-sm text-slate-400">
            AI generated viral clips
          </p>

        </div>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {clips.length} Clips
        </span>

      </div>

      {clips.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">

          <PlayCircle className="mx-auto mb-4 h-14 w-14 text-slate-600" />

          <h3 className="text-lg font-semibold text-white">
            No clips generated
          </h3>

          <p className="mt-2 text-slate-400">
            Upload a video and let AI generate viral clips.
          </p>

        </div>

      ) : (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {clips.map((clip) => {

            const duration =
              Number(clip.end_time) -
              Number(clip.start_time);

            const score =
              clip.viral_score ?? 0;

            const scoreColor =
              score >= 80
                ? "text-emerald-400"
                : score >= 60
                ? "text-yellow-400"
                : "text-red-400";

            return (

              <div
                key={clip.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-blue-500/40"
              >

                <div className="flex aspect-video items-center justify-center bg-slate-800">

                  <PlayCircle className="h-16 w-16 text-slate-600" />

                </div>

                <div className="space-y-4 p-5">

                  <div>

                    <h3 className="font-semibold text-white">
                      Clip #{clip.id}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {clip.start_time}s → {clip.end_time}s
                    </p>

                    <p className="text-xs text-slate-500">
                      Duration: {duration}s
                    </p>

                  </div>

                  <div className="flex items-center justify-between">

                    <span
                      className={`rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold ${scoreColor}`}
                    >
                      🔥 {score}
                    </span>

                    <div className="flex gap-2">

                      <button className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700">
                        <Star className="h-4 w-4 text-yellow-400" />
                      </button>

                      <button className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700">
                        <Download className="h-4 w-4 text-blue-400" />
                      </button>

                      <button className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700">
                        <Share2 className="h-4 w-4 text-emerald-400" />
                      </button>

                      <button className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700">
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </Card>
  );
}