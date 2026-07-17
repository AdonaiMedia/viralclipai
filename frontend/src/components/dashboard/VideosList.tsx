"use client";

import { RefreshCw, Video } from "lucide-react";

import { supabase } from "@/lib/supabase";
import { DashboardVideo } from "@/types/Dashboard";
import VideoCard from "./VideoCard";

interface VideosListProps {
  videos: DashboardVideo[];
  onDelete: (fileName: string, id: number) => void;
  onGenerate: (id: number) => void;
  onRefresh?: () => void;
}

export default function VideosList({
  videos,
  onDelete,
  onGenerate,
  onRefresh,
}: VideosListProps) {

  if (videos.length === 0) {
    return (
      <section className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">

        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800">

          <Video className="h-7 w-7 text-slate-500" />

        </div>

        <h3 className="text-lg font-semibold text-white">
          No Videos Yet
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
          Upload your first long video and ViralClip AI will automatically
          analyze it and generate viral clips.
        </p>

      </section>
    );
  }

  return (
    <section className="space-y-4">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Recent Videos
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {videos.length} video{videos.length > 1 ? "s" : ""} available
          </p>

        </div>

        {onRefresh && (

          <button
            onClick={onRefresh}
            className="flex h-9 items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 text-xs font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >

            <RefreshCw className="h-4 w-4" />

            Refresh

          </button>

        )}

      </div>

      {/* Grid */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {videos.map((item) => {

          const { data } = supabase.storage
            .from("videos")
            .getPublicUrl(item.video.file_url);

          return (

            <VideoCard
              key={item.id}
              video={item.video}
              analysis={item.analysis}
              clips={item.clips}
              thumbnail={item.thumbnail ?? ""}
              publicUrl={data.publicUrl}
              onDelete={() =>
                onDelete(
                  item.video.file_name,
                  item.video.id
                )
              }
              onGenerate={() =>
                onGenerate(item.video.id)
              }
            />

          );

        })}

      </div>

    </section>
  );
}