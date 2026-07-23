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
      <div className="flex h-[280px] flex-col items-center justify-center text-center">
        <div className="mb-5 rounded-2xl bg-slate-800 p-5">
          <PlayCircle className="h-12 w-12 text-slate-500" />
        </div>
        <h2 className="text-2xl font-bold text-white">
          No Video Selected
        </h2>
        <p className="mt-3 max-w-md text-slate-400">
          Upload a video to preview it, analyze viral moments,
          generate clips and create AI-powered content.
        </p>
      </div>
    </Card>
  );
}
  return (
    <Card>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>

          <div>

  <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
    Workspace
  </p>

  <h2 className="mt-1 text-2xl font-bold text-white">
    Preview Studio
  </h2>

  <p className="mt-1 text-sm text-slate-400">
    Review your uploaded video before generating AI content.
  </p>

</div>
        </div>

       <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

  <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
    Ready
  </span>

</div>

      </div>
<div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-slate-950 shadow-2xl">

  {publicUrl ? (

    <video
      controls
      className="aspect-video w-full bg-black"
      poster="/images/video-placeholder.jpg"
    >
      <source
        src={publicUrl}
        type="video/mp4"
      />
    </video>

  ) : (

    <div className="flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">

      <PlayCircle className="mb-4 h-16 w-16 text-red-500" />

      <p className="font-semibold text-white">
        Video Preview Unavailable
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Upload completed but preview is not available.
      </p>

    </div>

  )}

</div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">

        <div className="space-y-5">

          <div className="mb-2 flex items-center gap-2">

            <FileVideo className="h-5 w-5 text-blue-400" />

           <h3 className="text-lg font-semibold text-white">
  Video Details
</h3>

          </div>

          <div className="space-y-2">

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <span className="text-slate-400">
                File Name
              </span>

              <span className="max-w-[220px] truncate font-medium text-white">
                {video.file_name}
              </span>

            </div>

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <span className="text-slate-400">
                Status
              </span>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                {video.status?.toUpperCase()}
              </span>

            </div>

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <span className="text-slate-400">
                Video ID
              </span>

              <span className="font-mono text-blue-300">
                #{video.id}
              </span>

            </div>

          </div>

        </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

          <div className="mb-3 flex items-center gap-2">

            <Activity className="h-5 w-5 text-cyan-400" />

            <h3 className="font-semibold text-white">
              AI Status
            </h3>

          </div>

          <div className="space-y-2">

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <div className="flex items-center gap-2">

                <BadgeCheck className="h-5 w-5 text-emerald-400" />

                <span className="text-slate-300">
                  AI Ready
                </span>

              </div>

              <span className="text-xs font-semibold text-emerald-400">
                READY
              </span>

            </div>

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <div className="flex items-center gap-2">

                <HardDrive className="h-5 w-5 text-blue-400" />

                <span className="text-slate-300">
                  Storage
                </span>

              </div>

              <span className="text-xs text-blue-300">
                Supabase
              </span>

            </div>

            <div className="flex items-center justify-between rounded-lg bg-slate-800 p-2.5">

              <div className="flex items-center gap-2">

                <Activity className="h-5 w-5 text-cyan-400" />

                <span className="text-slate-300">
                  Pipeline
                </span>

              </div>

              <span className="text-xs text-cyan-300">
                {video.status ?? "Waiting"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </Card>
  );
}