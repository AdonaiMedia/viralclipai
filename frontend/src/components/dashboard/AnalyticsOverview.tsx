"use client";

import {
  Video,
  Scissors,
  TrendingUp,
  LoaderCircle,
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
      bg: "bg-blue-500/10",
    },
    {
      title: "AI Clips",
      value: stats?.totalClips ?? 0,
      icon: Scissors,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Viral Score",
      value: `${stats?.averageViralScore ?? 0}%`,
      icon: TrendingUp,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      title: "Processing",
      value: stats?.processingVideos ?? 0,
      icon: LoaderCircle,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 transition hover:border-blue-500/40"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {item.title}
                </p>

                {loading ? (
                  <div className="mt-2 h-7 w-16 animate-pulse rounded bg-slate-700" />
                ) : (
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {item.value}
                  </h2>
                )}

              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg ${item.bg}`}
              >
                <Icon
                  className={`h-5 w-5 ${item.color} ${
                    loading ? "animate-pulse" : ""
                  }`}
                />
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}