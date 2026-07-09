"use client";

import BrandLogo from "@/components/branding/BrandLogo";

import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  Scissors,
  BrainCircuit,
  Image,
  Type,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Upload, label: "Uploads" },
  { icon: Scissors, label: "AI Clips" },
  { icon: BrainCircuit, label: "AI Agents" },
  { icon: Image, label: "Thumbnails" },
  { icon: Type, label: "Titles" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function AppSidebar() {
  return (
    <aside className="hidden lg:flex w-72 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-6">

        <BrandLogo />

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {menu.map(({ icon: Icon, label }) => (

          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >

            <Icon className="h-5 w-5" />

            <span>{label}</span>

          </button>

        ))}

      </nav>

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4">

          <p className="text-sm font-semibold text-white">
            Free Plan
          </p>

          <p className="mt-1 text-xs text-cyan-100">
            Upgrade to remove watermark, unlock premium AI tools and disable ads.
          </p>

        </div>

      </div>

    </aside>
  );
}