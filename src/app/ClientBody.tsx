"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = `antialiased ${className || ""}`.trim();
  }, [className]);

  return <body className={`antialiased ${className || ""}`}>{children}</body>;
}
