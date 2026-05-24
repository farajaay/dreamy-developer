# Legal templates

Working drafts for client engagements. **Not yet legally vetted.**

## What's here

| File | Purpose | When to use |
|---|---|---|
| `01-master-services-agreement.md` | MSA — the overarching contract between Ahmad and a client. Signed once. | At the start of any new client relationship that will or may involve multiple projects. |
| `02-statement-of-work-template.md` | SOW — scope, deliverables, price, timeline for one project. | Once per project, referenced under an existing MSA. |
| `03-mutual-nda.md` | Mutual non-disclosure agreement. | Before discussing confidential project details with a prospective client. |
| `04-retainer-agreement.md` | Monthly retainer for the Studio Engagement tier. | When a client wants ongoing development time, not a fixed-scope project. |

## Before you send any of these to a client

1. **Have a Saudi-qualified lawyer review them.** Every clause marked `[REVIEW REQUIRED]`
   needs a lawyer's eyes. Suggested firms in KSA that do tech/commercial work:
   Hammad & Al-Mehdar, Al Tamimi & Co (Riyadh office), AlSulaim Alawaji & Partners.
   Expect SAR 1,500–4,000 to review and tune all four documents.
2. **Convert to PDF before sending.** Markdown is editable; PDFs aren't. Use Pandoc
   (`pandoc 01-msa.md -o 01-msa.pdf`) or paste into Google Docs → Download as PDF.
3. **Fill in the placeholder fields** (`{{client_name}}`, `{{project_name}}`, etc.)
   for the specific engagement.
4. **Keep counter-signed copies** in a dedicated folder per client.

## KSA-specific points the lawyer should confirm

- **VAT:** 15% applies to most consulting services. Make sure your invoice format
  meets ZATCA e-invoicing requirements (Fatoorah Phase 2).
- **Late payment:** I've drafted these with a "service fee" model (not interest)
  to avoid riba issues. A lawyer should confirm the wording is enforceable.
- **Governing law:** I've defaulted to KSA law and KSA Commercial Court jurisdiction.
  For international clients, you may prefer DIFC-LCIA or SIAC arbitration — ask the
  lawyer.
- **PDPL (Personal Data Protection Law):** Included as a basic clause. The lawyer
  should confirm whether your engagements require you to register with SDAIA.
- **IP:** I've drafted "work product transfers on full payment" — Saudi courts
  generally enforce this but the lawyer should confirm the wording.

## Personal info that needs filling in everywhere

When you customize each template, you'll need:
- Your legal name as it appears on your Iqama / National ID
- Your Commercial Registration (CR) number, if you operate as an establishment
- Your VAT registration number (15-digit), if registered
- Your registered business address
- Your bank account details for SAR transfers (IBAN)

If you're operating as a sole practitioner without a CR yet, the lawyer can advise
on whether to use your personal name or set up an establishment/LLC first.
