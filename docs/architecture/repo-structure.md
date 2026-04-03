# Estructura del repo asociada a la landing page `Anclora Private Estates v1`

## Objetivo

Esta estructura está pensada para una **landing pública premium** de `Anclora Private Estates`, centrada en:

- Palma y suroeste de Mallorca
- compradores e inversores nacionales e internacionales de alto poder adquisitivo
- captación selectiva de propietarios
- autoridad territorial apoyada por `Anclora Data Lab`
- confianza reforzada por `eXp Realty`

La organización está orientada a una base **Vite + React + TypeScript + Tailwind/CSS utilities**, con secciones desacopladas, datos separados y una capa de estilos propia para la identidad visual Anclora.

---

## Árbol de carpetas y archivos

```text
anclora-private-estates/
├─ public/
│  ├─ brand/
│  │  ├─ Logo_Anclora_Private_Estates_sin_texto.png
│  │  ├─ logo-anclora-private-estates-exp.png
│  │  └─ favicon.ico
│  └─ assets/
│     └─ hero/
│        └─ mallorca-southwest-hero.jpg
│
├─ src/
│  ├─ components/
│  │  ├─ brand/
│  │  │  ├─ BrandLockup.tsx
│  │  │  └─ ExpTrustBadge.tsx
│  │  ├─ forms/
│  │  │  └─ SellerIntakeForm.tsx
│  │  └─ layout/
│  │     ├─ PENavbar.tsx
│  │     └─ PEFooter.tsx
│  │
│  ├─ data/
│  │  ├─ investor-profiles.ts
│  │  └─ mallorca-focus.ts
│  │
│  ├─ sections/
│  │  ├─ ContactSection.tsx
│  │  ├─ CredibilitySection.tsx
│  │  ├─ DataLabSignalsSection.tsx
│  │  ├─ EcosystemAccessSection.tsx
│  │  ├─ FAQSection.tsx
│  │  ├─ FinalCTASection.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ InvestorSection.tsx
│  │  ├─ MallorcaFocusSection.tsx
│  │  └─ SellerIntakeSection.tsx
│  │
│  ├─ styles/
│  │  ├─ private-estates-helpers.css
│  │  └─ private-estates-tokens.css
│  │
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
│
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ README.md
```

---

## Función de cada bloque

## `public/`

### `public/brand/`
Contiene los assets de marca usados en navbar, hero, footer y credibilidad.

- `Logo_Anclora_Private_Estates_sin_texto.png`
  - emblema principal de marca
- `logo-anclora-private-estates-exp.png`
  - lockup institucional con `eXp Realty`
- `favicon.ico`
  - favicon del sitio

### `public/assets/hero/`
Contiene el visual principal del hero.

- `mallorca-southwest-hero.jpg`
  - imagen editorial/patrimonial de Mallorca para la cabecera

---

## `src/components/`

## `src/components/brand/`

### `BrandLockup.tsx`
Gestiona la marca según contexto:

- `mark`
- `full`
- `full-exp`

Uso esperado:
- navbar
- hero
- bloque de credibilidad
- footer

### `ExpTrustBadge.tsx`
Badge reutilizable de confianza para insertar el respaldo de `eXp Realty` sin convertirlo en la marca dominante.

Uso esperado:
- hero
- seller intake
- contact
- footer

---

## `src/components/forms/`

### `SellerIntakeForm.tsx`
Formulario principal de captación de propietarios.

Campos:
- nombre
- email
- teléfono
- zona del inmueble
- tipo de propiedad
- preferencia de comercialización
- mensaje

---

## `src/components/layout/`

### `PENavbar.tsx`
Navbar flotante de la landing.

Incluye:
- marca
- navegación principal
- CTA a evaluación confidencial

### `PEFooter.tsx`
Footer institucional.

Debe incluir:
- marca
- contacto
- zonas foco
- legal
- acceso selectivo
- presencia institucional de `eXp Realty`

---

## `src/data/`

### `mallorca-focus.ts`
Agrupa el foco territorial por clusters estratégicos.

Clusters previstos:
- Palma & Hillside Core
- Calvià Coastal Premium
- Southwest Lifestyle & Capital Preservation
- Heritage & Serra Character

