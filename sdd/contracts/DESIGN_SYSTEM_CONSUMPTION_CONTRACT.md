# DESIGN_SYSTEM_CONSUMPTION_CONTRACT

## Estado

Contrato local derivado para `anclora-private-estates-landing`.

## Fuente ejecutable

- Repo local: `/home/toni/projects/anclora-design-system`
- Entrada recomendada: `@anclora/design-system/system.css`

## Principio

La Bóveda gobierna contratos, decisiones, excepciones y cumplimiento.
`anclora-design-system` materializa esas decisiones en tokens, taxonomy, themes, foundations, components, patterns y assets.

## Shell taxonómico objetivo

- `tier-ultra-premium`
- `domain-real-estate`
- `archetype-landing`
- `role-consumer`
- `cluster-real-estate`
- `product-anclora-private-estates`

## Clasificación

- Producto: `Anclora Private Estates Landing`
- Tipo: `Ultra Premium`
- Perfil UX/UI: `ultra premium market-entry landing`
- Tema objetivo: `dark-only`
- Idiomas objetivo: `es`, `en`, `de`
- Acento principal: oro / gold

## Capas ejecutables relevantes

- `src/taxonomy/`
- `src/tokens/`
- `src/themes/product.css`
- `src/foundations/`
- `src/components/button.css`
- `src/components/surface-panel.css`
- `src/components/language-switcher.css`
- `src/components/section-heading.css`
- `src/patterns/entry/premium-hero-split.pattern.md`
- `ui_kits/anclora-private-estates/README.md`

## Reglas

1. No redefinir localmente una gramática visual completa si existe una capa equivalente en `anclora-design-system`.
2. No copiar `preview/` ni `src/examples/` como implementación directa.
3. Usar `patterns` como guía de composición, no como API rígida.
4. Mantener `dark-only` como excepción documentada.
5. Mantener `es/en/de` como idiomas objetivo actuales.
6. No introducir `fr` como requisito de cierre en esta feature.
7. Si la implementación actual no consume todavía el design system, registrar el gap, no forzar cambios funcionales en esta feature.
