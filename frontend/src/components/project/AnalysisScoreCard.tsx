"use client";

import { useProject } from "@/providers/ProjectProvider";

export default function AnalysisScoreCard() {
  const { project, loading } = useProject();

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-xl p-6">
        Loading analysis...
      </div>
    );
  }

  const score = project?.analysis?.overallScore ?? 0;

  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <p className="text-slate-400 text-sm">
        AI Overall Score
      </p>

      <h2 className="text-5xl font-bold text-green-400 mt-2">
        {score}
      </h2>

      <p className="text-slate-400 mt-2">
        Overall viral potential based on AI analysis.
      </p>

    </div>
  );
}