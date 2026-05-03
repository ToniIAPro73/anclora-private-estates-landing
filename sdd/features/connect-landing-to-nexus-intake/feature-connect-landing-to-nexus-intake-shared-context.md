# Shared Context — Landing Nexus Intake Connection

## Contexto

La landing ya contiene varios formularios o flujos de captación.

`SellerIntakeForm` existe visualmente, pero no tiene lógica de envío.

`ValuationRequestForm`, `DataLabSignalsSection` y `PartnersSynergiSection` ya contienen integraciones directas con endpoints públicos de Anclora Nexus.

## Decisión inicial

La feature debe evitar una migración agresiva.

Primero debe crear una integración segura, trazable y configurable, conectando `SellerIntakeForm` y dejando preparada la normalización futura.

## Restricción

No hardcodear URLs sensibles o temporales.

No introducir secretos en frontend.

Solo usar variables públicas `VITE_*` cuando el endpoint sea explícitamente público.

## Fuentes

- Bóveda Anclora como fuente normativa.
- `anclora-design-system` como fuente ejecutable.
- `sdd/contracts/` como baseline local.
