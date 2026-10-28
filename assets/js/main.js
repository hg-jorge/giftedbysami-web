(function(){
  // ===================================================================
  // DATOS DE CONTACTO: se cambian SOLO aquí y se aplican a toda la página
  // ===================================================================
  var CONTACTO = {
    whatsapp:  '528116873612', // 52 + número a 10 dígitos, sin espacios ni signos
    correo:    '',             // [PENDIENTE: correo de contacto de Sami] ej. 'hola@giftedbysami.com'
    instagram: ''              // [PENDIENTE: enlace de Instagram de Sami] ej. 'https://instagram.com/usuario'
  };

  // Mensaje que llega ya escrito en WhatsApp, uno por botón (atributo data-wa en index.html)
  var MENSAJES_WA = {
    'hero':          'Hola Sami, vi tu página y me gustaría información', // "Cuéntame para quién es →"
    'personalizado': 'Hola Sami, me interesa el servicio Personalizado',  // ticket Personalizado
    'grupal':        'Hola Sami, me interesa el servicio Grupal',         // ticket Grupal
    'sami-picks':    'Hola Sami, quiero ver los Sami\'s Picks del catálogo', // ticket Sami's Picks
    'express':       'Hola Sami, me interesa el servicio Express',        // ticket Express (paracaídas)
    'footer':        'Hola Sami, vi tu página y me gustaría información', // pie de página "WhatsApp"
    'flotante':      'Hola Sami, vi tu página y me gustaría información'  // botón verde flotante
  };

  document.querySelectorAll('a[data-wa]').forEach(function(a){
    var msg = MENSAJES_WA[a.getAttribute('data-wa')];
    a.href = 'https://wa.me/' + CONTACTO.whatsapp + (msg ? '?text=' + encodeURIComponent(msg) : '');
  });

  // Correo e Instagram: si ya hay dato, el enlace se activa; si no, sigue mostrando el aviso "se agregará pronto"
  var linkCorreo = document.querySelector('a[data-contacto="correo"]');
  var linkInstagram = document.querySelector('a[data-contacto="instagram"]');
  if (CONTACTO.correo && linkCorreo){
    linkCorreo.href = 'mailto:' + CONTACTO.correo;
    linkCorreo.classList.remove('pending');
  }
  if (CONTACTO.instagram && linkInstagram){
    linkInstagram.href = CONTACTO.instagram;
    linkInstagram.target = '_blank';
    linkInstagram.rel = 'noopener';
    linkInstagram.classList.remove('pending');
  }

  // Aviso para enlaces que todavía no tienen destino (Instagram y correo)
  var toast = document.getElementById('toast'), tt;
  document.querySelectorAll('a.pending').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      toast.textContent = a.getAttribute('data-pending') || 'Enlace próximamente';
      toast.classList.add('show');
      clearTimeout(tt);
      tt = setTimeout(function(){ toast.classList.remove('show'); }, 2600);
    });
  });

  // Paracaídas en móvil: empieza centrado en el ticket Express
  var cs = document.getElementById('chuteStage'), pan = document.getElementById('pan');
  function placeChute(){ if (window.innerWidth < 820) cs.scrollLeft = pan.offsetWidth * 0.17; }
  window.addEventListener('load', placeChute); placeChute();

  // Galleta de la fortuna: se agita, se abre y baja suavemente a "pick your ticket"
  var cookie = document.getElementById('cookie'), busy = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  cookie.addEventListener('click', function(){
    if (busy) return;
    busy = true;
    var target = document.querySelector('.hp') || document.getElementById('tickets');
    if (reduce){ target.scrollIntoView({behavior:'auto', block:'start'}); busy = false; return; }
    cookie.classList.add('shake');
    setTimeout(function(){ cookie.classList.remove('shake'); cookie.classList.add('open'); }, 700);
    setTimeout(function(){ target.scrollIntoView({behavior:'smooth', block:'start'}); }, 1500);
    setTimeout(function(){ cookie.classList.remove('open'); busy = false; }, 3400);
  });
})();
