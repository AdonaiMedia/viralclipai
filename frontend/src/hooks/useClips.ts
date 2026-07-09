"use client";

import { useEffect, useState } from "react";

import {
  getClips,
  ClipItem,
} from "@/services/clips/getClips";

export function useClips() {

  const [clips, setClips] =
    useState<ClipItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function load() {

    setLoading(true);

    try {

      const data = await getClips();

      setClips(data);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    load();

  }, []);

  return {
    clips,
    loading,
    refresh: load,
  };

}