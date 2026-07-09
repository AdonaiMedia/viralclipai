"use client";

interface Marker {
  id: number;
  position: number;
  score: number;
}

const markers: Marker[] = [
  {
    id: 1,
    position: 12,
    score: 97,
  },
  {
    id: 2,
    position: 34,
    score: 94,
  },
  {
    id: 3,
    position: 61,
    score: 91,
  },
  {
    id: 4,
    position: 82,
    score: 95,
  },
];

export default function VideoTimeline() {
  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-5">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="font-bold text-white">
          AI Timeline
        </h3>

        <span className="text-sm text-slate-400">
          Viral Moments
        </span>

      </div>

      <div className="relative h-4 rounded-full bg-slate-700">

        {markers.map((marker) => (
          <button
            key={marker.id}
            title={`Score ${marker.score}`}
            className="absolute top-1/2 h-5 w-2 -translate-y-1/2 rounded bg-orange-400 transition hover:h-7"
            style={{
              left: `${marker.position}%`,
            }}
          />
        ))}

      </div>

      <div className="mt-4 flex justify-between text-xs text-slate-500">

        <span>00:00</span>

        <span>02:00</span>

        <span>04:00</span>

        <span>06:00</span>

        <span>08:00</span>

        <span>10:00</span>

      </div>

    </section>
  );
}