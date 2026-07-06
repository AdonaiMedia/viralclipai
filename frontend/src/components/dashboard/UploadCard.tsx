"use client";

import { useRef, useState } from "react";

interface Props {
  onSelectFile: (file: File) => void;
  onUpload: () => void;
}

export default function UploadCard({
  onSelectFile,
  onUpload,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    onSelectFile(file);
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">

      <h2 className="mb-2 text-2xl font-bold">
        Upload Video
      </h2>

      <p className="mb-6 text-slate-400">
        Upload a video and let ViralClip AI analyze it,
        detect viral moments, and generate short clips automatically.
      </p>

      <input
        ref={inputRef}
        id="video-upload"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center">

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-700"
        >
          📁 Choose Video
        </button>

        <button
          type="button"
          onClick={onUpload}
          disabled={!selectedFile}
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          🚀 Upload Video
        </button>

      </div>

      <div className="mt-5">

        {selectedFile ? (
          <div className="rounded-lg bg-slate-900 p-4">

            <p className="font-medium">
              {selectedFile.name}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>

          </div>
        ) : (
          <p className="text-sm text-slate-500">
            No video selected.
          </p>
        )}

      </div>

    </div>
  );
}