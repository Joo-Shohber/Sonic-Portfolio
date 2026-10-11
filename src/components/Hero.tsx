import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { site } from "@/data/site";

const ledger = [
  { label: "Core stack", value: "Node.js · NestJS · TypeScript" },
  { label: "Data", value: "PostgreSQL · MongoDB · Redis" },
  { label: "Focus", value: "Auth · concurrency · queues" },
  { label: "Built", value: "7 backend projects on GitHub" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div
        className="hero-rules pointer-events-none absolute inset-0 mx-auto max-w-[1320px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-14 sm:px-8 md:pt-20 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.65fr)] md:gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 md:col-span-1 lg:col-span-8">
            <p
              className="eyebrow rise flex items-start gap-3"
              style={{ "--d": "0ms" } as React.CSSProperties}
            >
              <span
                className="mt-[0.35em] size-2 shrink-0 rounded-full bg-signal"
                aria-hidden="true"
              />
              <span className="min-w-0">{site.status}</span>
            </p>

            <h1
              className="rise mt-8 font-serif text-[clamp(2.8rem,7.2vw,6.8rem)] leading-[0.94] tracking-[-0.03em]"
              style={{ "--d": "100ms" } as React.CSSProperties}
            >
              <span className="sr-only">
                {site.name}, {site.role}:{" "}
              </span>
              APIs that stay <em className="text-signal">correct</em> when
              requests collide.
            </h1>

            <p
              className="rise mt-10 max-w-xl text-lg leading-relaxed text-mute"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              <strong className="font-medium text-bone">{site.name}</strong> —
              Backend developer and fourth-year IT student at Zagazig
              University. I build reliable APIs with Node.js, TypeScript, and
              NestJS. I focus on secure authentication, transactional data
              integrity, background jobs, and handling concurrent requests.
            </p>

            <div
              className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ "--d": "320ms" } as React.CSSProperties}
            >
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                See selected work
                <ArrowDown
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href={site.cv}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 transition-colors hover:border-bone"
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </a>

              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-mute transition-colors hover:border-signal hover:text-signal"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email me
              </a>
            </div>
          </div>

          <figure
            className="rise mx-auto w-full max-w-xs md:col-span-1 md:col-start-2 md:row-start-1 md:max-w-none lg:col-span-4 lg:col-start-9"
            style={{ "--d": "260ms" } as React.CSSProperties}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/yousef.webp"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 38vw, 90vw"
                className="object-cover object-[50%_18%] contrast-[1.03] saturate-[0.85]"
              />
            </div>

            <figcaption className="eyebrow mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-line lg:mt-20 lg:grid-cols-4">
          {ledger.map((item) => (
            <div
              key={item.label}
              className="border-b border-line py-5 pr-4 lg:border-b-0 lg:pr-6"
            >
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-2 text-sm text-bone">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}