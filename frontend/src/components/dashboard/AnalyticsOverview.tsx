"use client";

import {
  Video,
  Scissors,
  TrendingUp,
  LoaderCircle,
  CheckCircle2,
  UploadCloud,
  ArrowUpRight,
} from "lucide-react";

import { useDashboardStats } from "@/hooks/useDashboardStats";

export default function AnalyticsOverview() {
  const { stats, loading } = useDashboardStats();

  const cards = [
    {
      title: "Videos",
      value: stats?.totalVideos ?? 0,
      icon: Video,
      color: "text-blue-400",
      bg: "from-blue-500/20 to-blue-600/5",
      border: "hover:border-blue-500/40",
    },
    {
      title: "AI Clips",
      value: stats?.totalClips ?? 0,
      icon: Scissors,
      color: "text-emerald-400",
      bg: "from-emerald-500/20 to-emerald-600/5",
      border: "hover:border-emerald-500/40",
    },
    {
      title: "Viral Score",
      value: `${stats?.averageViralScore ?? 0}%`,
      icon: TrendingUp,
      color: "text-orange-400",
      bg: "from-orange-500/20 to-orange-600/5",
      border: "hover:border-orange-500/40",
    },
    {
      title: "Processing",
      value: stats?.processingVideos ?? 0,
      icon: LoaderCircle,
      color: "text-violet-400",
      bg: "from-violet-500/20 to-violet-600/5",
      border: "hover:border-violet-500/40",
    },
    {
      title: "Today's Uploads",
      value: 0,
      icon: UploadCloud,
      color: "text-cyan-400",
      bg: "from-cyan-500/20 to-cyan-600/5",
      border: "hover:border-cyan-500/40",
    },
    {
      title: "Success Rate",
      value: "100%",
      icon: CheckCircle2,
      color: "text-green-400",
      bg: "from-green-500/20 to-green-600/5",
      border: "hover:border-green-500/40",
    },
  ];

  return (
  <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
    {cards.map((item) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className={`group rounded-xl border border-slate-800 bg-gradient-to-br ${item.bg} p-3 transition-all duration-200 hover:border-slate-600 hover:shadow-lg`}
        >
          <div className="flex items-center justify-between">

            <div className="min-w-0">

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                {item.title}
              </p>

              {loading ? (
                <div className="mt-2 h-6 w-14 animate-pulse rounded bg-slate-700" />
              ) : (
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {item.value}
                </h2>
              )}

            </div>

            <div className="rounded-lg bg-slate-900/70 p-2">

              <Icon
                className={`h-5 w-5 ${item.color} ${
                  loading
                    ? "animate-pulse"
                    : item.title === "Processing"
                    ? "animate-spin"
                    : ""
                }`}
              />

            </div>

          </div>

          {!loading && (
            <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400">

              <ArrowUpRight className="h-3 w-3" />

              <span>Live</span>

            </div>
          )}

        </div>
      );
    })}
  </section>
);
}