"use client";

import Image from "next/image";
import { useState } from "react";

type faviconType = {
  domain: string;
  alt: string;
};

export default function Favicon({ domain }: faviconType) {
  const [hasError, setHasError] = useState(false);

  function extractDomain(url: string) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    );
    if (match) {
      const fullDomain = match[1];
      const parts = fullDomain.split(".");
      if (parts.length >= 2) {
        return parts[0];
      }
    }
  }

  if (hasError) {
    return null;
  }

  return (
    <Image
      className="mr-2"
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=17`}
      width={17}
      height={17}
      alt={extractDomain(domain) || ""}
      onError={() => setHasError(true)}
    />
  );
}
