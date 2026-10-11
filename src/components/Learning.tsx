import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { learning, training } from "@/data/profile";

export function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <SectionHead
          id="learning-title"
          index="04"
          label="Learning & growth"
          title={
            <>
              The curriculum <em className="text-signal">behind</em> the projects.
            </>
          }
          intro="Coursework and self-study, listed separately on purpose. This is what I have studied, not professional experience; the work above shows what I have built with it."
        />

        <ol>
          {learning.map((mod) => (
            <li key={mod.index} className="border-t border-line">
              <Reveal className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-8">
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="font-mono text-xs text-signal">{mod.index}</span>
                  <h3 className="font-serif text-3xl leading-tight">{mod.title}</h3>
                </div>
                {"phases" in mod ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-8">
                    {mod.phases.map((phase, i) => (
                      <div key={phase.label}>
                        <p className="eyebrow mb-2">
                          Phase {i + 1} · {phase.label}
                        </p>
                        <p className="text-sm leading-relaxed text-mute">{phase.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-mute lg:col-span-8">{mod.topics}</p>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16 grid grid-cols-1 gap-6 border-t border-line-strong pt-8 lg:grid-cols-12 lg:gap-8">
          <h3 className="eyebrow lg:col-span-4">Training programs</h3>
          <ul className="lg:col-span-8">
            {training.map((t) => (
              <li
                key={t.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3 first:pt-0"
              >
                <span>
                  {t.name} <span className="text-mute">· {t.where}</span>
                </span>
                <span className="font-mono text-xs text-mute">{t.hours}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
