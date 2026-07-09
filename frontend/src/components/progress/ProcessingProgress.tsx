"use client";

interface Props {
  percentage: number;
  message: string;
}

export default function ProcessingProgress({
  percentage,
  message,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-lg font-bold text-white">
          AI Processing
        </h3>

        <span className="font-semibold text-blue-400">
          {percentage}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-700">

        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-4 text-slate-400">
        {message}
      </p>

    </section>
  );
}