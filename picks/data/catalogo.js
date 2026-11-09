/* =====================================================================
   CATÁLOGO DE PICKS · The Winter Collection
   ---------------------------------------------------------------------
   Aquí vive TODO lo que se vende. Las páginas de picks/ y el carrito se
   arman solas a partir de este archivo: no hay productos escritos en el HTML.
   Instrucciones paso a paso en picks/COMO-EDITAR-PRODUCTOS.md

   Reglas rápidas:
   - Precios: número sin signo ni comas  → 2500  (no "$2,500")
   - Ocultar sin borrar: activo: false
   - Agotado (se ve, pero no se puede agregar): agotado: true
   - Fotos: rutas desde la raíz del sitio, ej. 'picks/img/chai-ritual/1.jpg'.
     Si la lista va vacía [] se muestra el recuadro beige "Foto · Nombre".
   - Orden: número menor = aparece primero.
   - Cuida las comas: cada bloque { … } termina en coma, menos el último.
   ===================================================================== */

window.CATALOGO = {

  // Encabezado del hub (picks/index.html)
  hub: {
    titulo: 'The Winter Collection',
    subtitulo: 'Made to gift. Tempting to keep.',
    avisoFechas: 'Cupo limitado: cada pre-order cierra en su fecha o cuando se agote, lo que pase primero.'
  },

  // Aviso que aparece en productos corporativos (ficha y carrito)
  avisoCorporativo: 'Con logo de tu empresa desde 10 piezas. Precio + IVA.',

  // =================================================================
  // COLECCIONES
  // =================================================================
  colecciones: [
    {
      id: 'christmas',
      nombre: 'Christmas Collection',
      etiqueta: 'GIFTED BY SAMI × MARCIELLO',
      etiquetaFicha: 'CHRISTMAS COLLECTION · GIFTED BY SAMI × MARCIELLO', // opcional: texto rojo arriba del nombre en cada producto (si no hay, se usa el nombre de la colección)
      tagline: 'All you need this season. Sharing is optional.',     // en el hub
      taglineColeccion: "For the nice list. You're on it too.",       // en su página
      edicion: 'LIMITED EDITION · 50 PIECES ONLY',
      imagen: '',                                                     // ej. 'picks/img/colecciones/christmas.jpg'
      entregas: {
        titulo: 'Entregas del 1 al 23 de diciembre',
        texto: 'En Monterrey. Eliges el día cuando confirmes tu pedido.'
      },
      fechas: [
        { etiqueta: 'PRE-ORDER', valor: 'hasta el 20 de dic' },
        { etiqueta: 'ENTREGAS',  valor: '1 al 23 dic' }
      ],
      orden: 1,
      activo: true
    },
    {
      id: 'new-year',
      nombre: 'New Year Rituals',
      etiqueta: 'INTENTIONS · CHEERS · FORTUNE',
      tagline: "Pick your ritual for whatever you're calling into 2027.",
      taglineColeccion: 'For your favorite person. Or your future self.',
      edicion: '',
      imagen: '',
      entregas: {
        // La maqueta (05-new-year.png) dice "1 al 23"; se usa 1 al 30 por indicación de Jorge.
        titulo: 'Entregas del 1 al 30 de diciembre',
        texto: 'En Monterrey. Eliges el día cuando confirmes tu pedido.'
      },
      fechas: [
        { etiqueta: 'PRE-ORDER',      valor: 'hasta el 20 de dic' },
        { etiqueta: 'COPAS GRABADAS', valor: 'hasta el 10 de dic' },
        { etiqueta: 'ENTREGAS',       valor: '1 al 30 dic' }
      ],
      orden: 2,
      activo: true
    },
    {
      id: 'corporate',
      nombre: 'Corporate Gifting',
      // TODO: confirmar con Sami. La maqueta dice "OBSIDIANA · SANG BLEU · BLACK"; se usa la versión de Jorge con BREW.
      etiqueta: 'OBSIDIANA · BREW · SANG BLEU · BLACK',
      tagline: 'Agrega tu logo. Para tu team o tus clientes.',
      taglineColeccion: 'Agrega tu logo. Para tu team o tus clientes.',
      edicion: '',
      imagen: '',
      entregas: null,   // en corporativos las fechas de entrega van dentro de la caja "Tu logo" (así viene en la maqueta)
      // En esta colección las filas no van en mayúsculas (así viene en la maqueta)
      fechasMinusculas: true,
      fechas: [
        { etiqueta: 'Pide antes del 25 nov', valor: 'recíbelo desde el 3 dic' },
        { etiqueta: 'Pide antes del 3 dic',  valor: 'recíbelo a más tardar el 12 de dic' }
      ],
      // Texto de la caja "Tu logo" (de 06-corporate.png; "[correo de Gifted]" → correo de Sami)
      textoLogo: 'Mándalo en PNG o vector a sami@giftedbysami.com cuando cotices. Pide antes del 25 nov y recíbelo desde el 3 dic, o antes del 3 dic y recíbelo a más tardar el 12 dic.',
      notaBoton: 'Precio por caja · caja con tu logo incluida',
      orden: 3,
      activo: true
    }
  ],

  // =================================================================
  // PRODUCTOS
  // =================================================================
  productos: [

    // ---------- Christmas Collection ----------
    {
      id: 'chai-ritual',
      coleccion: 'christmas',
      nombre: 'Chai Ritual',
      precio: 2500,
      tagline: 'Spiced, sweet and very easy to fall for.',
      descripcion: '',
      edicion: 'LIMITED EDITION · 25 PIECES ONLY',
      incluye: [
        'Mezcla de chai especiado, 50 g',
        'Taza de vidrio Marciello',
        'Frasco de toppings con pétalos de rosa comestibles con tag y tassel',
        'Cucharita dorada en bolsita velvet',
        'Candy cane',
        'Tarjeta con QR a tu ritual',
        'Caja de colección Marciello, rígida y para guardar, con certificado de autenticidad'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: false,
      activo: true,
      agotado: false,
      orden: 1
    },
    {
      id: 'hot-chocolate-ritual',
      coleccion: 'christmas',
      nombre: 'Hot Chocolate Ritual',
      precio: 2500,
      tagline: 'Marshmallows included. Self-control not.',
      descripcion: '',
      edicion: 'LIMITED EDITION · 25 PIECES ONLY',
      incluye: [
        'Mezcla de chocolate mexicano, 80 g',
        'Taza de vidrio Marciello',
        'Frasco de malvaviscos mini con tag y tassel',
        'Cucharita dorada en bolsita velvet',
        'Candy cane',
        'Tarjeta con QR a tu ritual',
        'Caja de colección Marciello, rígida y para guardar, con certificado de autenticidad'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: false,
      activo: true,
      agotado: false,
      orden: 2
    },

    // ---------- New Year Rituals ----------
    // Extras tomados de 05-new-year.png. "precio" es lo que se suma por caja.
    // TODO: confirmar con Sami: "Copas grabadas +$100 c/u" se cobra por copa
    //       (Intentions trae 1 copa = $100; Cheers y Fortune traen 2 = $200).
    // TODO: confirmar con Sami: Fortune ya incluye 2 velas de miel y la maqueta también las ofrece como extra.
    // TODO: confirmar con Sami: la "Vela 2027 +$199" (lámina 7) no está en la maqueta 05; no se agregó.
    {
      id: 'intentions',
      coleccion: 'new-year',
      nombre: 'Intentions',
      precio: 1549,
      tagline: 'Write it down. Light it up. Toast to it.',
      descripcion: '',
      edicion: '',
      incluye: [
        'Mini Moët & Chandon Rosé Impérial, 200 ml',
        '1 copa',
        '6 velas de ritual y cerillos',
        '5 frasquitos con ingredientes para tu ritual',
        'Amarradito de hierbas',
        'Ritual guides: acceso exclusivo con QR y tu clave (viene en la caja)',
        'Keepsake box blanca con cierre magnético'
      ],
      imagenes: [],
      extras: [
        { id: 'copas-grabadas', nombre: 'Copas grabadas con nombre', precio: 100, detallePrecio: '$100 c/u · 1 copa', nota: 'Pídelas antes del 10 de diciembre. Sin cambios ni devoluciones.' },
        { id: 'velas-miel', nombre: '2 velas de miel', precio: 100, nota: 'Cera de abeja pura, sin parafina, con aroma suave a miel. Para abrir caminos en 2027.' }
      ],
      requiereLogo: false,
      activo: true,
      agotado: false,
      orden: 1
    },
    {
      id: 'cheers',
      coleccion: 'new-year',
      nombre: 'Cheers',
      precio: 2999,
      tagline: "Here's to the ones who made your year.",
      descripcion: '',
      edicion: '',
      incluye: [
        'Moët & Chandon Rosé Impérial, 750 ml',
        '2 copas',
        '9 tortugas de chocolate hechas a mano',
        'Ritual guides: acceso exclusivo con QR y tu clave (viene en la caja)',
        'Keepsake box blanca con cierre magnético'
      ],
      imagenes: [],
      extras: [
        { id: 'copas-grabadas', nombre: 'Copas grabadas con nombre', precio: 200, detallePrecio: '$100 c/u · 2 copas', nota: 'Pídelas antes del 10 de diciembre. Sin cambios ni devoluciones.' },
        { id: 'velas-miel', nombre: '2 velas de miel', precio: 100, nota: 'Cera de abeja pura, sin parafina, con aroma suave a miel. Para abrir caminos en 2027.' }
      ],
      requiereLogo: false,
      activo: true,
      agotado: false,
      orden: 2
    },
    {
      id: 'fortune',
      coleccion: 'new-year',
      nombre: 'Fortune',
      precio: 3199,
      tagline: 'Set the tone for a very lucky year.',
      descripcion: '',
      edicion: '',
      incluye: [
        'Moët & Chandon Rosé Impérial, 750 ml',
        '2 copas',
        '2 velas de miel de cera de abeja pura (sin parafina, aroma suave a miel), para abrir caminos',
        'Jabón de uvas hecho a mano (este no se come)',
        'Ritual guides: acceso exclusivo con QR y tu clave (viene en la caja)',
        'Keepsake box blanca con cierre magnético'
      ],
      imagenes: [],
      extras: [
        { id: 'copas-grabadas', nombre: 'Copas grabadas con nombre', precio: 200, detallePrecio: '$100 c/u · 2 copas', nota: 'Pídelas antes del 10 de diciembre. Sin cambios ni devoluciones.' },
        { id: 'velas-miel', nombre: '2 velas de miel', precio: 100, nota: 'Cera de abeja pura, sin parafina, con aroma suave a miel. Para abrir caminos en 2027.' }
      ],
      requiereLogo: false,
      activo: true,
      agotado: false,
      orden: 3
    },

    // ---------- Corporate Gifting ----------
    {
      id: 'obsidiana',
      coleccion: 'corporate',
      nombre: 'Obsidiana',
      precio: 599,
      tagline: '',
      descripcion: 'Para el team que vive de café. Café de especialidad de Casa Obsidiana y dos vasos espresso con tu logo para disfrutarlo.',
      edicion: '',
      incluye: [
        'Café Casa Obsidiana, 250 g',
        '2 vasos espresso con tu logo',
        'Keepsake box negra, rígida y con tu logo'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: true,
      activo: true,
      agotado: false,
      orden: 1
    },
    {
      id: 'obsidiana-brew',
      coleccion: 'corporate',
      nombre: 'Obsidiana Brew',
      precio: 799,
      tagline: '',
      descripcion: 'Para el team que ya se cansó del café de la oficina. Café de especialidad de Casa Obsidiana y una prensa francesa, porque el buen café no se apura.',
      edicion: '',
      // TODO: confirmar con Sami (la descripción menciona prensa francesa y la lista no)
      incluye: [
        'Café Casa Obsidiana, 250 g',
        '2 copas',
        '2 vasos espresso con tu logo',
        'Keepsake box negra, rígida y con tu logo'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: true,
      activo: true,
      agotado: false,
      orden: 2
    },
    {
      id: 'sang-bleu',
      coleccion: 'corporate',
      nombre: 'Sang Bleu',
      precio: 1199,
      tagline: '',
      descripcion: 'Para el team que se merece un brindis. Sang Bleu, un tinto del sur de Francia de Mariatinto, y dos copas stemless con tu logo para compartirlo.',
      edicion: '',
      incluye: [
        'Mariatinto Sang Bleu 750 ml',
        '2 copas stemless (sin tallo) con tu logo',
        'Keepsake box negra, rígida y con tu logo'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: true,
      activo: true,
      agotado: false,
      orden: 3
    },
    {
      id: 'black',
      coleccion: 'corporate',
      nombre: 'Black',
      precio: 1499,
      tagline: '',
      descripcion: 'Para los que prefieren algo más fuerte. Johnnie Walker Etiqueta Negra, un clásico que nunca falla, y un vaso estilo old fashioned para disfrutarlo.',
      edicion: '',
      incluye: [
        'Johnnie Walker Etiqueta Negra, 750 ml',
        'Vaso old fashioned, estilo labrado',
        'Keepsake box negra, rígida y con tu logo'
      ],
      imagenes: [],
      extras: [],
      requiereLogo: true,
      activo: true,
      agotado: false,
      orden: 4
    }
  ]
};
