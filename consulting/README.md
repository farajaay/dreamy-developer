# Consulting toolkit

Ready-to-use tools for industrial and OT consulting engagements — training,
consulting, troubleshooting, investigation, and design reviews across OT
environments, operational readiness, maintenance practices, and turnaround
planning and execution.

These are working artefacts, not website copy. When a client asks for a
consultation, you can open the relevant file and apply it the same day.

## How to use this folder

1. **Copy, don't edit in place.** For each engagement, copy the files you need
   into a per-client folder (e.g. `clients/<client>/<engagement>/`) and fill in
   the bracketed `[...]` fields there. Keep these masters clean.
2. **Show the method up front.** Share the relevant checklist with the client
   during scoping so they see exactly how the work will run. Method visible,
   not a black box.
3. **Pair with the contracts.** The commercial and confidentiality side lives in
   `../legal/` — send a Mutual NDA before sharing sensitive plant detail, and a
   Statement of Work (or the proposal in `09`) before starting.
4. **Hand over the filled-in artefacts.** The completed checklists and the
   findings report are deliverables. The client keeps and reuses them.

## The tools, mapped to an engagement

| Stage | Tool | File |
|---|---|---|
| First contact / scoping | Client intake & discovery questionnaire | `01-intake-questionnaire.md` |
| Assessment — OT/ICS | OT environment assessment checklist | `02-ot-environment-assessment.md` |
| Assessment — readiness | Operational readiness review (ORR) | `03-operational-readiness-review.md` |
| Assessment — maintenance | Maintenance & reliability maturity assessment | `04-maintenance-practices-assessment.md` |
| Troubleshooting / investigation | Root-cause investigation toolkit | `05-troubleshooting-investigation.md` |
| Design review | OT / control-system design-review checklist | `06-design-review-checklist.md` |
| Turnaround | Turnaround planning & execution toolkit | `07-turnaround-planning-execution.md` |
| Training | Training needs analysis & session plan | `08-training-needs-and-plan.md` |
| Proposing the work | Consulting proposal / engagement brief | `09-engagement-proposal-template.md` |
| Closing the work | Findings & recommendations report | `10-findings-report-template.md` |

## A typical engagement flow

1. **Frame** — call the client, run the intake questionnaire (`01`).
2. **Scope** — write the engagement brief (`09`); send NDA + SOW from `../legal/`.
3. **Work** — run the relevant assessment / investigation / review checklist
   (`02`–`08`) on-site and in document review.
4. **Hand over** — write up the findings report (`10`), present it, agree the
   roadmap, hand over every filled-in artefact.

## Risk rating used across these tools

Unless a client standard says otherwise, rate findings on a simple, defensible
scale so the roadmap prioritises itself:

| Rating | Meaning | Expected action |
|---|---|---|
| **Critical** | Credible path to injury, environmental release, or major unplanned outage. | Act now; interim control before leaving site. |
| **High** | Likely to cause significant loss or repeat failure if unaddressed. | Plan and fund within the current cycle. |
| **Medium** | Erodes reliability, efficiency, or maintainability over time. | Schedule into the improvement plan. |
| **Low** | Good-practice gap; limited near-term impact. | Address opportunistically. |

## Caveats

- These checklists are a starting baseline, not a substitute for the client's
  own statutory, OEM, and safety-case requirements. Always work to the stricter
  standard.
- Anything touching functional safety (SIS/SIL), hazardous-area, or
  pressure-system integrity must involve the appropriate certified discipline —
  these tools flag the questions, they do not replace the certified engineer.
- Standards referenced (IEC 62443, ISA-18.2, Purdue/ISA-95, etc.) are named for
  orientation; confirm the edition and the client's adopted version.
