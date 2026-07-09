"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  FileVideo,
  HardDrive,
  Calendar,
  CheckCircle2,
  MonitorPlay,
  Clock3,
  Smartphone,
  Cpu,
} from "lucide-react";

import {
  getVideoMetadata,
  type VideoMetadata,
} from "@/utils/video/getVideoMetadata";

interface Props {
  onSelectFile: (file: File) => void;
  onUpload: () => void;
}

export default function UploadCard({
  onSelectFile,
  onUpload,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [dragging, setDragging] =
    useState(false);

  const [metadata, setMetadata] =
    useState<VideoMetadata | null>(null);

  function formatDuration(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${mins
        .toString()
        .padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  function estimateAI(seconds: number) {
    const estimate = Math.max(
      15,
      Math.round(seconds * 0.18)
    );

    const mins = Math.floor(estimate / 60);
    const secs = estimate % 60;

    return `${mins}m ${secs}s`;
  }

  async function selectFile(file: File) {
    setSelectedFile(file);

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    const info = await getVideoMetadata(file);

    setMetadata(info);

    onSelectFile(file);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    selectFile(file);
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    setDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    selectFile(file);
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-blue-500/10 p-4">
          <Upload className="h-8 w-8 text-blue-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Upload Workspace
          </h2>

          <p className="mt-1 text-slate-400">
            Upload your video and let ViralClip AI create
            viral-ready content automatically.
          </p>
        </div>

      </div>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all ${
          dragging
            ? "border-blue-500 bg-blue-500/10"
            : "border-slate-700 hover:border-blue-500 hover:bg-slate-800"
        }`}
      >

        <Upload className="mx-auto h-14 w-14 text-blue-400" />

        <h3 className="mt-4 text-xl font-bold text-white">
          Drag & Drop Video
        </h3>

        <p className="mt-2 text-slate-400">
          or click here to browse your computer
        </p>

      </div>

      {selectedFile && metadata && (

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-black">

            {previewUrl && (
              <video
                src={previewUrl}
                controls
                className="aspect-video w-full"
              />
            )}

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

            <div className="flex items-center justify-between">

              <h3 className="flex items-center gap-2 text-lg font-bold text-white">

                <FileVideo className="h-5 w-5 text-blue-400" />

                {selectedFile.name}

              </h3>

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

                <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                <span className="font-semibold text-emerald-400">
                  Ready
                </span>

              </div>

            </div>

            <div className="mt-6 grid gap-4">

              <Info icon={<HardDrive className="h-5 w-5 text-blue-400" />}>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </Info>

              <Info icon={<MonitorPlay className="h-5 w-5 text-blue-400" />}>
                {metadata.width} × {metadata.height}
              </Info>

              <Info icon={<Clock3 className="h-5 w-5 text-blue-400" />}>
                {formatDuration(metadata.duration)}
              </Info>

              <Info icon={<Smartphone className="h-5 w-5 text-blue-400" />}>
                {metadata.orientation}
              </Info>

              <Info icon={<Calendar className="h-5 w-5 text-blue-400" />}>
                {new Date().toLocaleString()}
              </Info>

              <Info icon={<Cpu className="h-5 w-5 text-blue-400" />}>
                Estimated AI Time: {estimateAI(metadata.duration)}
              </Info>

            </div>

          </div>

        </div>

      )}

      <button
        type="button"
        disabled={!selectedFile}
        onClick={onUpload}
        className="mt-8 w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Upload & Start AI Analysis
      </button>

    </section>
  );
}

function Info({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      {icon}
      <span>{children}</span>
    </div>
  );
}