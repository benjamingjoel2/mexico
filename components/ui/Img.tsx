"use client";

import Image from "next/image";
import { images, type ImageKey } from "@/data/images";
import { useT } from "@/i18n/client";

interface Props {
  image: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
  alt?: string;
}

/** next/image wrapper that resolves images by registry key. Parent must be relative + sized. */
export function Img({ image, sizes, className = "", priority, alt }: Props) {
  const t = useT();
  const img = images[image] ?? images["hero-cenote"];
  return (
    <Image
      src={img.src}
      alt={alt ?? t(img.alt)}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
