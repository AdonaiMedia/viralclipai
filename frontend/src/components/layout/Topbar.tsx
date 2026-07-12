"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-800 bg-slate-950/95 px-6 backdrop-blur">

      <div>

        <h2 className="text-lg font-semibold text-white">
          Dashboard
        </h2>

        <p className="text-xs text-slate-500">
          Welcome back to ViralClip AI
        </p>

      </div>

      <div className="flex items-center gap-3">

        <button
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm transition hover:bg-slate-800"
        >
          🔔
        </button>

        <button
          onClick={logout}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </header>
  );
}