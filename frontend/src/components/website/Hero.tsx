import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-6 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
          🚀 AI Powered Video Repurposing
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Transform Long Videos Into
          <span className="block text-red-500">
            Viral Shorts With AI
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Upload one long video and let ViralClip AI automatically detect
          viral moments, generate captions, titles, hashtags, thumbnails,
          and export content ready for TikTok, Reels, YouTube Shorts,
          Facebook and more.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-500">
            Start Free
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-slate-500">
            Watch Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <HeroPreview />

      </div>

    </section>
  );
}