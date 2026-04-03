# Orden exacto de implementación · `Anclora Private Estates v1`

## Objetivo

Este documento define el **orden recomendado de implementación, archivo por archivo**, para construir la landing page `Anclora Private Estates v1` con el menor nivel posible de fricción.

La secuencia está optimizada para:

- cerrar primero la base visual
- asegurar cabecera + hero + captación
- construir después territorio e inversor
- cerrar con autoridad, contacto y footer
- evitar bloqueos por secciones no críticas

---

# Principio de trabajo

No construyas la landing por bloques “bonitos”.  
Constrúyela por **capas de valor**:

1. base visual
2. navegación y marca
3. posicionamiento
4. captación de propietarios
5. legitimidad
6. foco territorial
7. encaje inversor
8. inteligencia visible
9. contacto
10. cierre
11. footer

---

# Fase 0 · Preparación

## 0.1 `public/brand/`
### Acción
Verificar que existan y estén bien nombrados:

- `Logo_Anclora_Private_Estates_sin_texto.png`
- `logo-anclora-private-estates-exp.png`
- `favicon.ico`

### Resultado esperado
La marca puede usarse ya en navbar, hero, credibilidad y footer.

---

## 0.2 `public/assets/hero/`
### Acción
Añadir un visual principal definitivo o temporal:

- `mallorca-southwest-hero.jpg`

### Resultado esperado
El hero ya no depende de imágenes remotas o provisionales.

---

# Fase 1 · Base visual

## 1.1 `src/styles/private-estates-tokens.css`
### Acción
Crear tokens globales:
- color
- tipografía
- radios
- spacing
- sombras
- focus
- glass

### Prioridad
Máxima

### Dependencias
Ninguna

### Resultado esperado
Toda la landing puede compartir un sistema visual consistente.

---

## 1.2 `src/styles/private-estates-helpers.css`
### Acción
Crear helpers reutilizables:
- `pe-section`
- `pe-card`
- `pe-card-deep`
- `pe-glass`
- `pe-eyebrow`
- `pe-display`
- `pe-btn-primary`
- `pe-btn-secondary`
- `pe-input`
- `pe-textarea`

### Prioridad
Máxima

### Dependencias
`private-estates-tokens.css`

### Resultado esperado
Menos repetición y más coherencia visual.

---

## 1.3 `src/index.css`
### Acción
Crear base global:
- box sizing
- imágenes
- enlaces
- focus
- container base

### Prioridad
Alta

### Dependencias
Tokens

### Resultado esperado
Base limpia y consistente para toda la app.

---

## 1.4 `src/main.tsx`
### Acción
Importar:
- `private-estates-tokens.css`
- `private-estates-helpers.css`
- `index.css`

### Prioridad
Alta

### Dependencias
Archivos CSS previos

### Resultado esperado
Los estilos base ya cargan en toda la aplicación.

---

# Fase 2 · Marca y navegación

## 2.1 `src/components/brand/BrandLockup.tsx`
### Acción
Crear componente de marca con variantes:
- `mark`
- `full`
- `full-exp`

### Prioridad
Máxima

### Dependencias
Assets en `public/brand`

### Resultado esperado
Marca reutilizable y consistente.

---

## 2.2 `src/components/brand/ExpTrustBadge.tsx`
### Acción
Crear badge de confianza para `eXp Realty` con modos:
- `inline`
- `card`
- `footer`

### Prioridad
Alta

### Dependencias
Ninguna

### Resultado esperado
`eXp` puede integrarse como respaldo sin dominar la marca.

---

## 2.3 `src/components/layout/PENavbar.tsx`
### Acción
Crear navbar flotante con:
- logo principal
- navegación corta
- CTA: `Solicitar evaluación`

### Prioridad
Muy alta

### Dependencias
`BrandLockup.tsx`

### Resultado esperado
La cabecera principal queda cerrada.

---

