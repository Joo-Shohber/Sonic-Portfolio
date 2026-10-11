import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8 lg:px-12">
        <p className="eyebrow">
          © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
        </p>
        <a href="#top" className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-bone">
          Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
