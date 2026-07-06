"use client";

import { useProject } from "@/providers/ProjectProvider";

export default function ProjectHeader() {

  const { project, loading } = useProject();

  return (

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

      <div>

        <h1 className="text-4xl font-bold">

          {loading
            ? "Loading..."
            : project?.name ?? "Project"}

        </h1>

        <p className="text-slate-400 mt-2">

          AI Content Workspace

        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="bg-slate-800 rounded-lg px-4 py-2">

          <span className="text-slate-400 text-sm">
            Status
          </span>

          <p className="font-semibold">
            {project?.video.status ?? "--"}
          </p>

        </div>

        <button className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg font-semibold transition">

          Publish

        </button>

        <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-semibold transition">

          Generate

        </button>

      </div>

    </div>

  );

}