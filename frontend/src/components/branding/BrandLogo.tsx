"use client";

import Image from "next/image";

interface BrandLogoProps {
  size?: number;
  showText?: boolean;
}

export default function BrandLogo({
  size = 44,
  showText = true,
}: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">

      <Image
        src="/branding/logo.svg"
        alt="ViralClip AI"
        width={size}
        height={size}
        priority
      />

      {showText && (
        <div className="leading-tight">

          <h1 className="text-xl font-bold text-white">
            ViralClip AI
          </h1>

          <p className="text-xs text-slate-400">
            AI Powered • Viral • Automated
          </p>

        </div>
      )}

    </div>
  );
}