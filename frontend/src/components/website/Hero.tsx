import Link from "next/link";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-red-600/10 blur-[140px]" />

        <div className="absolute right-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-24 text-center">

        <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">

          🚀 AI Powered Video Repurposing Platform

        </span>

        <h1 className="mt-8 max-w-6xl text-5xl font-extrabold leading-tight md:text-7xl">

          Transform Long Videos

          <span className="block">

            Into

            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">

              {" "}
              Viral Shorts

            </span>

          </span>

          In Minutes

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">

          Upload one long video and let ViralClip AI detect viral moments,

          generate captions, titles, hooks, hashtags, AI voiceovers,

          thumbnails and publish-ready content for every social platform.

        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/register"
            className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-red-500"
          >
            Start Free
          </Link>

          <Link
            href="#demo"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-slate-500"
          >
            Watch Demo
          </Link>

        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">

          <span>✓ No Credit Card</span>

          <span>✓ Free Plan</span>

          <span>✓ AI Powered</span>

          <span>✓ Export HD Clips</span>

        </div>

        <div className="mt-16 w-full">

          <HeroPreview />

        </div>

      </div>

    </section>
  );
}