# `src/index.css`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

input:focus,
select:focus,
textarea:focus,
button:focus-visible,
a:focus-visible {
  outline: none;
  box-shadow: var(--pe-focus);
}

.container-pe {
  width: min(1280px, calc(100% - 2rem));
  margin-inline: auto;
}

@media (min-width: 1024px) {
  .container-pe {
    width: min(1280px, calc(100% - 5rem));
  }
}
```
