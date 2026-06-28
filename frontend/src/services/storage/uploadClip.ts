import fs from "fs";
import path from "path";
import { supabaseServer } from "@/lib/supabase-server";

export async function uploadClip(fileName: string) {
  const clipPath = path.join(
    process.cwd(),
    "storage",
    "clips",
    fileName
  );

  console.log("================================");
  console.log("UPLOADING CLIP");
  console.log("================================");
  console.log("Clip Path:", clipPath);

  console.log(
    "Supabase URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );

  const buckets = await supabaseServer.storage.listBuckets();

  console.log("Buckets Response:");
  console.log(buckets);

  const fileBuffer = fs.readFileSync(clipPath);

  const { data, error } = await supabaseServer.storage
    .from("clips")
    .upload(fileName, fileBuffer, {
      contentType: "video/mp4",
      upsert: true,
    });

  console.log("Upload Data:", data);
  console.log("Upload Error:", error);

  if (error) {
    throw error;
  }

  const { data: publicData } = supabaseServer.storage
    .from("clips")
    .getPublicUrl(fileName);

  console.log("Clip URL:", publicData.publicUrl);

  return publicData.publicUrl;
}