"use client";

import {
  PlayCircle,
  FileVideo,
  Activity,
  HardDrive,
  BadgeCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface Props {
  video: any;
  publicUrl: string;
}

export default function VideoPreview({
  video,
  publicUrl,
}: Props) {
  if (!video) {
    return (
      <Card>
        <div className="flex h-[420px] flex-col items-center justify-center text-center">

          <PlayCircle className="mb-5 h-16 w-16 text-slate-600" />

          <h2 className="text-xl font-bold text-white">
            Video Preview
          </h2>

          <p className="mt-2 text-slate-400">
            Upload or select a video to begin AI analysis.
          </p>

        </div>
      </Card>
    );
  }

  return (
    <Card>

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            🎬 Preview Studio
          </h2>

          <p className="text-sm text-slate-400">
            Review your uploaded video before AI processing.
          </p>

        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          READY
        </span>

      </div>

      {/* Video */}

      <div className="overflow-hidden rounded-xl border border-slate-700 bg-black">

        <video
          controls
          className="aspect-video w-full"
        >
          <source
            src={publicUrl}
            type="video/mp4"
          />
        </video>

      </div>

      {/* Information */}

      <div className="mt-5 grid gap-4 md:grid-cols-2">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

          <div className="mb-3 flex items-center gap-2">

            <FileVideo className="h-5 w-5 text-blue-400" />

            <h3 className="font-semibold text-white">
              Video Information
            </h3>

          </div>

          <div className="space-y-2 text-sm">

            <p className="text-slate-300">
              <strong>Name:</strong> {video.file_name}
            </p>

            <p className="text-slate-300">
              <strong>Status:</strong> {video.status}
            </p>

            <p className="text-slate-300">
              <strong>ID:</strong> {video.id}
            </p>

          </div>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

          <div className="mb-3 flex items-center gap-2">

            <Activity className="h-5 w-5 text-cyan-400" />

            <h3 className="font-semibold text-white">
              AI Status
            </h3>

          </div>

          <div className="space-y-3">

            <div className="flex items-center gap-2">

              <BadgeCheck className="h-5 w-5 text-emerald-400" />

              <span className="text-slate-300">
                Ready for AI Analysis
              </span>

            </div>

            <div className="flex items-center gap-2">

              <HardDrive className="h-5 w-5 text-blue-400" />

              <span className="text-slate-300">
                Stored in Supabase Storage
              </span>

            </div>

          </div>

        </div>

      </div>

    </Card>
  );
}