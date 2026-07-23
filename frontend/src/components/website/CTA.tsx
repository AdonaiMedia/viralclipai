import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-slate-900 to-slate-950 p-12 text-center">

          {/* Background Glow */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-600/10 blur-[100px]" />

          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="relative z-10">

            <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              🚀 Ready To Grow?
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Turn Every Long Video Into
              <span className="block text-red-500">
                Multiple Viral Clips
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Join thousands of creators using AI to save hours of editing,
              grow faster and publish consistently across TikTok,
              YouTube Shorts, Instagram Reels and Facebook.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
              >
                Start Free

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-red-500"
              >
                <PlayCircle className="h-5 w-5" />

                Watch Demo
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">

              <span>✓ No Credit Card</span>

              <span>✓ Free Forever Plan</span>

              <span>✓ Cancel Anytime</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}