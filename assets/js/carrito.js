/* =====================================================================
   CARRITO · se carga en TODAS las páginas (después de main.js y de picks/data/catalogo.js)
   - Botones que abren el carrito: cualquier elemento con  data-carrito-abrir
   - Contadores de piezas:        cualquier elemento con  data-carrito-contador
   - El panel del carrito y el aviso "Agregado al carrito" los crea este archivo (no van en el HTML).
   - El número de WhatsApp sale de CONTACTO.whatsapp (main.js); no se repite aquí.
   - Se guarda en el navegador (localStorage). Si el navegador no deja guardar, funciona en memoria.
   ===================================================================== */
(function(){
  var CLAVE = 'gbs-carrito-v1';

  // Raíz del sitio, calculada desde la ubicación de este archivo (assets/js/carrito.js → raíz).
  // Así funciona igual en giftedbysami.com, en la dirección de GitHub y abriendo el archivo sin servidor.
  var script = document.currentScript;
  var RAIZ = new URL('../../', script ? script.src : location.href).href;
  function url(ruta){ return /^(https?:|data:|\/)/.test(ruta) ? ruta : RAIZ + ruta; }

  var CAT = window.CATALOGO || null;

  // ---------- utilidades ----------
  function dinero(n){
    var dec = Math.round(n * 100) % 100 !== 0;
    return '$' + Number(n).toLocaleString('es-MX', {minimumFractionDigits: dec ? 2 : 0, maximumFractionDigits: 2});
  }
  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function coleccion(id){ return CAT && CAT.colecciones.filter(function(c){ return c.id === id; })[0] || null; }
  function producto(id){ return CAT && CAT.productos.filter(function(p){ return p.id === id; })[0] || null; }
  // Un producto se puede comprar si existe, está activo, su colección está activa y no está agotado
  function disponible(p){ var c = p && coleccion(p.coleccion); return !!(p && p.activo && c && c.activo && !p.agotado); }
  function extrasDe(p, ids){ return (p.extras || []).filter(function(e){ return ids.indexOf(e.id) !== -1; }); }
  function claveLinea(id, extras){ return id + '|' + extras.slice().sort().join(','); }

  // ---------- guardar / leer ----------
  var lineas = [];
  function leer(){
    try { var d = JSON.parse(localStorage.getItem(CLAVE) || '[]'); return Array.isArray(d) ? d : []; }
    catch(e){ return []; }
  }
  function guardar(){ try { localStorage.setItem(CLAVE, JSON.stringify(lineas)); } catch(e){} }

  // Al cargar: se revisa contra el catálogo. Lo que ya no existe, está oculto o agotado, se quita y se avisa.
  // El precio siempre se toma del catálogo, así que si cambió se usa el actual.
  function validar(){
    var quitados = [];
    lineas = leer().filter(function(l){
      if (!l || typeof l.id !== 'string') return false;
      if (!CAT) return true;                       // sin catálogo no se toca nada
      var p = producto(l.id);
      if (!disponible(p)){ quitados.push(p ? p.nombre : l.id); return false; }
      var validos = (p.extras || []).map(function(e){ return e.id; });
      l.extras = (l.extras || []).filter(function(x){ return validos.indexOf(x) !== -1; });
      l.cantidad = Math.max(1, Math.min(999, parseInt(l.cantidad, 10) || 1));
      l.clave = claveLinea(l.id, l.extras);
      return true;
    });
    // Si dos líneas quedaron iguales (porque se quitó un extra), se juntan
    var unidas = [];
    lineas.forEach(function(l){
      var igual = unidas.filter(function(u){ return u.clave === l.clave; })[0];
      if (igual) igual.cantidad += l.cantidad; else unidas.push(l);
    });
    lineas = unidas;
    guardar();
    return quitados;
  }

  function detalle(l){
    var p = producto(l.id), c = coleccion(p.coleccion), ex = extrasDe(p, l.extras);
    var sumaExtras = ex.reduce(function(s, e){ return s + e.precio; }, 0);
    return { p: p, c: c, extras: ex, unitario: p.precio, conExtras: p.precio + sumaExtras, subtotal: (p.precio + sumaExtras) * l.cantidad };
  }
  function piezas(){ return lineas.reduce(function(s, l){ return s + l.cantidad; }, 0); }
  function total(){ return lineas.reduce(function(s, l){ return s + detalle(l).subtotal; }, 0); }

  // ---------- mensaje de WhatsApp ----------
  function mensaje(){
    var partes = ['¡Hola, Sami! 👋 Aquí está mi carrito:', ''];
    lineas.forEach(function(l, i){
      var d = detalle(l), cu = l.cantidad > 1 ? ' c/u' : '';
      partes.push((i + 1) + '. ' + d.p.nombre + ' (' + d.c.nombre + ') × ' + l.cantidad + ' — ' + dinero(d.unitario) + cu);
      d.extras.forEach(function(e){ partes.push('   + ' + e.nombre + ' (+' + dinero(e.precio) + cu + ')'); });
      if (d.p.requiereLogo) partes.push('   Con logo de mi empresa');
      partes.push('   Subtotal: ' + dinero(d.subtotal));
      partes.push('');
    });
    partes.push('Total estimado: ' + dinero(total()) + ' MXN');
    partes.push('');
    partes.push('Me interesan estos productos. ¿Cómo podemos proceder con el pago?');
    return partes.join('\n');
  }
  function enlaceWhatsApp(){
    var numero = window.CONTACTO && window.CONTACTO.whatsapp;
    return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje());
  }

  // ---------- íconos ----------
  var ICONO_BOLSA = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';
  var ICONO_X = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  var ICONO_WA = '<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16.04 3C9.4 3 4 8.38 4 15.02c0 2.12.56 4.19 1.62 6.01L4 29l8.12-1.58a12.02 12.02 0 0 0 3.92.66C22.68 28.08 28 22.7 28 16.06 28 9.4 22.68 3 16.04 3Zm0 22.05c-1.2 0-2.38-.32-3.4-.93l-.24-.15-4.82.94.97-4.7-.16-.26a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.96-9.94 5.5 0 9.96 4.46 9.96 9.94 0 5.5-4.46 10.37-9.96 10.37Zm5.46-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';

  // ---------- panel del carrito (se crea aquí) ----------
  var raizCarrito = document.createElement('div');
  raizCarrito.className = 'carrito';
  raizCarrito.id = 'carrito';
  raizCarrito.hidden = true;
  raizCarrito.innerHTML =
    '<div class="carrito-fondo" data-carrito-cerrar></div>' +
    '<aside class="carrito-panel" role="dialog" aria-modal="true" aria-labelledby="carrito-titulo" tabindex="-1">' +
      '<header class="carrito-cabeza">' +
        '<h2 id="carrito-titulo">Tu carrito</h2>' +
        '<button type="button" class="carrito-x" data-carrito-cerrar aria-label="Cerrar carrito">' + ICONO_X + '</button>' +
      '</header>' +
      '<div class="carrito-cuerpo"></div>' +
      '<footer class="carrito-pie"></footer>' +
    '</aside>';

  var aviso = document.createElement('div');
  aviso.className = 'carrito-aviso';
  aviso.setAttribute('role', 'status');
  aviso.setAttribute('aria-live', 'polite');
  aviso.innerHTML = '<span class="carrito-aviso-texto"></span><button type="button" class="carrito-aviso-ver" data-carrito-abrir>Ver carrito</button>';

  document.body.appendChild(raizCarrito);
  document.body.appendChild(aviso);
  var panel = raizCarrito.querySelector('.carrito-panel');
  var cuerpo = raizCarrito.querySelector('.carrito-cuerpo');
  var pie = raizCarrito.querySelector('.carrito-pie');

  function miniatura(p){
    if (p.imagenes && p.imagenes.length){
      return '<img class="carrito-mini" src="' + esc(url(p.imagenes[0])) + '" alt="" width="72" height="90" loading="lazy" decoding="async">';
    }
    return '<span class="carrito-mini carrito-mini--vacia" aria-hidden="true">Foto · ' + esc(p.nombre) + '</span>';
  }

  function pintar(){
    // contadores
    var n = piezas();
    document.querySelectorAll('[data-carrito-contador]').forEach(function(el){
      el.textContent = n > 99 ? '99+' : String(n);
      el.hidden = n === 0;
    });
    document.querySelectorAll('.carrito-boton').forEach(function(b){
      b.setAttribute('aria-label', n ? 'Ver carrito, ' + n + (n === 1 ? ' pieza' : ' piezas') : 'Ver carrito, vacío');
    });

    if (!lineas.length){
      cuerpo.innerHTML =
        '<div class="carrito-vacio">' +
          '<p class="carrito-vacio-titulo">Tu carrito está vacío.</p>' +
          '<p>Todavía no eliges nada… pero tengo varias ideas para ti.</p>' +
          '<a class="carrito-btn carrito-btn--negro" href="' + esc(url('picks/index.html')) + '">Ver The Winter Collection</a>' +
        '</div>';
      pie.innerHTML = '';
      pie.hidden = true;
      return;
    }

    var hayLogo = false;
    cuerpo.innerHTML = '<ul class="carrito-lista">' + lineas.map(function(l){
      var d = detalle(l);
      if (d.p.requiereLogo) hayLogo = true;
      var enlace = esc(url('picks/producto.html?p=' + encodeURIComponent(d.p.id)));
      return '<li class="carrito-linea" data-clave="' + esc(l.clave) + '">' +
        '<a href="' + enlace + '" tabindex="-1" aria-hidden="true">' + miniatura(d.p) + '</a>' +
        '<div class="carrito-info">' +
          '<a class="carrito-nombre" href="' + enlace + '">' + esc(d.p.nombre) + '</a>' +
          '<p class="carrito-col">' + esc(d.c.nombre) + '</p>' +
          (d.extras.length ? '<ul class="carrito-extras">' + d.extras.map(function(e){ return '<li>+ ' + esc(e.nombre) + ' <span>+' + dinero(e.precio) + '</span></li>'; }).join('') + '</ul>' : '') +
          (d.p.requiereLogo ? '<p class="carrito-logo">' + esc(CAT.avisoCorporativo) + '</p>' : '') +
          '<p class="carrito-unitario">' + dinero(d.conExtras) + ' c/u</p>' +
          '<div class="carrito-fila">' +
            '<div class="cantidad cantidad--chica">' +
              '<button type="button" data-accion="menos" aria-label="Una pieza menos de ' + esc(d.p.nombre) + '"' + (l.cantidad <= 1 ? ' disabled' : '') + '>−</button>' +
              '<span aria-live="polite">' + l.cantidad + '</span>' +
              '<button type="button" data-accion="mas" aria-label="Una pieza más de ' + esc(d.p.nombre) + '">+</button>' +
            '</div>' +
            '<p class="carrito-subtotal">' + dinero(d.subtotal) + '</p>' +
          '</div>' +
          '<button type="button" class="carrito-quitar" data-accion="quitar">Quitar</button>' +
        '</div>' +
      '</li>';
    }).join('') + '</ul>';

    pie.hidden = false;
    pie.innerHTML =
      '<p class="carrito-total"><span>Total estimado (MXN)</span><strong>' + dinero(total()) + '</strong></p>' +
      '<p class="carrito-nota">Se aparta con transferencia. Las fechas de entrega se confirman por WhatsApp.</p>' +
      (hayLogo ? '<p class="carrito-nota">Los productos corporativos llevan tu logo, desde 10 piezas, precio + IVA.</p>' : '') +
      '<a class="carrito-btn carrito-btn--negro carrito-enviar" href="' + esc(enlaceWhatsApp()) + '" target="_blank" rel="noopener">' + ICONO_WA + 'Enviar pedido por WhatsApp</a>' +
      '<button type="button" class="carrito-btn carrito-btn--linea" data-accion="vaciar">Vaciar carrito</button>';
  }

  // ---------- acciones dentro del panel ----------
  raizCarrito.addEventListener('click', function(e){
    if (e.target.closest('[data-carrito-cerrar]')){ cerrar(); return; }
    var b = e.target.closest('[data-accion]');
    if (!b) return;
    var acc = b.getAttribute('data-accion');
    if (acc === 'vaciar'){
      if (window.confirm('¿Vaciar el carrito?')){ lineas = []; guardar(); pintar(); panel.focus(); }
      return;
    }
    var li = b.closest('.carrito-linea'); if (!li) return;
    var clave = li.getAttribute('data-clave');
    var l = lineas.filter(function(x){ return x.clave === clave; })[0]; if (!l) return;
    if (acc === 'mas') l.cantidad = Math.min(999, l.cantidad + 1);
    if (acc === 'menos') l.cantidad = Math.max(1, l.cantidad - 1);
    if (acc === 'quitar') lineas = lineas.filter(function(x){ return x !== l; });
    guardar(); pintar();
    // conservar el foco en el mismo botón tras repintar
    var nuevo = cuerpo.querySelector('.carrito-linea[data-clave="' + (window.CSS && CSS.escape ? CSS.escape(clave) : clave) + '"] [data-accion="' + acc + '"]');
    if (nuevo && !nuevo.disabled) nuevo.focus(); else panel.focus();
  });

  // ---------- abrir / cerrar (con foco atrapado) ----------
  var anterior = null;
  function abrir(){
    if (!raizCarrito.hidden) return;
    anterior = document.activeElement;
    pintar();
    raizCarrito.hidden = false;
    document.documentElement.classList.add('carrito-abierto');
    requestAnimationFrame(function(){ raizCarrito.classList.add('visible'); panel.focus(); });
    ocultarAviso();
  }
  function cerrar(){
    if (raizCarrito.hidden) return;
    raizCarrito.classList.remove('visible');
    document.documentElement.classList.remove('carrito-abierto');
    setTimeout(function(){ raizCarrito.hidden = true; }, 260);
    if (anterior && anterior.focus) anterior.focus();
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-carrito-abrir]');
    if (b){ e.preventDefault(); abrir(); }
  });
  document.addEventListener('keydown', function(e){
    if (raizCarrito.hidden) return;
    if (e.key === 'Escape'){ e.preventDefault(); cerrar(); return; }
    if (e.key !== 'Tab') return;
    var f = Array.prototype.filter.call(panel.querySelectorAll('a[href],button:not([disabled]),[tabindex="0"]'), function(el){ return el.offsetParent !== null && el.getAttribute('tabindex') !== '-1'; });
    if (!f.length){ e.preventDefault(); return; }
    var primero = f[0], ultimo = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === primero || document.activeElement === panel)){ e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo){ e.preventDefault(); primero.focus(); }
  });

  // ---------- aviso breve ----------
  var tAviso;
  function mostrarAviso(texto, conBoton){
    aviso.querySelector('.carrito-aviso-texto').textContent = texto;
    aviso.querySelector('.carrito-aviso-ver').hidden = !conBoton;
    aviso.classList.add('visible');
    clearTimeout(tAviso);
    tAviso = setTimeout(ocultarAviso, conBoton ? 4000 : 5000);
  }
  function ocultarAviso(){ aviso.classList.remove('visible'); }

  // ---------- agregar (lo usa la ficha de producto) ----------
  function agregar(id, extras, cantidad){
    var p = producto(id);
    if (!disponible(p)) return false;
    var validos = (p.extras || []).map(function(e){ return e.id; });
    extras = (extras || []).filter(function(x){ return validos.indexOf(x) !== -1; });
    cantidad = Math.max(1, Math.min(999, parseInt(cantidad, 10) || 1));
    var clave = claveLinea(id, extras);
    var l = lineas.filter(function(x){ return x.clave === clave; })[0];
    if (l) l.cantidad = Math.min(999, l.cantidad + cantidad);
    else lineas.push({ id: id, extras: extras.slice().sort(), cantidad: cantidad, clave: clave });
    guardar(); pintar();
    document.querySelectorAll('.carrito-boton').forEach(function(b){
      b.classList.remove('rebota'); void b.offsetWidth; b.classList.add('rebota');
    });
    mostrarAviso('Agregado al carrito', true);
    return true;
  }

  // ---------- inicio ----------
  var quitados = validar();
  pintar();
  if (quitados.length){
    mostrarAviso('Quitamos de tu carrito lo que ya no está disponible: ' + quitados.join(', ') + '.', false);
  }

  // Herramientas compartidas con la tienda (picks/js/tienda.js)
  window.GBS = { RAIZ: RAIZ, url: url, dinero: dinero, esc: esc, coleccion: coleccion, producto: producto, disponible: disponible,
                 carrito: { agregar: agregar, abrir: abrir, cerrar: cerrar }, ICONO_BOLSA: ICONO_BOLSA };
})();
