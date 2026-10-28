(function(){
  // ===================================================================
  // DATOS DE CONTACTO: se cambian SOLO aquí y se aplican a todas las páginas
  // ===================================================================
  var CONTACTO = {
    whatsapp:  '528116873612', // 52 + número a 10 dígitos, sin espacios ni signos
    correo:    '',             // [PENDIENTE: correo de contacto de Sami] ej. 'hola@giftedbysami.com'
    instagram: 'https://www.instagram.com/giftedbysami/'
  };

  // Mensaje que llega ya escrito en WhatsApp, uno por botón (atributo data-wa en el HTML)
  // [PENDIENTE: Jorge definirá el mensaje final de cada botón]
  var MENSAJES_WA = {
    'personalizado': 'Hola Sami, me interesa el servicio Personalizado',  // servicios: ticket Personalizado
    'grupal':        'Hola Sami, me interesa el servicio Grupal',         // servicios: ticket Grupal
    'express':       'Hola Sami, me interesa el servicio Express',        // servicios: celular rosa de express
    'footer':        'Hola Sami, vi tu página y me gustaría información', // pie de página "WhatsApp"
    'flotante':      'Hola Sami, vi tu página y me gustaría información'  // botón verde flotante
  };

  document.querySelectorAll('a[data-wa]').forEach(function(a){
    var msg = MENSAJES_WA[a.getAttribute('data-wa')];
    a.href = 'https://wa.me/' + CONTACTO.whatsapp + (msg ? '?text=' + encodeURIComponent(msg) : '');
  });

  // Correo e Instagram: si ya hay dato, el enlace se activa; si no, sigue mostrando el aviso "se agregará pronto"
  document.querySelectorAll('a[data-contacto="correo"]').forEach(function(a){
    if (!CONTACTO.correo) return;
    a.href = 'mailto:' + CONTACTO.correo;
    a.removeAttribute('data-pending');
  });
  document.querySelectorAll('a[data-contacto="instagram"]').forEach(function(a){
    if (!CONTACTO.instagram) return;
    a.href = CONTACTO.instagram;
    a.target = '_blank';
    a.rel = 'noopener';
    a.removeAttribute('data-pending');
  });

  // Aviso para enlaces que todavía no tienen destino (data-pending="texto del aviso")
  var toast = document.getElementById('toast'), tt;
  function aviso(texto){
    toast.textContent = texto;
    toast.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(function(){ toast.classList.remove('show'); }, 2600);
  }
  document.querySelectorAll('[data-pending]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      aviso(a.getAttribute('data-pending') || 'Próximamente');
    });
  });

  // Submenú de "picks" (home): se abre y cierra con clic; se cierra al hacer clic fuera o con Esc
  var botonPicks = document.getElementById('boton-picks');
  var submenu = document.getElementById('submenu-picks');
  if (botonPicks && submenu){
    function cerrarSubmenu(){ submenu.hidden = true; botonPicks.setAttribute('aria-expanded', 'false'); }
    botonPicks.addEventListener('click', function(e){
      e.stopPropagation();
      var abrir = submenu.hidden;
      submenu.hidden = !abrir;
      botonPicks.setAttribute('aria-expanded', String(abrir));
    });
    document.addEventListener('click', function(e){ if (!submenu.contains(e.target)) cerrarSubmenu(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrarSubmenu(); });
  }

  // Galleta de la fortuna (servicios): al hacer clic se agita, se abre, aparece "revelado"
  // y la página baja a "pick your ticket". No se guarda: al recargar, la galleta vuelve a cerrarse.
  var galleta = document.getElementById('galleta');
  var revelado = document.getElementById('revelado');
  if (galleta && revelado){
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var destino = document.getElementById('pick-your-ticket');
    var ocupada = false;
    function mostrar(){
      revelado.hidden = false;
      revelado.classList.add('aparece');
      galleta.setAttribute('aria-expanded', 'true');
    }
    galleta.addEventListener('click', function(){
      if (ocupada) return;
      if (galleta.classList.contains('rota')){
        destino.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
        return;
      }
      galleta.classList.add('rota');
      if (reduce){ mostrar(); destino.scrollIntoView({behavior:'auto', block:'start'}); return; }
      ocupada = true;
      galleta.classList.add('shake');
      setTimeout(function(){ galleta.classList.remove('shake'); galleta.classList.add('open'); }, 700);
      setTimeout(function(){ mostrar(); destino.scrollIntoView({behavior:'smooth', block:'start'}); }, 1300);
      setTimeout(function(){ galleta.classList.remove('open'); ocupada = false; }, 3000);
    });
  }
})();
