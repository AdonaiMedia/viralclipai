"use client";

import Card from "@/components/ui/Card";

interface Props {
  analysis: any;
}

export default function AIAnalysis({
  analysis,
}: Props) {

  if (!analysis) {
    return (
      <Card>
        <h2 className="text-xl font-bold mb-4">
          🧠 AI Analysis
        </h2>

        <p className="text-slate-400">
          No AI analysis yet.
        </p>
      </Card>
    );
  }

  const intelligence = analysis.intelligence;

  return (

    <Card>

      <h2 className="text-xl font-bold mb-6">
        🧠 AI Analysis
      </h2>

      <div className="space-y-4">

        <div>
          <strong>Overall Score:</strong>{" "}
          {analysis.overall_score}
        </div>

        <div>
          <strong>Topic:</strong>{" "}
          {intelligence?.topic}
        </div>

        <div>
          <strong>Audience:</strong>{" "}
          {Array.isArray(intelligence?.audience)
            ? intelligence.audience.join(", ")
            : intelligence?.audience}
        </div>

        <div>
          <strong>Emotion:</strong>{" "}
          {Array.isArray(intelligence?.emotions)
            ? intelligence.emotions.join(", ")
            : intelligence?.emotions}
        </div>

        <div>
          <strong>Virality:</strong>{" "}
          {intelligence?.virality}
        </div>

        <div>
          <strong>Reason:</strong>{" "}
          {intelligence?.reason}
        </div>

        <hr className="border-slate-700" />

        <h3 className="text-lg font-semibold">
          🤖 AI Content
        </h3>

        <div>
          <strong>Title:</strong>
          <p className="mt-1 text-slate-300">
            {intelligence?.ai?.title}
          </p>
        </div>

        <div>
          <strong>Caption:</strong>
          <p className="mt-1 text-slate-300">
            {intelligence?.ai?.caption}
          </p>
        </div>

        <div>
          <strong>Hook:</strong>
          <p className="mt-1 text-slate-300">
            {intelligence?.ai?.hook}
          </p>
        </div>

        <div>
          <strong>Hashtags:</strong>
          <p className="mt-1 text-slate-300">
            {intelligence?.ai?.hashtags}
          </p>
        </div>

      </div>

    </Card>

  );

}