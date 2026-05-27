/**
 * Single source of truth for all site copy.
 * Edit here, redeploy.
 */

export const site = {
  name: "Ahmad Yousif AlFaraj",
  shortName: "Ahmad AlFaraj",
  role: "Software & Industrial Operations Consultant",
  tagline:
    "Two practices, one operator's standard. I build software for operators — custom web apps, APIs, automation — and consult on OT, operational readiness, maintenance, and turnaround for IT and manufacturing teams.",
  url: "https://ahmadalfaraj.com",
  location: "Jubail Industrial City, Saudi Arabia",
  email: "hello@ahmadalfaraj.com", // TODO: replace with Ahmad's address
  linkedin: "https://www.linkedin.com/in/ahmadalfaraj", // TODO: confirm slug
  whatsapp: "", // TODO: optional, full intl format e.g. "+966500000000"
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Software" },
  { href: "/consulting", label: "Consulting" },
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
  {
    slug: "diagnostic-day",
    name: "Diagnostic Day",
    tagline: "One focused day on the problem in front of you.",
    priceSarHalalas: 600000, // SAR 6,000.00
    priceUsdCents: 160000, // ~USD 1,600.00
    cadence: "one-time" as const,
    features: [
      "A single on-site or remote day — troubleshooting, an investigation, or a design-review spot-check",
      "Pre-call to frame the question and gather drawings, logs, and history",
      "Same-day verbal readout of findings and the likely root cause",
      "One-page written summary with recommended next steps",
      "The honest entry point when you're not sure how deep this goes",
    ],
    sortOrder: 4,
    active: true,
  },
  {
    slug: "readiness-assessment",
    name: "Readiness Assessment",
    tagline: "A structured look at where you stand — and what to fix first.",
    priceSarHalalas: 2800000, // SAR 28,000.00
    priceUsdCents: 746500, // ~USD 7,465.00
    cadence: "one-time" as const,
    features: [
      "Structured assessment of your OT environment, operational readiness, or maintenance practices",
      "On-site walkdown, interviews, and document review against a published checklist",
      "Written findings report with risks rated and a prioritised improvement roadmap",
      "Executive readout plus a working session with your engineering team",
      "Two-to-four-week engagement, scope agreed up front",
    ],
    sortOrder: 5,
    active: true,
    featured: true,
  },
  {
    slug: "turnaround-advisory-retainer",
    name: "Turnaround & Advisory Retainer",
    tagline: "An experienced hand through planning, execution, and after.",
    priceSarHalalas: 2200000, // SAR 22,000.00 / month
    priceUsdCents: 586500, // ~USD 5,865.00 / month
    cadence: "monthly" as const,
    features: [
      "Embedded advisory for turnaround planning and execution, or ongoing reliability improvement",
      "Scope challenge, work-list discipline, critical-path review, and daily execution controls",
      "Training and mentoring for your engineers and planners as we go",
      "Weekly written status and a documented close-out",
      "Minimum two-month commitment; scales with the size of the event",
    ],
    sortOrder: 6,
    active: true,
  },
];

export const pricing = {
  eyebrow: "Pricing",
  heading: "Two practices,",
  headingItalic: "priced honestly.",
  intro:
    "Most consultants quote in private. I'd rather you knew what to expect before you wrote the first message. The first three tiers cover software builds; the last three cover industrial and OT consulting — assessment, advisory, and turnaround support. Beyond these, I'm happy to price a custom scope.",
  notes: [
    "The first three tiers are software builds; the last three are consulting engagements.",
    "Prices listed in Saudi Riyal; USD equivalents are approximate and shift with the exchange rate.",
    "VAT (15%) is not included and is added where applicable.",
    "For software, a deposit secures the start date and the remainder is invoiced at agreed milestones. Consulting is invoiced per engagement or monthly for retainers; travel and accommodation outside the Eastern Province are billed at cost.",
  ],
  faq: [
    {
      q: "What if my project doesn't fit one of these tiers?",
      a: "It often won't. Send a message describing what you're trying to build or the problem you're facing — I'll quote a custom scope within forty-eight hours.",
    },
    {
      q: "How do the consulting tiers differ from a software build?",
      a: "The software tiers buy something built and handed over. The consulting tiers buy judgement, method, and documentation — an assessment of your OT environment or maintenance practices, an investigation into a recurring failure, a design review, training, or a steady hand through a turnaround.",
    },
    {
      q: "Can a consulting engagement turn into a software build?",
      a: "Often. A readiness assessment frequently surfaces a manual process worth automating. When it does, we scope it separately and openly — no bundling, no surprises.",
    },
    {
      q: "Do you work on-site, and where?",
      a: "Yes. I'm based in Jubail and work comfortably across the Eastern Province on-site. Remote and hybrid engagements are fine for advisory, design reviews, and training. Travel beyond the region is billed at cost.",
    },
  ],
  cta: { label: "Ask about a custom scope", href: "/contact" },
};

