"use client";

import {
  PlayCircle,
  Download,
  Share2,
  Star,
  Clock,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface Clip {
  id: number | string;
  start_time: number;
  end_time: number;
  viral_score?: number;
}

interface Props {
  clips: Clip[];
}

export default function ClipGallery({
  clips,
}: Props) {
  return (
    <Card>

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            VIRAL CLIPS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Clip Gallery
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            AI selected the highest-performing moments from your video.
          </p>

        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">

          <span className="text-sm font-bold text-emerald-400">
            {clips.length} CLIPS
          </span>

        </div>

      </div>

      {clips.length === 0 ? (

        <div className="flex h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#4a3426] bg-[#15100c]">

          <PlayCircle className="mb-5 h-20 w-20 text-orange-400/50" />

          <h3 className="text-2xl font-bold text-white">
            No Viral Clips Yet
          </h3>

          <p className="mt-3 max-w-md text-center text-slate-400">
            Run the AI Clip Generator to detect and create the most viral
            moments automatically.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {clips.map((clip) => (

            <div
              key={clip.id}
              className="overflow-hidden rounded-3xl border border-[#4a3426] bg-[#15100c] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-2xl"
            >

              <div className="relative flex aspect-video items-center justify-center bg-[#100c09]">

                <PlayCircle className="h-16 w-16 text-orange-400/60" />

                <div className="absolute left-4 top-4 rounded-full bg-red-500/10 px-3 py-1">

                  <span className="flex items-center gap-1 text-xs font-bold text-red-400">

                    <Star className="h-3 w-3" />

                    {clip.viral_score ?? 0}%

                  </span>

                </div>

              </div>

              <div className="p-5">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="font-bold text-white">
                    Viral Clip #{clip.id}
                  </h3>

                  <span className="flex items-center gap-2 text-sm text-slate-400">

                    <Clock className="h-4 w-4" />

                    {clip.start_time}s - {clip.end_time}s

                  </span>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  <button className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white transition hover:from-red-500 hover:to-orange-400">

                    <Download className="mr-2 inline h-4 w-4" />

                    Export

                  </button>

                  <button className="rounded-xl border border-[#4a3426] bg-[#201712] py-3 font-semibold text-slate-300 transition hover:bg-[#2d2119]">

                    <Share2 className="mr-2 inline h-4 w-4" />

                    Share

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </Card>
  );
}