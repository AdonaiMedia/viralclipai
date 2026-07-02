export async function generateThumbnailVariations(

  thumbnailPrompt: string

) {

  console.log("================================");
  console.log("AI THUMBNAIL VARIATIONS");
  console.log("================================");

  return [

    {
      style: "Bold",
      prompt:
        thumbnailPrompt +
        "\nBold YouTube Thumbnail",
    },

    {
      style: "Minimal",
      prompt:
        thumbnailPrompt +
        "\nMinimal Modern Design",
    },

    {
      style: "Emotional",
      prompt:
        thumbnailPrompt +
        "\nHighly Emotional Face",
    },

  ];

}