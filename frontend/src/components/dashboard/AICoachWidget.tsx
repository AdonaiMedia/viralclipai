"use client";

interface AICoachWidgetProps {
  score?: number;
  advice?: string[];
}

export default function AICoachWidget({
  score = 0,
  advice = [],
}: AICoachWidgetProps) {
  const scoreColor =
    score >= 80
      ? "text-green-400"
      : score >= 60
      ? "text-yellow-400"
      : "text-red-400";

  const defaultAdvice = [
    "Upload consistently to improve reach.",
    "Use captions to increase watch time.",
    "Keep the first 3 seconds engaging.",
    "Post during your audience's peak hours.",
  ];

  const tips =
    advice.length > 0
      ? advice
      : defaultAdvice;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">

      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-2xl font-bold">
            🤖 AI Coach
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Personalized recommendations to improve your content.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-400">
            Viral Score
          </p>

          <p className={`text-4xl font-bold ${scoreColor}`}>
            {score}/100
          </p>
        </div>

      </div>

      <div className="space-y-3">

        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-lg bg-slate-900 p-4"
          >
            <span className="mr-2">💡</span>
            {tip}
          </div>
        ))}

      </div>

    </div>
  );
}