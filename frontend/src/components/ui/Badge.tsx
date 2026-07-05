"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "green" | "yellow" | "red" | "blue";
}

export default function Badge({
  children,
  color = "blue",
}: Props) {

  const colors = {
    green: "bg-green-600",
    yellow: "bg-yellow-500 text-black",
    red: "bg-red-600",
    blue: "bg-blue-600",
  };

  return (
    <span
      className={`
        inline-block
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );

}