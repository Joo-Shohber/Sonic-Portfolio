import { Reveal } from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
};

export function SectionHead({ index, label, title, intro, id }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="eyebrow text-signal">{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <h2
          id={id}
          className="font-serif text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1] tracking-[-0.02em] lg:col-span-7"
        >
          {title}
        </h2>
        {intro ? (
          <p className="max-w-md text-[0.95rem] leading-relaxed text-mute lg:col-span-4 lg:col-start-9 lg:self-end">
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
