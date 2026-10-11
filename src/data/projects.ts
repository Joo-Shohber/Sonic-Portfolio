// Project content. Everything here comes from the previous portfolio, the CV
// and the architecture overviews supplied with it. Add or edit entries freely.

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "docs";
};
export type Step = { title: string; detail?: string };
export type Flow = { label: string; steps: Step[] };
export type Decision = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  overview?: { src: string; alt: string; width: number; height: number };
  decisions?: Decision[];
  flows?: Flow[];
};

export const propflow: Project = {
  slug: "propflow",
  title: "PropFlow",
  subtitle: "Property & rental management API",
  summary:
    "One workflow for the operational lifecycle of rental properties: properties and units, tenants, lease contracts, payments and maintenance requests, with explicit roles for tenants, owners, maintenance staff and admins so that data stays consistent and visible to the right people.",
  stack: [
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "TypeORM",
    "Redis",
    "JWT",
    "Google OAuth",
    "Zod",
    "Cloudinary",
    "Swagger",
  ],
  links: [
    {
      label: "API docs (Swagger)",
      href: "https://prop-flow-black.vercel.app/api/docs",
      kind: "docs",
    },
    {
      label: "Source on GitHub",
      href: "https://github.com/Yousef-Shohber/Prop-Flow",
      kind: "github",
    },
  ],
  overview: {
    src: "/images/propflow-architecture.webp",
    alt: "PropFlow architecture overview: clients, NestJS API with global middleware and domain modules, PostgreSQL, Redis, Cloudinary, SMTP and Google OAuth, plus business flow, roles, security, caching and rate limiting.",
    width: 1536,
    height: 1024,
  },
  decisions: [
    {
      title: "Session handling",
      body: "Short-lived JWT access tokens and longer-lived refresh tokens are delivered as httpOnly cookies. Email OTPs for verification and password reset are held in Redis, and Google OAuth 2.0 is supported alongside email login.",
    },
    {
      title: "Role and resource-level authorization",
      body: "Role-based guards separate tenant, owner, maintenance staff and admin capabilities. On top of roles, resource-level checks make sure owners and staff only act on the records that belong to them.",
    },
    {
      title: "Redis-backed rate limiting",
      body: "Throttling is applied per IP and per user, with stricter limits on login, token refresh and OTP endpoints than on the general API.",
    },
    {
      title: "Cache-aside reads",
      body: "Property, unit and listing reads are cached in Redis with a short, configurable TTL, and invalidated whenever the underlying records are created, updated or deleted.",
    },
    {
      title: "Upload validation",
      body: "Files are checked by MIME type and magic bytes before they are sent to Cloudinary, instead of trusting the client-supplied content type.",
    },
    {
      title: "Predictable configuration and errors",
      body: "Environment variables are validated with Zod at startup, schema changes are tracked with TypeORM migrations, and a global exception filter keeps stack traces out of production responses. Passwords are hashed with bcrypt.",
    },
  ],
};

export const clinic: Project = {
  slug: "clinic-system",
  title: "Clinic Appointment System",
  subtitle: "Booking API with payments and real-time updates",
  summary:
    "A REST API for clinic appointment booking that prevents double-booking under concurrent requests using atomic Redis locks and Lua scripts. Background workers expire unpaid appointments, payments run through Paymob, and patients and doctors get live updates over Socket.IO.",
  stack: [
    "Node.js",
    "TypeScript",
    "Express",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Socket.IO",
    "Paymob",
    "Google OAuth",
    "Cloudinary",
    "Zod",
  ],
  links: [
    {
      label: "Source on GitHub",
      href: "https://github.com/Yousef-Shohber/Clinic-System",
      kind: "github",
    },
  ],
  overview: {
    src: "/images/clinic-architecture.webp",
    alt: "Clinic Appointment Booking System architecture overview: Express middleware stack, service layer, MongoDB and Redis, BullMQ workers, Socket.IO events, Paymob payment flow and database ER diagram.",
    width: 1536,
    height: 1024,
  },
  flows: [
    {
      label: "Booking flow",
      steps: [
        { title: "Patient picks a doctor, date and time" },
        { title: "Doctor verification and slot availability are checked" },
        {
          title: "A Redis lock is acquired atomically",
          detail: "Lua script, so two requests cannot reserve the same slot",
        },
        { title: "A pending appointment is created with a 15-minute expiry" },
        { title: "An expiry job is queued in BullMQ" },
        { title: "Cache is invalidated and a WebSocket event is emitted" },
        { title: "The lock is released" },
      ],
    },
    {
      label: "Payment flow",
      steps: [
        { title: "A payment intent is created for the appointment" },
        { title: "The patient is redirected to Paymob" },
        {
          title: "Paymob calls the webhook",
          detail: "Signature verified with HMAC-SHA512",
        },
        { title: "Appointment status is updated" },
        { title: "On success the expiry job is removed" },
        { title: "A notification is sent and an event is emitted" },
      ],
    },
  ],
  decisions: [
    {
      title: "Concurrency",
      body: "The Redis lock handles contention at request time, and a unique compound index on doctor, date and start time exists as a database-level constraint.",
    },
    {
      title: "Expiry",
      body: "An expiration worker marks still-pending appointments as expired, refunds through Paymob if a payment was made, invalidates the cache and notifies the patient.",
    },
    {
      title: "Webhook handling",
      body: "The Paymob route uses a raw body parser mounted ahead of the JSON parser, and each callback is verified with an HMAC-SHA512 signature.",
    },
    {
      title: "Tokens and limits",
      body: "JWT refresh-token rotation with reuse detection, Redis-backed rate limiting and idempotency keys.",
    },
  ],
};

