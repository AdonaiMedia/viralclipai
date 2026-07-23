import {
  Activity,
  BarChart3,
  CheckCircle2,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

        <div>

          <h3 className="text-lg font-bold text-white">
            ViralClip AI Dashboard
          </h3>

          <p className="text-sm text-slate-400">
            AI Workspace Preview
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

          <Activity className="h-4 w-4 text-emerald-400" />

          <span className="text-sm font-medium text-emerald-400">
            Live Processing
          </span>

        </div>

      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-5 lg:col-span-2">

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

            <div className="flex aspect-video items-center justify-center">

              <PlayCircle className="h-20 w-20 text-slate-700" />

            </div>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-800 p-5">

              <p className="text-sm text-slate-400">
                AI Score
              </p>

              <h4 className="mt-2 text-4xl font-bold text-red-500">
                94
              </h4>

            </div>

            <div className="rounded-2xl bg-slate-800 p-5">

              <p className="text-sm text-slate-400">
                Clips
              </p>

              <h4 className="mt-2 text-4xl font-bold text-white">
                12
              </h4>

            </div>

            <div className="rounded-2xl bg-slate-800 p-5">

              <p className="text-sm text-slate-400">
                Export Ready
              </p>

              <h4 className="mt-2 text-4xl font-bold text-emerald-400">
                100%
              </h4>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-4">

          <div className="rounded-2xl bg-slate-800 p-5">

            <div className="mb-4 flex items-center gap-2">

              <Sparkles className="h-5 w-5 text-yellow-400" />

              <h4 className="font-semibold text-white">
                AI Status
              </h4>

            </div>

            <div className="space-y-3">

              <Status text="Transcript Generated" />

              <Status text="Titles Created" />

              <Status text="Captions Ready" />

              <Status text="Hashtags Generated" />

              <Status text="Ready to Publish" />

            </div>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <div className="mb-4 flex items-center gap-2">

              <BarChart3 className="h-5 w-5 text-cyan-400" />

              <h4 className="font-semibold text-white">
                Platforms
              </h4>

            </div>

            <div className="flex flex-wrap gap-2">

              <Badge name="TikTok" />

              <Badge name="Reels" />

              <Badge name="Shorts" />

              <Badge name="Facebook" />

              <Badge name="Instagram" />

              <Badge name="LinkedIn" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Status({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">

      <span className="text-sm text-slate-300">
        {text}
      </span>

      <CheckCircle2 className="h-4 w-4 text-emerald-400" />

    </div>
  );
}

function Badge({
  name,
}: {
  name: string;
}) {
  return (
    <span className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-300">
      {name}
    </span>
  );
}