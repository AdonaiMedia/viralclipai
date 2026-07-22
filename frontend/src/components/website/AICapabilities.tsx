import {
  Sparkles,
  Type,
  Captions,
  Hash,
  ImageIcon,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Type,
    title: "AI Title Generator",
    description: "Generate attention-grabbing titles optimized for every platform.",
  },
  {
    icon: Sparkles,
    title: "AI Hook Generator",
    description: "Create irresistible opening hooks that keep viewers watching.",
  },
  {
    icon: Captions,
    title: "AI Caption Generator",
    description: "Automatically create engaging captions for every clip.",
  },
  {
    icon: Hash,
    title: "Hashtag Generator",
    description: "Get relevant hashtags tailored to your audience and niche.",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Ideas",
    description: "Generate thumbnail concepts designed to improve click-through rate.",
  },
  {
    icon: BarChart3,
    title: "Viral Score",
    description: "Predict the viral potential of your content before publishing.",
  },
];

export default function AICapabilities() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold text-red-500">
            AI CAPABILITIES
          </p>

          <h2 className="text-4xl font-bold text-white">
            Everything Powered By AI
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            ViralClip AI does much more than trimming videos. It helps you
            create content that's ready to perform across every major platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-red-500 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-red-500/10 p-4">
                  <Icon className="h-8 w-8 text-red-500" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}