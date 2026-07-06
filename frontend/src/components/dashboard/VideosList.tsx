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
      <div className="rounded-lg border border-dashed border-gray-700 p-8 text-center">
        <p className="text-gray-400">
          No videos uploaded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
  );
}