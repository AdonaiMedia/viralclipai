"use client";

interface Platform {
  id: string;
  name: string;
  connected: boolean;
}

interface Props {
  platforms: Platform[];
}

export default function PublishingCenter({
  platforms,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          📤 Universal Publishing
        </h2>

        <span className="text-slate-400">
          Post Once • Publish Everywhere
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {platforms.map((platform) => (

          <div
            key={platform.id}
            className="flex justify-between items-center rounded-lg bg-slate-900 p-4"
          >

            <span className="font-medium">
              {platform.name}
            </span>

            {platform.connected ? (
              <span className="text-green-400">
                Connected
              </span>
            ) : (
              <button className="rounded bg-cyan-600 px-4 py-2">
                Connect
              </button>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}