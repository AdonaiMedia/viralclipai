"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CreatorLayout({
  children,
}: Props) {

  return (

    <div className="mx-auto max-w-7xl space-y-8">

      {children}

    </div>

  );

}
