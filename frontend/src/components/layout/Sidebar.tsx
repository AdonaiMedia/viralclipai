"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊",
  },
  {
    name: "Workspace",
    href: "/workspace",
    icon: "🧠",
  },
  {
    name: "Videos",
    href: "/videos",
    icon: "🎥",
  },
  {
    name: "Clips",
    href: "/clips",
    icon: "✂️",
  },
  {
    name: "Publish",
    href: "/publish",
    icon: "🚀",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "📈",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-5">

        <h1 className="text-xl font-bold text-white">
          ViralClip AI
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          AI Content Studio
        </p>

      </div>

      <nav className="space-y-1 p-3">

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all ${
              pathname === item.href
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="text-base">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}