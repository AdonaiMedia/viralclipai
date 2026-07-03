"use client";

interface VideoCardProps {
  video: any;
  publicUrl: string;
  onDelete: () => void;
  onGenerate: () => void;
}

export default function VideoCard({
  video,
  publicUrl,
  onDelete,
  onGenerate,
}: VideoCardProps) {
  return (
    <li className="mb-6 border border-slate-600 rounded-lg p-4">

      <p className="font-bold mb-2">
        📹 {video.file_name}
      </p>

      <p className="text-yellow-400">
        Status: {video.status}
      </p>

      <p className="text-xs text-green-400 break-all">
        {publicUrl}
      </p>

      <video
        controls
        width="400"
        className="rounded mt-3"
      >
        <source src={publicUrl} />
      </video>

      <div className="flex gap-4 mt-4">

        <button
          onClick={onDelete}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          🗑 Delete Video
        </button>

        <button
          onClick={onGenerate}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          ✂ Generate Clip
        </button>

      </div>

    </li>
  );
}