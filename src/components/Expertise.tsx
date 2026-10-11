import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { expertise } from "@/data/profile";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="border-y border-line bg-ink-2"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <SectionHead
          id="expertise-title"
          index="02"
          label="Technical expertise"
          title={
            <>
              What I use, <em className="text-signal">and where</em>.
            </>
          }
          intro="Grouped by the problem each tool solves, with the projects where it is used."
        />
        <ul>
          {expertise.map((group) => (
            <li key={group.title} className="border-t border-line last:border-b">
              <Reveal className="grid grid-cols-1 gap-5 py-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-3xl leading-tight">{group.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{group.note}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-x-2 gap-y-2 lg:col-span-6">
                  {group.items.map((item) => (
                    <li key={item} className="border border-line px-3 py-1.5 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="eyebrow lg:col-span-2 lg:text-right">
                  <span className="block text-faint">Used in</span>
                  <span className="mt-1 block normal-case tracking-normal text-mute">
                    {group.usedIn.join(", ")}
                  </span>
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
