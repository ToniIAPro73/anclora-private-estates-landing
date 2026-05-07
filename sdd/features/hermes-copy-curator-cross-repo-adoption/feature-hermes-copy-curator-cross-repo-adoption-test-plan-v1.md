# Test Plan V1: Hermes Copy Curator Cross-repo Adoption

## Local Validation
- [ ] Run `npm test` to ensure no regressions.
- [ ] Run `npm run build` to ensure no build breakage.
- [ ] Run `npm run lint` to ensure compliance.

## CI Validation (via PR)
- [ ] Verify GitHub Actions workflow triggers on PR.
- [ ] Verify checkout of host repo succeeds.
- [ ] Verify Hermes execution succeeds against PR diff.
- [ ] Verify Markdown artifact is uploaded.
- [ ] Verify PR summary comment is posted/updated.
