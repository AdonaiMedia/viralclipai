import {
  Scissors,
  Captions,
  Hash,
  Mic,
  TrendingUp,
  Send,
} from "lucide-react";

const features = [
  {
    title: "AI Clip Detection",
    description:
      "Automatically detects the most viral moments from long videos.",
    icon: Scissors,
  },
  {
    title: "Auto Captions",
    description:
      "Generate accurate subtitles in seconds for every platform.",
    icon: Captions,
  },
  {
    title: "Smart Hashtags",
    description:
      "AI creates hashtags optimized for reach and engagement.",
    icon: Hash,
  },
  {
    title: "AI Voice Over",
    description:
      "Generate natural voice overs in multiple languages.",
    icon: Mic,
  },
  {
    title: "Viral Score",
    description:
      "Predict how well your content can perform before publishing.",
    icon: TrendingUp,
  },
  {
    title: "One Click Publish",
    description:
      "Export content ready for TikTok, Reels, Shorts and Facebook.",
    icon: Send,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To Create
            <span className="text-red-500">
              {" "}Viral Content
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            ViralClip AI combines multiple AI tools into one workspace,
            helping creators save time and grow faster.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
                  <Icon className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}