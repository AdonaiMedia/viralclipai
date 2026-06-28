"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registration Successful!");
    }
  }

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          ViralClip AI
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 text-white bg-slate-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 text-white bg-slate-700"
        />

        <div className="space-y-3">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 p-3 rounded-lg"
          >
            Login
          </button>

          <button
            onClick={handleRegister}
            className="w-full bg-green-600 p-3 rounded-lg"
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
}