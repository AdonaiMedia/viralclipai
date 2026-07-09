"use client";

import { useCallback, useEffect, useState } from "react";

import { getDashboardStats } from "@/services/dashboard/GetDashboardStats";
import type { DashboardStats } from "@/types/Dashboard";

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getDashboardStats();

      setStats(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    stats,
    loading,
    refresh,
  };
}