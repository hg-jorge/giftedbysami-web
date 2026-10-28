# Bitácora de cambios

Formato: fecha · sección · qué cambió. Lo más reciente arriba.

## 2026-10-28 · Ajustes
- **404.html:** página propia para direcciones que no existen, con botón para regresar a home.
- **Imágenes (4 páginas):** las que no se ven al abrir la página cargan después (`loading="lazy"`), para que abra más rápido en celular.
- **Head (4 páginas):** vista previa al compartir en WhatsApp/Facebook (título, descripción e imagen `og-imagen.jpg` 1200×630). Dirección provisional de GitHub; cambiar al conectar el dominio.
- **Head (4 páginas):** favicon con el logo negro sobre fondo crema (pestaña, iPhone y Android). Original guardado en `../respaldo-original/`.
- **Hero (home):** el logo pasa a ser el título principal (h1) que lee Google; "Let me guess..." pasa a h2. Sin cambio visual.
- **Head (4 páginas):** descripciones para Google con zonas de entrega y Monterrey.
- **Head (4 páginas):** títulos de pestaña con servicio y Monterrey (para Google).
- **Head (about, servicios, FAQ):** se carga Nunito Sans, sustituto de Avenir en Windows/Android, igual que en home.
- **Cartelera (home):** imagen de "Zonas de entrega" reemplazada por la versión de alta calidad que entregó Jorge (`home-cartelera.webp`, 2732 px de ancho).
- **Barra de menú (todas las páginas):** barra fija arriba, clara y minimalista (fondo crema, línea fina, logo negro, home · about · servicios · picks▾ con la página actual subrayada). Siempre visible en about, servicios y FAQ; en home aparece al bajar más allá de los botones grandes. En celular: logo + botón ☰.
- **Transiciones (todas las páginas):** al hacer clic en home, about o servicios la página se desvanece y la nueva entra con un deslizamiento suave; el submenú de picks se despliega con animación. Sin animación si el usuario tiene "reducir movimiento". Servicios: lo revelado por la galleta ahora aparece solo con desvanecido, para que "pick your ticket" quede justo arriba.
- **Footer (4 páginas):** el enlace "Instagram" ahora abre https://www.instagram.com/giftedbysami/ (dato en `main.js`, `CONTACTO`).

## 2026-10-28 · Rediseño según Canva final
- **Sitio rehecho a partir del diseño final de Canva** ("Final Gifted by Sami website"): ahora son 4 páginas (`index.html`, `about.html`, `servicios.html`, `faq.html`) con el mismo pie de página. Respaldo previo: etiqueta `respaldo-antes-canva`.
- **Home:** menú `home · about · servicios · picks`; "picks" abre un submenú (temporada, trending, all year; destinos pendientes).
- **About:** nuevo acomodo y textos.
- **Servicios:** nuevos textos; la galleta se mueve "queriendo romperse" y al hacer clic revela tickets, franja 1-800 y express (al recargar se vuelve a cerrar). Grupal ahora $3,165 + 35%. Express con celular rosa en lugar del paracaídas.
- **FAQ:** página aparte, solo desde el pie de página; textos actualizados (se quitaron 3 preguntas que ya no están en Canva).
- **Tipografías:** Open Sauce Sans (incluida en el sitio); Helvetica World y Avenir sustituidas por las del sistema.
- **Correcciones de texto:** "fotografica" → "fotográfica"; "sólo" → "solo"; "(O sea la parte difícil)" → "(O sea, la parte difícil)"; "Términos y Condiciones completo" → "Términos y condiciones completos".
- Verificado contra la exportación de Canva (escritorio) y revisado en celular (390 px).

## 2026-10-28
- **Estructura del proyecto:** el HTML único (`gifted-by-samiv3.html`, 2.2 MB) se separó en `index.html` + `assets/css/styles.css` + `assets/js/main.js` + 44 imágenes en `assets/img/`. Sin cambios visuales (verificado con capturas en escritorio y celular).
- **Organización interna:** secciones marcadas con `SECCIÓN:`/`FIN:` e id propio; CSS con los mismos nombres; colores repetidos pasados a variables en `:root`.
- **Contacto centralizado:** número de WhatsApp, mensaje de cada botón, correo e Instagram ahora se definen solo al inicio de `assets/js/main.js`.
- Original respaldado fuera del repo en `../respaldo-original/`.
