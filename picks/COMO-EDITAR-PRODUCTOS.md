# Cómo editar los productos de picks

Todo el catálogo vive en **un solo archivo**: `picks/data/catalogo.js`.
Las páginas de la tienda y el carrito se arman solas a partir de él. No hay que tocar ningún HTML.

> Antes de cualquier cambio: etiqueta de respaldo (`git tag -a respaldo-AAAA-MM-DD-... -m "..."`).
> Después de guardar: abre `picks/index.html` en el navegador y revisa que se vea bien.
> Si la página de la tienda sale en blanco, casi siempre es una **coma o comilla faltante** en el catálogo.

---

## Reglas para escribir en el catálogo

- El texto va entre comillas simples: `'Chai Ritual'`. Si el texto lleva apóstrofo (como *You're*), usa comillas dobles: `"You're on it too."`
- Los precios van como número, **sin signo de pesos ni comas**: `2500`, no `'$2,500'`.
- Cada bloque `{ … }` termina en coma, **menos el último** de la lista.
- `true` = sí, `false` = no (sin comillas).

---

## Cambiar un precio

Busca el producto por su nombre y cambia el número de `precio`:

```js
precio: 2500,      →      precio: 2700,
```

Si alguien ya tenía ese producto en su carrito, se le actualiza solo al precio nuevo.

## Ocultar un producto (sin borrarlo)

```js
activo: true,      →      activo: false,
```

Desaparece de la tienda y, si alguien lo tenía en el carrito, se le quita con un aviso.
Para volver a mostrarlo, regresa a `true`. Lo mismo funciona con una colección completa.

## Marcar un producto como agotado

```js
agotado: false,    →      agotado: true,
```

Sigue visible con la etiqueta **"Agotado"**, pero sin botón de agregar.

## Agregar un producto nuevo

1. Copia completo el bloque de un producto parecido (desde `{` hasta `},`).
2. Pégalo justo debajo y cambia los datos:
   - `id`: nombre corto, sin espacios ni acentos, con guiones. Ej. `'gingerbread-ritual'`. **No se debe repetir.**
   - `coleccion`: `'christmas'`, `'new-year'` o `'corporate'`.
   - `nombre`, `precio`, `tagline` (frase en itálica), `descripcion` (texto corrido, opcional), `edicion` (ej. `'LIMITED EDITION · 25 PIECES ONLY'`, o `''`).
   - `incluye`: lista de lo que trae, cada renglón entre comillas y separado por coma.
   - `extras`: personalizaciones con precio (ver abajo) o `[]` si no tiene.
   - `requiereLogo`: `true` en corporativos (muestra la caja "Tu logo").
   - `orden`: número para acomodarlo (1 = primero).
3. Guarda y revisa en el navegador.

## Extras ("Let's make it personal...")

```js
extras: [
  { id: 'copas-grabadas', nombre: 'Copas grabadas con nombre', precio: 200, detallePrecio: '$100 c/u · 2 copas', nota: 'Pídelas antes del 10 de diciembre.' }
],
```

- `precio` es lo que se suma **por caja**.
- `detallePrecio` (opcional) es la letra chiquita debajo del nombre.
- `nota` (opcional) es el texto gris de la caja.
- `sufijoPrecio` (opcional) es un texto pegado al precio. Ej. `'por caja'` → "· +$399 por caja".
- En el producto, `tituloExtras` (opcional) cambia el título del bloque. Ej. `tituloExtras: 'Complemento opcional'`; si no se pone, dice "Let’s make it personal...".
- En los corporativos, el bloque sale después de la caja "Tu logo".

## Fotos

**Producto:** crea la carpeta `picks/img/<id-del-producto>/` y guarda las fotos como `1.jpg`, `2.jpg`, … Luego anótalas en el producto:

```js
imagenes: ['picks/img/chai-ritual/1.jpg', 'picks/img/chai-ritual/2.jpg'],
```

La primera es la que sale en la colección y en el carrito. Si son varias, la ficha muestra puntos y flechas para pasarlas.

**Colección:** guarda la foto como `picks/img/colecciones/<id-coleccion>.jpg` (ej. `christmas.jpg`) y anótala en `imagen: 'picks/img/colecciones/christmas.jpg'`.

**Formato recomendado:**
- Productos: vertical **4:5**, unos **1200 × 1500 px**.
- Colecciones: horizontal (se recorta a lo ancho), unos **1600 × 700 px**.
- JPG o WebP de **menos de 300 KB**.

Si un producto o colección no tiene foto (`[]` o `''`), se muestra el recuadro beige "Foto · Nombre".

**Cambiar una foto:** reemplaza el archivo con el mismo nombre. Si no se actualiza, recarga con Cmd+Shift+R.

## Fechas ("Save the dates") y entregas

Están en cada colección:
- `fechas`: los renglones del bloque rojo (`etiqueta` a la izquierda, `valor` a la derecha).
- `entregas`: la caja beige de la ficha de producto (`titulo` y `texto`).

## WhatsApp

El número es el mismo de todo el sitio: `CONTACTO.whatsapp` en `assets/js/main.js`. Cambiarlo ahí cambia también el botón del carrito.
