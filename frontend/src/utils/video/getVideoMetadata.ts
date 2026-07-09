export interface VideoMetadata {
  width: number;
  height: number;
  duration: number;
  aspectRatio: string;
  orientation: "Landscape" | "Portrait" | "Square";
}

export async function getVideoMetadata(
  file: File
): Promise<VideoMetadata> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");

    video.preload = "metadata";

    const url = URL.createObjectURL(file);

    video.src = url;

    video.onloadedmetadata = () => {
      const width = video.videoWidth;
      const height = video.videoHeight;

      let orientation: VideoMetadata["orientation"] = "Landscape";

      if (height > width) {
        orientation = "Portrait";
      } else if (height === width) {
        orientation = "Square";
      }

      resolve({
        width,
        height,
        duration: video.duration,
        aspectRatio: `${width}:${height}`,
        orientation,
      });

      URL.revokeObjectURL(url);
    };

    video.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unable to read video metadata."));
    };
  });
}