import { supabase } from "@/lib/supabase";

export interface ClipItem {
  id: number;
  title: string;
  duration: number;
  viral_score: number;
  status: string;
  file_name: string;
}

export async function getClips(): Promise<ClipItem[]> {

  const { data, error } = await supabase
    .from("clips")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data ?? [];

}