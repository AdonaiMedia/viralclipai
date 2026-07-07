"use client";

import type { ProcessingProgress } from "@/types/Processing";

interface Props {
  progress: ProcessingProgress;
}

const stages = [
  "upload",
  "inspection",
  "transcription",
  "analysis",
  "viral",
  "clips",
  "thumbnails",
  "publishing",
  "completed",
];

export default function ProcessingProgress({
  progress,
}: Props) {

  return (

    <div className="rounded-xl bg-slate-800 p-6">

      <h2 className="text-xl font-bold mb-6">

        AI Processing

      </h2>

      <div className="space-y-4">

        {stages.map((stage) => {

          const active =
            stages.indexOf(stage) <=
            stages.indexOf(progress.stage);

          return (

            <div
              key={stage}
              className="flex items-center gap-3"
            >

              <div
                className={`h-3 w-3 rounded-full ${
                  active
                    ? "bg-green-500"
                    : "bg-slate-600"
                }`}
              />

              <span>

                {stage}

              </span>

            </div>

          );

        })}

      </div>

      <div className="mt-6">

        <div className="h-2 rounded bg-slate-700">

          <div
            className="h-2 rounded bg-cyan-500 transition-all"
            style={{
              width: `${progress.progress}%`,
            }}
          />

        </div>

        <p className="mt-3 text-slate-400">

          {progress.message}

        </p>

      </div>

    </div>

  );

}