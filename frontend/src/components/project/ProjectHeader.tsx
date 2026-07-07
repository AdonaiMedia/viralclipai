"use client";

import { useProject } from "@/providers/ProjectProvider";

export default function ProjectHeader() {

  const { project, loading } = useProject();

  return (

    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

      <div>

        <h1 className="text-4xl font-bold text-white">

          {loading
            ? "Loading..."
            : project?.name ?? "Project"}

        </h1>

        <p className="text-slate-400 mt-2">

          ViralClip AI • Creator Workspace

        </p>

      </div>

      <div className="flex flex-wrap items-center gap-4">

        <div className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3">

          <p className="text-xs uppercase tracking-wide text-slate-400">

            Status

          </p>

          <p className="font-semibold capitalize text-white">

            {project?.video.status ?? "--"}

          </p>

        </div>

        <button
          className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-3 rounded-xl font-semibold"
          type="button"
        >
          Publish
        </button>

        <button
          className="bg-cyan-600 hover:bg-cyan-700 transition px-5 py-3 rounded-xl font-semibold"
          type="button"
        >
          Generate AI
        </button>

      </div>

    </div>

  );

}