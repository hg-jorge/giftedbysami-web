# Pendientes

Marca `[x]` cuando se resuelva. En el código, cada pendiente está marcado con `[PENDIENTE: …]`.

## Datos de Sami
- [ ] **Correo de contacto** → `assets/js/main.js`, `CONTACTO.correo`. Hoy el enlace "Correo" del pie muestra "se agregará pronto".
- [ ] **Instagram** → `assets/js/main.js`, `CONTACTO.instagram`. Hoy muestra "se agregará pronto". La FAQ también menciona su Instagram (fechas límite y fotos de regalos).
- [ ] **Horario de entregas** → no aparece en la página. Falta el dato y decidir dónde va (pie de página, FAQ o cartelera).
- [ ] **Términos y condiciones** y **Aviso de privacidad** → hoy los enlaces solo bajan a la FAQ (`index.html`, sección footer y última pregunta de la FAQ).
- [ ] **Foto de Sami** (temporal) → reemplazar `assets/img/about-foto-sami.webp` con el mismo nombre.

## Definiciones de Jorge
- [ ] **Mensajes de WhatsApp de cada botón** (7) → `assets/js/main.js`, `MENSAJES_WA`:
  `hero`, `personalizado`, `grupal`, `sami-picks`, `express`, `footer`, `flotante`.
- [ ] **Favicon** → Jorge lo tiene; va en `assets/img/` (se conecta en Fase 3).

## Precios (se publican así por ahora; cambiarán)
El precio visible está **dentro de las imágenes**; además está en texto en `index.html` (aria-label y alt):
| Servicio | Precio hoy | Imagen | En index.html |
|---|---|---|---|
| Personalizado | desde $5,165 | `ticket-personalizado.webp` | `data-wa="personalizado"` (aria-label + alt) |
| Grupal | $5,165 + 35% | `ticket-grupal.webp` | `data-wa="grupal"` (aria-label + alt) |
| Sami's Picks | precios en catálogo | `ticket-sami-picks.webp` | `data-wa="sami-picks"` |
| Express | desde +$1,000 | `express-paracaidas.webp` | `data-wa="express"` (aria-label) + alt de la imagen |

## Publicación
- [ ] Fase 3: revisión ligera (title, description, favicon, Open Graph, alt, celular, WhatsApp).
- [ ] Fase 4-5: subir a GitHub y activar Pages.
- [ ] Fase 6: conectar `giftedbysami.com` + HTTPS.
