export default function HeroPreview() {
  return (
    <div className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          ViralClip AI Dashboard
        </h3>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          Processing
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">Video</p>
          <h4 className="mt-2 font-semibold text-white">
            Sunday Sermon.mp4
          </h4>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">AI Score</p>
          <h4 className="mt-2 text-3xl font-bold text-red-500">
            94
          </h4>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">Clips Generated</p>
          <h4 className="mt-2 text-3xl font-bold text-white">
            12
          </h4>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-800 p-6">
        <div className="mb-4 flex justify-between">
          <span className="text-slate-400">
            Export Platforms
          </span>

          <span className="text-green-400">
            Ready
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-lg bg-slate-700 px-4 py-2">
            TikTok
          </span>

          <span className="rounded-lg bg-slate-700 px-4 py-2">
            Reels
          </span>

          <span className="rounded-lg bg-slate-700 px-4 py-2">
            Shorts
          </span>

          <span className="rounded-lg bg-slate-700 px-4 py-2">
            Facebook
          </span>
        </div>
      </div>

    </div>
  );
}