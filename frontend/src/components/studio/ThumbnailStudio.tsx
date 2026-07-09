
"use client";

interface Thumbnail {
  id: number;
  image: string;
  score: number;
  recommended?: boolean;
}

interface Props {
  thumbnails: Thumbnail[];
  onSelect?: (id: number) => void;
}

export default function ThumbnailStudio({
  thumbnails,
  onSelect,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🖼 AI Thumbnail Studio
        </h2>

        <span className="text-sm text-slate-400">
          AI Generated Options
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {thumbnails.map((thumb) => (

          <div
            key={thumb.id}
            className="rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition"
          >

            <img
              src={thumb.image}
              alt="Thumbnail"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <div className="flex justify-between items-center">

                <span className="font-semibold">
                  Score: {thumb.score}
                </span>

                {thumb.recommended && (
                  <span className="rounded-full bg-green-600 px-3 py-1 text-xs">
                    AI Pick
                  </span>
                )}

              </div>

              <button
                onClick={() => onSelect?.(thumb.id)}
                className="mt-4 w-full rounded-lg bg-cyan-600 py-2 hover:bg-cyan-700"
              >
                Use Thumbnail
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}


