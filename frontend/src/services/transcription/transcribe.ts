import fs from "fs";
import path from "path";
import { openai } from "@/lib/openai";

export async function transcribeAudio(
  audioPath: string
) {
  console.log("================================");
  console.log("OPENAI WHISPER");
  console.log("================================");

  console.log("Audio Path:", audioPath);

  const fullPath = path.resolve(audioPath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Audio file not found: ${fullPath}`);
  }

  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(fullPath),
    model: "gpt-4o-mini-transcribe",
  });

  console.log("================================");
  console.log("TRANSCRIPTION COMPLETED");
  console.log("================================");

  console.log(transcription.text);

  return transcription.text;
}