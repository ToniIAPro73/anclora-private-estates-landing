<!-- markdownlint-disable MD013 -->

# Hermes Copy Curator Gate — hero-proposition-clarity v1

## 1. Scope Reviewed

- Feature: `hero-proposition-clarity`
- Branch: `feat/codex-hero-proposition-clarity`
- Public copy affected: hero title and description across active locales.
- Source file: `src/content/site-copy.ts`

## 2. Commands Executed

```bash
npm run anclora:locale-copy-check
```

Result: passed without high-risk findings.

```bash
npm run test:hermes
```

Result: passed in `anclora-content-generator-ai`.

```bash
npm run hermes:copy-curator -- \
  --repo /home/toni/projects/anclora-private-estates-landing \
  --mode diff \
  --diff /home/toni/projects/anclora-private-estates-landing/tmp/hermes-copy-curator/local.diff \
  --output /home/toni/projects/anclora-private-estates-landing/reports/hermes-copy-curator/local-hero-proposition-clarity-report.md \
  --summary-output /home/toni/projects/anclora-private-estates-landing/tmp/hermes-copy-curator/local-summary.json \
  --maxFindings 20
```

Result: completed, but the current Hermes diff runner ignores `.ts` files and therefore did not
detect `src/content/site-copy.ts` as user-facing copy.

```bash
npm run hermes:copy-curator -- \
  --repo /home/toni/projects/anclora-private-estates-landing \
  --mode file \
  --path tmp/hermes-copy-curator/hero-copy-review.md \
  --output /home/toni/projects/anclora-private-estates-landing/reports/hermes-copy-curator/local-hero-copy-file-review-report.md \
  --summary-output /home/toni/projects/anclora-private-estates-landing/tmp/hermes-copy-curator/local-file-summary.json \
  --maxFindings 20
```

Result: completed against a temporary Markdown review input containing the final hero copy.

## 3. Findings

- Locale literalism check passed.
- Hermes tooling tests passed.
- Hermes file-mode report generated 20 low visual-risk findings from the temporary review input.
- The local Hermes provider is a mock provider when no external API key is configured; generated
  variations were generic and not directly applicable to this feature.
- No high-risk literalism, unsafe claim, legal claim, or compliance-sensitive promise was detected
  in the changed hero copy.

## 4. Decision

Accepted for this feature.

The user explicitly gave approval for the Hermes Copy Curator review gate on 2026-06-11.

## 5. Follow-up

Improve Hermes Copy Curator diff mode so it includes `.ts` files that centralize public copy,
especially `src/content/site-copy.ts`.
