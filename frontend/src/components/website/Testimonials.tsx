import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "YouTube Creator",
    quote:
      "ViralClip AI reduced my editing time from hours to just minutes. The AI consistently finds the best moments.",
  },
  {
    name: "David Kim",
    role: "Marketing Agency",
    quote:
      "We now create content for TikTok, Reels and Shorts from one video. It's a massive productivity boost.",
  },
  {
    name: "Grace Williams",
    role: "Podcast Host",
    quote:
      "Auto captions and the Viral Score helped us reach a much larger audience across every platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Trusted By
            <span className="text-red-500">
              {" "}Content Creators
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Thousands of creators use ViralClip AI to turn long-form videos
            into engaging short-form content.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
            >

              <Quote className="absolute right-8 top-8 h-10 w-10 text-slate-700" />

              <div className="mb-6 flex gap-1">

                {Array.from({ length: 5 }).map((_, i) => (

                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-slate-300">
                "{item.quote}"
              </p>

              <div className="mt-8 border-t border-slate-800 pt-6">

                <h3 className="font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-400">
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