"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupForm() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function signUp() {

    setLoading(true);

    const { error } = await supabase.auth.signUp({

      email,

      password,

    });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;

    }

    alert("Account created successfully. Please check your email.");

  }

  return (

    <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">

      <h1 className="text-3xl font-bold text-white mb-6">

        Create Account

      </h1>

      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

        className="w-full p-3 rounded bg-slate-700 text-white mb-4"

      />

      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

        className="w-full p-3 rounded bg-slate-700 text-white mb-6"

      />

      <button

        onClick={signUp}

        disabled={loading}

        className="w-full bg-blue-600 p-3 rounded-lg"

      >

        {loading ? "Creating..." : "Create Account"}

      </button>

    </div>

  );

}