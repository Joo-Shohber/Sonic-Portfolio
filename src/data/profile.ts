// Expertise, journey and learning content.
// "Expertise" lists what is used in the projects. "Learning" lists coursework and
// self-study and is intentionally kept separate from professional experience.

export const expertise = [
  {
    title: "API design & architecture",
    note: "Express with MVC, and NestJS with modules, dependency injection, guards, interceptors, pipes and filters.",
    items: [
      "Node.js",
      "TypeScript",
      "Express",
      "NestJS",
      "REST design: pagination, filtering, versioning",
      "Swagger / OpenAPI",
    ],
    usedIn: ["PropFlow", "E-commerce API", "Clinic", "Event Booking"],
  },
  {
    title: "Authentication & security",
    note: "Token handling, authorization boundaries and request hardening.",
    items: [
      "JWT access and refresh tokens",
      "Refresh-token rotation with reuse detection",
      "Google OAuth 2.0",
      "Email OTP",
      "bcrypt",
      "RBAC and resource-level authorization",
      "Helmet, CORS, rate limiting",
      "XSS and CSRF protection",
      "Idempotency keys",
      "Zod validation",
    ],
    usedIn: ["PropFlow", "Clinic", "Event Booking", "FreelanceHub"],
  },
  {
    title: "Data layer",
    note: "Relational and document stores, with Redis in front where it earns its place.",
    items: [
      "PostgreSQL",
      "TypeORM and migrations",
      "MongoDB and Mongoose",
      "Transactions",
      "TTL indexes",
      "Redis caching",
    ],
    usedIn: ["PropFlow", "Clinic", "Event Booking"],
  },
  {
    title: "Concurrency, queues & real-time",
    note: "Keeping state correct when many requests touch the same resource.",
    items: [
      "Redis Lua scripts for atomic operations",
      "Distributed locking",
      "BullMQ workers and delayed jobs",
      "FIFO waitlists on Redis sorted sets",
      "Socket.IO with the Redis adapter",
      "Redis Pub/Sub",
    ],
    usedIn: ["Clinic", "Event Booking", "FreelanceHub"],
  },
  {
    title: "Integrations & delivery",
    note: "Third-party services, uploads, logging and operational basics.",
    items: [
      "Paymob: HMAC-SHA512 webhooks, iframe flow, refunds",
      "Cloudinary and Multer",
      "Nodemailer",
      "Pino, Winston, Morgan",
      "Health checks and graceful shutdown",
      "Git, GitHub, Postman",
    ],
    usedIn: ["Clinic", "PropFlow"],
  },
] as const;

export const about = {
  lead: "I enjoy the part of backend work that users never see: making sure two requests can’t book the same slot, a stolen refresh token can’t be replayed, and a failed payment doesn’t leave a half-finished record behind.",
  paragraphs: [
    "I’m a fourth-year Information Technology student at Zagazig University. I started with JavaScript and the MEAN stack, then narrowed in on the server side, where the interesting problems are correctness, security and what happens when things fail.",
    "My early projects were Express APIs built around CRUD, authentication and role-based access. The later ones push into concurrency and background work: Redis Lua scripts for atomic reservations, BullMQ for expiry and notifications, Socket.IO for live updates. More recently I’ve moved to NestJS and PostgreSQL, and PropFlow is where I’m applying that structure end to end.",
  ],
  journey: [
    {
      label: "Foundations",
      text: "JavaScript, TypeScript and the MEAN stack with a backend focus.",
    },
    {
      label: "Express APIs",
      text: "Restaurant, Blog and FreelanceHub: REST design, JWT auth, RBAC.",
    },
    {
      label: "Concurrency & real-time",
      text: "Event Booking and Clinic: atomic Redis scripts, BullMQ, Socket.IO, Paymob.",
    },
    {
      label: "NestJS & PostgreSQL",
      text: "E-commerce API and PropFlow: modules, DI, guards, TypeORM migrations.",
    },
  ],
  facts: [
    {
      label: "Education",
      value: "B.Sc. Information Technology, Zagazig University (expected 2027)",
    },
    {
      label: "Languages",
      value: "Arabic (native), English (intermediate, technical)",
    },
    { label: "Based in", value: "Cairo, Egypt" },
  ],
} as const;

export const training = [
  {
    name: "MEAN Stack Development",
    where: "National Telecommunication Institute (NTI), Zagazig",
    hours: "210 hours",
  },
  {
    name: "The Complete JavaScript Course 2025",
    where: "Udemy",
    hours: "71 hours",
  },
  {
    name: "Modern JavaScript & Backend Node.js",
    where: "Manara",
    hours: "40 hours",
  },
] as const;

export const learning = [
  {
    index: "01",
    title: "Web foundations",
    topics:
      "HTML5, CSS3 and responsive design · modern JavaScript (promises, async/await) · DOM and events · HTTP: methods, headers, status codes, cookies · TypeScript",
  },
  {
    index: "02",
    title: "Node.js & Express",
    topics:
      "Event loop and non-blocking I/O · routing, middleware and error handling · REST design · Zod and Joi validation · cookies, JWT, OAuth2 and session management · CORS, Helmet and rate-limiting strategies · Multer and Cloudinary · Nodemailer and Resend · Morgan, Winston and Pino · idempotency · Redis caching and compression · BullMQ · health checks and graceful shutdown · Swagger / OpenAPI",
  },
  {
    index: "03",
    title: "Databases",
    topics:
      "PostgreSQL, SQL, joins, indexing and transactions · schema design and normalization · migrations · connection pooling with pg-pool · MongoDB, aggregation pipeline and Mongoose · Redis fundamentals · query and index optimization",
  },
  {
    index: "04",
    title: "NestJS",
    topics: "",
    phases: [
      {
        label: "Architecture & core concepts",
        text: "NestJS versus Express · modules, controllers, services · dependency injection · decorators and metadata · Nest CLI · request lifecycle: middleware, guards, pipes, interceptors, filters.",
      },
      {
        label: "Data & authentication",
        text: "TypeORM with PostgreSQL and the repository pattern · Prisma as an alternative · transactions · Passport.js with @nestjs/jwt · access and refresh token strategies · role-based guards.",
      },
      {
        label: "Advanced patterns & production",
        text: "@nestjs/config with Zod validation · BullMQ queues · Redis caching · WebSockets with Socket.IO gateways · Multer and Cloudinary uploads · @nestjs/swagger · @nestjs/terminus health checks.",
      },
    ],
  },
] as const;
