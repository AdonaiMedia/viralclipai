import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "YouTube Creator",
    quote:
      "ViralClip AI cut my editing time from hours to just minutes. The AI clips are surprisingly accurate.",
  },
  {
    name: "David Kim",
    role: "Marketing Agency",
    quote:
      "Our team now creates content for every social platform from a single video. Huge productivity boost.",
  },
  {
    name: "Grace Williams",
    role: "Podcast Host",
    quote:
      "The automatic captions and viral score helped us reach a much larger audience on Shorts and Reels.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold text-red-500">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl font-bold text-white">
            Loved By Content Creators
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Here's what creators say about using ViralClip AI.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}