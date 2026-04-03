# Checklist final de QA visual y funcional · `Anclora Private Estates v1`

## Objetivo

Esta checklist sirve para revisar la landing `Anclora Private Estates v1` antes de publicarla.

Está orientada a validar cinco capas:

1. identidad visual
2. narrativa y posicionamiento
3. navegación y UX
4. captación y confianza
5. rendimiento y salida a producción

---

# 1. QA de identidad visual

## 1.1 Marca
- [ ] El logo principal de `Anclora Private Estates` se ve correctamente en navbar y footer.
- [ ] El lockup con `eXp Realty` aparece solo como respaldo, no como marca dominante.
- [ ] No hay conflictos visuales entre logo principal y lockup institucional.
- [ ] El favicon está cargado y visible en navegador.

## 1.2 Tipografía
- [ ] `Newsreader` se usa en titulares y bloques editoriales.
- [ ] `Manrope` se usa en cuerpo, navegación, formularios y UI.
- [ ] No hay cambios accidentales de tipografía entre secciones.
- [ ] Los tamaños de titulares mantienen jerarquía clara en desktop y móvil.

## 1.3 Paleta y acabados
- [ ] El light mode es la base principal de la landing.
- [ ] Los tonos crema, teal y oro están equilibrados.
- [ ] No hay uso excesivo de oro decorativo.
- [ ] Las sombras son suaves y no parecen plantilla SaaS genérica.
- [ ] No hay bordes duros de 1px usados como recurso dominante.

## 1.4 Composición
- [ ] La landing no parece una rejilla uniforme de cards repetidas.
- [ ] Las secciones tienen suficiente aire vertical.
- [ ] El hero, Mallorca Focus y Data Lab tienen composición asimétrica o editorial.
- [ ] No hay bloques apelmazados ni sensación de “scroll de cajas”.

---

# 2. QA de narrativa y posicionamiento

## 2.1 Hero
- [ ] El hero deja claro en menos de 5 segundos:
  - [ ] qué es Anclora Private Estates
  - [ ] dónde opera
  - [ ] para quién está diseñado
- [ ] El foco geográfico en Palma y suroeste de Mallorca está visible.
- [ ] La propuesta no suena a consultora tecnológica.
- [ ] La propuesta no suena a portal inmobiliario clásico.
- [ ] `eXp Realty` aparece como respaldo de confianza, no como eje principal.

## 2.2 Mensaje de marca
- [ ] La narrativa transmite criterio, confidencialidad y posicionamiento premium.
- [ ] No hay claims vacíos tipo “innovación y excelencia”.
- [ ] El tono general es premium, sobrio y creíble.
- [ ] La web no promete volumen de catálogo que no existe.

## 2.3 Credibilidad
- [ ] La sección de credibilidad responde claramente a “por qué confiar”.
- [ ] Se ve el cruce entre:
  - [ ] experiencia inmobiliaria
  - [ ] experiencia tecnológica
  - [ ] inteligencia territorial
  - [ ] respaldo eXp

## 2.4 Data Lab
- [ ] La sección de `Data Lab` aporta autoridad y no ruido.
- [ ] No hay cifras fuertes sin fuente o sin base verificable.
- [ ] El lenguaje usado parece inteligencia curada, no pseudoresearch.

---

# 3. QA territorial y comercial

## 3.1 Mallorca Focus
- [ ] Las zonas están organizadas por clusters, no por lista plana.
- [ ] Cada cluster tiene lógica propia.
- [ ] Cada cluster incluye:
  - [ ] áreas
  - [ ] positioning
  - [ ] audience
- [ ] La sección transmite que Mallorca no se trata como un mercado homogéneo.

## 3.2 Inversor objetivo
- [ ] La sección de inversores habla a perfiles concretos.
- [ ] El usuario entiende si la propuesta está pensada para él o no.
- [ ] El tono es patrimonial, confidencial y premium.
- [ ] No parece una web para buyer genérico o lead barato.

## 3.3 Propietarios
- [ ] La sección para propietarios está visible y fuerte.
- [ ] El CTA principal de la landing conduce a esa sección.
- [ ] La propuesta para vendedores está clara incluso sin catálogo grande publicado.
- [ ] La posibilidad de exclusiva / no exclusiva está expresada con elegancia y sin parecer captación agresiva.

---

# 4. QA de navegación y UX

## 4.1 Navbar
- [ ] El navbar funciona en desktop.
- [ ] El navbar no rompe visualmente en tablet.
- [ ] El CTA del navbar es visible y claro.
- [ ] No hay demasiados items en navegación.
- [ ] `eXp Group Spain` no aparece como item del menú principal.

## 4.2 Anchors y scroll
- [ ] Todos los enlaces internos funcionan:
  - [ ] `#inicio`
  - [ ] `#mallorca-focus`
  - [ ] `#inversores`
  - [ ] `#propietarios`
  - [ ] `#data-lab`
  - [ ] `#contacto`
- [ ] No hay botones apuntando a secciones inexistentes.
- [ ] El scroll entre anchors es correcto.
- [ ] El navbar fijo no tapa el contenido al saltar a una sección.

