import Workspace from "@/components/workspace/Workspace";
import { getWorkspaceData } from "@/services/workspace/getWorkspaceData";

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

export default async function WorkspaceVideoPage({
  params,
}: PageProps) {
  const { videoId } = await params;

  const data = await getWorkspaceData(Number(videoId));

  const publicUrl = data.video?.public_url ?? "";

  console.log("VIDEO:", data.video);
  console.log("PUBLIC URL:", publicUrl);

  return (
    <Workspace
      video={data.video}
      analysis={data.analysis}
      clips={data.clips}
      publicUrl={publicUrl}
    />
  );
}