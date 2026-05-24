/**
 * Single source of truth for all site copy.
 * Edit here, redeploy.
 */

export const site = {
  name: "Ahmad Yousif AlFaraj",
  shortName: "Ahmad AlFaraj",
  role: "Developer & Automation Consultant",
  tagline:
    "I build software for operators — precise, durable, and unhurried. Custom web apps, APIs, and automation tooling.",
  url: "https://ahmadalfaraj.com",
  location: "Jubail Industrial City, Saudi Arabia",
  email: "hello@ahmadalfaraj.com", // TODO: replace with Ahmad's address
  linkedin: "https://www.linkedin.com/in/ahmadalfaraj", // TODO: confirm slug
  whatsapp: "", // TODO: optional, full intl format e.g. "+966500000000"
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
];

/**
 * Default tier data used as seed values for the database.
 * Once seeded, the live `/pricing` page reads from the DB and Ahmad edits via /admin.
 * Prices stored in SAR halalas (smallest unit) — like cents — so Stripe math is exact.
 */
export const pricingSeed = [
  {
    slug: "starter-brief",
    name: "Starter Brief",
    tagline: "For one clear problem, solved well.",
    priceSarHalalas: 800000, // SAR 8,000.00
    priceUsdCents: 213500, // ~USD 2,135.00
    cadence: "one-time" as const,
    features: [
      "One focused tool — form, dashboard, integration, or small automation",
      "Two-week build window",
      "Source code yours, deployed to your host",
      "One round of revisions",
      "14-day post-launch support",
    ],
    sortOrder: 1,
    active: true,
  },
  {
    slug: "standard-build",
    name: "Standard Build",
    tagline: "A full product surface, end to end.",
    priceSarHalalas: 2400000, // SAR 24,000.00
    priceUsdCents: 640000, // ~USD 6,400.00
    cadence: "one-time" as const,
    features: [
      "Multi-page web application or API + frontend",
      "Database, authentication, role permissions",
      "Four-to-six-week build window",
      "Deployment, written documentation, live walkthrough",
      "30-day post-launch support",
    ],
    sortOrder: 2,
    active: true,
    featured: true,
  },
  {
    slug: "studio-engagement",
    name: "Studio Engagement",
    tagline: "A team of one, embedded with you.",
    priceSarHalalas: 900000, // SAR 9,000.00 / month
    priceUsdCents: 240000, // ~USD 2,400.00 / month
    cadence: "monthly" as const,
    features: [
      "Ongoing development time — roughly ten working days per month",
      "Weekly written progress",
      "Discovery and planning included",
      "Minimum three-month commitment",
      "For products that need someone who stays",
    ],
    sortOrder: 3,
    active: true,
  },
];

export const pricing = {
  eyebrow: "Pricing",
  heading: "Three shapes of work,",
  headingItalic: "priced honestly.",
  intro:
    "Most consultants quote in private. I'd rather you knew what to expect before you wrote the first message. The numbers below cover the most common shapes of engagement — beyond those, I'm happy to price a custom scope.",
  notes: [
    "Prices listed in Saudi Riyal; USD equivalents are approximate and shift with the exchange rate.",
    "VAT is not included where applicable.",
    "A deposit secures the start date; the remainder is invoiced at the agreed milestones.",
  ],
  faq: [
    {
      q: "What if my project doesn't fit one of these tiers?",
      a: "It often won't. Send a message describing what you're trying to build — I'll quote a custom scope within forty-eight hours.",
    },
    {
      q: "Why is the Standard Build the same price regardless of stack?",
      a: "Because the work I do at that scope is largely the same — careful scoping, clean code, real documentation. The stack is chosen for the problem, not the bill.",
    },
    {
      q: "Do you take equity instead of cash?",
      a: "Rarely, and only with founders I already trust. Default is straightforward invoicing.",
    },
  ],
  cta: { label: "Ask about a custom scope", href: "/contact" },
};

