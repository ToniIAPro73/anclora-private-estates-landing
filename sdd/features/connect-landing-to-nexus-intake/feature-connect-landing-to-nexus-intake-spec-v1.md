# SPEC — Landing Nexus Intake Connection v1

## 1. Objetivo

Conectar la captación de leads de la landing con el intake público de Anclora Nexus / n8n Unified Lead Intake.

## 2. Problema actual

- `SellerIntakeForm` no envía datos.
- Existen integraciones directas ya implementadas en otros flujos.
- Falta un contrato local de payload.
- Falta una estrategia única para errores, estados y trazabilidad.

## 3. Arquitectura propuesta

Crear una capa cliente de intake en frontend:

- `src/lib/lead-intake.ts` o equivalente.
- Payload normalizado.
- Endpoint configurable mediante variable `VITE_*`.
- Estados de envío en formulario.
- Validación mínima en cliente.
- Mensajes localizados usando `site-copy`.

## 4. Variables propuestas

- `VITE_N8N_LEAD_INTAKE_WEBHOOK_URL`
- fallback opcional: `VITE_ANCLORA_NEXUS_BASE_URL`

No introducir secretos.

## 5. Payload mínimo

Campos sugeridos:

- `source`
- `lead_type`
- `language`
- `name`
- `email`
- `phone`
- `zone`
- `property_type`
- `commercialization`
- `message`
- `page_url`
- `submitted_at`

## 6. Alcance v1

Incluye:

- conectar `SellerIntakeForm`;
- preparar cliente reutilizable;
- documentar payload;
- añadir tests mínimos si el repo ya tiene patrón de test aplicable.

No incluye:

- rediseñar formularios;
- cambiar branding;
- migrar todos los endpoints existentes si eso aumenta riesgo;
- modificar backend de Nexus;
- crear workflows n8n desde este repo.

## 7. Criterios de aceptación

- `SellerIntakeForm` envía payload normalizado.
- Endpoint configurable sin secretos.
- Estados `submitting`, `success`, `error`.
- No se rompen formularios existentes.
- No hay URLs temporales hardcodeadas.
- Tests o validación documentada.