### `investor-profiles.ts`
Define los perfiles inversores objetivo.

Perfiles previstos:
- inversor patrimonial nacional
- international lifestyle investor
- comprador UHNW relacional

---

## `src/sections/`

### `HeroSection.tsx`
Cabecera principal de la landing.

Contiene:
- posicionamiento
- foco Mallorca / suroeste
- trust note de `eXp`
- CTA principal y secundario
- visual editorial

### `CredibilitySection.tsx`
Bloque de credibilidad.

Debe resolver:
- por qué confiar
- respaldo institucional
- experiencia tecnológica
- enfoque premium y territorial

### `MallorcaFocusSection.tsx`
Explica Mallorca como sistema de microzonas y no como lista plana de barrios.

### `InvestorSection.tsx`
Define el encaje de la propuesta para capital nacional e internacional de alta convicción.

### `SellerIntakeSection.tsx`
Bloque clave de captación de propietarios, unido al formulario.

### `DataLabSignalsSection.tsx`
Sección de autoridad basada en señales territoriales y lectura de mercado.

### `ContactSection.tsx`
Sección de contacto real para dar destino a `#contacto`.

### `FinalCTASection.tsx`
Cierre fuerte de la landing con doble CTA.

### `EcosystemAccessSection.tsx`
Bloque secundario para mostrar:

- `Anclora Data Lab`
- `Anclora Synergi`

Sin sobrecargar la home.

### `FAQSection.tsx`
FAQs resumidas para resolver objeciones sin convertir la home en un muro de texto.

---

## `src/styles/`

### `private-estates-tokens.css`
Define la base visual global:

- colores
- tipografía
- radios
- spacing
- sombras
- focus
- glass effect

### `private-estates-helpers.css`
Define clases helper reutilizables para:

- secciones
- cards
- botones
- inputs
- eyebrows
- display typography

---

## Archivos raíz de `src/`

### `App.tsx`
Ensamblado principal de la landing.

Orden recomendado:

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

### `main.tsx`
Punto de entrada de React.

Debe importar:
- `private-estates-tokens.css`
- `private-estates-helpers.css`
- `index.css`

### `index.css`
Base CSS global:
- reset ligero
- focus
- links
- imágenes
- contenedor base

---

## Estructura mínima realmente necesaria para lanzar la v1

Si quisieras lanzar una **v1 mínima pero seria**, con esto bastaría:

```text
src/
├─ components/
│  ├─ brand/
│  │  ├─ BrandLockup.tsx
│  │  └─ ExpTrustBadge.tsx
│  ├─ forms/
│  │  └─ SellerIntakeForm.tsx
│  └─ layout/
│     ├─ PENavbar.tsx
│     └─ PEFooter.tsx
├─ data/
│  ├─ investor-profiles.ts
│  └─ mallorca-focus.ts
├─ sections/
│  ├─ ContactSection.tsx
│  ├─ CredibilitySection.tsx
│  ├─ DataLabSignalsSection.tsx
│  ├─ FinalCTASection.tsx
│  ├─ HeroSection.tsx
│  ├─ InvestorSection.tsx
│  ├─ MallorcaFocusSection.tsx
│  └─ SellerIntakeSection.tsx
├─ styles/
│  ├─ private-estates-helpers.css
│  └─ private-estates-tokens.css
├─ App.tsx
├─ index.css
└─ main.tsx
```

---

## Archivos opcionales o fase 2

Estos pueden esperar si quieres salir antes:

- `EcosystemAccessSection.tsx`
- `FAQSection.tsx`
- internacionalización completa
- integración real del formulario con backend
- analítica avanzada
- motion avanzada
- área privada real

---

## Recomendación final

La landing v1 no debe organizarse como:

- portal inmobiliario clásico
- dashboard maquillado
- landing tech genérica

Debe organizarse como una **firma inmobiliaria premium con sensibilidad editorial**, foco claro en Mallorca y una narrativa donde:

- `Private Estates` es la puerta pública
- `Data Lab` aporta inteligencia
- `eXp Realty` aporta respaldo
- el formulario de propietarios actúa como motor inicial de crecimiento del inventario

---
