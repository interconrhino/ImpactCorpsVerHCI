"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  variant?: "link" | "button";
};

const defaultNavItems: NavItem[] = [
  { href: "/", label: "About Us" },
  { href: "/ourprogram", label: "Our Program" },
  { href: "/join", label: "Apply", variant: "button" },
];

export default function SiteHeader({
  navItems = defaultNavItems,
}: {
  navItems?: NavItem[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[color:var(--sand)]/95 shadow-[0_12px_24px_rgba(16,25,21,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "py-3" : "pb-6 pt-8"
        }`}
      >
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[color:var(--forest)]"
        >
          ImpactCorps
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.variant === "button"
                  ? "button-primary rounded-full px-5 py-2 text-sm font-semibold"
                  : "hover:text-[color:var(--ink)]"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
