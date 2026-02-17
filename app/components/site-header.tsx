"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  variant?: "link" | "button";
};

const defaultNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/ourprogram", label: "Our Program" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Apply", variant: "button" },
];

export default function SiteHeader({
  navItems = defaultNavItems,
}: {
  navItems?: NavItem[];
}) {
  const SCROLL_ON = 24;
  const SCROLL_OFF = 8;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => (prev ? y > SCROLL_OFF : y > SCROLL_ON));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-[color:var(--sand)]/95 shadow-[0_12px_24px_rgba(16,25,21,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[color:var(--forest)]"
        >
          ImpactCorps
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.variant === "button"
                    ? "button-primary rounded-full px-5 py-2 text-sm font-semibold"
                    : `border-b-2 pb-1 transition ${
                        isActive(item.href)
                          ? "border-[color:var(--forest)] text-[color:var(--ink)]"
                          : "border-transparent hover:border-[color:var(--ink)]/40 hover:text-[color:var(--ink)]"
                      }`
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[color:var(--ink)]/70 transition hover:text-[color:var(--ink)] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div id="site-mobile-menu" className="md:hidden">
          <div className="mx-auto w-full max-w-6xl px-6 pb-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-[color:var(--stone)]/70 bg-[color:var(--sand)]/95 p-4 shadow-[0_12px_30px_rgba(16,25,21,0.08)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    item.variant === "button"
                      ? "button-primary inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold"
                      : `rounded-full px-4 py-2 text-sm font-semibold transition ${
                          isActive(item.href)
                            ? "text-[color:var(--ink)] underline decoration-[color:var(--forest)] decoration-2 underline-offset-4"
                            : "text-[color:var(--ink)]/80 hover:text-[color:var(--ink)]"
                        }`
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
