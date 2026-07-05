"use client";

import Card from "@/components/ui/Card";

interface Props {
  video: any;
  publicUrl: string;
}

export default function VideoPreview({
  video,
  publicUrl,
}: Props) {

  if (!video) {

    return (

      <Card>

        <p className="text-slate-400">

          Select a video to preview.

        </p>

      </Card>

    );

  }

  return (

    <Card>

      <h2 className="text-xl font-bold mb-4">

        🎥 Video Preview

      </h2>

      <video

        controls

        className="rounded-xl w-full"

      >

        <source src={publicUrl} />

      </video>

      <div className="mt-4 space-y-2">

        <p>

          <strong>File:</strong> {video.file_name}

        </p>

        <p>

          <strong>Status:</strong> {video.status}

        </p>

      </div>

    </Card>

  );

}