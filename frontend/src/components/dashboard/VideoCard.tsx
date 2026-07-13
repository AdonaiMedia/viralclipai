"use client";

import {
  Sparkles,
  Trash2,
  PlayCircle,
  Video,
  Scissors,
  Eye,
  Download,
  Share2,
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
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

      {/* Video Preview */}

      <video
        controls
        preload="metadata"
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

          <div className="min-w-0 flex-1">

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

          <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-center">

            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Viral
            </p>

            <p className="text-xl font-bold text-emerald-400">
              {analysis?.overall_score ?? "--"}
            </p>

          </div>

        </div>

        {/* AI Summary */}

        <div className="rounded-xl bg-slate-800 p-3">

          <div className="mb-2 flex items-center gap-2">

            <Sparkles className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold text-slate-300">
              AI Summary
            </span>

          </div>

          <p className="line-clamp-3 text-xs leading-5 text-slate-400">

            {analysis?.intelligence ??
              "Video uploaded successfully. Waiting for AI analysis."}

          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-xl bg-slate-800 p-3">

            <div className="flex items-center gap-2">

              <Scissors className="h-4 w-4 text-blue-400" />

              <span className="text-xs text-slate-400">
                Clips
              </span>

            </div>

            <p className="mt-2 text-lg font-bold text-white">
              {clips.length}
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-3">

            <div className="flex items-center gap-2">

              <Video className="h-4 w-4 text-emerald-400" />

              <span className="text-xs text-slate-400">
                AI Status
              </span>

            </div>

            <p className="mt-2 text-sm font-semibold text-emerald-400">

              {analysis ? "Ready" : "Waiting"}

            </p>

          </div>

        </div>

        {/* Main Actions */}

        <div className="flex gap-2">

          <button
            onClick={onGenerate}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >

            <PlayCircle className="h-4 w-4" />

            Generate AI

          </button>

          <button
            onClick={onDelete}
            title="Delete Video"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white transition hover:bg-red-700"
          >

            <Trash2 className="h-4 w-4" />

          </button>

        </div>

        {/* Secondary Actions */}

        <div className="flex items-center justify-center gap-2 border-t border-slate-800 pt-3">

          <button
            title="Preview"
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <Eye className="h-4 w-4" />
          </button>

          <button
            title="Download"
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-emerald-500 hover:text-emerald-400"
          >
            <Download className="h-4 w-4" />
          </button>

          <button
            title="Publish"
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-purple-500 hover:text-purple-400"
          >
            <Share2 className="h-4 w-4" />
          </button>

        </div>

      </div>

    </div>
  );
}