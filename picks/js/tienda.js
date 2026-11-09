/* =====================================================================
   TIENDA · arma las páginas de picks/ a partir de picks/data/catalogo.js
   Cada página indica cuál es con  <body data-pagina="hub | coleccion | producto">
   No hay que editar este archivo para cambiar productos: todo se cambia en el catálogo.
   ===================================================================== */
(function(){
  var CAT = window.CATALOGO, G = window.GBS;
  var pagina = document.body.getAttribute('data-pagina');
  var main = document.getElementById('tienda');
  if (!CAT || !G || !main) return;
  var esc = G.esc, dinero = G.dinero, url = G.url;

  // ---------- utilidades ----------
  function porOrden(a, b){ return (a.orden || 0) - (b.orden || 0); }
  function colecciones(){ return CAT.colecciones.filter(function(c){ return c.activo; }).sort(porOrden); }
  function productosDe(idCol){ return CAT.productos.filter(function(p){ return p.coleccion === idCol && p.activo; }).sort(porOrden); }
  function parametro(n){ return new URLSearchParams(location.search).get(n); }
  function enlaceColeccion(id){ return 'coleccion.html?c=' + encodeURIComponent(id); }
  function enlaceProducto(id){ return 'producto.html?p=' + encodeURIComponent(id); }

  // Foto o recuadro beige "Foto · Nombre"
  function foto(ruta, nombre, clase, ancho, alto){
    if (ruta) return '<img class="' + clase + '" src="' + esc(url(ruta)) + '" alt="' + esc(nombre) + '" width="' + ancho + '" height="' + alto + '" loading="lazy" decoding="async">';
    return '<div class="' + clase + ' foto-vacia" role="img" aria-label="Foto de ' + esc(nombre) + ' (próximamente)">Foto · ' + esc(nombre) + '</div>';
  }

  var FLECHA = '<svg class="flecha" viewBox="0 0 40 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h37M31 1.5 38 8l-7 6.5"/></svg>';
  var ESTRELLA = '<svg viewBox="0 0 60 60" aria-hidden="true"><path fill="var(--dorado)" d="M30 2c1.6 15 6 24.4 28 28-22 3.6-26.4 13-28 28-1.6-15-6-24.4-28-28 22-3.6 26.4-13 28-28Z"/><path fill="var(--dorado)" d="M50 46c.4 3.2 1.4 5.2 6 6-4.6.8-5.6 2.8-6 6-.4-3.2-1.4-5.2-6-6 4.6-.8 5.6-2.8 6-6ZM14 6c.3 2.2 1 3.6 4 4-3 .4-3.7 1.8-4 4-.3-2.2-1-3.6-4-4 3-.4 3.7-1.8 4-4Z"/></svg>';

  // Bloque rojo "Save the dates" con una o varias colecciones
  function fechas(cols){
    return '<section class="fechas" aria-labelledby="fechas-titulo">' +
      '<h2 class="fechas-titulo" id="fechas-titulo">Save the dates ' + ESTRELLA + '</h2>' +
      '<p class="fechas-intro">' + esc(CAT.hub.avisoFechas) + '</p>' +
      cols.map(function(c){
        return '<div class="fechas-grupo"><h3>' + esc(c.nombre) + '</h3>' +
          '<dl class="fechas-filas' + (c.fechasMinusculas ? ' minus' : '') + '">' +
          (c.fechas || []).map(function(f){ return '<dt>' + esc(f.etiqueta) + ' →</dt><dd>' + esc(f.valor) + '</dd>'; }).join('') +
          '</dl></div>';
      }).join('') +
    '</section>';
  }

  function volver(texto, href){
    var v = document.getElementById('volver');
    if (!v) return;
    v.href = href; v.innerHTML = '<span aria-hidden="true">‹</span> ' + esc(texto); v.hidden = false;
  }

  function noEncontrado(que){
    document.title = 'No encontramos este pick · Gifted by Sami';
    main.innerHTML = '<section class="no-encontrado">' +
      '<h1>Ups, no encontramos ' + que + '.</h1>' +
      '<p>Puede que ya no esté disponible o que el enlace tenga un error. Te dejo todo lo que sí tengo para esta temporada.</p>' +
      '<a href="index.html">Ver The Winter Collection</a></section>';
    volver('temporada', 'index.html');
  }

  // ===================================================================
  // HUB
  // ===================================================================
  function pintarHub(){
    var cols = colecciones();
    var tarjetas = cols.map(function(c){
      return '<a class="coleccion-tarjeta" href="' + enlaceColeccion(c.id) + '">' +
        foto(c.imagen, c.nombre, 'foto', 600, 500) +
        (c.etiqueta ? '<p class="etiqueta">' + esc(c.etiqueta) + '</p>' : '') +
        '<h2 class="titulo"><span>' + esc(c.nombre) + '</span>' + FLECHA + '</h2>' +
        (c.tagline ? '<p class="tagline">' + esc(c.tagline) + '</p>' : '') +
        (c.edicion ? '<p class="etiqueta edicion">' + esc(c.edicion) + '</p>' : '') +
      '</a>';
    }).join('');
    var grid = document.getElementById('hub-grid');
    grid.insertAdjacentHTML('afterbegin', tarjetas);
    grid.insertAdjacentHTML('beforeend', fechas(cols));
  }

  // ===================================================================
  // COLECCIÓN
  // ===================================================================
  function pintarColeccion(){
    var c = G.coleccion(parametro('c'));
    if (!c || !c.activo) return noEncontrado('esta colección');
    document.title = c.nombre + ' · The Winter Collection · Gifted by Sami';
    var prods = productosDe(c.id);
    var cols = prods.length >= 4 ? 4 : 3;
    main.innerHTML =
      foto(c.imagen, c.nombre, 'col-banner', 1600, 686) +
      '<div class="envoltura">' +
        '<header class="col-info">' +
          (c.etiqueta ? '<p class="etiqueta">' + esc(c.etiqueta) + '</p>' : '') +
          '<h1>' + esc(c.nombre) + '</h1>' +
          (c.edicion ? '<p class="etiqueta edicion">' + esc(c.edicion) + '</p>' : '') +
          (c.taglineColeccion ? '<p class="tagline">' + esc(c.taglineColeccion) + '</p>' : '') +
        '</header>' +
        '<div class="productos" style="--cols:' + cols + '">' +
          prods.map(function(p){
            return '<a class="producto-tarjeta" href="' + enlaceProducto(p.id) + '">' +
              foto(p.imagenes && p.imagenes[0], p.nombre, 'foto', 480, 600) +
              (p.agotado ? '<span class="sello-agotado">Agotado</span>' : '') +
              '<h2>' + esc(p.nombre) + '</h2>' +
              '<p class="precio">' + dinero(p.precio) + '</p>' +
              '<span class="ver">Ver más</span>' +
            '</a>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="fechas-solo">' + fechas([c]) + '</div>';
    volver('temporada', 'index.html');
  }

  // ===================================================================
  // PRODUCTO
  // ===================================================================
  function pintarProducto(){
    var p = G.producto(parametro('p'));
    var c = p && G.coleccion(p.coleccion);
    if (!p || !p.activo || !c || !c.activo) return noEncontrado('este producto');
    document.title = p.nombre + ' · ' + c.nombre + ' · Gifted by Sami';

    var imgs = (p.imagenes || []).filter(Boolean);
    var galeria = imgs.length
      ? imgs.map(function(r, i){ return '<img src="' + esc(url(r)) + '" alt="' + esc(p.nombre) + ', foto ' + (i + 1) + ' de ' + imgs.length + '" width="960" height="1200"' + (i ? ' loading="lazy"' : '') + ' decoding="async">'; }).join('')
      : '<div class="foto-vacia" role="img" aria-label="Foto de ' + esc(p.nombre) + ' (próximamente)">Foto · ' + esc(p.nombre) + '</div>';
    var varias = imgs.length > 1;

    var etiqueta = c.etiquetaFicha || c.nombre.toUpperCase();
    var extras = (p.extras || []);

    main.innerHTML =
      '<article class="ficha">' +
        '<div class="galeria" aria-roledescription="carrusel" aria-label="Fotos de ' + esc(p.nombre) + '">' +
          '<div class="galeria-pista" tabindex="' + (varias ? '0' : '-1') + '">' + galeria + '</div>' +
          (varias ? '<button type="button" class="galeria-flecha ant" aria-label="Foto anterior" hidden>‹</button><button type="button" class="galeria-flecha sig" aria-label="Foto siguiente">›</button>' +
            '<div class="galeria-puntos">' + imgs.map(function(_, i){ return '<button type="button" aria-label="Ver foto ' + (i + 1) + '"' + (i ? '' : ' aria-current="true"') + '></button>'; }).join('') + '</div>' : '') +
        '</div>' +
        '<div class="ficha-info">' +
          '<p class="etiqueta">' + esc(etiqueta) + '</p>' +
          '<h1>' + esc(p.nombre) + ' <span class="precio">' + dinero(p.precio) + '</span></h1>' +
          (p.tagline ? '<p class="tagline">' + esc(p.tagline) + '</p>' : '') +
          (p.edicion ? '<p class="etiqueta edicion">' + esc(p.edicion) + '</p>' : '') +
          (p.descripcion ? '<p class="descripcion">' + esc(p.descripcion) + '</p>' : '') +
          (p.agotado ? '<p class="etiqueta" style="margin-top:12px;color:#151414">Agotado</p>' : '') +
          ((p.incluye || []).length ? '<section class="incluye"><h2 class="bloque-titulo">Qué incluye</h2><ul>' + p.incluye.map(function(t){ return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></section>' : '') +
          (extras.length && !p.agotado ? '<fieldset class="extras"><legend class="bloque-titulo">Let’s make it personal...</legend><div class="extras-lista">' +
            extras.map(function(e){
              return '<label class="extra"><input type="checkbox" name="extra" value="' + esc(e.id) + '">' +
                '<span class="extra-caja"><span><span class="extra-nombre">' + esc(e.nombre) + ' · +' + dinero(e.precio) + '</span>' +
                (e.detallePrecio ? '<span class="extra-detalle">' + esc(e.detallePrecio) + '</span>' : '') +
                (e.nota ? '<span class="extra-nota">' + esc(e.nota) + '</span>' : '') +
                '</span></span></label>';
            }).join('') + '</div></fieldset>' : '') +
          (p.requiereLogo ? '<section class="tu-logo"><h2>Tu logo</h2>' +
            (c.textoLogo ? '<p>' + esc(c.textoLogo) + '</p>' : '') +
            '<p class="aviso-corp">' + esc(CAT.avisoCorporativo) + '</p></section>' : '') +
          (!p.agotado ? '<div class="ficha-cantidad"><span class="bloque-titulo" id="cantidad-titulo">Cantidad</span>' +
            '<div class="cantidad" role="group" aria-labelledby="cantidad-titulo">' +
              '<button type="button" data-cant="-1" aria-label="Una pieza menos" disabled>−</button>' +
              '<output id="cantidad" aria-live="polite">1</output>' +
              '<button type="button" data-cant="1" aria-label="Una pieza más">+</button>' +
            '</div></div>' : '') +
          (c.entregas ? '<section class="entregas"><h2>' + esc(c.entregas.titulo) + '</h2><p>' + esc(c.entregas.texto) + '</p></section>' : '') +
          '<div class="ficha-accion">' +
            (p.agotado
              ? '<p class="agotado-caja">Agotado. Escríbeme por WhatsApp si quieres algo parecido.</p>'
              : '<button type="button" class="boton-agregar" id="agregar">' + G.ICONO_BOLSA + 'Agregar al carrito</button>' +
                '<p class="nota">Se aparta con transferencia</p>' +
                (p.requiereLogo && c.notaBoton ? '<p class="nota">' + esc(c.notaBoton) + '</p>' : '')) +
          '</div>' +
        '</div>' +
      '</article>' +
      '<div class="ficha-fin"></div>';

    volver(c.nombre, enlaceColeccion(c.id));

    // Cantidad
    var cant = 1, salida = document.getElementById('cantidad');
    main.querySelectorAll('[data-cant]').forEach(function(b){
      b.addEventListener('click', function(){
        cant = Math.max(1, Math.min(999, cant + parseInt(b.getAttribute('data-cant'), 10)));
        salida.textContent = cant;
        main.querySelector('[data-cant="-1"]').disabled = cant <= 1;
      });
    });

    // Agregar al carrito
    var boton = document.getElementById('agregar');
    if (boton) boton.addEventListener('click', function(){
      var elegidos = Array.prototype.map.call(main.querySelectorAll('input[name="extra"]:checked'), function(i){ return i.value; });
      if (G.carrito.agregar(p.id, elegidos, cant)){
        // Se reinicia la ficha para que no se agregue doble por accidente
        cant = 1; salida.textContent = '1'; main.querySelector('[data-cant="-1"]').disabled = true;
        main.querySelectorAll('input[name="extra"]').forEach(function(i){ i.checked = false; });
      }
    });

    // Galería: puntos y flechas
    if (varias){
      var pista = main.querySelector('.galeria-pista');
      var puntos = main.querySelectorAll('.galeria-puntos button');
      var ant = main.querySelector('.galeria-flecha.ant'), sig = main.querySelector('.galeria-flecha.sig');
      var suave = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      function actual(){ return Math.round(pista.scrollLeft / pista.clientWidth); }
      function ir(i){ pista.scrollTo({left: i * pista.clientWidth, behavior: suave}); }
      function marcar(){
        var i = actual();
        puntos.forEach(function(b, j){ if (j === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
        ant.hidden = i === 0; sig.hidden = i === imgs.length - 1;
      }
      puntos.forEach(function(b, i){ b.addEventListener('click', function(){ ir(i); }); });
      ant.addEventListener('click', function(){ ir(actual() - 1); });
      sig.addEventListener('click', function(){ ir(actual() + 1); });
      pista.addEventListener('keydown', function(e){
        if (e.key === 'ArrowRight'){ e.preventDefault(); ir(Math.min(imgs.length - 1, actual() + 1)); }
        if (e.key === 'ArrowLeft'){ e.preventDefault(); ir(Math.max(0, actual() - 1)); }
      });
      var t; pista.addEventListener('scroll', function(){ clearTimeout(t); t = setTimeout(marcar, 60); }, {passive: true});
    }
  }

  if (pagina === 'hub') pintarHub();
  else if (pagina === 'coleccion') pintarColeccion();
  else if (pagina === 'producto') pintarProducto();
})();
