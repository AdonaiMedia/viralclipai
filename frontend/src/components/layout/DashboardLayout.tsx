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
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 p-8 overflow-auto">

          {children}

        </main>

      </div>

    </div>
  );
}