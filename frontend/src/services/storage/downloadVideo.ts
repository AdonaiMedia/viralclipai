import { supabaseServer } from "@/lib/supabase-server";
import fs from "fs";
import path from "path";

export async function downloadVideo(fileName: string) {
  try {
    console.log("Downloading:", fileName);

    const { data, error } = await supabaseServer.storage
      .from("videos")
      .download(fileName);

    if (error) {
      throw error;
    }

    const uploadsFolder = path.join(
      process.cwd(),
      "storage",
      "uploads"
    );

    if (!fs.existsSync(uploadsFolder)) {
      fs.mkdirSync(uploadsFolder, { recursive: true });
    }

    const localFile = path.join(
      uploadsFolder,
      fileName
    );

    const buffer = Buffer.from(
      await data.arrayBuffer()
    );

    fs.writeFileSync(localFile, buffer);

    console.log("Saved:", localFile);

    return localFile;

  } catch (error) {
    console.error(error);
    throw error;
  }
}