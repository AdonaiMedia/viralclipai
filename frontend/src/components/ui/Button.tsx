"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {

  const colors = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white",

    success:
      "bg-emerald-600 hover:bg-emerald-700 text-white",
  };

  return (
    <button
      {...props}
      className={`rounded-xl px-5 py-3 font-semibold transition ${colors[variant]} ${className}`}
    />
  );
}