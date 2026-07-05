"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Section({
  title,
  children,
}: Props) {

  return (

    <section className="mb-8">

      <h2 className="text-2xl font-bold mb-4">

        {title}

      </h2>

      {children}

    </section>

  );

}