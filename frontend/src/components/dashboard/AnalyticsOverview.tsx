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
      title: "Average Viral Score",
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
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {item.title}
                </p>

                {loading ? (
                  <div className="mt-3 h-9 w-20 animate-pulse rounded bg-slate-700" />
                ) : (
                  <h2 className="mt-2 text-3xl font-black text-white">
                    {item.value}
                  </h2>
                )}
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon
                  className={`h-7 w-7 ${item.color} ${
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