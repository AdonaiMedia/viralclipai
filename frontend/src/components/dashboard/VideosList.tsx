"use client";

import { supabase } from "@/lib/supabase";
import VideoCard from "./VideoCard";
import { DashboardVideo } from "@/types/Dashboard";

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
      <p className="text-gray-400">
        No videos uploaded yet
      </p>
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
            key={item.video.id}
            video={item.video}
            analysis={item.analysis}
            clips={item.clips}
            thumbnail={item.thumbnail}
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
  );
}