export const home = {
  eyebrow: "Engineer · Operator · Builder",
  heading: "Two practices, written like a quiet sentence —",
  headingItalic: "exact, and answerable.",
  intro:
    "I'm Ahmad. For seventeen years I've worked as an engineer — first on the control systems that kept production honest at one of Saudi Arabia's largest steel operations, then leading the harder integration problems. Today I work in two directions from that same foundation: I build software for operators, and I consult on the OT, readiness, maintenance, and turnaround practices I spent a career inside.",
  cta: { label: "Start a project", href: "/contact" },
  ctaSecondary: { label: "See selected work", href: "/portfolio" },
  practicesEyebrow: "Two practices, one standard",
  practices: [
    {
      eyebrow: "Practice 01",
      title: "Software & automation",
      body: "Custom web applications, APIs, and automation tooling built on a modern, maintainable stack — the software I always wished my teams had: clear, dependable, easy to live with at three in the morning.",
      points: [
        "Internal tools, dashboards, and customer-facing apps",
        "APIs and backend systems with real observability",
        "Automation that removes manual, repeated work",
      ],
      href: "/services",
      linkLabel: "How I build software",
    },
    {
      eyebrow: "Practice 02",
      title: "Industrial & OT consulting",
      body: "Training, consulting, troubleshooting, investigation, and design reviews for IT and manufacturing teams — across OT environments, operational readiness, maintenance practices, and turnaround planning and execution.",
      points: [
        "OT / ICS environment and readiness assessments",
        "Root-cause investigation and design reviews",
        "Maintenance, reliability, and turnaround support",
      ],
      href: "/consulting",
      linkLabel: "How I consult",
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

export const consulting = {
  eyebrow: "Industrial & OT consulting",
  heading: "Seventeen years on the plant floor,",
  headingItalic: "now at your disposal.",
  intro:
    "I spent a career responsible for control systems where a wrong answer doesn't throw an error — it stops a production line or hurts someone. That is the lens I bring to IT and manufacturing teams that need an experienced hand: training, advisory, troubleshooting, investigation, and design reviews across OT environments, operational readiness, maintenance practices, and turnaround planning and execution.",
  sectorsEyebrow: "Who I work with",
  sectors:
    "Manufacturing and heavy-industry operations, and the IT and engineering teams who keep their plants running — owner-operators, EPC and project teams approaching handover, and maintenance and reliability functions in the Eastern Province and across the Kingdom.",
  modesEyebrow: "Five ways I tend to help",
  modesIntro:
    "Most engagements are one of these, or a sequence of them. Each begins with a conversation and a clear, written scope — never an open-ended hourly meter.",
  modes: [
    {
      title: "Training",
      body: "Practical, plant-grounded training for engineers, operators, and planners — built from real failures, not slideware. Delivered on-site or remote, sized from a half-day workshop to a structured programme.",
      useCases: [
        "OT / ICS fundamentals and cybersecurity awareness for plant teams",
        "Maintenance, reliability, and defect-elimination practices",
        "Turnaround planning discipline for engineers and planners",
      ],
    },
    {
      title: "Consulting & advisory",
      body: "A second, experienced opinion on the decisions that are hard to reverse. I sit with your team, challenge assumptions in plain language, and put my reasoning in writing before any money is committed.",
      useCases: [
        "Strategy for OT modernisation and obsolescence",
        "Maintenance and reliability programme design",
        "Independent review of a vendor proposal or scope",
      ],
    },
    {
      title: "Troubleshooting",
      body: "When something keeps failing and the usual fixes haven't held, I come in to find the real cause. Structured, evidence-led, and honest about what the data does and doesn't show.",
      useCases: [
        "Recurring trips, nuisance alarms, or control instability",
        "Integration faults between systems that won't speak",
        "Intermittent failures nobody has been able to pin down",
      ],
    },
    {
      title: "Investigation",
      body: "Formal root-cause investigation after an incident, failure, or near-miss. A documented method — problem statement, evidence, causal analysis — that stands up to scrutiny and produces actions that actually prevent recurrence.",
      useCases: [
        "Equipment failure and bad-actor analysis",
        "Incident and near-miss root-cause analysis",
        "Repeat-failure investigations with corrective-action tracking",
      ],
    },
    {
      title: "Design reviews",
      body: "An independent set of experienced eyes before you build or commission. I review against operability, maintainability, safety, and OT-cybersecurity — and write down what I'd change while it's still cheap to change.",
      useCases: [
        "Control narratives, P&IDs, and alarm rationalisation",
        "OT network architecture and segmentation (Purdue / IEC 62443)",
        "Operational-readiness and pre-commissioning design reviews",
      ],
    },
  ],
  focusEyebrow: "Where I focus",
  focus: [
    {
      title: "OT environment",
      body: "Operational-technology and industrial control systems — PLC, SCADA, DCS, and the networks between them. Architecture, segmentation, remote access, patching, backup and recovery, and cybersecurity assessed the way an engineer who has lived with these systems would.",
    },
    {
      title: "Operational readiness",
      body: "The bridge from project to operations. Are the people, procedures, spares, systems, and documentation actually ready to run and maintain the asset on day one? A structured readiness review finds the gaps before startup does.",
    },
    {
      title: "Maintenance practices",
      body: "Preventive, predictive, and condition-based maintenance, criticality and spares strategy, CMMS discipline, and the reliability KPIs that tell the truth. I assess where you are against good practice and lay out what to fix first.",
    },
    {
      title: "Turnaround planning & execution",
      body: "Scope discipline, work-list integrity, long-lead and contractor readiness, the critical path, and the daily controls that keep a turnaround on schedule — through planning, the event itself, and a documented close-out.",
    },
  ],
  processEyebrow: "How an engagement moves",
  process: [
    {
      step: "01",
      title: "Frame",
      body: "A conversation to understand the problem the way an operator does — the asset, the history, the people who live with the result, and what 'good' would look like.",
    },
    {
      step: "02",
      title: "Scope",
      body: "A short written brief: objectives, approach, deliverables, schedule, and price. Nothing open-ended. You know exactly what you're buying.",
    },
    {
      step: "03",
      title: "Work",
      body: "Walkdowns, interviews, document review, and analysis against a published checklist — so the method is visible, not a black box. Frequent contact, no long silences.",
    },
    {
      step: "04",
      title: "Hand over",
      body: "A written findings report with risks rated and a prioritised roadmap, an executive readout, and a working session with your team. Documentation built to survive the engagement.",
    },
  ],
  toolkitEyebrow: "Method, not improvisation",
  toolkit: {
    heading: "A standing toolkit, ready on day one.",
    body: "Every engagement runs on the same documented set of checklists, questionnaires, and report templates — an intake questionnaire, OT-environment and operational-readiness checklists, a maintenance-practices assessment, troubleshooting and investigation templates, a design-review checklist, a turnaround toolkit, and standard findings reports. You see the method up front, and you keep the filled-in artefacts afterwards.",
    items: [
      "Client intake & discovery questionnaire",
      "OT environment assessment checklist",
      "Operational readiness review (ORR)",
      "Maintenance & reliability maturity assessment",
      "Troubleshooting & root-cause investigation toolkit",
      "OT / control-system design-review checklist",
      "Turnaround planning & execution toolkit",
      "Training needs analysis & session plan",
      "Findings & recommendations report template",
    ],
  },
  why: [
    {
      title: "I've carried the responsibility",
      body: "I have been the engineer on call when a system failed at three in the morning, with a production line and people's safety on the line. I assess your operation as someone who has lived with the cost of getting it wrong — not from a template I downloaded.",
    },
    {
      title: "Method you can see",
      body: "Every engagement runs on published checklists and written reports. The method is visible before you commit, and the filled-in artefacts are yours to keep and reuse long after I've gone.",
    },
    {
      title: "Plain, written honesty",
      body: "I tell you what I find, what I think it means, and what I would not spend money on — in writing, in plain language. If a recommendation isn't worth it, I'll say so.",
    },
  ],
  cta: {
    eyebrow: "Start a conversation",
    heading: "Tell me what's keeping the plant up at night.",
    label: "Request a consultation",
    href: "/contact",
  },
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
    "I'm Ahmad. I write code from a small room in Jubail, on the eastern coast of Saudi Arabia, where the gulf wind carries the smell of iron and the call to prayer five times a day. For seventeen years I've worked as an engineer — first on the controls side, then as a senior engineer leading the harder integration problems at one of the country's largest steel operations, and for the last few years independently. I came to software the long way around, through dust and deadlines and the steady weight of being responsible for systems other people depended on. That is the version of me you're hiring.",
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
  eyebrow: "Start a conversation",
  heading: "Tell me what you're trying to build — or fix.",
  intro:
    "Whether it's software to build or a plant problem to solve, I read every message myself and respond within forty-eight hours. If it isn't a fit, I'll say so — and I'll usually know someone who is.",
  projectTypes: [
    "Custom web application",
    "API or backend system",
    "Automation tooling",
    "OT / industrial consulting",
    "Training or workshop",
    "Troubleshooting or investigation",
    "Design review",
    "Operational readiness",
    "Maintenance & reliability",
    "Turnaround planning & execution",
    "Not sure yet",
  ],
  scopes: [
    "A single day",
    "Small (≤ 4 weeks)",
    "Medium (1 – 3 months)",
    "Large (3+ months)",
    "Ongoing engagement",
    "Just exploring",
  ],
  reassurance: "I review every request and respond within 48 hours.",
};
