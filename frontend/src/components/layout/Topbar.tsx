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

    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">

          Dashboard

        </h2>

      </div>

      <div className="flex items-center gap-4">

        <button

          className="bg-slate-800 px-4 py-2 rounded-lg"

        >

          🔔 Notifications

        </button>

        <button

          onClick={logout}

          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"

        >

          Logout

        </button>

      </div>

    </header>

  );

}