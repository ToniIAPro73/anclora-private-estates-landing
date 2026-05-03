# Rules — Landing Nexus Intake Connection

## Allowed

- Modify frontend form logic.
- Add a frontend intake client.
- Add tests if aligned with repo patterns.
- Add env example variables.
- Update SDD and execution reports.

## Forbidden

- Do not commit secrets.
- Do not hardcode temporary tunnel URLs.
- Do not modify backend Nexus from this repo.
- Do not create n8n workflows in this repo.
- Do not modify unrelated UI sections.
- Do not use local `docs/` as normative source.

## Required

- Respect `sdd/contracts/`.
- Keep `MODAL_CONTRACT.md` deferred unless a modal is introduced.
- Use public `VITE_*` variables only for public endpoints.
