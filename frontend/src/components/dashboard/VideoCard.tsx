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
    uploaded: "bg-blue-400/15 text-blue-300",
    processing: "bg-yellow-400/15 text-yellow-300",
    completed: "bg-emerald-400/15 text-emerald-300",
    failed: "bg-red-400/15 text-red-300",
  }[video.status] ?? "bg-slate-600 text-slate-300";

 return (
  <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

    {/* Preview */}

    <div className="relative">

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

      <div className="absolute right-3 top-3">

        <span
          className={`rounded-full px-2 py-1 text-[10px] font-semibold backdrop-blur ${status}`}
        >
          {video.status.toUpperCase()}
        </span>

      </div>

    </div>

    {/* Body */}

    <div className="space-y-3 p-4">

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0 flex-1">

          <h3 className="truncate text-sm font-semibold text-white">
            {video.file_name}
          </h3>

          <p className="mt-1 text-[11px] text-slate-500">
            AI Generated Content
          </p>

        </div>

        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center">

          <p className="text-[9px] uppercase tracking-wider text-slate-400">
            SCORE
          </p>

          <p className="text-lg font-bold text-emerald-400">
            {analysis?.overall_score ?? "--"}
          </p>

        </div>

      </div>

      {/* AI Summary */}

      <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">

        <div className="mb-2 flex items-center gap-2">

          <Sparkles className="h-4 w-4 text-blue-400" />

          <span className="text-xs font-semibold text-white">
            AI Summary
          </span>

        </div>

        <p className="line-clamp-2 text-[11px] leading-5 text-slate-400">

          {analysis?.intelligence ??
            "Waiting for AI analysis..."}

        </p>

      </div>
            {/* Statistics */}

      <div className="grid grid-cols-2 gap-2">

        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">

          <div className="flex items-center gap-2">

            <Scissors className="h-4 w-4 text-blue-400" />

            <span className="text-[11px] text-slate-400">
              Clips
            </span>

          </div>

          <p className="mt-2 text-xl font-bold text-white">
            {clips.length}
          </p>

        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">

          <div className="flex items-center gap-2">

            <Video className="h-4 w-4 text-emerald-400" />

            <span className="text-[11px] text-slate-400">
              AI Status
            </span>

          </div>

          <p
            className={`mt-2 text-sm font-semibold ${
              analysis
                ? "text-emerald-400"
                : "text-yellow-400"
            }`}
          >
            {analysis ? "Ready" : "Waiting"}
          </p>

        </div>

      </div>

      {/* Main Actions */}

      <div className="flex gap-2">

        <button
          onClick={onGenerate}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700"
        >

          <PlayCircle className="h-4 w-4" />

          Generate

        </button>

        <button
          onClick={onDelete}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white transition hover:bg-red-700"
        >

          <Trash2 className="h-4 w-4" />

        </button>

      </div>

      {/* Quick Actions */}

      <div className="flex justify-between border-t border-slate-800 pt-3">

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-blue-500 hover:text-blue-400">

          <Eye className="h-4 w-4" />

        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-emerald-500 hover:text-emerald-400">

          <Download className="h-4 w-4" />

        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-violet-500 hover:text-violet-400">

          <Share2 className="h-4 w-4" />

        </button>

      </div>

    </div>

  </div>
);
}