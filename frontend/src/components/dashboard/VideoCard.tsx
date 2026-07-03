"use client";

interface VideoCardProps {

  video: any;

  analysis?: any;

  clips?: any[];

  thumbnail?: string;

  publicUrl: string;

  onDelete: () => void;

  onGenerate: () => void;

}

export default function VideoCard({

  video,

  analysis,

  clips,

  thumbnail,

  publicUrl,

  onDelete,

  onGenerate,

}: VideoCardProps) {

  return (

    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">

        📹 {video.file_name}

      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">

        <div>

          <p className="text-gray-400">

            Status

          </p>

          <p className="text-green-400 font-bold">

            {video.status}

          </p>

        </div>

        <div>

          <p className="text-gray-400">

            Viral Score

          </p>

          <p className="text-yellow-400 text-2xl font-bold">

            {analysis?.overall_score ?? "--"}

          </p>

        </div>

      </div>

      {thumbnail && (

        <img

          src={thumbnail}

          alt="Thumbnail"

          className="rounded-lg mb-4"

        />

      )}

      <video

        controls

        className="rounded-lg w-full mb-4"

      >

        <source src={publicUrl} />

      </video>

      <div className="mb-4">

        <h3 className="font-bold">

          AI Analysis

        </h3>

        <pre className="text-sm whitespace-pre-wrap text-slate-300">

          {analysis?.intelligence ?? "No analysis available"}

        </pre>

      </div>

      <div className="mb-4">

        <h3 className="font-bold">

          Generated Clips

        </h3>

        <p>

          {clips?.length ?? 0} Clips

        </p>

      </div>

      <div className="flex gap-3">

        <button

          onClick={onGenerate}

          className="bg-green-600 px-4 py-2 rounded-lg"

        >

          🚀 Generate

        </button>

        <button

          onClick={onDelete}

          className="bg-red-600 px-4 py-2 rounded-lg"

        >

          🗑 Delete

        </button>

      </div>

    </div>

  );

}