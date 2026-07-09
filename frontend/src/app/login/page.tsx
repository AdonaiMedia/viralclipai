"use client";

import BrandLogo from "@/components/branding/BrandLogo";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md">

        <div className="mb-10 flex justify-center">

          <BrandLogo />

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          <div className="mb-8 text-center">

            <h2 className="text-3xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-slate-400">
              Sign in to continue creating viral content with AI.
            </p>

          </div>

          <LoginForm />

        </div>

      </div>

    </main>
  );
}