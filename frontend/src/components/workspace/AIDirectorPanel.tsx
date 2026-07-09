"use client";

interface Recommendation {
  id: number;
  message: string;
}

interface Props {
  score: number;
  recommendations: Recommendation[];
}

export default function AIDirectorPanel({
  score,
  recommendations,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          🎬 ViralCore Director
        </h2>

        <div className="text-3xl font-bold text-green-400">
          {score}/100
        </div>

      </div>

      <div className="mt-6 space-y-4">

        {recommendations.map((item) => (

          <div
            key={item.id}
            className="rounded-lg bg-slate-900 p-4"
          >
            ✅ {item.message}
          </div>

        ))}

      </div>

    </div>
  );
}