export const home = {
  eyebrow: "Developer · Operator · Builder",
  heading: "Software written like a quiet sentence —",
  headingItalic: "exact, and answerable.",
  intro:
    "I'm Ahmad. For thirteen years I ran plants, budgets, and people at one of Saudi Arabia's largest steel operations. Now I write the software I always wished my teams had: clear, dependable, and built with the patience of someone who has lived with the consequences of bad tools.",
  cta: { label: "Start a project", href: "/contact" },
  ctaSecondary: { label: "See selected work", href: "/portfolio" },
  servicesEyebrow: "What I build",
  services: [
    {
      title: "Custom web applications",
      body: "Internal tools, dashboards, and customer-facing apps built on a modern, maintainable stack. React, Next.js, TypeScript, Postgres.",
    },
    {
      title: "APIs & backend systems",
      body: "Quiet, well-instrumented services. Clean contracts, real observability, and migrations you can read without flinching.",
    },
    {
      title: "Automation tooling",
      body: "Scripts, workflows, and small platforms that remove the manual work weighing your team down. Built to outlive the season they were written in.",
    },
  ],
};

export const services = {
  eyebrow: "Services",
  heading: "Three ways I tend to help.",
  intro:
    "Each engagement begins with a conversation, not a quote. The shape of the work matters more than the label on it.",
  items: [
    {
      title: "Custom web applications",
      body: "From a single-purpose internal tool to a full product surface. I take ownership of the stack end-to-end and write code your future hires will thank you for.",
      useCases: [
        "Replace a brittle spreadsheet workflow with a real app",
        "Customer portal connected to your existing systems",
        "Operational dashboards with permissions and audit trails",
      ],
    },
    {
      title: "APIs & backend systems",
      body: "Backends that read like prose: typed, versioned, observable. I treat database schemas as a long-term asset, not throwaway scaffolding.",
      useCases: [
        "Public or partner API behind your product",
        "Background jobs, queues, and scheduled workflows",
        "Migrating a legacy backend without losing the lights",
      ],
    },
    {
      title: "Automation tooling",
      body: "Years on the operations side taught me where the real friction lives. I find it, name it, and build something small that removes it.",
      useCases: [
        "Internal CLI or admin tool for a repeated manual task",
        "Document and reporting pipelines",
        "Integrations between systems that refuse to speak to each other",
      ],
    },
  ],
  processEyebrow: "How a project moves",
  process: [
    {
      step: "01",
      title: "Discovery",
      body: "A conversation. I want to understand the problem the way an operator does — context, constraints, the people who will live with the result.",
    },
    {
      step: "02",
      title: "Plan",
      body: "A short, written proposal: scope, milestones, price, and what is explicitly out of scope. Nothing decorative.",
    },
    {
      step: "03",
      title: "Build",
      body: "Frequent, small releases you can see and react to. No long silences. No surprises at the end.",
    },
    {
      step: "04",
      title: "Deploy",
      body: "Production handover with documentation a real person can follow, plus an agreed support window so nothing is dropped on a Friday afternoon.",
    },
  ],
  stack: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel",
    "Docker",
    "GitHub Actions",
  ],
};

