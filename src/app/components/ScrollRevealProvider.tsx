"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = ScrollReveal({
        distance: "500px",
        duration: 1000,
        delay: 400,
        reset: true,
      });

      sr.reveal(".reveal", { origin: "bottom" });
      sr.reveal(".reveal-left", { origin: "left" });
      sr.reveal(".reveal-right", { origin: "right" });
      sr.reveal(".reveal-top", { origin: "top" });
    }
  }, []);

  return <>{children}</>;
}
