"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  FileVideo,
  HardDrive,
  Calendar,
  MonitorPlay,
  Clock3,
  Smartphone,
  Cpu,
  Sparkles,
} from "lucide-react";

import {
  getVideoMetadata,
  type VideoMetadata,
} from "@/utils/video/getVideoMetadata";

interface Props {
  onSelectFile: (file: File) => void;
  onUpload: () => void;
}

const MAX_FILE_SIZE = 1024 * 1024 * 1024;

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
    if (!file.type.startsWith("video/")) {
      alert("Please select a valid video.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("Maximum upload size is 1GB.");
      return;
    }

    setSelectedFile(file);

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    const info =
      await getVideoMetadata(file);

    setMetadata(info);

    onSelectFile(file);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    selectFile(file);
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    setDragging(false);

    const file =
      event.dataTransfer.files?.[0];

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
  <div className="space-y-4">

    <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-md">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-blue-500/10 p-2">
            <Upload className="h-5 w-5 text-blue-400" />
          </div>

          <div>

            <h2 className="text-lg font-semibold text-white">
              Upload Workspace
            </h2>

            <p className="text-xs text-slate-400">
              Upload a long video and let AI generate viral clips.
            </p>

          </div>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1">

          <div className="flex items-center gap-2">

            <Sparkles className="h-3 w-3 text-emerald-400" />

            <span className="text-[11px] font-medium text-emerald-400">
              AI Ready
            </span>

          </div>

        </div>

      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".mp4,.mov,.avi,.mkv,.webm"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload Area */}

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-6 transition ${
          dragging
            ? "border-blue-500 bg-blue-500/10"
            : "border-slate-700 hover:border-blue-500 hover:bg-slate-800/60"
        }`}
      >

        <Upload className="mx-auto h-9 w-9 text-blue-400" />

        <h3 className="mt-3 text-base font-semibold text-white text-center">
          Drag & Drop Video
        </h3>

        <p className="mt-1 text-center text-xs text-slate-400">
          MP4 • MOV • AVI • MKV • WEBM
        </p>

        <p className="mt-1 text-center text-[11px] text-slate-500">
          Maximum Size 1GB
        </p>

      </div>

      {/* Preview */}

      {selectedFile && metadata && (

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.5fr_0.9fr]">

          {/* Video */}

          <div className="overflow-hidden rounded-xl border border-slate-700 bg-black">

            {previewUrl && (

              <video
                src={previewUrl}
                controls
                className="aspect-video w-full object-cover"
              />

            )}

          </div>

          {/* Details */}

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">

            <div className="flex items-center justify-between">

              <div className="min-w-0">

                <div className="flex items-center gap-2">

                  <FileVideo className="h-4 w-4 text-blue-400" />

                  <h3 className="truncate text-sm font-semibold text-white">
                    {selectedFile.name}
                  </h3>

                </div>

              </div>

              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                READY
              </span>

            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">

              <Info icon={<HardDrive className="h-4 w-4 text-blue-400" />}>
                {(selectedFile.size / 1024 / 1024).toFixed(1)} MB
              </Info>

              <Info icon={<Clock3 className="h-4 w-4 text-blue-400" />}>
                {formatDuration(metadata.duration)}
              </Info>

              <Info icon={<MonitorPlay className="h-4 w-4 text-blue-400" />}>
                {metadata.width}×{metadata.height}
              </Info>

              <Info icon={<Smartphone className="h-4 w-4 text-blue-400" />}>
                {metadata.orientation}
              </Info>

              <Info icon={<Calendar className="h-4 w-4 text-blue-400" />}>
                {new Date().toLocaleDateString()}
              </Info>

              <Info icon={<Cpu className="h-4 w-4 text-blue-400" />}>
                {estimateAI(metadata.duration)}
              </Info>

            </div>

            {metadata.duration > 3600 && (

              <div className="mt-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-2 text-[11px] text-yellow-300">

                Long video detected. AI processing may take several minutes.

              </div>

            )}

            <button
              type="button"
              disabled={!selectedFile}
              onClick={onUpload}
              className={`mt-4 flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition ${
                selectedFile
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-700 text-slate-500"
              }`}
            >
              Analyze Video
            </button>

          </div>

        </div>

      )}

      {/* Platforms */}

      <div className="mt-4 border-t border-slate-800 pt-3">

        <p className="mb-2 text-[11px] uppercase tracking-widest text-slate-500">
          Supported Platforms
        </p>

        <div className="flex flex-wrap gap-2">

          {[
            "YouTube",
            "TikTok",
            "Instagram",
            "Facebook",
            "LinkedIn",
          ].map((platform) => (

            <span
              key={platform}
              className="rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-300"
            >
              {platform}
            </span>

          ))}

        </div>

      </div>

    </section>

    </div>
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
    <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-2">

      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800">
        {icon}
      </div>

      <span className="truncate text-xs font-medium text-slate-300">
        {children}
      </span>

    </div>
  );
}
