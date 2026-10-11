import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { about } from "@/data/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <SectionHead
        id="about-title"
        index="03"
        label="About"
        title={
          <>
            Interested in the <em className="text-signal">failure cases</em>.
          </>
        }
      />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6">
          <p className="font-serif text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.2] tracking-[-0.01em]">{about.lead}</p>
          <div className="mt-10 space-y-5 text-[1.02rem] leading-relaxed text-mute">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 border-t border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
          <h3 className="eyebrow mb-6">How my work progressed</h3>
          <ol className="border-l border-line-strong">
            {about.journey.map((step, i) => (
              <li key={step.label} className="relative pb-8 pl-7 last:pb-0">
                <span
                  className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-signal"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-serif text-2xl leading-tight">{step.label}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
