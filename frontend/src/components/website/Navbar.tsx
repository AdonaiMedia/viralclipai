"use client";

import Link from "next/link";
import BrandLogo from "@/components/branding/BrandLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <BrandLogo />

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

          <Link
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="#faq"
            className="transition hover:text-white"
          >
            FAQ
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Start Free
          </Link>

        </div>

      </div>
    </header>
  );
}