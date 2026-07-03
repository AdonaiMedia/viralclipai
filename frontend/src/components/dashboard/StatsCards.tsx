"use client";

type Props = {
  totalVideos: number;
  totalClips: number;
  averageScore: number;
  completedVideos: number;
};

export default function StatsCards({
  totalVideos,
  totalClips,
  averageScore,
  completedVideos,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-gray-400">Videos</h3>
        <p className="text-4xl font-bold">
          {totalVideos}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-gray-400">Clips</h3>
        <p className="text-4xl font-bold">
          {totalClips}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-gray-400">
          Average Score
        </h3>
        <p className="text-4xl font-bold text-green-400">
          {averageScore}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h3 className="text-gray-400">
          Completed
        </h3>
        <p className="text-4xl font-bold text-blue-400">
          {completedVideos}
        </p>
      </div>

    </div>
  );
}