"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/auth/getCurrentUser";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function checkUser() {

      const user = await getCurrentUser();

      if (!user) {

        router.replace("/login");

        return;

      }

      setLoading(false);

    }

    checkUser();

  }, [router]);

  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">

        Loading...

      </main>

    );

  }

  return <>{children}</>;

}