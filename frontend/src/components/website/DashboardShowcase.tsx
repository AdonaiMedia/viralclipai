import {
  Upload,
  FileText,
  Brain,
  Scissors,
  ImageIcon,
  Share2,
  CheckCircle2,
} from "lucide-react";

const pipeline = [
  {
    icon: Upload,
    title: "Upload Complete",
  },
  {
    icon: FileText,
    title: "Transcript Ready",
  },
  {
    icon: Brain,
    title: "AI Analysis",
  },
  {
    icon: Scissors,
    title: "12 Clips Generated",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Created",
  },
  {
    icon: Share2,
    title: "Ready To Export",
  },
];

export default function DashboardShowcase() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold text-red-500">
            LIVE DASHBOARD
          </p>

          <h2 className="text-4xl font-bold text-white">
            Everything Happens Automatically
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Upload your video once. ViralClip AI takes care of the rest.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Sunday Sermon.mp4
              </h3>

              <p className="text-slate-400">
                Processing completed successfully
              </p>
            </div>

            <div className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              Ready
            </div>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="space-y-4">

              {pipeline.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl bg-slate-900 p-4"
                  >
                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-red-500/10 p-3">
                        <Icon className="h-6 w-6 text-red-500" />
                      </div>

                      <span className="font-medium text-white">
                        {item.title}
                      </span>

                    </div>

                    <CheckCircle2 className="h-6 w-6 text-green-500" />

                  </div>
                );

              })}

            </div>

            <div className="space-y-6">

              <div className="rounded-2xl bg-slate-900 p-6">

                <p className="text-slate-400">
                  Viral Score
                </p>

                <h3 className="mt-2 text-6xl font-bold text-red-500">
                  94
                </h3>

              </div>

              <div className="rounded-2xl bg-slate-900 p-6">

                <p className="text-slate-400">
                  Generated Clips
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">

                  <div className="aspect-video rounded-xl bg-slate-800" />
                  <div className="aspect-video rounded-xl bg-slate-800" />
                  <div className="aspect-video rounded-xl bg-slate-800" />
                  <div className="aspect-video rounded-xl bg-slate-800" />
                  <div className="aspect-video rounded-xl bg-slate-800" />
                  <div className="aspect-video rounded-xl bg-slate-800" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}