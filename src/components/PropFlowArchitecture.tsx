import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { propflow } from "@/data/projects";

// A simplified, text-based version of the PropFlow architecture overview.
const pipeline = [
  "Helmet",
  "CORS",
  "Redis rate limiter",
  "Cookie parser",
  "Request validation",
  "Logging",
  "Global exception filter",
];

const modules = [
  { name: "Auth", note: "Email OTP, Google OAuth, JWT" },
  { name: "Users", note: "Profiles and roles" },
  { name: "Properties & units", note: "Owners, listings, availability" },
  { name: "Leases", note: "Request, approve, expire, terminate" },
  { name: "Payments", note: "Tracking and management" },
  { name: "Maintenance", note: "Requests and assignments" },
];

const services = [
  { name: "PostgreSQL", note: "TypeORM, migrations" },
  { name: "Redis", note: "Cache, OTPs, rate limits" },
  { name: "Cloudinary", note: "File storage" },
  { name: "SMTP", note: "OTP and notifications" },
  { name: "Google OAuth", note: "Sign-in" },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4 text-signal">{children}</p>;
}

function Connector() {
  return (
    <div className="flex items-center justify-center text-faint" aria-hidden="true">
      <ArrowDown className="size-5 lg:hidden" />
      <ArrowRight className="hidden size-5 lg:block" />
    </div>
  );
}

export function PropFlowArchitecture() {
  const overview = propflow.overview!;
  return (
    <figure className="border border-line bg-ink-2 p-5 sm:p-7">
      <figcaption className="sr-only">
        Simplified PropFlow architecture: clients call a NestJS API with a global middleware pipeline and six domain
        modules, backed by PostgreSQL, Redis, Cloudinary, SMTP and Google OAuth.
      </figcaption>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_auto_2.3fr_auto_1fr] lg:gap-5">
        <div>
          <Label>Clients</Label>
          <ul className="space-y-2 text-sm">
            <li className="border border-line px-3 py-2">Web app</li>
            <li className="border border-line px-3 py-2">Mobile app</li>
            <li className="border border-line px-3 py-2">Third-party integrations</li>
          </ul>
        </div>

        <Connector />

        <div className="border border-line-strong p-4 sm:p-5">
          <Label>NestJS API</Label>
          <p className="eyebrow mb-2">Global pipeline, in order</p>
          <ol className="mb-6 flex flex-wrap gap-x-1 gap-y-1.5 text-sm">
            {pipeline.map((step, i) => (
              <li key={step} className="flex items-center gap-1">
                <span className="bg-ink-3 px-2 py-1">{step}</span>
                {i < pipeline.length - 1 ? <span className="text-faint" aria-hidden="true">›</span> : null}
              </li>
            ))}
          </ol>
          <p className="eyebrow mb-2">Domain modules</p>
          <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {modules.map((m) => (
              <li key={m.name} className="bg-ink-2 px-3 py-2.5">
                <span className="block text-sm font-medium">{m.name}</span>
                <span className="block text-xs text-mute">{m.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <Connector />

        <div>
          <Label>Data & services</Label>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.name} className="border border-line px-3 py-2">
                <span className="block text-sm">{s.name}</span>
                <span className="block text-xs text-mute">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <p className="eyebrow">Simplified from the full architecture overview</p>
        <a
          href={overview.src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-bone underline decoration-line-strong underline-offset-4 transition-colors hover:text-signal"
        >
          Open full overview image
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </figure>
  );
}
