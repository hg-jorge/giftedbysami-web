# Pendientes

Marca `[x]` cuando se resuelva. En el código, cada pendiente está marcado con `[PENDIENTE: …]`.

## Datos de Sami
- [ ] **Correo de contacto** → `assets/js/main.js`, `CONTACTO.correo`. Hoy el enlace "Correo" del pie muestra "se agregará pronto".
- [x] **Instagram** → `https://www.instagram.com/giftedbysami/` en `assets/js/main.js`, `CONTACTO.instagram` (2026-10-28).
- [ ] **Horario de entregas** → no aparece en el diseño. Falta el dato y decidir dónde va.
- [ ] **Términos y condiciones** y **Aviso de privacidad** → hoy muestran "estarán disponibles pronto" (pie de página de las 4 páginas y último enlace de la FAQ). Se desarrollarán más adelante.
- [ ] **Foto de Sami** (temporal) → reemplazar `assets/img/about-foto-sami.webp` con el mismo nombre (proporción 531 × 768).

## Definiciones de Jorge
- [ ] **Mensajes de WhatsApp de cada botón** → `assets/js/main.js`, `MENSAJES_WA`:
  `personalizado`, `grupal`, `express` (celular rosa), `footer`, `flotante`.
- [ ] **Submenú "picks"** (home y barra de menú): destino de `temporada`, `trending` y `all year`. Hoy muestran "estarán disponibles pronto".
- [ ] **"VER CATÁLOGO"** (ticket Sami's Picks): destino. Hoy muestra "estará disponible pronto".
- [ ] **Favicon** → Jorge lo tiene; va en `assets/img/` (se conecta en Fase 3).

## Precios (se publican así por ahora; cambiarán)
| Servicio | Precio hoy | Dónde vive |
|---|---|---|
| Personalizado | desde $5,165 | imagen `servicios-ticket-personalizado.webp` + aria-label/alt en `servicios.html` |
| Grupal | $3,165 + 35% (presupuestos desde $5,800) | imagen `servicios-ticket-grupal.webp` + aria-label/alt |
| Sami's Picks | precios en catálogo, + IVA con factura | imagen `servicios-ticket-sami-picks.webp` + aria-label/alt |
| Express | desde +$1,000 | texto en `servicios.html`, sección express + aria-label del celular |

Para cambiar un precio de ticket: se edita en Canva, se exporta y se recorta la imagen nueva.

## Publicación
- [ ] Fase 3: revisión ligera (title, description, favicon, Open Graph, alt, celular, WhatsApp).
- [ ] Fase 4-5: subir a GitHub y activar Pages.
- [ ] Fase 6: conectar `giftedbysami.com` + HTTPS.
