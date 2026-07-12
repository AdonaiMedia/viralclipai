"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-y-auto px-5 py-4 lg:px-6">

          <div className="mx-auto max-w-7xl space-y-5">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}