"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "blue" | "green" | "orange";
}

export default function Badge({
  children,
  color = "blue",
}: Props) {

  const styles = {
    blue: "bg-blue-500/10 text-blue-300",
    green: "bg-emerald-500/10 text-emerald-300",
    orange: "bg-orange-500/10 text-orange-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[color]}`}
    >
      {children}
    </span>
  );
}