"use client";

import type {
  Analysis,
  Clip,
  Video,
} from "@/types/Dashboard";

interface VideoCardProps {
  video: Video;
  analysis?: Analysis | null;
  clips?: Clip[];
  thumbnail?: string;
  publicUrl: string;
  onDelete: () => void;
  onGenerate: () => void;
}

export default function VideoCard({
  video,
  analysis,
  clips = [],
  thumbnail,
  publicUrl,
  onDelete,
  onGenerate,
}: VideoCardProps) {
  const statusColor = {
    uploaded: "text-blue-400",
    processing: "text-yellow-400",
    completed: "text-green-400",
    failed: "text-red-400",
  }[video.status] ?? "text-gray-400";

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-slate-600 transition-all">

      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">
            📹 {video.file_name}
          </h2>

          <p className={`text-sm font-semibold mt-1 ${statusColor}`}>
            {video.status.toUpperCase()}
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm">
            Viral Score
          </p>

          <p className="text-3xl font-bold text-green-400">
            {analysis?.overall_score ?? "--"}
          </p>
        </div>
      </div>

      {thumbnail && (
        <img
          src={thumbnail}
          alt={video.file_name}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      )}

      <video
        controls
        className="rounded-lg w-full mb-5"
      >
        <source
          src={publicUrl}
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>

      <div className="mb-5">
        <h3 className="font-semibold mb-2">
          AI Analysis
        </h3>

        <div className="bg-slate-900 rounded-lg p-3 text-sm text-slate-300 whitespace-pre-wrap">
          {analysis?.intelligence ?? "No AI analysis available yet."}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          Generated Clips
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            {clips.length} Clips
          </span>

          {analysis && (
            <span className="text-green-400 text-sm font-medium">
              AI Ready
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onGenerate}
          className="flex-1 rounded-lg bg-green-600 px-4 py-2 font-medium hover:bg-green-700 transition-colors"
        >
          🚀 Generate Clips
        </button>

        <button
          onClick={onDelete}
          className="rounded-lg bg-red-600 px-4 py-2 font-medium hover:bg-red-700 transition-colors"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}