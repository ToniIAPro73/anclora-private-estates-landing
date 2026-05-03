# Technical Spec — Anclora Private Estates Landing

## Stack

- Vite
- React
- TypeScript
- Tailwind/CSS según configuración del repo
- Deploy previsto en Vercel

## Arquitectura

- `src/app/` — entrada principal de aplicación.
- `src/components/` — componentes reutilizables.
- `src/sections/` — secciones de landing.
- `src/content/site-copy.ts` — copy centralizado.
- `src/components/forms/` — formularios de captación.

## Reglas técnicas

1. Las URLs externas deben configurarse mediante variables de entorno.
2. Las integraciones con Nexus/n8n deben ser tolerantes a error.
3. No incluir claves privadas ni tokens en frontend.
4. Los formularios deben validar consentimiento antes de enviar.
5. Las features deben preservar build estable.
