"use client";
import("scrollreveal");

import { useEffect } from "react";

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let sr: any;

    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        sr = ScrollReveal.default({
          distance: "40px",
          duration: 800,
          delay: 150,
          reset: false,
        });

        sr.reveal(".reveal", { origin: "bottom" });
        sr.reveal(".reveal-left", { origin: "left" });
        sr.reveal(".reveal-right", { origin: "right" });
        sr.reveal(".reveal-top", { origin: "top" });
      });
    }

    return () => {
      sr?.destroy();
    };
  }, []);

  return <>{children}</>;
}
