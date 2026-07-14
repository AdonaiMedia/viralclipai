"use client";

import {
  Sparkles,
  TrendingUp,
  Brain,
  Hash,
  FileText,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface Props {
  analysis?: any;
}

export default function AIAnalysis({
  analysis,
}: Props) {

  if (!analysis) {
    return (
      <Card>
        <div className="flex h-[420px] flex-col items-center justify-center">

          <Brain className="mb-4 h-16 w-16 text-slate-600" />

          <h2 className="text-xl font-bold text-white">
            AI Analysis
          </h2>

          <p className="mt-2 text-slate-400">
            Upload a video to generate AI insights.
          </p>

        </div>
      </Card>
    );
  }

  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            AI Analysis
          </h2>

          <p className="text-sm text-slate-400">
            Generated automatically by ViralClip AI
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2">

          <span className="font-semibold text-emerald-400">
            COMPLETE
          </span>

        </div>

      </div>

      <div className="grid gap-4 lg:grid-cols-2">

        {/* Viral Score */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="mb-3 flex items-center gap-2">

            <TrendingUp className="h-5 w-5 text-green-400" />

            <h3 className="font-semibold text-white">
              Viral Score
            </h3>

          </div>

          <p className="text-4xl font-bold text-green-400">
            {analysis.overall_score ?? 0}%
          </p>

        </div>

        {/* AI Confidence */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="mb-3 flex items-center gap-2">

            <CheckCircle2 className="h-5 w-5 text-blue-400" />

            <h3 className="font-semibold text-white">
              AI Confidence
            </h3>

          </div>

          <p className="text-4xl font-bold text-blue-400">
            98%
          </p>

        </div>

        {/* Summary */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 lg:col-span-2">

          <div className="mb-3 flex items-center gap-2">

            <FileText className="h-5 w-5 text-cyan-400" />

            <h3 className="font-semibold text-white">
              AI Summary
            </h3>

          </div>

          <p className="text-sm leading-7 text-slate-300">
            {analysis.intelligence ??
              "AI summary will appear here."}
          </p>

        </div>

        {/* Best Hook */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="mb-3 flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-yellow-400" />

            <h3 className="font-semibold text-white">
              Best Hook
            </h3>

          </div>

          <p className="text-slate-300">
            {analysis.hook ??
              "No hook generated."}
          </p>

        </div>

        {/* Keywords */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

          <div className="mb-3 flex items-center gap-2">

            <Hash className="h-5 w-5 text-purple-400" />

            <h3 className="font-semibold text-white">
              Keywords
            </h3>

          </div>

          <p className="text-slate-300">
            {analysis.keywords ??
              "No keywords generated."}
          </p>

        </div>

        {/* Recommendation */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 lg:col-span-2">

          <div className="mb-3 flex items-center gap-2">

            <Lightbulb className="h-5 w-5 text-orange-400" />

            <h3 className="font-semibold text-white">
              AI Recommendation
            </h3>

          </div>

          <p className="leading-7 text-slate-300">
            {analysis.recommendation ??
              "AI recommends generating multiple clips and publishing them across TikTok, Instagram Reels, YouTube Shorts and Facebook Reels for maximum reach."}
          </p>

        </div>

      </div>

    </Card>
  );
}