# Fase 3 · Posicionamiento principal

## 3.1 `src/sections/HeroSection.tsx`
### Acción
Construir hero con:
- foco Mallorca / Palma / suroeste
- capital premium
- respaldo eXp
- CTA a propietarios
- CTA a foco territorial
- visual editorial

### Prioridad
Muy alta

### Dependencias
- `BrandLockup.tsx`
- `ExpTrustBadge.tsx`

### Resultado esperado
La propuesta de valor queda clara above the fold.

---

# Fase 4 · Captación principal

## 4.1 `src/components/forms/SellerIntakeForm.tsx`
### Acción
Crear formulario de propietarios:
- nombre
- email
- teléfono
- zona
- tipo de propiedad
- preferencia de comercialización
- mensaje

### Prioridad
Muy alta

### Dependencias
Estilos base

### Resultado esperado
Existe un formulario real para la principal intención comercial de la v1.

---

## 4.2 `src/sections/SellerIntakeSection.tsx`
### Acción
Crear bloque de captación de propietarios:
- argumento premium
- confidencialidad
- foco territorial
- trust note de eXp
- formulario incrustado

### Prioridad
Muy alta

### Dependencias
- `SellerIntakeForm.tsx`
- `ExpTrustBadge.tsx`

### Resultado esperado
La landing ya puede captar propietarios aunque no exista catálogo visible.

---

# Fase 5 · Credibilidad

## 5.1 `src/sections/CredibilitySection.tsx`
### Acción
Crear bloque de credibilidad con:
- agente independiente
- experiencia tecnológica
- inteligencia territorial
- respaldo eXp

### Prioridad
Alta

### Dependencias
- `BrandLockup.tsx`

### Resultado esperado
Se resuelve la objeción “por qué confiar”.

---

# Fase 6 · Territorio

## 6.1 `src/data/mallorca-focus.ts`
### Acción
Modelar clusters territoriales:
- `palma-hillside-core`
- `calvia-coastal-premium`
- `southwest-lifestyle-capital-preservation`
- `heritage-serra-character`

### Prioridad
Alta

### Dependencias
Ninguna

### Resultado esperado
El territorio queda estructurado como sistema, no como lista plana.

---

## 6.2 `src/sections/MallorcaFocusSection.tsx`
### Acción
Construir sección territorial con:
- introducción
- card principal
- cards secundarias
- áreas por cluster
- positioning
- audience

### Prioridad
Alta

### Dependencias
`mallorca-focus.ts`

### Resultado esperado
Mallorca queda presentada con tesis de valor y jerarquía.

---

# Fase 7 · Encaje inversor

## 7.1 `src/data/investor-profiles.ts`
### Acción
Crear perfiles:
- inversor patrimonial nacional
- international lifestyle investor
- comprador UHNW relacional

### Prioridad
Media-alta

### Dependencias
Ninguna

### Resultado esperado
El target queda definido con precisión.

---

## 7.2 `src/sections/InvestorSection.tsx`
### Acción
Crear sección de perfiles inversores:
- título
- introducción
- cards por perfil
- señales clave

### Prioridad
Media-alta

### Dependencias
`investor-profiles.ts`

### Resultado esperado
La home ya habla al capital correcto.

---

# Fase 8 · Autoridad e inteligencia visible

## 8.1 `src/sections/DataLabSignalsSection.tsx`
### Acción
Crear bloque de señales territoriales:
- 1 señal principal
- 2 señales secundarias
- CTA suave a acceso selectivo

### Prioridad
Alta

### Dependencias
Estilos base

### Resultado esperado
`Data Lab` aporta autoridad visible sin parecer dashboard ni informe bursátil.

---

# Fase 9 · Contacto real

## 9.1 `src/sections/ContactSection.tsx`
### Acción
Crear sección real con `id="contacto"`:
- email
- teléfono
- ubicación
- puente hacia evaluación confidencial

### Prioridad
Alta

