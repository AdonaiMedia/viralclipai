import Workspace from "@/components/workspace/Workspace";
import { getWorkspaceData } from "@/services/workspace/getWorkspaceData";
import { supabaseServer } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

export default async function WorkspaceVideoPage({
  params,
}: PageProps) {
  const { videoId } = await params;

  const id = Number(videoId);

  if (Number.isNaN(id)) {
    throw new Error("Invalid workspace id.");
  }

  const {
    video,
    analysis,
    clips,
  } = await getWorkspaceData(id);

  let publicUrl = "";

  if (video?.file_name) {
    const { data } = supabaseServer.storage
      .from("videos")
      .getPublicUrl(video.file_name);

    publicUrl = data.publicUrl;
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <div className="mx-auto max-w-[1700px] px-6 py-8">

        <Workspace
          video={video}
          analysis={analysis}
          clips={clips}
          publicUrl={publicUrl}
        />

      </div>
    </main>
  );
}