import { DashboardStats as DashboardStatsType } from "@/types/Dashboard";

interface Props {
  stats: DashboardStatsType;
}

export default function DashboardStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-5 mb-8">

      <div className="rounded-xl bg-slate-800 p-5">
        <p className="text-sm text-gray-400">
          Videos
        </p>

        <h2 className="text-3xl font-bold text-white">
          {stats.totalVideos}
        </h2>
      </div>

      <div className="rounded-xl bg-slate-800 p-5">
        <p className="text-sm text-gray-400">
          Clips
        </p>

        <h2 className="text-3xl font-bold text-white">
          {stats.totalClips}
        </h2>
      </div>

      <div className="rounded-xl bg-slate-800 p-5">
        <p className="text-sm text-gray-400">
          Viral Score
        </p>

        <h2 className="text-3xl font-bold text-green-400">
          {stats.averageViralScore}%
        </h2>
      </div>

      <div className="rounded-xl bg-slate-800 p-5">
        <p className="text-sm text-gray-400">
          Processing
        </p>

        <h2 className="text-3xl font-bold text-yellow-400">
          {stats.processingVideos}
        </h2>
      </div>

      <div className="rounded-xl bg-slate-800 p-5">
        <p className="text-sm text-gray-400">
          Completed
        </p>

        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.completedVideos}
        </h2>
      </div>

    </div>
  );
}