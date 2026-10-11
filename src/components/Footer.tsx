import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="eyebrow leading-relaxed">
          © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
        </p>

        <a
          href="#top"
          className="eyebrow inline-flex w-fit shrink-0 items-center gap-2 self-end transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone sm:self-auto"
        >
          Back to top
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
