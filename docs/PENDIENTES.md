# Pendientes

Marca `[x]` cuando se resuelva. En el código, cada pendiente está marcado con `[PENDIENTE: …]`.

## Datos de Sami
- [x] **Correo de contacto** → `sami@giftedbysami.com` en `assets/js/main.js`, `CONTACTO.correo` (2026-10-28).
- [x] **Instagram** → `https://www.instagram.com/giftedbysami/` en `assets/js/main.js`, `CONTACTO.instagram` (2026-10-28).
- [x] **Horario de entregas** → no hay horario fijo: se acuerda al contratar (así lo dice `terminos.html`, punto 10).
- [x] **Términos y condiciones** y **Aviso de privacidad** → publicados en `terminos.html` y `privacidad.html` (2026-10-30), enlazados desde el pie y la FAQ.
- [ ] **Foto de Sami** (temporal) → reemplazar `assets/img/about-foto-sami.webp` con el mismo nombre (proporción 531 × 768).

## Definiciones de Jorge
- [ ] **Mensajes de WhatsApp de cada botón** → `assets/js/main.js`, `MENSAJES_WA`:
  `personalizado`, `grupal`, `express` (celular rosa), `footer`, `flotante`.
- [x] **Submenú "picks" · temporada** → `picks/index.html` (2026-11-09).
- [ ] **Submenú "picks" · trending y all year**: destino propio. Por ahora también llevan a `picks/index.html`.
- [x] **"VER CATÁLOGO"** (ticket Sami's Picks) → `picks/index.html` (2026-11-09).

## Tienda picks: confirmar con Sami (marcados `// TODO` en `picks/data/catalogo.js`)
- [ ] **Copas grabadas:**
  - La maqueta dice "+$100 c/u".
  - Se cobra por copa: $100 en Intentions (1 copa) y $200 en Cheers y Fortune (2 copas).
- [ ] **Fortune:** ya incluye 2 velas de miel, pero la maqueta también las ofrece como extra.
- [ ] **"Vela 2027 +$199"** (lámina 7): no está en la maqueta 05 y no se agregó.
- [ ] **Obsidiana Brew:** la descripción menciona una prensa francesa que no está en "Qué incluye".
- [ ] **Etiqueta de Corporate en el hub:** la maqueta dice "OBSIDIANA · SANG BLEU · BLACK"; se usa la versión con BREW.
- [ ] **Entregas de New Year:** la maqueta dice "1 al 23 de diciembre" en la ficha; se usa "1 al 30" (como en Save the dates).
- [ ] **Caja "Tu logo":** "[correo de Gifted]" se cambió por sami@giftedbysami.com.
- [ ] **Fotos:** ningún producto ni colección tiene foto todavía (se ve el recuadro beige).
- [x] **Favicon** → listo (2026-10-28). Original en `../respaldo-original/Logo GIFTED by SAMI.png`.

## Precios (se publican así por ahora; cambiarán)
| Servicio | Precio hoy | Dónde vive |
|---|---|---|
| Personalizado | desde $3,500 (desde 2026-11-13) | imagen `servicios-ticket-personalizado.webp` + aria-label/alt en `servicios.html` |
| Grupal | $3,000 + 35% (desde 2026-11-13) | imagen `servicios-ticket-grupal.webp` + aria-label/alt |
| Sami's Picks | precios en catálogo, + IVA con factura | imagen `servicios-ticket-sami-picks.webp` + aria-label/alt |
| Express | desde +$1,000 | texto en `servicios.html`, sección express + aria-label del celular |

Para cambiar un precio de ticket: se edita en Canva, se exporta y se recorta la imagen nueva.
- [ ] **Términos y condiciones** (`terminos.html`) todavía dicen los precios viejos de Personalizado ($5,165) y Grupal ($3,165 + 35%, mínimo $5,800). Falta que Jorge confirme si se actualizan.
- [ ] **Tickets Personalizado y Grupal:** se usaron las exportaciones que mandó Jorge (unos 375 px de ancho; las anteriores eran de ~756 px). Se ven un poco menos nítidos en pantallas Retina. Para que queden perfectos: exportar de Canva a ×2 y reemplazar.

## Publicación
- [x] Fase 3: revisión ligera (títulos, descripciones, favicon, vista previa, h1, letra del menú, carga diferida, 404).
- [x] Al conectar el dominio: `og:url` y `og:image` de las 4 páginas ya apuntan a `https://giftedbysami.com/`.
- [x] Fase 4-5: publicado en https://hg-jorge.github.io/giftedbysami-web/ (2026-10-28, etiqueta `v1-publicada`).
- [x] Fase 6: `giftedbysami.com` conectado con HTTPS (2026-10-28; certificado de GitHub, se renueva solo). `www` redirige al dominio sin www.
