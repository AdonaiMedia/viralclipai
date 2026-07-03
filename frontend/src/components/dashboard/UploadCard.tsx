"use client";

interface UploadCardProps {
  onUpload: () => void;
  onSelectFile: (file: File | null) => void;
}

export default function UploadCard({

  onUpload,

  onSelectFile,

}: UploadCardProps) {

  return (

    <div className="bg-slate-800 p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-4">

        Upload Your Video

      </h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => {

          onSelectFile(
            e.target.files?.[0] || null
          );

        }}
        className="mb-4"
      />

      <br />

      <button
        onClick={onUpload}
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Upload Video
      </button>

    </div>

  );

}