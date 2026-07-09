"use client";

import Image from "next/image";

interface Props {
  size?: number;
}

export default function BrandIcon({
  size = 40,
}: Props) {
  return (
    <Image
      src="/branding/icon.svg"
      alt="ViralClip AI"
      width={size}
      height={size}
      priority
    />
  );
}