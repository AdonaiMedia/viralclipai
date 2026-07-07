"use client";

import { useState } from "react";

export default function ProjectTabs() {

  const [activeTab, setActiveTab] = useState("Overview");

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

    <div className="flex gap-3 overflow-x-auto py-6">

      {tabs.map((tab) => (

        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full whitespace-nowrap transition font-medium ${
            activeTab === tab
              ? "bg-cyan-600 text-white"
              : "bg-slate-800 hover:bg-slate-700 text-slate-300"
          }`}
        >

          {tab}

        </button>

      ))}

    </div>

  );

}