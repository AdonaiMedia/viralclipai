"use client";

import Card from "@/components/ui/Card";

interface Props {
  analysis: any;
}

export default function AIAnalysis({
  analysis,
}: Props) {

  return (

    <Card>

      <h2 className="text-xl font-bold mb-4">

        🧠 AI Analysis

      </h2>

      {analysis ? (

        <>

          <p className="mb-3">

            <strong>Overall Score:</strong>{" "}
            {analysis.overall_score}

          </p>

          <pre className="whitespace-pre-wrap text-slate-300">

            {analysis.intelligence}

          </pre>

        </>

      ) : (

        <p className="text-slate-400">

          No AI analysis yet.

        </p>

      )}

    </Card>

  );

}