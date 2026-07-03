"use client";

import { supabase } from "@/lib/supabase";
import VideoCard from "./VideoCard";

interface VideosListProps {
  videos: any[];
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
    <ul>
      {videos.map((video, index) => {

        const { data } = supabase.storage
          .from("videos")
          .getPublicUrl(video.file_url);

        return (
          <VideoCard
            key={index}
            video={video}
            publicUrl={data.publicUrl}
            onDelete={() =>
              onDelete(video.file_name, video.id)
            }
            onGenerate={() =>
              onGenerate(video.id)
            }
          />
        );
      })}
    </ul>
  );
}