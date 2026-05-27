# OT / control-system design-review checklist

**Use:** an independent review of a control-and-instrumentation or OT design
before it's built or commissioned — reviewing for operability, maintainability,
safety, and cyber-by-design while changes are still cheap. Works for a new
project, a modification (MOC), or a vendor proposal.

**Per item:** `OK` · `Comment` · `Action required` · `N/A`. Capture every
comment in the action log with a clear "what I'd change and why".

> Functional-safety items below flag the questions a certified functional-safety
> engineer must own — this review does not replace SIL verification or the
> safety case.

---

## 1. Documentation completeness
- [ ] P&IDs current, consistent, and tag-complete — `[ ]`
- [ ] Control narrative / functional design spec matches P&IDs — `[ ]`
- [ ] IO list, loop diagrams, and cause-&-effect matrix present — `[ ]`
- [ ] Network architecture drawing included — `[ ]`
- [ ] Design basis, assumptions, and standards referenced — `[ ]`

## 2. Process & control philosophy
- [ ] Control strategy achieves the process intent and is operable — `[ ]`
- [ ] Modes (auto/manual/cascade) and transitions defined — `[ ]`
- [ ] Start-up, shutdown, and abnormal-operation handling defined — `[ ]`
- [ ] Interlocks and permissives complete and testable — `[ ]`
- [ ] Fail-safe behaviour defined for loss of signal/power/comms — `[ ]`

## 3. Alarms & operator interface (ISA-18.2 in spirit)
- [ ] Alarms rationalised — each has a defined response and is actionable — `[ ]`
- [ ] Priorities reflect consequence + time-to-respond, not convenience — `[ ]`
- [ ] No predictable alarm floods on trip / start-up — `[ ]`
- [ ] HMI graphics support situational awareness (hierarchy, not clutter) — `[ ]`
- [ ] Operator can always tell what the plant is doing and why — `[ ]`

## 4. Functional safety (flag for the certified engineer)
- [ ] Required SIL identified and verification basis stated — `[ ]`
- [ ] Safety system independent/separated from basic process control — `[ ]`
- [ ] Proof-test intervals and procedures defined — `[ ]`
- [ ] Bypass/override management defined and controlled — `[ ]`

## 5. OT architecture & cybersecurity by design (IEC 62443 in spirit)
- [ ] Zones & conduits defined; OT segmented from IT; DMZ present — `[ ]`
- [ ] No direct internet/enterprise exposure of control devices — `[ ]`
- [ ] Remote access designed through a controlled, logged path — `[ ]`
- [ ] Accounts, roles, and least-privilege considered in design — `[ ]`
- [ ] Logging, time-sync, and backup/restore designed in — `[ ]`
- [ ] Redundancy on critical controllers/networks where justified — `[ ]`

## 6. Maintainability & reliability
- [ ] Equipment accessible for maintenance, calibration, and replacement — `[ ]`
- [ ] Isolation points and LOTO designed in — `[ ]`
- [ ] Redundancy / online maintenance where downtime is costly — `[ ]`
- [ ] Diagnostics and instrumentation support fault-finding — `[ ]`
- [ ] Spares standardisation considered (fewer unique parts) — `[ ]`

## 7. Instrumentation & integrity
- [ ] Instrument selection, ranges, and accuracy fit the duty — `[ ]`
- [ ] Hazardous-area classification and certification correct — `[ ]`
- [ ] Power, grounding, and signal integrity addressed — `[ ]`
- [ ] Calibration and test access provided — `[ ]`

## 8. Implementation & handover readiness
- [ ] FAT/SAT scope and acceptance criteria defined — `[ ]`
- [ ] Commissioning, loop-check, and pre-startup plan exists — `[ ]`
- [ ] As-built and O&M documentation deliverables specified — `[ ]`
- [ ] Training and operator/maintenance readiness considered — `[ ]`
- [ ] MOC followed; design changes traceable — `[ ]`

---

## Action log (transfer to findings report)

| # | Item / drawing ref | Comment — what I'd change & why | Rating | Owner | Status |
|---|---|---|---|---|---|
| 1 | [ ] | [ ] | Crit/High/Med/Low | [ ] | Open |

**Show-stoppers (must resolve before build/commission):** [ ]
**Overall:** ☐ Approve ☐ Approve with comments ☐ Re-review after changes
