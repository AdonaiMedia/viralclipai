"use client";

import { ReactNode } from "react";
import DashboardShell from "@/components/layout/DashboardShell";

interface Props {
  children: ReactNode;
}

export default function CreatorLayout({
  children,
}: Props) {
  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl space-y-8">
        {children}
      </div>
    </DashboardShell>
  );
}