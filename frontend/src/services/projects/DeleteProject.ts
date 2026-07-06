import { supabase } from "@/lib/supabase";

export async function deleteProject(
  id: number,
  fileName: string
) {
  await supabase.storage
    .from("videos")
    .remove([fileName]);

  await supabase
    .from("videos")
    .delete()
    .eq("id", id);

  return true;
}