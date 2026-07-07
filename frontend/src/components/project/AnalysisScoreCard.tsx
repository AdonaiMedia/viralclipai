"use client";

import { useProject } from "@/providers/ProjectProvider";

export default function AnalysisScoreCard() {

  const { project, loading } = useProject();

  if (loading) {

    return (

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

        Loading analysis...

      </div>

    );

  }

  const score = project?.analysis?.overallScore ?? 0;

  const scoreColor =
    score >= 80
      ? "text-emerald-400"
      : score >= 60
      ? "text-yellow-400"
      : "text-red-400";

  return (

    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

      <p className="text-sm uppercase tracking-wide text-slate-400">

        AI Overall Score

      </p>

      <h2 className={`text-5xl font-bold mt-3 ${scoreColor}`}>

        {score}

      </h2>

      <div className="w-full bg-slate-700 rounded-full h-3 mt-5 overflow-hidden">

        <div
          className="bg-cyan-500 h-3 rounded-full transition-all duration-700"
          style={{
            width: `${Math.min(score, 100)}%`,
          }}
        />

      </div>

      <p className="text-slate-400 mt-5">

        Overall viral potential calculated by ViralClip AI.

      </p>

    </div>

  );

}