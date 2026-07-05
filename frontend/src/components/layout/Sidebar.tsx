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

    <aside className="w-64 bg-slate-950 border-r border-slate-800 min-h-screen">

      <div className="p-6">

        <h1 className="text-2xl font-bold text-white">
          ViralClip AI
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          AI Content Studio
        </p>

      </div>

      <nav className="px-4 space-y-2">

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>

            <span>{item.name}</span>

          </Link>

        ))}

      </nav>

    </aside>

  );

}