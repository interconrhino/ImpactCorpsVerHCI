"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname?.startsWith("/join")) {
    return null;
  }

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 text-sm text-[color:var(--ink)]/60">
      © 2026 Copyright ImpactCorps in Cambridge, MA 02138
      <br />
      ImpactCorps is a graduate student initiative at Harvard Kennedy School, developed in
      fulfilment of PAE requirements.
    </footer>
  );
}
