# Spec V1: Hermes Copy Curator Cross-repo Adoption

## Objective
Enable automated, read-only copy review for Pull Requests in anclora-private-estates-landing using the centralized Hermes Copy Curator engine.

## Scope
- Implementation of GitHub Actions workflow.
- Cross-repo checkout of hermes engine.
- PR artifact generation (Markdown).
- PR summary comment with anti-duplicate marker.

## Constraints
- Read-only: No automatic copy changes.
- Non-blocking: Workflow does not block merges.
- Minimal permissions: contents read, pull-requests write.

## Architecture
See host repository documentation for the cross-repo architecture details.
