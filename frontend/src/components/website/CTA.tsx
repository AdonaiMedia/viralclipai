export default function CTA() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-slate-900 to-slate-950 p-12 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            READY TO START?
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Turn Every Long Video Into
            <span className="block text-red-500">
              Multiple Viral Clips
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Join creators using AI to save time, grow faster and publish
            consistently across every major social platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500">
              Start Free
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-red-500">
              Watch Demo
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}