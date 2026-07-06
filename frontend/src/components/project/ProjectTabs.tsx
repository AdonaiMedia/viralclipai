"use client";

export default function ProjectTabs() {

  const tabs = [

    "Overview",

    "Video",

    "Analysis",

    "Clips",

    "Recap",

    "Translate",

    "Voice",

    "Thumbnail",

    "Titles",

    "Publish",

    "Analytics",

    "AI Coach",

  ];

  return (

    <div className="flex gap-3 overflow-auto py-6">

      {tabs.map((tab) => (

        <button
          key={tab}
          className="bg-slate-800 px-5 py-2 rounded-full whitespace-nowrap hover:bg-cyan-700"
        >

          {tab}

        </button>

      ))}

    </div>

  );

}