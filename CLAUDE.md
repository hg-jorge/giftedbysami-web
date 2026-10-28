# Gifted by Sami · sitio web

## Contexto
- **Cliente:** Sami, dueña de *Gifted by Sami*: asesoría y entrega de regalos para ejecutivos/CEOs con poco tiempo. Zonas: San Pedro, Cumbres, San Jerónimo (MTY, NL).
- **Agencia:** HG Digital Strategy. Responsable: Jorge González (no es desarrollador: explicar todo paso a paso, en español, sin tecnicismos sin explicar).
- **Sitio:** one-pager visual, diseño hecho en Canva y llevado a HTML. Dominio final: `giftedbysami.com` (el correo de Sami usa Google Workspace en ese dominio).
- **Publicación:** GitHub Pages, cuenta `hg-jorge`, repo `giftedbysami-web`, rama `main`, carpeta raíz.
- **Stack:** HTML + CSS + JavaScript simples. SIN frameworks, SIN build, SIN npm. Se edita y publica tal cual.
- **Fecha límite del cliente:** 12-nov-2026.

## Mapa del proyecto
| Qué | Dónde |
|---|---|
| Página | `index.html`, dividida en `<!-- ===== SECCIÓN: x ===== -->` … `<!-- ===== FIN: x ===== -->` |
| Estilos | `assets/css/styles.css`, mismos nombres de sección (`/* ===== SECCIÓN: x ===== */`; versión celular en `/* móvil · x */` dentro de `@media (max-width:819px)`) |
| Colores y tipografías | variables en `:root` al inicio de `styles.css` |
| WhatsApp (número y mensaje de cada botón), correo, Instagram | bloque `CONTACTO` y `MENSAJES_WA` al inicio de `assets/js/main.js` |
| Imágenes | `assets/img/` (nombre = sección + qué es) |
| Pendientes / bitácora / publicación | `docs/PENDIENTES.md`, `docs/CAMBIOS.md`, `docs/DEPLOY.md` |

Secciones (orden en la página → id → clase CSS):
hero → `#home` → `.hero` · no-worries → `#no-worries` → `.nw-sec` · cartelera → `#zonas-entrega` → `.cartelera` · about → `#about` → `.about` · i-got-u → `#i-got-u` → `.band` · por-que → `#por-que` → `.why` · servicios → `#servicios` → `.servband` · como-funciona → `#como-funciona` → `.how` (incluye galleta y tickets) · express → `#express` → `.chute` · footer → `#contact` → `.footer` · faq → `#faq` → `.faq` · whatsapp-flotante → `.wa-float` + `.toast`

Notas técnicas:
- Cada sección es un "escenario" (`.stage`) con coordenadas de Canva: `--W/--H` tamaño del diseño, `--x/--y/--w` posición de cada elemento, `--k` escala tipográfica. No convertir esas coordenadas en variables de espaciado.
- Los botones de WhatsApp tienen `data-wa="clave"`; `main.js` arma el enlace con `CONTACTO.whatsapp` + `MENSAJES_WA[clave]`. El `href` del HTML es solo respaldo (número sin mensaje).
- **Precios:** el precio visible está DENTRO de las imágenes `ticket-*.webp` y `express-paracaidas.webp`. También aparece en texto en `aria-label` y `alt` de esos enlaces/imágenes. Cambiar un precio = imagen + aria-label + alt.

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

## Cambios grandes o riesgosos
- Antes: crear etiqueta de respaldo `git tag respaldo-AAAA-MM-DD-descripcion` y subirla (`git push origin --tags`).
- Explicar a Jorge cómo volver atrás (ver "Volver atrás" en `docs/DEPLOY.md`).
- Verificar que la página se vea igual donde no se pidió cambio (capturas antes/después con Chrome headless a 1440 px y 390 px).

## Seguridad y límites
- Nunca guardar contraseñas, tokens ni claves en el repo, ni pedirlas en el chat.
- Nunca tocar los registros **MX/TXT** (ni otros de correo) del dominio: son del Google Workspace de Sami.
- Registros DNS de GitHub Pages: consultarlos siempre en la documentación oficial vigente, nunca de memoria.
- No asumir cuentas ni correos: preguntar.
- Avisar y pedir confirmación antes de comandos que borren, sobrescriban o publiquen.
