# Gifted by Sami · sitio web

Sitio de 4 páginas (home, about, servicios y FAQ) para **Gifted by Sami**, servicio de asesoría y entrega de regalos en Monterrey. Es una réplica del diseño final en Canva.
Proyecto de **HG Digital Strategy**.

- Dirección final: **giftedbysami.com** (pendiente de conectar)
- Dirección temporal (GitHub Pages): **https://hg-jorge.github.io/giftedbysami-web/**

## ¿Qué hay en esta carpeta?

| Archivo / carpeta | Para qué sirve |
|---|---|
| `index.html` | Página de inicio (home). Dividida en secciones marcadas con `SECCIÓN:` y `FIN:` |
| `about.html` | Página "about" (conoce a Sami) |
| `servicios.html` | Cómo funciona, la galleta, los tickets con precios y express |
| `faq.html` | Preguntas frecuentes (solo se llega desde "FAQ" del pie de página) |
| `assets/css/styles.css` | Cómo se ve: colores, tamaños, posiciones (compartido por las 4 páginas) |
| `assets/js/main.js` | Lo que se mueve o reacciona (galleta, submenú, avisos). **Al inicio están el WhatsApp, el correo, el Instagram y los mensajes de cada botón** |
| `assets/img/` | Todas las imágenes |
| `assets/fonts/` | Tipografía Open Sauce Sans (licencia libre) |
| `docs/DEPLOY.md` | Cómo publicar y cómo conectar el dominio |
| `docs/PENDIENTES.md` | Datos y correcciones que faltan |
| `docs/CAMBIOS.md` | Bitácora de cambios |
| `CLAUDE.md` | Reglas de trabajo para Claude |
| `.nojekyll` | Archivo vacío que le dice a GitHub que publique los archivos tal cual |
| `.gitignore` | Lista de archivos que Git debe ignorar (basura del sistema, claves) |

## Ver la página en tu computadora
Abre la carpeta en Finder y haz doble clic en `index.html`. Se abre en tu navegador.
Para ver la versión de celular: en Chrome, clic derecho → **Inspeccionar** → ícono de celular (arriba a la izquierda del panel).

## Publicar un cambio
Cada cambio que se sube a GitHub (rama `main`) se publica solo. **Tarda 1-2 minutos** en verse; recarga con `Cmd + Shift + R`.
Detalle en `docs/DEPLOY.md`.

## Sin herramientas extra
No usa frameworks, ni npm, ni pasos de "build". Lo que ves en la carpeta es exactamente lo que se publica.
