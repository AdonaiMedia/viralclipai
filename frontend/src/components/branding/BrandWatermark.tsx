"use client";

import Image from "next/image";

interface Props {
  width?: number;
}

export default function BrandWatermark({
  width = 220,
}: Props) {
  return (
    <Image
      src="/branding/watermark.png"
      alt="ViralClip AI Watermark"
      width={width}
      height={70}
    />
  );
}