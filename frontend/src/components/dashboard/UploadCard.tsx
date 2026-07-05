"use client";

interface Props {
  onSelectFile: (file: File) => void;
  onUpload: () => void;
}

export default function UploadCard({
  onSelectFile,
  onUpload,
}: Props) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Upload Video
      </h2>

      <label
        htmlFor="video-upload"
        className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
      >
        📁 Choose Video
      </label>

      <input
        id="video-upload"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onSelectFile(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={onUpload}
        className="ml-4 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
      >
        🚀 Upload Video
      </button>

    </div>
  );
}