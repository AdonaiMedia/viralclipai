import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    featured: false,
    button: "Start Free",
    features: [
      "3 Videos / Month",
      "720p Export",
      "Watermark",
      "Basic AI Tools",
    ],
  },
  {
    name: "Creator Pro",
    price: "$19",
    description: "Best for creators and influencers.",
    featured: true,
    button: "Start Pro",
    features: [
      "Unlimited Videos",
      "1080p Export",
      "No Watermark",
      "All AI Tools",
      "AI Captions",
      "Priority Processing",
      "AI Viral Score",
      "AI Voice Over",
    ],
  },
  {
    name: "Business",
    price: "$49",
    description: "For agencies and growing teams.",
    featured: false,
    button: "Contact Sales",
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "API Access",
      "Analytics Dashboard",
      "Priority Support",
      "White Label",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Simple Pricing For
            <span className="text-red-500">
              {" "}Every Creator
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Start free today and upgrade only when you're ready to scale your content.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-red-500 bg-slate-900 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
                  : "border-slate-800 bg-slate-900 hover:border-red-500/40"
              }`}
            >

              {plan.featured && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white">

                  Most Popular

                </div>

              )}

              <h3 className="mt-4 text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8">

                <span className="text-6xl font-extrabold text-white">
                  {plan.price}
                </span>

                <span className="text-slate-400">
                  /month
                </span>

              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >

                    <Check className="h-5 w-5 text-emerald-400" />

                    {feature}

                  </li>

                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-red-600 text-white hover:bg-red-500"
                    : "border border-slate-700 text-white hover:border-red-500"
                }`}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}