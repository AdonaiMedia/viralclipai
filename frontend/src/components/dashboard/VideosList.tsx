"use client";

import { RefreshCw } from "lucide-react";

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
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">

        <h3 className="text-xl font-bold text-white">
          No Videos Yet
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          Upload your first long video and let ViralClip AI create viral clips automatically.
        </p>

      </div>
    );
  }

  return (
    <section className="space-y-5">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Videos
          </h2>

          <p className="text-sm text-slate-400">
            {videos.length} video{videos.length !== 1 ? "s" : ""} available
          </p>

        </div>

        {onRefresh && (
          <button
            onClick={onRefresh}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            <RefreshCw className="h-4 w-4" />

            Refresh
          </button>
        )}

      </div>

      <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">

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