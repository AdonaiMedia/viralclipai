"use client";

import { useEffect, useState } from "react";

import { getProjects } from "@/services/projects/GetProjects";

export function useProjects() {

  const [projects, setProjects] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  async function refresh() {

    setLoading(true);

    const data = await getProjects();

    setProjects(data);

    setLoading(false);

  }

  useEffect(() => {

    refresh();

  }, []);

  return {

    projects,

    loading,

    refresh,

  };

}