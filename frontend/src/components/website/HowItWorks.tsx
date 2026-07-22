import {
  Upload,
  Brain,
  Scissors,
  Share2,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Video",
    description:
      "Upload your long-form video from your computer.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our AI analyzes the transcript, engagement and viral moments.",
  },
  {
    icon: Scissors,
    title: "Generate Clips",
    description:
      "Automatically create multiple short videos with captions.",
  },
  {
    icon: Share2,
    title: "Export Anywhere",
    description:
      "Download or publish to TikTok, Reels, Shorts and Facebook.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold text-red-500">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold text-white">
            Create Viral Content In Four Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            From one long video to multiple viral-ready clips in just a few
            minutes.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition hover:border-red-500"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>

                <span className="text-sm font-semibold text-red-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
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