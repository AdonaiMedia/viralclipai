"use client";

import {
  Sparkles,
  Trash2,
  PlayCircle,
  Video,
  Scissors,
} from "lucide-react";

import type {
  Analysis,
  Clip,
  Video as VideoType,
} from "@/types/Dashboard";

interface VideoCardProps {
  video: VideoType;
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
  publicUrl,
  onDelete,
  onGenerate,
}: VideoCardProps) {
  const status = {
    uploaded: "bg-blue-500/15 text-blue-400",
    processing: "bg-yellow-500/15 text-yellow-400",
    completed: "bg-emerald-500/15 text-emerald-400",
    failed: "bg-red-500/15 text-red-400",
  }[video.status] ?? "bg-slate-700 text-slate-300";

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500/40">

      {/* Preview */}

      <video
        controls
        className="aspect-video w-full bg-black"
      >
        <source
          src={publicUrl}
          type="video/mp4"
        />
      </video>

      {/* Content */}

      <div className="space-y-4 p-4">

        {/* Header */}

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h3 className="truncate text-sm font-bold text-white">
              {video.file_name}
            </h3>

            <div className="mt-2 flex items-center gap-2">

              <span
                className={`rounded-full px-2 py-1 text-[10px] font-semibold ${status}`}
              >
                {video.status.toUpperCase()}
              </span>

            </div>

          </div>

          <div className="rounded-lg bg-green-500/10 px-3 py-2 text-center">

            <p className="text-[10px] text-slate-400">
              Viral
            </p>

            <p className="text-lg font-bold text-green-400">
              {analysis?.overall_score ?? "--"}
            </p>

          </div>

        </div>

        {/* AI Summary */}

        <div className="rounded-lg bg-slate-800 p-3">

          <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-300">

            <Sparkles className="h-4 w-4 text-blue-400" />

            AI Summary

          </p>

          <p className="line-clamp-2 text-xs leading-5 text-slate-400">

            {analysis?.intelligence ??
              "Video uploaded successfully. Waiting for AI analysis."}

          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-lg bg-slate-800 p-3">

            <div className="flex items-center gap-2">

              <Scissors className="h-4 w-4 text-blue-400" />

              <span className="text-xs text-slate-400">
                Clips
              </span>

            </div>

            <p className="mt-1 text-lg font-bold text-white">
              {clips.length}
            </p>

          </div>

          <div className="rounded-lg bg-slate-800 p-3">

            <div className="flex items-center gap-2">

              <Video className="h-4 w-4 text-emerald-400" />

              <span className="text-xs text-slate-400">
                AI
              </span>

            </div>

            <p className="mt-1 text-sm font-semibold text-emerald-400">

              {analysis ? "Ready" : "Waiting"}

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-2">

          <button
            onClick={onGenerate}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >

            <PlayCircle className="h-4 w-4" />

            Generate

          </button>

          <button
            onClick={onDelete}
            className="flex items-center justify-center rounded-lg bg-red-600 px-3 text-white hover:bg-red-700"
          >

            <Trash2 className="h-4 w-4" />

          </button>

        </div>

      </div>

    </div>
  );
}