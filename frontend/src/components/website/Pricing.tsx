import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    featured: false,
    features: [
      "3 videos / month",
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
    features: [
      "Unlimited Videos",
      "1080p Export",
      "No Watermark",
      "All AI Tools",
      "Auto Captions",
      "Priority Processing",
      "AI Viral Score",
    ],
  },
  {
    name: "Business",
    price: "$49",
    description: "For agencies and teams.",
    featured: false,
    features: [
      "Everything in Pro",
      "Team Members",
      "API Access",
      "Priority Support",
      "Analytics",
      "White Label",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold text-red-500">
            PRICING
          </p>

          <h2 className="text-4xl font-bold text-white">
            Simple Pricing For Every Creator
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Start free and upgrade whenever your content starts growing.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition ${
                plan.featured
                  ? "border-red-500 bg-slate-950 scale-105"
                  : "border-slate-800 bg-slate-950"
              }`}
            >

              {plan.featured && (
                <div className="mb-6 inline-flex rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-slate-400">
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

                    <Check className="h-5 w-5 text-green-500" />

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
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}