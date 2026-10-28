# Gifted by Sami · sitio web

## Contexto
- **Cliente:** Sami, dueña de *Gifted by Sami*: asesoría y entrega de regalos para ejecutivos/CEOs con poco tiempo. Zonas: San Pedro, Cumbres, San Jerónimo (MTY, NL).
- **Agencia:** HG Digital Strategy. Responsable: Jorge González (no es desarrollador: explicar todo paso a paso, en español, sin tecnicismos sin explicar).
- **Sitio:** 4 páginas visuales, réplica del diseño de Canva "Final Gifted by Sami website" (el enlace lo tiene Jorge; no se publica aquí). Dominio final: `giftedbysami.com` (el correo de Sami usa Google Workspace en ese dominio).
- **Publicación:** GitHub Pages, cuenta `hg-jorge`, repo `giftedbysami-web`, rama `main`, carpeta raíz.
- **Stack:** HTML + CSS + JavaScript simples. SIN frameworks, SIN build, SIN npm. Se edita y publica tal cual.
- **Fecha límite del cliente:** 12-nov-2026.

## Mapa del proyecto
| Qué | Dónde |
|---|---|
| Páginas | `index.html` (home), `about.html`, `servicios.html`, `faq.html` (solo se llega desde "FAQ" del pie). Cada una dividida en `<!-- ===== SECCIÓN: x ===== -->` … `<!-- ===== FIN: x ===== -->` |
| Estilos (compartidos) | `assets/css/styles.css`, mismos nombres de sección (`/* ===== SECCIÓN: x ===== */`; celular en `/* móvil · x */` dentro de `@media (max-width:819px)`) |
| Colores y tipografías | variables en `:root` al inicio de `styles.css` |
| Tipografías | Open Sauce Sans (archivos en `assets/fonts`, licencia libre OFL). Helvetica World y Avenir (de pago) se sustituyen por las del sistema: Helvetica/Arial y Avenir/Nunito Sans |
| WhatsApp (número y mensaje de cada botón), correo, Instagram | bloque `CONTACTO` y `MENSAJES_WA` al inicio de `assets/js/main.js` |
| Comportamientos | `main.js`: avisos "próximamente" (`data-pending`), submenú de picks, galleta de servicios |
| Imágenes | `assets/img/` (nombre = página + qué es). Recortadas de la exportación de Canva a doble resolución |
| Pendientes / bitácora / publicación | `docs/PENDIENTES.md`, `docs/CAMBIOS.md`, `docs/DEPLOY.md` |

Secciones por página (sección → id → clase CSS):
- **index.html:** hero → `#home` → `.hero` (menú + submenú picks) · notas → `#notas` → `.notas` · no-worries → `#no-worries` · cartelera → `#zonas-entrega` · footer (variante `.footer--home`)
- **about.html:** about → `#about` → `.about` · footer
- **servicios.html:** como-funciona → `#como-funciona` → `.como` (galleta) · revelado → `#revelado` (oculto hasta romper la galleta) que contiene tickets → `#tickets`, franja-1800 → `.franja`, express → `#express` · footer
- **faq.html:** faq → `#faq` → `.faq` · footer
- En todas: barra → `#barra` → `.barra` (menú fijo arriba, siempre visible; en home aparece al bajar con `.barra--home`), footer → `#contacto` → `.footer`, whatsapp-flotante → `.wa-float` + `.toast`
- **La barra y el pie de página están repetidos en las 4 páginas.** Un cambio en cualquiera de los dos = editar los 4 archivos igual (en la barra solo cambia `aria-current="page"` según la página).

Notas técnicas:
- Cada sección es un "escenario" (`.stage`, ancho Canva 1366) con coordenadas de Canva: `--H` alto de la sección, `--x/--y/--w` posición de cada elemento, `--fs` tamaño de letra de Canva, `--k` escala. En celular, `--fm` es el tamaño de letra en px y `--mx/--my/--mw` (en %) acomodan los stickers de no-worries.
- **El pie de página está repetido en las 4 páginas** (mismo HTML; posiciones en el CSS). Un cambio en el pie = editar los 4 archivos igual.
- Los botones de WhatsApp tienen `data-wa="clave"`; `main.js` arma el enlace con `CONTACTO.whatsapp` + `MENSAJES_WA[clave]`. El `href` del HTML es solo respaldo (número sin mensaje).
- **Precios:** los de Personalizado, Grupal y Sami's Picks están DENTRO de las imágenes `servicios-ticket-*.webp` (además en `aria-label` y `alt`). El de Express está en texto en `servicios.html`. Cambiar un precio de ticket = nueva imagen desde Canva + aria-label + alt.
- **Galleta:** no se guarda su estado; al recargar `servicios.html` vuelve a cerrarse (pedido de Jorge).
- Para verificar contra Canva: capturas con Chrome headless a 1366 px (×2) comparadas contra la exportación PNG de Canva a 2732 px; celular dentro de un iframe de 390 px.

## REGLA DE ORO
Cada corrección toca **solo lo pedido**.
- Ediciones puntuales (Edit) dentro de la sección correspondiente.
- Prohibido reescribir archivos completos, reordenar secciones, renombrar clases/ids o "limpiar"/"mejorar" código o diseño que no se pidió.
- Si una instrucción es ambigua, **preguntar antes de editar**.

## Flujo para cada cambio
1. Antes de editar: decir en una línea qué archivo y qué sección se va a tocar.
2. Editar.
3. Después: mostrar qué cambió (antes → después).
4. Un cambio = un commit, mensaje en español con formato `Sección: qué cambió` (ej. `Hero: cambia título`).
5. Registrar cada cambio relevante en `docs/CAMBIOS.md` (en el mismo commit).
6. Si se publicó (push a `main`): recordar que GitHub Pages tarda 1-2 minutos en reflejarlo (recargar con Cmd+Shift+R).
7. Si se resolvió un pendiente, actualizar `docs/PENDIENTES.md`.

## Respaldos (SIEMPRE, por pedido de Jorge)
- Antes de **cualquier** cambio (no solo los grandes): crear etiqueta de respaldo `git tag -a respaldo-AAAA-MM-DD-descripcion -m "..."` y, si el repo ya está en GitHub, subirla (`git push origin --tags`).
- En cambios grandes o riesgosos, además:
- Explicar a Jorge cómo volver atrás (ver "Volver atrás" en `docs/DEPLOY.md`).
- Verificar que la página se vea igual donde no se pidió cambio (capturas antes/después con Chrome headless a 1440 px y 390 px).

## Seguridad y límites
- Nunca guardar contraseñas, tokens ni claves en el repo, ni pedirlas en el chat.
- Nunca tocar los registros **MX/TXT** (ni otros de correo) del dominio: son del Google Workspace de Sami.
- Registros DNS de GitHub Pages: consultarlos siempre en la documentación oficial vigente, nunca de memoria.
- No asumir cuentas ni correos: preguntar.
- Avisar y pedir confirmación antes de comandos que borren, sobrescriban o publiquen.
