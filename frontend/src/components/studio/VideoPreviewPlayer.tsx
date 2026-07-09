"use client";

import {
  Play,
  Pause,
  Volume2,
  Maximize2,
} from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  title?: string;
  videoUrl?: string;
}

export default function VideoPreviewPlayer({
  title = "Video Preview",
  videoUrl,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  function togglePlayback() {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950">

      <div className="aspect-video bg-black">

        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="h-full w-full"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 to-black">

            <Play className="h-20 w-20 text-slate-600" />

          </div>
        )}

      </div>

      <div className="border-t border-slate-800 p-4">

        <div className="mb-3">

          <h3 className="font-semibold text-white">
            {title}
          </h3>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              onClick={togglePlayback}
              className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700"
            >
              {playing ? (
                <Pause className="h-4 w-4 text-white" />
              ) : (
                <Play className="h-4 w-4 text-white" />
              )}
            </button>

            <button className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700">

              <Volume2 className="h-4 w-4 text-white" />

            </button>

          </div>

          <button className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700">

            <Maximize2 className="h-4 w-4 text-white" />

          </button>

        </div>

      </div>

    </div>
  );
}