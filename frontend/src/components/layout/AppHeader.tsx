"use client";

import BrandLogo from "@/components/branding/BrandLogo";
import { Bell, Search } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-5">

      <div className="flex items-center gap-8">

        <BrandLogo />

        <div className="relative w-80">

          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />

          <input
            placeholder="Search projects..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-white outline-none transition focus:border-cyan-500"
          />

        </div>

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700">

          <Bell className="h-5 w-5 text-white" />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-bold text-white">

            C

          </div>

          <div>

            <p className="font-semibold text-white">
              Creator
            </p>

            <p className="text-xs text-cyan-400">
              Pro Plan
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}