export const portfolio = {
  eyebrow: "Selected work",
  heading: "A short shelf, kept honest.",
  intro:
    "Some of this is operations work expressed through software; some is software written for operators. I've put the project I am proudest of first.",
  hero: {
    title: "HADEED operational turnaround",
    org: "Saudi Iron & Steel (SABIC affiliate)",
    period: "2019 – 2022",
    challenge:
      "Nine plants. More than eleven thousand personnel and contractors. An eighty-million-riyal operating budget. A safety record under scrutiny and morale that had been thinning for years.",
    solution:
      "I led the operations function through a structural reset — process discipline, clearer accountability lines, and instrumentation of the metrics that actually mattered. The team finished the cycle with zero recordable HSE incidents, the budget intact, and a culture people wanted to stay in.",
    metrics: [
      { value: "9", label: "plants under operational lead" },
      { value: "11,000+", label: "personnel & contractors" },
      { value: "SAR 80M+", label: "annual budget owned" },
      { value: "0", label: "HSE incidents through cycle" },
    ],
    stack: ["Operations leadership", "Process design", "Safety systems", "Reporting & analytics"],
  },
  projects: [
    {
      title: "Project case study — coming soon",
      challenge: "Placeholder — a small internal tool that replaced a weekly spreadsheet ritual.",
      solution: "Replaced by a typed web app with audit trail and one-click export.",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
      link: null,
    },
    {
      title: "Project case study — coming soon",
      challenge: "Placeholder — automation pipeline for a document-heavy back office.",
      solution: "Hours of manual reformatting collapsed into a scheduled job.",
      stack: ["Python", "Node.js", "GitHub Actions"],
      link: null,
    },
    {
      title: "Project case study — coming soon",
      challenge: "Placeholder — integration between two systems that did not want to speak.",
      solution: "A small, well-tested bridge service. Quiet, observable, boring in the best way.",
      stack: ["TypeScript", "Node.js", "Docker"],
      link: null,
    },
  ],
};

export const about = {
  eyebrow: "About",
  heading: "I build for precision, not perfection.",
  intro:
    "Three sentences for the impatient. I spent a decade as an OT/ICS engineer, then three years running operations at a major steel producer, and I now write software full-time. I take fewer clients than most and stay with each one longer. I'm based in Jubail, on the eastern coast of Saudi Arabia.",
  arc: [
    {
      period: "2009 – 2019",
      role: "OT / ICS Engineer",
      org: "HADEED — Saudi Iron & Steel (SABIC affiliate)",
      body: "Industrial control systems across heavy plant operations. The decade that taught me what software actually feels like when production depends on it.",
    },
    {
      period: "2019 – 2022",
      role: "Operations Manager",
      org: "HADEED",
      body: "Nine plants, eleven thousand people, an eighty-million-riyal budget, zero HSE incidents through the cycle. The years that taught me that clarity is the most undervalued engineering virtue.",
    },
    {
      period: "2022 – present",
      role: "Developer & Automation Consultant",
      org: "Independent",
      body: "Building the software I wished I'd had on the other side of the table. Selective engagements, written work, and the occasional poem when nobody is looking.",
    },
  ],
  philosophy: {
    quote: "I build for precision, not perfection.",
    body: "Perfection is an excuse to ship late. Precision is naming what matters, building exactly that, and being honest about the rest.",
  },
  personal:
    "Outside of work I am a father, an introvert, and an unreasonable lover of the arts — poetry, music, photography. I think slowly on purpose. I write more than I talk.",
  why: [
    {
      title: "Operational depth",
      body: "I have lived with the cost of bad software on a plant floor. I bring that to every line I write.",
    },
    {
      title: "Technical execution",
      body: "Full-stack, end-to-end. No handoffs to a team that doesn't exist yet.",
    },
    {
      title: "Direct communication",
      body: "I'll tell you what I think, what it costs, and what I won't do. In writing.",
    },
  ],
};

export const contact = {
  eyebrow: "Start a project",
  heading: "Tell me what you're trying to build.",
  intro:
    "I read every message myself and respond within forty-eight hours. If the project isn't a fit, I'll say so — and I'll usually know someone who is.",
  projectTypes: [
    "Custom web application",
    "API or backend system",
    "Automation tooling",
    "Technical advisory",
    "Not sure yet",
  ],
  scopes: [
    "Small (≤ 4 weeks)",
    "Medium (1 – 3 months)",
    "Large (3+ months)",
    "Ongoing engagement",
    "Just exploring",
  ],
  reassurance: "I review every request and respond within 48 hours.",
};
