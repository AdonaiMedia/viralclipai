"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function useUploadVideo() {
  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("Please login first.");
      }

      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("videos")
        .upload(fileName, file);

      if (error) throw error;

      const { error: dbError } = await supabase
        .from("videos")
        .insert([
          {
            user_id: user.id,
            file_name: fileName,
            file_url: fileName,
            status: "uploaded",
          },
        ]);

      if (dbError) throw dbError;

      return true;
    } finally {
      setUploading(false);
    }
  }

  return {
    upload,
    uploading,
  };
}