"use client";

interface QuickActionsProps {
  onUpload?: () => void;
  onGenerate?: () => void;
  onWorkspace?: () => void;
  onAnalytics?: () => void;
}

export default function QuickActions({
  onUpload,
  onGenerate,
  onWorkspace,
  onAnalytics,
}: QuickActionsProps) {
  const actions = [
    {
      label: "Upload Video",
      icon: "📤",
      color: "bg-blue-600 hover:bg-blue-700",
      action: onUpload,
    },
    {
      label: "Generate Clips",
      icon: "✂️",
      color: "bg-green-600 hover:bg-green-700",
      action: onGenerate,
    },
    {
      label: "Workspace",
      icon: "🗂️",
      color: "bg-purple-600 hover:bg-purple-700",
      action: onWorkspace,
    },
    {
      label: "Analytics",
      icon: "📊",
      color: "bg-orange-600 hover:bg-orange-700",
      action: onAnalytics,
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {actions.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={item.action}
          className={`rounded-xl p-5 text-left text-white transition-colors ${item.color}`}
        >
          <div className="mb-2 text-3xl">
            {item.icon}
          </div>

          <div className="font-semibold">
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
}