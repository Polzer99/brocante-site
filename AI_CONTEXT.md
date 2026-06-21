# AI_CONTEXT.md — brocante-site
> First reflex every session: read this first. Doctrine: Parrit AI Playbook (REGLES-DOR §33).

## 1. Architecture state
Next.js 16 (App Router, React 19) marketing/catalogue prototype for a white-label brocante (vintage/antiques) shop — Tailwind v4 + shadcn/base-ui components, `lucide-react`, `sonner` toasts. **100% static front-end**: all catalogue data is hardcoded in `src/data/products.ts` (14 products + helpers `getProductById/getProductsByCategory/getFeaturedProducts/getOnSaleProducts/getSimilarProducts`). No backend, no API routes (`src/app/api` does not exist), no DB, no auth, no env vars, no `fetch`/POST anywhere. Entry points: `src/app/layout.tsx` → pages `page.tsx` (home), `catalogue/`, `produit/[id]/`, `a-propos/`, `avis/`. Product images are remote Unsplash URLs (allow-listed in `next.config.ts`). Single commit `7549210` "proto complet".

## 2. Risk zones — DO NOT TOUCH without care
The two real traps from the audit are **functional dead-ends presented as working features** — there is no security/secret issue here.
- **Lead-drop (data loss) — `src/components/request-modal.tsx:20-24`**: `RequestForm.handleSubmit` calls `e.preventDefault()`, fires `toast.success("Demande envoyée !")` and closes the modal — but **never sends the name/email/message anywhere**. Every "Faire une demande" lead is silently lost while the user is told it was received. Any wiring of a real backend/CRM must start here.
- **AI search is mocked — `src/components/ai-search-section.tsx:9-31`**: results come from a static `mockRecommendations` array (products[3]/[8]/[4] with canned French reasons). `handleSubmit` only sets `query`/`hasSearched`; the typed query is ignored, no LLM/OpenRouter call. The "Recherche assistée par IA" label is purely cosmetic. Do not assume this talks to a model.
- **Decorative hero search — `src/app/page.tsx:52-57`**: the big hero input is `readOnly`; "Rechercher" is just a `<Link href="/catalogue">`. Not a search; don't wire logic onto it expecting state.
- **`src/components/ui/chat-input.tsx`**: real input wiring (`onSubmit`) exists but is only consumed by the mocked AI section — looks live, is not.

## 3. Established rules (already true / enforced)
- **TypeScript `strict: true`** is ON (`tsconfig.json`) — unlike dashboard/rufus which run `strict:false`. Keep it on.
- **Zero `any`, zero `@ts-ignore`/`@ts-expect-error`, zero `eslint-disable`** in `src/` — clean baseline, hold the line.
- **ESLint** configured via flat config (`eslint.config.mjs`, `eslint-config-next` core-web-vitals + typescript). `npm run lint` works locally.
- **No secrets, by design**: audit grades brocante-site security-clean (0 blocker). The repo holds no `.env`, keys, or tokens — and shouldn't until a backend exists. `.gitignore` already excludes `.env*`. **Never hardcode a secret here**; if a backend is added, secrets stay server-only.
- **Intentional exception**: this is a *prototype*. Static catalogue, mocked AI, and the fire-and-forget form are accepted for now — but the lead-drop must be flagged the moment anyone treats this as production (a "sent" lead that vanishes is worse than an honest "coming soon").

## 4. Open debt (playbook findings still pending)
See `docs/ai-playbook/audits/GLOBAL-AUDIT-2026-06-21.md` (brocante-site row + §3/§4).
- **Lead-drop function** (§3, the repo's one 🟠 High): wire `RequestForm` to a real sink (server action / API route → CRM/Supabase or email) before any real launch, OR change the copy to stop claiming the demand was sent.
- **AI search mocked**: either implement a genuine recommendation/search call (OpenRouter per stack canon, server-side) or relabel it so it doesn't promise AI it doesn't do.
- **No CI barrier (E12)**: no `.github/` at all — add a blocking 4-gate workflow (lint + typecheck + build) so `strict`/no-`any` are enforced by CI, not by goodwill. → Codex.
- **AI_CONTEXT.md missing (E11)**: this file closes it (was one of 14 repos lacking it).
- **Dependabot missing (E13)**: add `.github/dependabot.yml` (npm + github-actions ecosystems). → safe-auto config.