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
- [ ] **Submenú "picks"** (home y barra de menú): destino de `temporada`, `trending` y `all year`. Hoy muestran "estarán disponibles pronto".
- [ ] **"VER CATÁLOGO"** (ticket Sami's Picks): destino. Hoy muestra "estará disponible pronto".
- [x] **Favicon** → listo (2026-10-28). Original en `../respaldo-original/Logo GIFTED by SAMI.png`.

## Precios (se publican así por ahora; cambiarán)
| Servicio | Precio hoy | Dónde vive |
|---|---|---|
| Personalizado | desde $5,165 | imagen `servicios-ticket-personalizado.webp` + aria-label/alt en `servicios.html` |
| Grupal | $3,165 + 35% (presupuestos desde $5,800) | imagen `servicios-ticket-grupal.webp` + aria-label/alt |
| Sami's Picks | precios en catálogo, + IVA con factura | imagen `servicios-ticket-sami-picks.webp` + aria-label/alt |
| Express | desde +$1,000 | texto en `servicios.html`, sección express + aria-label del celular |

Para cambiar un precio de ticket: se edita en Canva, se exporta y se recorta la imagen nueva.

## Publicación
- [x] Fase 3: revisión ligera (títulos, descripciones, favicon, vista previa, h1, letra del menú, carga diferida, 404).
- [x] Al conectar el dominio: `og:url` y `og:image` de las 4 páginas ya apuntan a `https://giftedbysami.com/`.
- [x] Fase 4-5: publicado en https://hg-jorge.github.io/giftedbysami-web/ (2026-10-28, etiqueta `v1-publicada`).
- [x] Fase 6: `giftedbysami.com` conectado con HTTPS (2026-10-28; certificado de GitHub, se renueva solo). `www` redirige al dominio sin www.
