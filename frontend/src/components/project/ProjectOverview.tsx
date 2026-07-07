"use client";

import { useProject } from "@/providers/ProjectProvider";
import AnalysisScoreCard from "./AnalysisScoreCard";

export default function ProjectOverview() {

  const {
    project,
    loading,
  } = useProject();

  if (loading) {

    return (
      <div className="bg-slate-800 rounded-xl p-8 mt-6">
        Loading project...
      </div>
    );

  }

  if (!project) {

    return (
      <div className="bg-red-900 rounded-xl p-8 mt-6">
        Project not found.
      </div>
    );

  }

  return (

    <div className="bg-slate-800 rounded-xl p-8 mt-6">

      <h2 className="text-3xl font-bold mb-6">
        {project.name}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-slate-700 rounded-lg p-5">
          <p className="text-slate-400">
            Status
          </p>

          <h3 className="text-xl font-bold">
            {project.video.status}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-5">
          <p className="text-slate-400">
            AI Score
          </p>

          <h3 className="text-3xl font-bold text-green-400">
            {project.analysis?.overallScore ?? "--"}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-5">
          <p className="text-slate-400">
            Clips
          </p>

          <h3 className="text-3xl font-bold">
            {project.clips.length}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-5">
          <p className="text-slate-400">
            Created
          </p>

          <h3 className="text-sm">
            {new Date(
              project.video.createdAt
            ).toLocaleString()}
          </h3>
        </div>

      </div>

      <div className="mt-8">

        <AnalysisScoreCard />

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-3">
          AI Analysis
        </h3>

        <div className="bg-slate-900 rounded-lg p-5 whitespace-pre-wrap text-slate-300">

          {project.analysis?.intelligence ??
            "No analysis yet."}

        </div>

      </div>

    </div>

  );

}