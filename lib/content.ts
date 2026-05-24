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
  { href: "/now", label: "Now" },
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
    "I'm Ahmad. For thirteen years I worked as an engineer at one of Saudi Arabia's largest steel operations, building and maintaining the software that kept production honest. Now I write the software I always wished my teams had: clear, dependable, and built with the patience of someone who has lived with the consequences of bad tools.",
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
      body: "Years inside a heavy-industry operation taught me where the real friction lives. I find it, name it, and build something small that removes it.",
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
    "I've kept this shelf short on purpose. Real case studies replace the placeholders below as projects ship. If you're considering working with me and want to see code, I'm happy to share private repositories under NDA — just ask.",
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
  heading: "The long way from steel to software.",
  intro:
    "I'm Ahmad. I write code from a small room in Jubail, on the eastern coast of Saudi Arabia, where the gulf wind carries the smell of iron and the call to prayer five times a day. For thirteen years I worked in heavy industry as an engineer — first on the controls side, then as a senior engineer leading the harder integration problems — at one of the country's largest steel operations. I came to software the long way around, through dust and deadlines and the steady weight of being responsible for systems other people depended on. That is the version of me you're hiring.",
  arc: [
    {
      period: "2009 – 2019",
      role: "OT / ICS Engineer",
      org: "HADEED — Saudi Iron & Steel (SABIC affiliate)",
      body: "I joined the early years out of engineering school. My job, simplified, was to keep the control systems honest — the slow, careful translation between the physical world of molten steel and the digital one of dashboards and protocols. I spent a decade in PLC ladders and SCADA screens, in night shifts watching graphs that meant something, in the kind of debugging where a wrong answer doesn't just throw an error — it stops a production line worth millions or, worse, hurts someone. It is the most patient education I have ever received.",
    },
    {
      period: "2019 – 2022",
      role: "Senior Engineer / Technical Lead",
      org: "HADEED — Saudi Iron & Steel (SABIC affiliate)",
      body: "In 2019 the work changed shape. Fewer hours in front of the live screens, more time on the harder questions — how to redesign a brittle integration, how to teach a younger engineer to read a control loop, how to write the kind of documentation that survives the person who wrote it. I spent three years carrying responsibility for systems that other teams trusted by reflex. That trust is a quieter weight than headcount or budget. It taught me to build things that did not need me sitting next to them.",
    },
    {
      period: "2022 – present",
      role: "Developer & Automation Consultant",
      org: "Independent",
      body: "Since 2022 I've written software full-time. The transition is less strange than people assume. I had always written code — small tools for my own engineers, scripts to drag data out of systems that did not want to give it up. The plant taught me what good software is supposed to feel like when production depends on it: invisible, reliable, never the thing standing between a person and the work in front of them. Most software I read fails that test. I write the kind that passes.",
    },
  ],
  philosophy: {
    quote: "I build for precision, not perfection.",
    body: "Perfection is the word people use when they want permission to ship late. Precision is the harder thing — naming what matters, building exactly that, and being honest about everything you are choosing not to do. A line of code that solves the right problem is worth ten that solve the wrong one beautifully. I learned this on plant floors, where a near-correct answer can hurt people. It applies just as cleanly in software, even when the only thing at stake is somebody's afternoon.",
  },
  personal:
    "Off the clock I am a father, an introvert, and a quiet lover of the arts. I read poetry slowly — Arabic poets mostly, but Rilke and Heaney too. I take photographs that almost never make it onto the internet. I keep a small collection of fountain pens and use them to write in notebooks that nobody else will ever read. I think slowly on purpose. I argue with the world on paper before I argue with it out loud, and I find that most of the things I would have said angrily look smaller and more solvable by the time they reach a second draft. My wife reminds me, gently, that not everything has to be filed under 'precision.'",
  why: [
    {
      title: "Industrial depth",
      body: "I have lived with the cost of bad software on a plant floor. I have been the engineer responsible when a system failed at three in the morning. That memory sits with me every time I write a line of code. Software, for me, is not an academic problem — it is a thing that other humans will have to use at three in the morning.",
    },
    {
      title: "Technical execution",
      body: "Full-stack, end-to-end. Frontend, backend, infrastructure, deployment, documentation. No handoffs to a team that doesn't exist yet. No phrases like 'that's not my side of the stack.' If the bug is in front of you and the timezone is wrong, you are still the person on call.",
    },
    {
      title: "Direct communication",
      body: "I will tell you what I think, what I think it costs, and what I will not do — in writing, in plain language, before any money changes hands. If I do not believe in a feature, I will say so. If your scope is creeping, I will mark the day it started. I treat written words as load-bearing structures, because they are.",
    },
  ],
};

export const now = {
  eyebrow: "/ now",
  heading: "What I'm working on",
  headingItalic: "this season.",
  intro:
    "An honest, occasionally-updated snapshot. Inspired by Derek Sivers, kept short on purpose.",
  updatedAt: "May 2026",
  sections: [
    {
      title: "Building",
      items: [
        "This site, in slow public — a small editorial portfolio with a real admin and Stripe-backed checkout, written one careful commit at a time.",
        "An internal automation tool for a Jubail-based client that turns a weekly four-hour ritual into a one-click report.",
        "A long-running side project: a Markdown notebook that talks back. Not ready to be seen yet.",
      ],
    },
    {
      title: "Reading",
      items: [
        "Mahmoud Darwish — Memory for Forgetfulness. Slowly, two pages at a time, in Arabic.",
        "Don Norman — Living with Complexity. A reminder that software is always living with someone.",
        "A worn copy of Rilke's Letters to a Young Poet that travels with me.",
      ],
    },
    {
      title: "Listening to",
      items: [
        "Marcel Khalifé, Jadal al-Atfaal. Studying.",
        "Nils Frahm, All Melody. Coding.",
        "The morning adhan, before the rest of the house wakes up.",
      ],
    },
    {
      title: "Thinking about",
      items: [
        "How to make handover documents that survive the people who wrote them.",
        "Why the best engineers I've worked with all read fiction.",
        "Whether to translate this site into Arabic before the end of the year.",
      ],
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
