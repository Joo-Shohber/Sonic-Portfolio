import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { GithubIcon } from "./icons";
import {
  clinic,
  eventBooking,
  moreWork,
  propflow,
  type Flow,
  type Project,
  type ProjectLink,
} from "@/data/projects";

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  return kind === "github" ? (
    <GithubIcon className="size-4" />
  ) : (
    <BookOpen className="size-4" aria-hidden="true" />
  );
}

function ProjectLinks({
  links,
  title,
}: {
  links: ProjectLink[];
  title: string;
}) {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm transition-colors hover:border-signal hover:text-signal"
          >
            <LinkIcon kind={link.kind} />
            {link.label}
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">
              for {title} (opens in a new tab)
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul
      aria-label="Technologies"
      className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs leading-6 text-mute"
    >
      {items.map((item) => (
        <li
          key={item}
          className="after:ml-3 after:text-faint after:content-['/'] last:after:content-none"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Steps({ flow }: { flow: Flow }) {
  return (
    <div>
      <h4 className="eyebrow mb-4 text-signal">{flow.label}</h4>
      <ol className="border-l border-line-strong">
        {flow.steps.map((step, i) => (
          <li key={step.title} className="relative pb-5 pl-6 last:pb-0">
            <span
              className="absolute -left-[5px] top-[0.55rem] size-[9px] rounded-full border border-line-strong bg-ink"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[0.95rem] leading-snug">{step.title}</p>
            {step.detail ? (
              <p className="mt-1 text-sm text-mute">{step.detail}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function OverviewThumb({ project }: { project: Project }) {
  const o = project.overview!;

  return (
    <a
      href={o.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-line transition-colors hover:border-line-strong"
    >
      <Image
        src={o.src}
        alt={o.alt}
        width={o.width}
        height={o.height}
        sizes="(min-width: 1024px) 60vw, 90vw"
        className="h-auto w-full"
      />
      <span className="eyebrow flex items-center justify-between border-t border-line px-3 py-2.5 transition-colors group-hover:text-bone">
        Architecture overview
        <span className="inline-flex items-center gap-1">
          Full size
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </span>
    </a>
  );
}

function ProjectHeader({
  project,
  label,
  index,
}: {
  project: Project;
  label: string;
  index: string;
}) {
  return (
    <header>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-signal">{index}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        {label}
      </p>
      <h3 className="mt-5 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] tracking-[-0.02em]">
        {project.title}
      </h3>
      <p className="mt-2 text-mute">{project.subtitle}</p>
    </header>
  );
}

function FeaturedPropFlow() {
  return (
    <article
      aria-labelledby="propflow-title"
      className="border-t border-line-strong pt-10"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div id="propflow-title">
              <ProjectHeader
                project={propflow}
                label="Featured · NestJS"
                index="01"
              />
            </div>
            <p className="mt-8 leading-relaxed text-mute">
              {propflow.summary}
            </p>
            <div className="mt-8">
              <Stack items={propflow.stack} />
            </div>
            <div className="mt-8">
              <ProjectLinks
                links={propflow.links}
                title={propflow.title}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <OverviewThumb project={propflow} />
          </div>
        </div>
      </Reveal>

      <div className="mt-14">
        <p className="eyebrow mb-6">Engineering decisions</p>
        <dl className="grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2 xl:grid-cols-3">
          {propflow.decisions!.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 0.06}
              className="border-t border-line py-6"
            >
              <dt className="flex items-baseline gap-3 font-serif text-2xl leading-tight">
                <span className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {d.title}
              </dt>
              <dd className="mt-3 text-[0.95rem] leading-relaxed text-mute">
                {d.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </article>
  );
}

function DeepDive({
  project,
  index,
  label,
}: {
  project: Project;
  index: string;
  label: string;
}) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="border-t border-line-strong pt-10"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div id={`${project.slug}-title`}>
              <ProjectHeader
                project={project}
                label={label}
                index={index}
              />
            </div>
            <p className="mt-8 leading-relaxed text-mute">
              {project.summary}
            </p>
            <div className="mt-8">
              <Stack items={project.stack} />
            </div>
            <div className="mt-8">
              <ProjectLinks
                links={project.links}
                title={project.title}
              />
            </div>
            {project.decisions ? (
              <dl className="mt-10 space-y-5 border-t border-line pt-6">
                {project.decisions.map((d) => (
                  <div key={d.title}>
                    <dt className="eyebrow text-bone">{d.title}</dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-mute">
                      {d.body}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {project.flows!.map((flow) => (
                <Steps key={flow.label} flow={flow} />
              ))}
            </div>
            <div className="mt-8">
              <OverviewThumb project={project} />
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function MoreWork() {
  return (
    <section
      aria-labelledby="more-work"
      className="border-t border-line-strong pt-10"
    >
      <div className="mb-8 flex items-baseline gap-4">
        <span className="eyebrow text-signal">04</span>
        <h3
          id="more-work"
          className="font-serif text-3xl tracking-[-0.01em] md:text-4xl"
        >
          More work
        </h3>
      </div>
      <ul>
        {moreWork.map((p) => (
          <li
            key={p.title}
            className="border-t border-line py-7 last:border-b"
          >
            <Reveal className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
              <h4 className="font-serif text-2xl leading-tight lg:col-span-3">
                {p.title}
              </h4>
              <p className="text-[0.95rem] leading-relaxed text-mute lg:col-span-5">
                {p.summary}
              </p>
              <div className="flex flex-col gap-4 lg:col-span-4">
                <Stack items={p.stack} />
                <ProjectLinks links={p.links} title={p.title} />
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <SectionHead
        id="work-title"
        index="01"
        label="Selected work"
        title={
          <>
            Systems built end to end,{" "}
            <em className="text-signal">with the hard parts</em> written down.
          </>
        }
        intro="Three projects are documented in depth: how they are structured and what they protect against. Four more are listed after them."
      />
      <div className="space-y-24 md:space-y-32">
        <FeaturedPropFlow />
        <DeepDive
          project={clinic}
          index="02"
          label="Express · Redis · BullMQ"
        />
        <DeepDive
          project={eventBooking}
          index="03"
          label="Express · Redis · BullMQ"
        />
        <MoreWork />
      </div>
    </section>
  );
}