### Dependencias
`ExpTrustBadge.tsx`

### Resultado esperado
Todos los enlaces `#contacto` tienen destino real.

---

# Fase 10 · Cierre comercial

## 10.1 `src/sections/FinalCTASection.tsx`
### Acción
Crear bloque final con:
- titular grande
- frase de cierre
- 2 CTAs

### Prioridad
Media-alta

### Dependencias
Estilos base

### Resultado esperado
La home cierra con claridad y una llamada a la acción fuerte.

---

# Fase 11 · Footer

## 11.1 `src/components/layout/PEFooter.tsx`
### Acción
Crear footer institucional con:
- marca
- contacto
- zonas foco
- legal
- acceso selectivo
- mención eXp

### Prioridad
Media

### Dependencias
- `BrandLockup.tsx`
- `ExpTrustBadge.tsx`

### Resultado esperado
La landing termina con una presencia sólida y profesional.

---

# Fase 12 · Ensamblado

## 12.1 `src/App.tsx`
### Acción
Montar la landing en este orden:

```tsx
<PENavbar />

<main>
  <HeroSection />
  <CredibilitySection />
  <MallorcaFocusSection />
  <InvestorSection />
  <SellerIntakeSection />
  <DataLabSignalsSection />
  <ContactSection />
  <FinalCTASection />
</main>

<PEFooter />
```

### Prioridad
Alta

### Dependencias
Todas las secciones críticas creadas

### Resultado esperado
Landing completa y navegable.

---

# Fase 13 · Opcional / Fase 2

## 13.1 `src/sections/EcosystemAccessSection.tsx`
### Acción
Añadir bloque pequeño para:
- `Anclora Data Lab`
- `Anclora Synergi`

### Prioridad
Baja

---

## 13.2 `src/sections/FAQSection.tsx`
### Acción
Añadir FAQs resumidas.

### Prioridad
Baja

---

## 13.3 Integración real de formulario
### Acción
Conectar `SellerIntakeForm.tsx` a backend, email o automatización.

### Prioridad
Media, pero posterior al cierre visual

---

## 13.4 i18n completa
### Acción
Adaptar la landing a `es/en/de/fr`.

### Prioridad
Posterior al cierre de la v1 visual

---

# Orden resumido de implementación

```text
1.  src/styles/private-estates-tokens.css
2.  src/styles/private-estates-helpers.css
3.  src/index.css
4.  src/main.tsx

5.  src/components/brand/BrandLockup.tsx
6.  src/components/brand/ExpTrustBadge.tsx
7.  src/components/layout/PENavbar.tsx

8.  src/sections/HeroSection.tsx

9.  src/components/forms/SellerIntakeForm.tsx
10. src/sections/SellerIntakeSection.tsx

11. src/sections/CredibilitySection.tsx

12. src/data/mallorca-focus.ts
13. src/sections/MallorcaFocusSection.tsx

14. src/data/investor-profiles.ts
15. src/sections/InvestorSection.tsx

16. src/sections/DataLabSignalsSection.tsx
17. src/sections/ContactSection.tsx
18. src/sections/FinalCTASection.tsx

19. src/components/layout/PEFooter.tsx
20. src/App.tsx
```

---

# Criterio de “v1 lista”

Puedes considerar la landing v1 lista cuando se cumplan estos puntos:

- hero claro y premium
- CTA principal operativo
- seller intake visible y usable
- bloque de credibilidad cerrado
- foco Mallorca bien articulado
- sección inversor clara
- Data Lab visible como autoridad
- contacto real funcionando
- footer institucional correcto
- navegación interna sin anchors rotos

---

# Recomendación final

No retrases la publicación por:
- FAQ extensa
- partners
- área privada
- motion avanzada
- i18n completa
- automatizaciones complejas

La v1 debe salir cuando resuelva bien esto:

**posicionamiento + captación de propietarios + credibilidad + foco territorial**

---
