"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null)
  const [videos, setVideos] = useState<any[]>([]);
useEffect(() => {
  loadVideos();
}, []);

async function loadVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("VIDEOS FROM DB", data);

  if (error) {
    console.log(error);
  } else {
    setVideos(data || []);
  }
}
async function generateClip(id: number) {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId: id,
      }),
    });

    const result = await response.json();

    console.log("API RESPONSE:", result);

    if (!response.ok) {
      alert(result.message);
      return;
    }

    alert(result.message);

    // Soma tena videos kutoka Supabase
    await loadVideos();

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
}

async function deleteVideo(fileName: string, id: number) {
  console.log("DELETE TEST", fileName, id);
 const { error: storageError } = await supabase.storage
  .from("videos")
  .remove([fileName]);
console.log("STORAGE ERROR", storageError);
  if (storageError) {
    alert("Failed to delete from storage");
    console.log(storageError);
    return;
  }
const { error: dbError } = await supabase
  .from("videos")
  .delete()
  .eq("id", id);

console.log("DB ERROR", dbError);

if (dbError) {
  alert("Failed to delete from database");
  console.log(dbError);
  return;
}

  alert("Video deleted!");
  loadVideos();
}

  async function uploadVideo() {
    console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Bucket:", "videos");
const {
  data: { user },
} = await supabase.auth.getUser();

console.log("Current User:", user);
    if (!file) {
      alert("Please select a video");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
  .from("videos")
  .upload(fileName, file);

   if (error) {
  console.log(error);
  alert(JSON.stringify(error));
} else {

  const { error: dbError } = await supabase
    .from("videos")
    .insert([
      {
        file_name: fileName,
        file_url: fileName,
        status: "uploaded",
      },
    ]);

  if (dbError) {
    console.log(dbError);
    alert("Database save failed");
  } else {
    alert("Video uploaded and saved!");
    loadVideos();
  }
}

  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        ViralClip AI Dashboard
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Upload Your Video
        </h2>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFile(e.target.files[0]);
            }
          }}
          className="mb-4"
        />

        <br />

               <button
          onClick={uploadVideo}
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Upload Video
        </button>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">
          My Videos
        </h2>

        {videos.length === 0 ? (
  <p className="text-gray-400">
    No videos uploaded yet
  </p>
) : (
  <ul>
  {videos.map((video, index) => {
    const { data } = supabase.storage
 .from("videos")
  .getPublicUrl(video.file_url);

    return (
      <li
        key={index}
        className="mb-6 border border-slate-600 rounded-lg p-4"
      >
        <p className="font-bold mb-2">
  📹 {video.file_name}
  </p>
<p className="text-yellow-400">
  Status: {video.status}
</p>
<p className="text-xs text-green-400 break-all">
  {data.publicUrl}
</p>

        <video
          controls
          width="400"
          className="rounded"
        >
          <source
            src={data.publicUrl}
      
          />
        </video>
        <div className="flex gap-4 mt-4">
  <button
    onClick={() =>
      deleteVideo(video.file_name, video.id)
    }
    className="bg-red-600 px-4 py-2 rounded-lg"
  >
    🗑 Delete Video
  </button>

 <button
  onClick={() =>
    generateClip(video.id)
  }
  className="bg-green-600 px-4 py-2 rounded-lg"
>
  ✂ Generate Clip
</button>
</div>
      </li>
    );
  })}
</ul>
)}
      </div>

    </main>
  );
}