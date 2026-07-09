"use client";

import { ReactNode } from "react";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <AppSidebar />

      <div className="flex flex-1 flex-col">

        <AppHeader />

        <main className="flex-1 overflow-y-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}