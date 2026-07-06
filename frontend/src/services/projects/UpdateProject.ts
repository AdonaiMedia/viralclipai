import { supabase } from "@/lib/supabase";

export async function updateProjectStatus(
  id: number,
  status: string
) {
  const { error } =
    await supabase
      .from("videos")
      .update({
        status,
      })
      .eq("id", id);

  if (error) throw error;

  return true;
}