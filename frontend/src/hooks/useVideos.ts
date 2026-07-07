"use client";

import { useEffect, useState } from "react";

import { getDashboardData } from "@/services/dashboard/GetDashboardData";

export function useVideos() {

  const [videos, setVideos] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  async function refresh() {

    setLoading(true);

    const data = await getDashboardData();

    setVideos(data);

    setLoading(false);

  }

  useEffect(() => {

    refresh();

  }, []);

  return {

    videos,

    loading,

    refresh,

  };

}