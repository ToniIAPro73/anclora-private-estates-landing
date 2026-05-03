# agent-d-qa — Landing Nexus Intake Connection

## Task

Run QA: review diff, tests/build where available, secret checks, env checks, functional scope and gate readiness.

## Mandatory constraints

- Respect `sdd/contracts/`.
- Do not modify unrelated files.
- Do not introduce secrets.
- Do not hardcode temporary URLs.
- Keep `MODAL_CONTRACT.md` deferred unless explicitly justified.

## Output

Create an execution report under:

`sdd/features/connect-landing-to-nexus-intake/executions/`
