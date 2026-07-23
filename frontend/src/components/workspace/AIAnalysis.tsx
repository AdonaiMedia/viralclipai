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
        <div className="flex h-[280px] flex-col items-center justify-center text-center">

          <Brain className="mb-4 h-16 w-16 text-slate-600" />

         <h2 className="text-2xl font-bold text-white">
  AI Analysis
</h2>

<p className="mt-3 max-w-sm text-slate-400">
  Upload a video to receive viral insights, AI recommendations,
  hooks, keywords and content analysis.
</p>

        </div>
      </Card>
    );
  }

 return (
  <Card>
  <div className="mb-6 flex items-center justify-between">

  <div>

    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
      AI ENGINE
    </p>

    <h2 className="mt-2 text-2xl font-bold text-white">
      Intelligence Report
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      Generated automatically by ViralClip AI
    </p>

  </div>

  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

    <span className="text-sm font-bold text-emerald-400">
      COMPLETE
    </span>

  </div>

</div>

    {/* Score */}

    <div className="mb-6 rounded-2xl border border-[#4a3426] bg-[#15100c] p-6">

  <div className="flex items-center justify-between">

    <div>

      <p className="text-sm uppercase tracking-wider text-slate-400">
        Viral Score
      </p>

      <h2 className="mt-3 text-6xl font-extrabold text-red-400">
        {analysis.overall_score ?? 0}
        <span className="text-3xl text-orange-300">%</span>
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        AI confidence based on transcript, engagement and viral signals.
      </p>

    </div>

    <div className="rounded-2xl bg-red-500/10 p-4">

      <TrendingUp className="h-12 w-12 text-red-400" />

    </div>

  </div>

  <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#2a2018]">

    <div
      className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"
      style={{
        width: `${analysis.overall_score ?? 0}%`,
      }}
    />

  </div>

</div>

    {/* Metrics */}

    <div className="grid gap-3 md:grid-cols-2">

      <Metric
        title="AI Confidence"
        value="98%"
        icon={<CheckCircle2 className="h-5 w-5 text-blue-400" />}
      />

      <Metric
        title="Content Quality"
        value={`${analysis.overall_score ?? 0}%`}
        icon={<Brain className="h-5 w-5 text-violet-400" />}
      />

    </div>

    {/* Summary */}

    <Section
      icon={<FileText className="h-5 w-5 text-cyan-400" />}
      title="AI Summary"
    >
      {analysis.intelligence ??
        "AI summary will appear after processing."}
    </Section>

    {/* Hook */}

    <Section
      icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
      title="Best Hook"
    >
      {analysis.hook ??
        "No hook generated yet."}
    </Section>

    {/* Keywords */}

    <Section
      icon={<Hash className="h-5 w-5 text-purple-400" />}
      title="Keywords"
    >
      {analysis.keywords ??
        "No keywords generated."}
    </Section>

    {/* Recommendation */}

    <Section
      icon={<Lightbulb className="h-5 w-5 text-orange-400" />}
      title="AI Recommendation"
    >
      {analysis.recommendation ??
        "Generate multiple clips and publish to TikTok, Instagram Reels, YouTube Shorts and Facebook Reels for maximum reach."}
    </Section>

  </Card>
);
function Metric({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#4a3426] bg-[#15100c] p-5">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-[#201712] p-2">
          {icon}
        </div>

        <span className="text-sm font-medium text-slate-400">
          {title}
        </span>

      </div>

      <h3 className="mt-4 text-4xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-2xl border border-[#4a3426] bg-[#15100c] p-6">

      <div className="mb-4 flex items-center gap-3">

        <div className="rounded-xl bg-[#201712] p-2">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>

      </div>

      <div className="max-h-48 overflow-y-auto rounded-xl bg-[#201712] p-4">

  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">
    {typeof children === "string"
      ? children
      : String(children)}
  </p>

</div>

    </div>
  );
}
}