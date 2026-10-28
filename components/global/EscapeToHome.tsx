"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function EscapeToHome() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.repeat) return;

      if (document.querySelector('[data-escape-modal="true"]')) {
        return;
      }

      router.push("/");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname, router]);

  return null;
}
