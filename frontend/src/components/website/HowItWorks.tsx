import {
  Upload,
  Brain,
  Scissors,
  Share2,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Video",
    description:
      "Upload any long-form video from your computer or cloud storage.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "ViralClip AI analyzes speech, scenes, engagement potential and viral moments.",
  },
  {
    icon: Scissors,
    title: "Generate Viral Clips",
    description:
      "Automatically create multiple short clips with captions, titles and hashtags.",
  },
  {
    icon: Share2,
    title: "Export & Publish",
    description:
      "Download or publish directly to TikTok, Instagram Reels, YouTube Shorts and Facebook.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            From Long Videos To
            <span className="text-red-500">
              {" "}Viral Shorts
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Create professional short-form content in minutes with a simple
            four-step AI workflow.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >

                <div className="absolute right-6 top-6 text-5xl font-extrabold text-slate-800">
                  0{index + 1}
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">

                  <Icon className="h-8 w-8 text-red-400" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}