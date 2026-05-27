# Troubleshooting & root-cause investigation toolkit

**Use:** for both quick troubleshooting (find and fix what's failing now) and
formal investigation (a documented root-cause analysis after an incident,
failure, or near-miss that must stand up to scrutiny). Pick the depth the
situation demands — a nuisance trip is not a lost-time injury.

> Safety first: if the event involved injury, environmental release, or has
> regulatory implications, follow the client's incident process and preserve
> evidence before anything is disturbed or reset.

---

## A. Problem statement (do this before analysis)

Sharpen the problem before chasing causes. Vague problems get vague answers.

| Question | Answer |
|---|---|
| **What** is the object and the defect? | [ ] |
| **Where** (asset, location, position on the object)? | [ ] |
| **When** first seen; frequency; any pattern (shift, load, weather)? | [ ] |
| **Extent** — how many, how big, trend? | [ ] |
| **What it is NOT** (similar things that are fine) | [ ] |
| Impact (safety / production / cost) | [ ] |
| Severity & urgency | [ ] |

## B. Evidence gathered
- ☐ Process trends / historian data  ☐ Alarm & event logs  ☐ Controller diagnostics
- ☐ Photos / video  ☐ Failed-part inspection  ☐ Drawings / control narrative
- ☐ Operator & maintenance interviews  ☐ Maintenance / change history (CMMS)
- ☐ Recent changes (MOC, patches, setpoints, work done nearby)

Evidence log:

| # | Evidence | Source | What it shows | Stored where |
|---|---|---|---|---|
| 1 | [ ] | [ ] | [ ] | [ ] |

## C. Causal analysis — pick the tool(s)

### 5 Whys (for simpler, single-thread problems)
1. Why? [ ]
2. Why? [ ]
3. Why? [ ]
4. Why? [ ]
5. Why? [ ]
→ **Root cause(s):** [ ]
*(Keep going past the first technical cause into the system/management cause:
"the seal failed" is rarely the root — "why did the seal fail, and why didn't
we catch it" usually is.)*

### Fishbone / Ishikawa (for multi-factor problems)
Brainstorm possible causes under each heading, then test the credible ones
against evidence.
- **Equipment / machine:** [ ]
- **Method / process:** [ ]
- **Material:** [ ]
- **People:** [ ]
- **Measurement / control:** [ ]
- **Environment:** [ ]

### Cause evaluation
| Candidate cause | Evidence for | Evidence against | Verdict (root / contributing / ruled out) |
|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] |

## D. Findings
- **Direct cause:** [ ]
- **Contributing causes:** [ ]
- **Root cause(s) (systemic):** [ ]
- Did existing barriers/safeguards work as intended? [ ]

## E. Corrective & preventive actions

| # | Action | Type (corrective / preventive) | Addresses which cause | Owner | Due | Verification of effectiveness |
|---|---|---|---|---|---|---|
| 1 | [ ] | | | | | |

Distinguish:
- **Correction** — fix the immediate problem (restore service).
- **Corrective action** — stop this cause recurring on this asset.
- **Preventive action** — stop the same cause elsewhere / systemically.

## F. Effectiveness review
- How and when will we confirm the actions worked? [ ]
- What metric/observation closes this out? [ ]
- Review date: [ ]

---

## One-page readout (verbal close-out)
- Problem: [ ]
- Root cause: [ ]
- What we're changing: [ ]
- How we'll know it worked: [ ]
