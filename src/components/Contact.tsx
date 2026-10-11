import { ArrowUpRight, Mail } from "lucide-react";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { FacebookIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { site } from "@/data/site";

const channels = [
  { label: "LinkedIn", value: "Yousef Shohber", href: site.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: "Yousef-Shohber", href: site.links.github, Icon: GithubIcon },
  { label: "WhatsApp", value: site.phoneDisplay, href: site.links.whatsapp, Icon: WhatsappIcon },
  { label: "Facebook", value: "Yousef Shohber", href: site.links.facebook, Icon: FacebookIcon },
];

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Hello Yousef")}`;
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <SectionHead
        id="contact-title"
        index="05"
        label="Contact"
        title={
          <>
            Let’s talk about <em className="text-signal">your backend</em>.
          </>
        }
        intro={`${site.status}. Email is the quickest way to reach me.`}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <a
            href={mailto}
            className="group inline-flex items-center gap-4 break-all font-serif text-[clamp(1.7rem,4.4vw,3.6rem)] leading-tight tracking-[-0.01em] transition-colors hover:text-signal"
          >
            <Mail className="size-[0.8em] shrink-0" aria-hidden="true" />
            {site.email}
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CopyEmail email={site.email} />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <ul className="border-t border-line">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-signal"
                >
                  <Icon className="size-5 shrink-0 text-mute transition-colors group-hover:text-signal" />
                  <span className="flex-1">
                    <span className="eyebrow block">{label}</span>
                    <span className="text-sm">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
