# Test Plan — Landing Nexus Intake Connection

## Validaciones funcionales

- Verificar que `SellerIntakeForm` previene submit vacío si aplica.
- Verificar que construye payload esperado.
- Verificar que usa variable pública configurada.
- Verificar estado success.
- Verificar estado error.
- Verificar que no rompe `ValuationRequestForm`.

## Validaciones técnicas

- `npm test` si existe.
- `npm run build` si existe.
- grep de URLs temporales.
- grep de secretos.
- revisión de cambios funcionales autorizados.

## Validaciones contractuales

- Respeta `LOCALIZATION_CONTRACT.md`.
- Respeta `UI_MOTION_CONTRACT.md`.
- Respeta `DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`.
- No activa `MODAL_CONTRACT.md`.
