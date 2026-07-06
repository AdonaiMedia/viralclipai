"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const contentTypes = [
  {
    id: "video",
    icon: "🎥",
    title: "Video",
  },
  {
    id: "image",
    icon: "🖼️",
    title: "Image",
  },
  {
    id: "text",
    icon: "📝",
    title: "Text",
  },
  {
    id: "audio",
    icon: "🎙️",
    title: "Audio",
  },
  {
    id: "pdf",
    icon: "📄",
    title: "PDF",
  },
  {
    id: "link",
    icon: "🔗",
    title: "Link",
  },
];

export default function ContentTypePicker({
  value,
  onChange,
}: Props) {

  return (

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

      {contentTypes.map((item) => (

        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={`rounded-xl border p-6 transition ${
            value === item.id
              ? "border-cyan-500 bg-cyan-900"
              : "border-slate-700 bg-slate-800 hover:border-cyan-500"
          }`}
        >

          <div className="text-4xl">

            {item.icon}

          </div>

          <div className="mt-3 font-semibold">

            {item.title}

          </div>

        </button>

      ))}

    </div>

  );

}