export const eventBooking: Project = {
  slug: "event-booking",
  title: "Event Booking & Queue Management",
  subtitle: "Capacity-safe booking with a FIFO waitlist",
  summary:
    "A booking API with real-time queue management. Slot capacity is decremented atomically in Redis, unconfirmed bookings expire through delayed BullMQ jobs, and a first-in-first-out waitlist promotes the next person automatically when a slot frees up.",
  stack: [
    "Node.js",
    "TypeScript",
    "Express",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Socket.IO",
    "JWT",
    "Google OAuth",
    "Zod",
    "Pino",
  ],
  links: [
    {
      label: "Source on GitHub",
      href: "https://github.com/Yousef-Shohber/Booking-System",
      kind: "github",
    },
  ],
  overview: {
    src: "/images/event-booking-architecture.webp",
    alt: "Event Booking System architecture overview: Express API server, MongoDB, Redis, BullMQ workers, Socket.IO with Redis adapter, booking flow, queue flow, API reference and WebSocket events.",
    width: 1536,
    height: 1024,
  },
  flows: [
    {
      label: "Booking flow",
      steps: [
        { title: "A user books a slot", detail: "POST /bookings" },
        {
          title: "A Redis Lua script decrements remaining capacity atomically",
        },
        { title: "A MongoDB transaction records the booking" },
        { title: "A delayed BullMQ job is scheduled to expire it" },
        {
          title:
            "If it expires: mark EXPIRED, release the Redis counter, promote the next person",
        },
      ],
    },
    {
      label: "Waitlist flow",
      steps: [
        {
          title: "The user joins the queue",
          detail: "Redis sorted set scored by join time",
        },
        {
          title:
            "When a slot frees up, the next entries are popped in FIFO order",
        },
        {
          title: "They are marked NOTIFIED with a confirmation deadline",
          detail: "Enforced by a delayed job and pushed over WebSocket",
        },
        { title: "The user confirms through the same atomic Lua decrement" },
        {
          title:
            "If the deadline passes, the entry expires and the next person is promoted",
        },
      ],
    },
  ],
  decisions: [
    {
      title: "Concurrency",
      body: "Capacity is decremented atomically by a Redis Lua script before the MongoDB transaction records the booking, so concurrent requests cannot oversell a slot.",
    },
    {
      title: "Expiry",
      body: "Each booking gets a delayed BullMQ job. If it is not confirmed in time, the booking is marked EXPIRED, the Redis counter is released and the next person in the queue is promoted.",
    },
    {
      title: "Waitlist",
      body: "Waiting users sit in a Redis sorted set scored by join time. Promoted users get a confirmation deadline enforced by a delayed job, and are notified over WebSocket.",
    },
    {
      title: "Tokens and limits",
      body: "JWT refresh-token rotation with reuse detection, Redis-backed rate limiting on sensitive routes, and idempotency for booking and queue actions.",
    },
  ],
};

export type IndexProject = {
  title: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
};

export const moreWork: IndexProject[] = [
  {
    title: "Small E-commerce API",
    summary:
      "NestJS backend covering authentication and authorization, database integration, validation, file uploads, email services, API documentation, unit tests and deployment.",
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Google OAuth",
      "RBAC",
      "Swagger",
    ],
    links: [
      {
        label: "Docs",
        href: "https://nest-course-one.vercel.app/swagger",
        kind: "docs",
      },
      {
        label: "GitHub",
        href: "https://github.com/Yousef-Shohber/Nest-JS",
        kind: "github",
      },
    ],
  },
  {
    title: "FreelanceHub Platform API",
    summary:
      "Freelance marketplace backend covering the hiring lifecycle from job posting to contract completion. Proposal acceptance is atomic (findOneAndUpdate) so concurrent acceptances cannot race, and email notifications run through BullMQ workers.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "JWT",
      "Google OAuth",
      "RBAC",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yousef-Shohber/FreelanceHub",
        kind: "github",
      },
    ],
  },
  {
    title: "Restaurant Management API",
    summary:
      "Menu, order and customer management with admin endpoints, built with MVC architecture and modular routing.",
    stack: ["Express", "MongoDB", "MVC", "REST"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yousef-Shohber/Restaurant",
        kind: "github",
      },
    ],
  },
  {
    title: "Blog Application API",
    summary:
      "RESTful blogging backend with JWT authentication, role-based authorization, post CRUD, nested comments and user profiles.",
    stack: ["MongoDB", "JWT", "OAuth2", "REST"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yousef-Shohber/Blog-App",
        kind: "github",
      },
    ],
  },
];
