export function desarrolloWebDevs() {
  const seccion = document.getElementById("desarrolloWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">

      <!-- CABECERA COMERCIAL -->
      <div class="row justify-content-center text-center mb-5 mt-5">
        <div class="col-lg-8">
          <p class="text-uppercase text-muted mb-2" style="letter-spacing: .18em; font-size: .8rem;">
            Desarrollo web profesional
          </p>
          <h2 class="fw-bold mb-3">
            Tu web lista para <span class="dw-highlight">móvil, tablet y ordenador</span>
          </h2>
          <p class="lead mb-0">
            Diseñamos páginas modernas, rápidas y pensadas para convertir visitas en clientes,
            sin que tengas que preocuparte de la parte técnica.
          </p>
        </div>
      </div>


      <!-- BLOQUE 1: TEXTO + VISTA ORDENADOR (SIN SOLAPES) -->
      <div class="row align-items-center g-5 mb-5">
        <!-- Texto -->
        <div class="col-lg-5">
          <h4 class="fw-bold mb-3">Qué tipo de webs hacemos</h4>
          <p class="mb-3">
            En <strong>Joaisoft</strong> trabajamos con negocios reales: pequeños comercios,
            profesionales de servicios, proyectos personales y marcas locales.
          </p>

          <ul class="list-unstyled mb-3" style="font-size:.95rem;">
            <li><i class="fas fa-check text-success me-2"></i> Web de presentación para autónomos y negocios locales.</li>
            <li><i class="fas fa-check text-success me-2"></i> Web corporativa con varias secciones y formulario de contacto.</li>
            <li><i class="fas fa-check text-success me-2"></i> Tiendas online listas para vender (carrito y pasarela de pago).</li>
            <li><i class="fas fa-check text-success me-2"></i> Landings de una sola página para campañas y captación de leads.</li>
            <li><i class="fas fa-check text-success me-2"></i> Porfolios para creativos, fotógrafos, diseñadores o proyectos propios.</li>
            <li><i class="fas fa-check text-success me-2"></i> Webs con sistema de reservas y citas online.</li>
          </ul>

          <p class="mb-3" style="font-size:.95rem;">
            Siempre con diseño responsive, buena velocidad de carga y estructura preparada
            para que te encuentren mejor en Google.
          </p>

          <span class="badge bg-light text-dark dw-badge-small">
            Ideal para tiendas, servicios y pequeños negocios
          </span>
        </div>

        <!-- Mockup ordenador en una única tarjeta -->
        <div class="col-lg-7">
          <div class="dw-device-card bg-white rounded-4 shadow-lg p-3 h-100">
            <div class="ratio ratio-16x9">
              <img
                src="assets/imgpc.png"
                alt="Ejemplo de web Joaisoft en ordenador"
                class="w-100 h-100 object-fit-cover dw-gallery-img"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- BLOQUE VIDEO: WEBS RESPONSIVE -->
      <div class="row align-items-center g-4 mb-5">
        <div class="col-lg-6">
          <div class="dw-device-card bg-dark rounded-4 overflow-hidden shadow-lg">
            <div class="ratio ratio-16x9">
              <!-- Cambia la ruta del vídeo por el tuyo -->
              <video
                src="assets/videoweb.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100"
              ></video>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <p class="text-uppercase text-muted mb-2" style="letter-spacing:.15em; font-size:.8rem;">
            Webs responsive & rendimiento
          </p>
          <h3 class="fw-bold mb-3">
            Webs <span class="dw-highlight">responsive</span> que se ven perfectas en cualquier pantalla
          </h3>
          <p class="mb-3">
            Tu página no solo tiene que ser bonita: tiene que cargar rápido, verse bien
            en móvil y funcionar sin problemas para tus clientes, estén donde estén.
          </p>
          <ul class="list-unstyled" style="font-size:.95rem;">
            <li><i class="fas fa-check text-success me-2"></i> Diseño adaptado a móvil, tablet y ordenador.</li>
            <li><i class="fas fa-check text-success me-2"></i> Secciones claras para que el usuario no se pierda.</li>
            <li><i class="fas fa-check text-success me-2"></i> Optimización para SEO y mejor rendimiento.</li>
          </ul>
          <p class="mb-0 text-muted" style="font-size:.9rem;">
            Nos encargamos de toda la parte técnica para que tú puedas centrarte en tu negocio.
          </p>
        </div>
      </div>


      <!-- BLOQUE PROCESOS -->
      <section class="dw-process container py-5">
  <div class="row mb-5 text-center">
    <div class="col">
      <h2 class="fw-bold mb-3">Nuestro proceso de trabajo</h2>
      <p class="text-muted mb-0">
        Un método claro, paso a paso, para que tu web se lance con buena base y preparada para crecer.
      </p>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- PASO 1 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 1
        </span>
        <h3 class="h5 mb-3">Análisis inicial</h3>
        <p class="mb-0 text-muted">
          Revisamos tu negocio, tu sector y tus objetivos para entender qué tipo de web necesitas
          y qué debe conseguir.
        </p>
      </div>
    </div>

    <!-- PASO 2 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 2
        </span>
        <h3 class="h5 mb-3">Estrategia y estructura</h3>
        <p class="mb-0 text-muted">
          Definimos la arquitectura de la web, secciones principales y mensajes clave para guiar
          al usuario hacia la conversión.
        </p>
      </div>
    </div>

    <!-- PASO 3 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 3
        </span>
        <h3 class="h5 mb-3">Diseño visual</h3>
        <p class="mb-0 text-muted">
          Creamos un diseño limpio y profesional, alineado con tu marca y preparado para verse perfecto
          en cualquier dispositivo.
        </p>
      </div>
    </div>

    <!-- PASO 4 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 4
        </span>
        <h3 class="h5 mb-3">Desarrollo</h3>
        <p class="mb-0 text-muted">
          Maquetamos y programamos la web con buenas prácticas, cuidando la velocidad de carga
          y la experiencia de usuario.
        </p>
      </div>
    </div>

    <!-- PASO 5 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 5
        </span>
        <h3 class="h5 mb-3">Pruebas y ajustes</h3>
        <p class="mb-0 text-muted">
          Probamos la web en distintos navegadores y dispositivos, ajustando detalles de diseño,
          textos y formularios.
        </p>
      </div>
    </div>

    <!-- PASO 6 -->
    <div class="col">
      <div class="h-100 border rounded-4 p-4">
        <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
          PASO 6
        </span>
        <h3 class="h5 mb-3">Lanzamiento y acompañamiento</h3>
        <p class="mb-0 text-muted">
          Publicamos la web, la conectamos con las herramientas que uses y te acompañamos
          en los primeros días para que todo funcione.
        </p>
      </div>
    </div>
  </div>
</section>


            <!-- BLOQUE ESTILO "SECCIÓN SERVICIOS" -->
      <div class="row align-items-center g-4 mb-4">
        <div class="col-lg-8">
          <h3 class="fw-bold mb-3">
            Desarrollo web para empresas y profesionales
          </h3>
          <p class="mb-0" style="max-width: 720px;">
            Sabemos que una web efectiva es clave para la presencia digital de cualquier negocio.
            Por eso creamos sitios a medida que se adaptan a tus objetivos:
            desde webs corporativas hasta tiendas online listas para vender, siempre con enfoque en
            rendimiento, claridad y resultados.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
          <a href="ContactoDesarrolloWeb.html" class="btn btn-outline-primary btn-lg dw-cta-servicio">
            Comienza tu proyecto
          </a>
        </div>
      </div>

      <!-- GRID DE SERVICIOS PRINCIPALES -->
      <div class="row g-3 mb-5 dw-services-grid">
        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-th-large fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Diseño web personalizado</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-shopping-cart fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Desarrollo de Ecommerce</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-globe fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Optimización web</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-server fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Planes de hosting gestionado</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-tools fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Mantenimiento y soporte web</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCION FAQS -->
      <section class="dw-faqs container py-5">
  <div class="row mb-4 text-center">
    <div class="col-lg-8 mx-auto">
      <h2 class="fw-bold mb-3">Preguntas frecuentes</h2>
      <p class="text-muted mb-0">
        Resolvemos las dudas más habituales antes de empezar tu proyecto de página web.
      </p>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="accordion" id="faqDesarrolloWeb">
        <!-- FAQ 1 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq1-heading">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
              ¿Cuánto tarda en estar lista una página web?
            </button>
          </h3>
          <div id="faq1" class="accordion-collapse collapse show" aria-labelledby="faq1-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Depende del tipo de proyecto. Una web sencilla de presentación suele estar lista
              en unas 2–3 semanas. Proyectos más completos, como una tienda online, pueden
              necesitar entre 4 y 6 semanas, según el contenido y los ajustes que se requieran.
            </div>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq2-heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
              ¿Necesito tener el texto y las imágenes preparados?
            </button>
          </h3>
          <div id="faq2" class="accordion-collapse collapse" aria-labelledby="faq2-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Si ya tienes textos e imágenes, perfecto. Si no, podemos ayudarte con la redacción
              de los contenidos y la selección de imágenes profesionales para que la web se vea
              coherente y alineada con tu marca.
            </div>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq3-heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
              ¿La web será responsive y se verá bien en móvil?
            </button>
          </h3>
          <div id="faq3" class="accordion-collapse collapse" aria-labelledby="faq3-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Sí. Todas nuestras webs se diseñan desde el principio para adaptarse a móvil, tablet
              y ordenador. Probamos en distintos dispositivos para asegurar una experiencia de
              usuario fluida.
            </div>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq4-heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
              ¿Puedo actualizar yo mismo los contenidos de la web?
            </button>
          </h3>
          <div id="faq4" class="accordion-collapse collapse" aria-labelledby="faq4-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Por supuesto. Te entregamos la web con un panel de administración fácil de usar
              y una pequeña guía para que puedas cambiar textos, imágenes o crear nuevas secciones
              sin depender de nadie.
            </div>
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq5-heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
              ¿Ofrecéis mantenimiento y soporte después del lanzamiento?
            </button>
          </h3>
          <div id="faq5" class="accordion-collapse collapse" aria-labelledby="faq5-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Sí. Podemos encargarnos de copias de seguridad, actualizaciones, pequeñas mejoras
              y soporte técnico. Tú decides si prefieres un plan de mantenimiento mensual
              o soporte puntual cuando lo necesites.
            </div>
          </div>
        </div>

        <!-- FAQ 6 -->
        <div class="accordion-item">
          <h3 class="accordion-header" id="faq6-heading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
              ¿Cómo funciona el presupuesto y la forma de pago?
            </button>
          </h3>
          <div id="faq6" class="accordion-collapse collapse" aria-labelledby="faq6-heading"
               data-bs-parent="#faqDesarrolloWeb">
            <div class="accordion-body">
              Primero analizamos tu caso y te enviamos un presupuesto cerrado, sin letra pequeña.
              Normalmente trabajamos con un pago inicial para reservar el proyecto y el resto
              al entregar la web final, aunque podemos adaptarnos según tus necesidades.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>





    </section>
  `;
}
