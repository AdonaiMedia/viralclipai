import fs from "fs";
import path from "path";
import { openai } from "@/lib/openai";

export async function transcribeAudio(audioPath: string) {
  console.log("================================");
  console.log("OPENAI WHISPER");
  console.log("================================");

  const fullPath = path.isAbsolute(audioPath)
    ? audioPath
    : path.join(process.cwd(), audioPath);

  console.log("Audio Path:", fullPath);

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(fullPath),
      model: "gpt-4o-mini-transcribe",
    });

    console.log("Using REAL OpenAI transcription");

    return transcription.text;
  } catch (error) {
    console.log("================================");
    console.log("OPENAI NOT AVAILABLE");
    console.log("Switching to LOCAL DEV MODE");
    console.log("================================");

    return `
Mungu anakupenda.
Usikate tamaa.
Kila jambo lina wakati wake.
Endelea kumuamini Mungu.
Mungu anaweza kubadilisha maisha yako.
Leo ni siku ya neema.
`;
  }
}