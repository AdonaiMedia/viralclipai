export async function transcribeAudio(
  audioPath: string
) {

  console.log("================================");
  console.log("FAKE TRANSCRIPTION MODE");
  console.log("================================");

  console.log("Audio Path:", audioPath);

  return `
  Mungu anakupenda.
  Usikate tamaa.
  Kila jambo lina wakati wake.
  Endelea kumuamini Mungu.
  Mungu anaweza kubadilisha maisha yako.
  `;
}