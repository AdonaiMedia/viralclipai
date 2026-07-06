"use client";

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type:
    | "upload"
    | "analysis"
    | "clip"
    | "publish";
}

interface RecentActivityProps {
  activities?: ActivityItem[];
}

export default function RecentActivity({
  activities = [],
}: RecentActivityProps) {
  const defaultActivities: ActivityItem[] = [
    {
      id: "1",
      title: "Video Uploaded",
      description: "Sunday Sermon.mp4 uploaded successfully.",
      time: "Just now",
      type: "upload",
    },
    {
      id: "2",
      title: "AI Analysis Complete",
      description: "AI finished analyzing your latest video.",
      time: "5 min ago",
      type: "analysis",
    },
    {
      id: "3",
      title: "Clips Generated",
      description: "8 viral clips were created.",
      time: "12 min ago",
      type: "clip",
    },
  ];

  const data =
    activities.length > 0
      ? activities
      : defaultActivities;

  const icon = {
    upload: "📤",
    analysis: "🤖",
    clip: "✂️",
    publish: "🚀",
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-lg bg-slate-900 p-4"
          >
            <div className="text-2xl">
              {icon[item.type]}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.description}
              </p>
            </div>

            <span className="text-xs text-slate-500">
              {item.time}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}