## 4.3 Responsive
- [ ] El hero se ve bien en móvil.
- [ ] Los CTAs no se rompen en móvil.
- [ ] Los textos largos no generan bloques desproporcionados.
- [ ] Las cards no colapsan mal en pantallas pequeñas.
- [ ] El formulario de propietarios es usable desde móvil.

## 4.4 Legibilidad
- [ ] No hay bloques con contraste insuficiente.
- [ ] Los badges y chips de texto se leen bien.
- [ ] Las etiquetas del formulario tienen tamaño suficiente.
- [ ] Los títulos largos no quedan cortados o forzados.

---

# 5. QA de formularios y confianza

## 5.1 Seller Intake Form
- [ ] Todos los campos se renderizan correctamente.
- [ ] Los placeholders son claros.
- [ ] El formulario no parece utilitario o genérico.
- [ ] El botón de envío es visible y está bien etiquetado.
- [ ] La nota de privacidad es visible.

## 5.2 Estados del formulario
- [ ] No hay errores visuales al escribir en inputs.
- [ ] El focus state se ve bien.
- [ ] Selects y textarea mantienen estilo consistente.
- [ ] El submit no rompe la UI.
- [ ] Si aún no hay backend, el comportamiento temporal está controlado y no confunde.

## 5.3 Confianza
- [ ] La landing transmite privacidad y discreción.
- [ ] No hay fricción innecesaria en el formulario.
- [ ] El usuario entiende qué pasa después de enviar solicitud.
- [ ] El respaldo de eXp suma confianza en los puntos adecuados.

---

# 6. QA de contacto y cierre

## 6.1 ContactSection
- [ ] La sección `#contacto` existe realmente.
- [ ] Email, teléfono y ubicación son correctos.
- [ ] Los enlaces `mailto:` y `tel:` funcionan.
- [ ] La sección de contacto no contradice el bloque de propietarios.

## 6.2 Final CTA
- [ ] El CTA final no repite exactamente el hero.
- [ ] Tiene fuerza visual suficiente.
- [ ] Los dos caminos de acción están claros.
- [ ] El cierre se siente premium y no parece banner genérico.

## 6.3 Footer
- [ ] El footer contiene marca, contacto, legal y respaldo.
- [ ] `eXp Realty` aparece con claridad, pero subordinado.
- [ ] No hay sensación de footer mínimo de demo.
- [ ] El footer cierra la experiencia con coherencia institucional.

---

# 7. QA técnico básico

## 7.1 Integridad del ensamblado
- [ ] `App.tsx` importa solo archivos que existen realmente.
- [ ] No hay imports rotos.
- [ ] No hay warnings de compilación relevantes.
- [ ] No hay secciones declaradas pero no montadas.

## 7.2 Assets
- [ ] Todos los assets locales cargan bien.
- [ ] No hay imágenes remotas temporales colándose en producción.
- [ ] Los logos se ven bien en retina.
- [ ] No hay rutas rotas en `/brand/` o `/assets/hero/`.

## 7.3 CSS
- [ ] `private-estates-tokens.css` se importa correctamente.
- [ ] `private-estates-helpers.css` se importa correctamente.
- [ ] `index.css` se importa correctamente.
- [ ] No hay colisiones visuales entre clases helper y clases utilitarias.

## 7.4 Rendimiento básico
- [ ] La página carga sin saltos extraños.
- [ ] El hero visual no bloquea innecesariamente el render.
- [ ] No hay scripts externos innecesarios.
- [ ] No hay dependencias temporales tipo CDN del prototipo de Grok en la versión final.

---

# 8. QA de coherencia estratégica

## 8.1 Alineación con la v1
- [ ] La landing se comporta como puerta pública premium.
- [ ] `Data Lab` actúa como capa de autoridad, no como dashboard.
- [ ] La principal prioridad comercial visible es:
  - [ ] propietarios
  - [ ] compradores/inversores premium
- [ ] La landing no intenta vender todavía una plataforma demasiado amplia.

## 8.2 Lo que NO debe parecer
- [ ] No parece una agencia tradicional genérica.
- [ ] No parece una startup SaaS oscura con copy inmobiliario pegado encima.
- [ ] No parece un portal de listado masivo.
- [ ] No parece una demo tecnológica.

---

# 9. Checklist mínima antes de publicar

Si solo haces una revisión rápida, comprueba al menos esto:

- [ ] Hero claro
- [ ] CTA principal correcto
- [ ] Seller intake funcional
- [ ] Sección territorial sólida
- [ ] Data Lab creíble
- [ ] Contacto real
- [ ] Footer correcto
- [ ] Anchors funcionando
- [ ] No hay errores visuales graves en móvil
- [ ] `eXp` bien integrado
- [ ] No hay claims dudosos
- [ ] La página se siente premium y creíble

---

# 10. Criterio final de publicación

Publica la landing cuando puedas responder **sí** a estas 4 preguntas:

- [ ] ¿La propuesta se entiende rápido?
- [ ] ¿La marca transmite confianza real?
- [ ] ¿Hay un camino claro para propietarios e inversores?
- [ ] ¿El diseño parece una firma premium y no una plantilla?

Si alguna de esas 4 respuestas es “no”, todavía no está lista.

---
