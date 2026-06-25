"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-lime" />
            <span className="text-cream">nodir</span>
            <span className="text-ash">/dev</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-line font-mono text-xs uppercase tracking-[0.18em] text-sand transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-stone/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:border-lime hover:text-lime"
            >
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              Available
            </a>
          </div>

          {/* Hamburger (hidden while menu is open — the menu has its own close) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`h-10 w-10 items-center justify-center md:hidden ${
              open ? "hidden" : "flex"
            }`}
          >
            <div className="relative h-3.5 w-6">
              <span className="absolute left-0 top-0 h-px w-6 bg-cream" />
              <span className="absolute left-0 top-1.5 h-px w-6 bg-cream" />
              <span className="absolute left-0 top-3 h-px w-6 bg-cream" />
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu — solid, above everything */}
      {open ? (
        <div
          className="menu-in fixed inset-0 z-50 flex flex-col md:hidden"
          style={{ backgroundColor: "#0b0a09" }}
        >
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 font-mono text-sm tracking-tight"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-lime" />
              <span className="text-cream">nodir</span>
              <span className="text-ash">/dev</span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <div className="relative h-4 w-6">
                <span className="absolute left-0 top-1.5 h-px w-6 rotate-45 bg-cream" />
                <span className="absolute left-0 top-1.5 h-px w-6 -rotate-45 bg-cream" />
              </div>
            </button>
          </div>

          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 pt-6">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-5 font-display text-3xl text-cream"
                >
                  {l.label}
                  <span className="font-mono text-xs text-ash">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
