"use client";

import { supabase } from "@/lib/supabase";
import { DashboardVideo } from "@/types/Dashboard";
import VideoCard from "./VideoCard";

interface VideosListProps {
  videos: DashboardVideo[];
  onDelete: (fileName: string, id: number) => void;
  onGenerate: (id: number) => void;
}

export default function VideosList({
  videos,
  onDelete,
  onGenerate,
}: VideosListProps) {
  if (videos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
        <h3 className="text-lg font-semibold text-white">
          No videos yet
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Upload your first video to start AI processing.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-4">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Videos
          </h2>

          <p className="text-sm text-slate-400">
            {videos.length} video{videos.length > 1 ? "s" : ""} available
          </p>
        </div>

      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
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
                onDelete(item.video.file_name, item.video.id)
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