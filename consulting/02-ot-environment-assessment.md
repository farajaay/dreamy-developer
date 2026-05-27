# OT environment assessment checklist

**Use:** assessing the health, resilience, and cyber-posture of an operational-
technology / industrial control-system environment. Aligned in spirit with the
Purdue model (ISA-95) and IEC 62443. Confirm the client's adopted standard and
work to the stricter of the two.

**Scoring per item:** `C` conform · `PC` partial · `NC` non-conform · `N/A`.
Record the evidence (drawing, screenshot, interview) for each finding.

---

## 1. Asset inventory & documentation
- [ ] Current, complete inventory of OT assets (controllers, HMIs, servers, network gear, instruments) — `[ ]`
- [ ] Firmware / software versions recorded and tracked — `[ ]`
- [ ] Up-to-date network architecture / topology drawings — `[ ]`
- [ ] Up-to-date P&IDs, control narratives, and loop diagrams — `[ ]`
- [ ] Spare-parts list for critical control hardware — `[ ]`

## 2. Network architecture & segmentation
- [ ] OT separated from IT / enterprise network (not flat) — `[ ]`
- [ ] Defined zones & conduits; DMZ between OT and IT — `[ ]`
- [ ] Firewall rules documented, least-privilege, and reviewed — `[ ]`
- [ ] No unmanaged switches / rogue devices on control networks — `[ ]`
- [ ] Wireless (if any) is segregated, authenticated, and justified — `[ ]`
- [ ] Safety system (SIS) network independence preserved — `[ ]`

## 3. Remote & third-party access
- [ ] All remote access brokered through a controlled jump host / DMZ — `[ ]`
- [ ] Vendor access is time-boxed, logged, and supervised — `[ ]`
- [ ] MFA enforced for any remote/interactive access — `[ ]`
- [ ] No always-on modems / unmanaged remote tools — `[ ]`

## 4. Identity, access & accounts
- [ ] Individual accounts (no shared "operator" logins where avoidable) — `[ ]`
- [ ] Role-based access; least privilege on engineering workstations — `[ ]`
- [ ] Default/vendor passwords changed; credentials managed — `[ ]`
- [ ] Joiners/movers/leavers process reaches OT systems — `[ ]`

## 5. Patching, hardening & malware defence
- [ ] Patch/obsolescence status known per asset; plan for unsupported systems — `[ ]`
- [ ] Change-controlled patching process appropriate to OT (test first) — `[ ]`
- [ ] Endpoint protection / allow-listing where supported — `[ ]`
- [ ] USB / removable-media policy enforced technically, not just on paper — `[ ]`
- [ ] Unused ports/services/software removed from hosts — `[ ]`

## 6. Backup, recovery & resilience
- [ ] Verified backups of controller programs, HMI/SCADA, and configs — `[ ]`
- [ ] Backups stored off the production network and tested by restore — `[ ]`
- [ ] Documented, rehearsed recovery procedure with realistic RTO/RPO — `[ ]`
- [ ] Critical control power protected (UPS) and tested — `[ ]`
- [ ] Redundancy on critical controllers/networks as designed — `[ ]`

## 7. Monitoring, logging & detection
- [ ] Time synchronisation (NTP) across OT assets — `[ ]`
- [ ] Logs collected from key OT assets and retained — `[ ]`
- [ ] Someone actually reviews alerts/logs; defined responsibility — `[ ]`
- [ ] Baseline of "normal" network traffic exists (if monitored) — `[ ]`

## 8. Change management (MOC)
- [ ] Formal Management of Change covers OT/control modifications — `[ ]`
- [ ] Changes tested, approved, documented, and backed out cleanly if needed — `[ ]`
- [ ] As-built documentation updated after every change — `[ ]`

## 9. People, process & governance
- [ ] Clear ownership of OT systems & OT cybersecurity (named roles) — `[ ]`
- [ ] OT-specific incident response plan exists and is rehearsed — `[ ]`
- [ ] Operators/engineers trained on OT security basics & phishing — `[ ]`
- [ ] Vendors contractually bound to security expectations — `[ ]`

## 10. Physical & environmental
- [ ] Control rooms, marshalling, and comms cabinets physically secured — `[ ]`
- [ ] Environmental controls (temp/humidity/dust) appropriate — `[ ]`
- [ ] Cabling integrity and labelling adequate for safe maintenance — `[ ]`

---

## Summary table (transfer to the findings report)

| # | Finding | Area | Rating | Evidence | Recommended action |
|---|---|---|---|---|---|
| 1 | [ ] | [ ] | Crit/High/Med/Low | [ ] | [ ] |
| 2 | [ ] | [ ] | | [ ] | [ ] |

**Top three things to fix first:** 1) [ ] 2) [ ] 3) [ ]
