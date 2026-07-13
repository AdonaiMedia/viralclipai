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
} from "lucide-react";

import {
  getVideoMetadata,
  type VideoMetadata,
} from "@/utils/video/getVideoMetadata";

interface Props {
  onSelectFile: (file: File) => void;
  onUpload: () => void;
}

const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB

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

  return (<div className="space-y-5">

  <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">

    <div className="mb-5 flex items-center gap-3">

      <div className="rounded-xl bg-blue-500/10 p-3">
        <Upload className="h-6 w-6 text-blue-400" />
      </div>

      <div>

        <h2 className="text-xl font-bold text-white">
          Upload Workspace
        </h2>

        <p className="text-sm text-slate-400">
          Upload a long video and let ViralClip AI create viral clips automatically.
        </p>

      </div>

    </div>

    <input
      ref={inputRef}
      type="file"
      accept=".mp4,.mov,.avi,.mkv,.webm"
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

      <Upload className="mx-auto h-12 w-12 text-blue-400" />

      <h3 className="mt-4 text-lg font-semibold text-white">
        Drag & Drop Your Video
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        MP4 • MOV • AVI • MKV • WEBM
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Maximum file size: 1 GB
      </p>

    </div>
{/* Preview */}

{selectedFile && metadata && (
  <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">

    {/* Video Preview */}

    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-black">

      {previewUrl && (
        <video
          src={previewUrl}
          controls
          className="aspect-video w-full object-contain"
        />
      )}

    </div>

    {/* Details */}

    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">

      <div className="flex items-center justify-between">

        <h3 className="flex items-center gap-2 text-base font-semibold text-white">

          <FileVideo className="h-4 w-4 text-blue-400" />

          <span className="truncate max-w-[180px]">
            {selectedFile.name}
          </span>

        </h3>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1">

          <span className="text-xs font-semibold text-emerald-400">
            AI READY
          </span>

        </div>

      </div>

      <div className="mt-5 space-y-3">

        <Info
          icon={<HardDrive className="h-4 w-4 text-blue-400" />}
        >
          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
        </Info>

        <Info
          icon={<MonitorPlay className="h-4 w-4 text-blue-400" />}
        >
          {metadata.width} × {metadata.height}
        </Info>

        <Info
          icon={<Clock3 className="h-4 w-4 text-blue-400" />}
        >
          {formatDuration(metadata.duration)}
        </Info>

        <Info
          icon={<Smartphone className="h-4 w-4 text-blue-400" />}
        >
          {metadata.orientation}
        </Info>

        <Info
          icon={<Calendar className="h-4 w-4 text-blue-400" />}
        >
          {new Date().toLocaleDateString()}
        </Info>

        <Info
          icon={<Cpu className="h-4 w-4 text-blue-400" />}
        >
          Estimated AI Time: {estimateAI(metadata.duration)}
        </Info>

      </div>

      {metadata.duration > 3600 && (

        <div className="mt-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 text-xs text-yellow-400">

          ⚠️ This is a long video. AI processing may take several minutes.

        </div>

      )}

      <button
        type="button"
        disabled={!selectedFile}
        onClick={onUpload}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          selectedFile
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "cursor-not-allowed bg-slate-700 text-slate-500"
        }`}
      >
        🚀 Start AI Analysis
      </button>

    </div>

  </div>
)}

<div className="mt-6 border-t border-slate-800 pt-4">

  <p className="text-xs uppercase tracking-wider text-slate-500">
    Supported Platforms
  </p>

  <div className="mt-3 flex flex-wrap gap-2">

    {[
      "YouTube",
      "TikTok",
      "Instagram",
      "Facebook",
      "LinkedIn",
    ].map((platform) => (
      <span
        key={platform}
        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
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
    <div className="flex items-center gap-2 text-slate-300">
      {icon}
      <span className="text-sm">{children}</span>
    </div>
  );
}