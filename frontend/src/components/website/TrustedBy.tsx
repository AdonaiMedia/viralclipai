export default function TrustedBy() {
  const companies = [
    "YouTube",
    "TikTok",
    "Instagram",
    "Facebook",
    "LinkedIn",
    "X",
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Built for creators publishing on
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="flex h-16 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg font-semibold text-slate-300 transition hover:border-red-500 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}