export async function generateScript(
  transcript: string
): Promise<string> {

  return `
# ViralClip AI Script

${transcript}

Thanks for watching.
Like, Share and Subscribe.
`;

}