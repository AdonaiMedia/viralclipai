import Workspace from "@/components/workspace/Workspace";
import { getWorkspaceData } from "@/services/workspace/getWorkspaceData";
import { supabaseServer } from "@/lib/supabase-server";

interface Props {
  params: Promise<{
    videoId: string;
  }>;
}

export default async function WorkspaceVideoPage({
  params,
}: Props) {
  const { videoId } = await params;

  const data = await getWorkspaceData(
    Number(videoId)
  );

  let publicUrl: string | null = null;

  if (data.video?.file_name) {
    const result = supabaseServer.storage
      .from("videos")
      .getPublicUrl(data.video.file_name);

    publicUrl = result.data.publicUrl;
  }

  return (
    <Workspace
      video={data.video}
      analysis={data.analysis}
      clips={data.clips}
      publicUrl={publicUrl ?? ""}
    />
  );
}