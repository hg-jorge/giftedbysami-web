# Publicación y dominio

## Datos
- Cuenta de GitHub: `hg-jorge`
- Repositorio en línea: https://github.com/hg-jorge/giftedbysami-web
- Esta carpeta sube cambios con la sesión **activa** de la herramienta `gh` (configurado solo en este proyecto). En la Mac también existe la cuenta `jgsai04`: si un `git push` dice "Permission denied to jgsai04", correr `gh auth switch -u hg-jorge` y repetir.
- Repositorio: `giftedbysami-web` (público)
- GitHub Pages: rama `main`, carpeta `/ (root)`
- URL temporal: https://hg-jorge.github.io/giftedbysami-web/
- Dominio final: `giftedbysami.com`, registrado en **Squarespace** (correo de Sami en Google Workspace, **no tocar MX/TXT**)

## 1. Publicar un cambio (día a día)
Claude hace estos pasos y te avisa antes del último:
1. `git add` de los archivos cambiados.
2. `git commit -m "Sección: qué cambió"`.
3. `git push` → esto **publica**.
4. Esperar **1-2 minutos** y recargar la página con `Cmd + Shift + R`.

Para ver si ya terminó: en GitHub, pestaña **Actions** del repo; el último "pages build and deployment" debe tener palomita verde.

## 2. Activar GitHub Pages (una sola vez)
1. Entra a https://github.com/hg-jorge/giftedbysami-web
2. Pestaña **Settings** → menú izquierdo **Pages**.
3. En **Build and deployment** → **Source**: `Deploy from a branch`.
4. **Branch**: `main` y carpeta `/ (root)` → **Save**.
5. En 1-2 minutos aparece arriba "Your site is live at …".

## 3. Conectar giftedbysami.com (cuando Sami dé acceso)
> Los registros exactos se toman de la documentación oficial de GitHub **en el momento de hacerlo**
> (docs.github.com → "Managing a custom domain for your GitHub Pages site"). No se copian de memoria.

Pasos generales:
1. Saber dónde está registrado el dominio y quién administra el DNS (puede ser Google, GoDaddy, Cloudflare, etc.).
2. Revisar los registros actuales. **No borrar ni editar MX, TXT ni nada del correo.**
3. Agregar los registros para GitHub Pages: dominio sin www (registros A/AAAA) y `www` (CNAME → `hg-jorge.github.io`).
4. Crear el archivo `CNAME` en este repo con una sola línea: `giftedbysami.com`.
5. En **Settings → Pages → Custom domain** escribir `giftedbysami.com` → **Save**.
6. Cuando GitHub lo permita, marcar **Enforce HTTPS** (puede tardar desde minutos hasta 24 h).
7. Probar `https://giftedbysami.com` y `https://www.giftedbysami.com`.
8. Cambiar la dirección de la vista previa al compartir (`og:url` y `og:image` en las 4 páginas) a `https://giftedbysami.com/`.

Propagación DNS: normalmente minutos a pocas horas; puede llegar a 24-48 h.

## 4. Volver atrás si algo sale mal
- **Deshacer el último cambio publicado:** Claude crea un commit que revierte el anterior (`git revert`) y lo sube. El historial no se borra.
- **Regresar a una versión etiquetada** (ej. `v1-publicada` o `respaldo-…`): Claude restaura los archivos de esa etiqueta en un commit nuevo y lo sube.
- Ver etiquetas existentes: `git tag`.
- Respaldo del HTML original (fuera del repo): `../respaldo-original/gifted-by-samiv3.html`.
