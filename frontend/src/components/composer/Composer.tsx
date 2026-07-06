"use client";

import { useState } from "react";

import ComposerHeader from "./ComposerHeader";
import ContentTypePicker from "./ContentTypePicker";

export default function Composer() {

  const [type, setType] =
    useState("video");

  return (

    <div className="space-y-8">

      <ComposerHeader />

      <ContentTypePicker
        value={type}
        onChange={setType}
      />

      <div className="rounded-xl bg-slate-800 p-8">

        <h2 className="text-2xl font-bold">

          Selected Content

        </h2>

        <p className="text-slate-400 mt-3">

          {type.toUpperCase()}

        </p>

      </div>

    </div>

  );

}