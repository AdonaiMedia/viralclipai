import { DashboardVideo } from "@/types/Dashboard";
import VideosList from "./VideosList";

interface Props {
  videos: DashboardVideo[];
  onDelete: (fileName: string, id: number) => void;
  onGenerate: (id: number) => void;
}

export default function DashboardVideos({
  videos,
  onDelete,
  onGenerate,
}: Props) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl mt-8">

      <h2 className="text-2xl font-bold mb-6">
        My Videos
      </h2>

      <VideosList
        videos={videos}
        onDelete={onDelete}
        onGenerate={onGenerate}
      />

    </div>
  );
}