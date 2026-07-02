export async function generateThumbnailImages(
  prompts: {
    style: string;
    prompt: string;
  }[]
) {

  console.log("================================");
  console.log("AI THUMBNAIL IMAGE GENERATOR");
  console.log("================================");

  return prompts.map((item, index) => ({
    id: index + 1,
    style: item.style,
    image:
      `/fake-thumbnails/${item.style.toLowerCase()}.jpg`,
    prompt: item.prompt,
  }));

}