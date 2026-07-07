"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Props {
  clips: any[];
}

export default function ClipGallery({
  clips,
}: Props) {

  return (

    <Card>

      <h2 className="text-xl font-bold mb-5">

        ✂ Generated Clips

      </h2>

      {clips.length === 0 ? (

        <p className="text-slate-400">

          No clips generated yet.

        </p>

      ) : (

        <div className="space-y-4">

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
                className="border border-slate-700 rounded-xl p-5 bg-slate-900 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4"
              >

                <div>

                  <p className="font-semibold">

                    {clip.start_time}s → {clip.end_time}s

                  </p>

                  <p className="text-slate-400 text-sm mt-1">

                    Duration: {duration}s

                  </p>

                  <p
                    className={`font-semibold mt-2 ${scoreColor}`}
                  >

                    ⭐ Viral Score: {score}

                  </p>

                </div>

                <div className="flex gap-3">

                  <Button>

                    ▶ Preview

                  </Button>

                  <Button>

                    ⬇ Download

                  </Button>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </Card>

  );

}