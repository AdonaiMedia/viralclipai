"use client";

interface Props {

  videos: any[];

  selectedVideoId: number | null;

  onSelect: (id: number) => void;

}

export default function WorkspaceSelector({

  videos,

  selectedVideoId,

  onSelect,

}: Props) {

  return (

    <div className="mb-8">

      <label className="block mb-2 font-bold">

        Select Video

      </label>

      <select

        value={selectedVideoId ?? ""}

        onChange={(e) =>
          onSelect(Number(e.target.value))
        }

        className="bg-slate-800 border border-slate-700 rounded-xl p-3 w-full"

      >

        <option value="">

          Choose Video

        </option>

        {videos.map((video) => (

          <option
            key={video.id}
            value={video.id}
          >

            {video.file_name}

          </option>

        ))}

      </select>

    </div>

  );

}