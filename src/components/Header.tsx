"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    // The hero ("top") is observed too, so no nav item stays highlighted above the first section.
    const sections = ["top", ...nav.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl italic leading-none">Yousef Shohber</span>
          <span className="eyebrow hidden sm:inline">Backend</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const current = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={current ? "location" : undefined}
                className={`text-sm transition-colors hover:text-bone ${current ? "text-bone" : "text-mute"}`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`mt-0.5 block h-px bg-signal transition-all ${current ? "w-full" : "w-0"}`}
                />
              </a>
            );
          })}
          <a
            href={site.cv}
            download
            className="rounded-full border border-line-strong px-4 py-1.5 text-sm transition-colors hover:border-signal hover:text-signal"
          >
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-5 pb-10 pt-6 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-serif text-4xl"
                >
                  {item.label}
                  <span className="eyebrow">{String(nav.indexOf(item) + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.cv}
            download
            className="mt-8 inline-flex rounded-full bg-signal px-6 py-3 font-medium text-ink"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
