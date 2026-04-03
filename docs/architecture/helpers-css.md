# `src/styles/private-estates-helpers.css`

```css
.pe-section {
  padding-block: var(--pe-space-20);
}

@media (min-width: 1024px) {
  .pe-section {
    padding-block: var(--pe-space-28);
  }
}

.pe-card {
  background: var(--pe-surface-low);
  border-radius: var(--pe-radius-lg);
  box-shadow: var(--pe-shadow-soft);
}

.pe-card-deep {
  background: var(--pe-deep-surface);
  color: var(--pe-deep-text);
  border-radius: var(--pe-radius-lg);
  box-shadow: var(--pe-shadow-medium);
}

.pe-glass {
  background: var(--pe-glass-bg);
  backdrop-filter: blur(var(--pe-glass-blur));
  -webkit-backdrop-filter: blur(var(--pe-glass-blur));
  border: 1px solid var(--pe-glass-border);
}

.pe-eyebrow {
  font-size: var(--pe-text-xs);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--pe-text-muted);
}

.pe-display {
  font-family: var(--pe-font-display);
  letter-spacing: -0.03em;
  line-height: 0.94;
}

.pe-text-soft {
  color: var(--pe-text-soft);
}

.pe-text-muted {
  color: var(--pe-text-muted);
}

.pe-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0 1.5rem;
  border: 0;
  border-radius: var(--pe-radius-pill);
  background: linear-gradient(135deg, var(--pe-brand), var(--pe-brand-2));
  color: white;
  transition:
    transform var(--pe-duration-fast) var(--pe-ease),
    opacity var(--pe-duration-fast) var(--pe-ease),
    box-shadow var(--pe-duration-fast) var(--pe-ease);
}

.pe-btn-primary:hover {
  opacity: 0.96;
  transform: translateY(-1px);
  box-shadow: var(--pe-shadow-soft);
}

.pe-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0 1.5rem;
  border: 0;
  border-radius: var(--pe-radius-pill);
  background: var(--pe-surface-high);
  color: var(--pe-text);
  transition:
    background var(--pe-duration-fast) var(--pe-ease),
    transform var(--pe-duration-fast) var(--pe-ease);
}

.pe-btn-secondary:hover {
  background: var(--pe-surface-strong);
  transform: translateY(-1px);
}

.pe-input {
  width: 100%;
  min-height: 52px;
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 1.25rem;
  background: var(--pe-surface-high);
  color: var(--pe-text);
}

.pe-textarea {
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 1.25rem;
  background: var(--pe-surface-high);
  color: var(--pe-text);
  resize: vertical;
}

.pe-input::placeholder,
.pe-textarea::placeholder {
  color: var(--pe-text-muted);
}
```
