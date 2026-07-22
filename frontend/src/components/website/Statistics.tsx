import {
  Video,
  Scissors,
  Globe2,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Video,
    value: "50K+",
    label: "Videos Processed",
  },
  {
    icon: Scissors,
    value: "1.2M+",
    label: "AI Clips Generated",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Average Success Rate",
  },
  {
    icon: Globe2,
    value: "25+",
    label: "Countries Reached",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="mb-3 font-semibold text-red-500">
            TRUSTED RESULTS
          </p>

          <h2 className="text-4xl font-bold text-white">
            Built To Scale Your Content
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-red-500"
              >

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <Icon className="h-8 w-8 text-red-500" />
                </div>

                <h3 className="text-5xl font-extrabold text-white">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.label}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}