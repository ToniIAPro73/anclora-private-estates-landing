# Master Prompt — ANCLORA-LNI-002

## Feature

`ANCLORA-LNI-002 — Multi-Intent Lead Intake & Captcha`

## Goal

Coordinate the controlled evolution of the connected landing intake form into a multi-intent, captcha-protected, Nexus/n8n-compatible intake flow.

## Execution

Agents must run in sequence unless explicitly authorized:

1. Agent A — Inventory
2. Agent B — Contracts
3. Agent C — Frontend
4. Agent D — Captcha
5. Agent E — QA & Gate

## Core Rules

- Preserve working ANCLORA-LNI-001 behavior.
- No secrets.
- No hardcoded private URLs.
- No production regression.
- No commits or pushes from agents.
- Each agent must create its execution report.
