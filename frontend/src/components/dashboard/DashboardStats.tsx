import { DashboardStats as DashboardStatsType } from "@/types/Dashboard";

interface Props {
  stats: DashboardStatsType;
}

export default function DashboardStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

      <div className="bg-slate-800 rounded-xl p-5">
        <p className="text-gray-400 text-sm">Videos</p>
        <h2 className="text-3xl font-bold">
          {stats.totalVideos}
        </h2>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <p className="text-gray-400 text-sm">Clips</p>
        <h2 className="text-3xl font-bold">
          {stats.totalClips}
        </h2>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <p className="text-gray-400 text-sm">
          Average Score
        </p>
        <h2 className="text-3xl font-bold text-green-400">
          {stats.averageScore}
        </h2>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <p className="text-gray-400 text-sm">
          Completed
        </p>
        <h2 className="text-3xl font-bold text-cyan-400">
          {stats.completedVideos}
        </h2>
      </div>

    </div>
  );
}