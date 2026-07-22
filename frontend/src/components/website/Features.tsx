import {
  Sparkles,
  Scissors,
  Captions,
  Share2,
  BarChart3,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Video Analysis",
    description:
      "AI analyzes your entire video and finds the most engaging moments automatically.",
  },
  {
    icon: Scissors,
    title: "Smart Clip Detection",
    description:
      "Generate multiple short clips optimized for TikTok, Reels and Shorts.",
  },
  {
    icon: Captions,
    title: "Auto Captions",
    description:
      "Create accurate subtitles with modern animated caption styles.",
  },
  {
    icon: Share2,
    title: "One Click Export",
    description:
      "Export videos in formats optimized for every social platform.",
  },
  {
    icon: BarChart3,
    title: "Viral Score",
    description:
      "Receive an AI-powered viral score before publishing your content.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process long videos in minutes instead of spending hours editing.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 text-red-500 font-semibold">
            FEATURES
          </p>

          <h2 className="text-4xl font-bold text-white">
            Everything You Need To Go Viral
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            ViralClip AI combines AI video understanding, editing,
            captions, scoring and publishing into one simple workflow.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-red-500/10 p-4">
                  <Icon className="h-8 w-8 text-red-500" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
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