export function aplicacionesMedida() {
  const seccion = document.getElementById("aplicacionesMedida");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">

      <!-- CABECERA COMERCIAL -->
      <div class="row justify-content-center text-center mb-5 mt-5">
        <div class="col-lg-8">
          <p class="text-uppercase text-muted mb-2" style="letter-spacing: .18em; font-size: .8rem;">
            Desarrollo de aplicaciones a medida
          </p>
          <h2 class="fw-bold mb-3">
            Tus apps listas para <span class="dw-highlight">móvil, web y escritorio</span>
          </h2>
          <p class="lead mb-0">
            Diseñamos y desarrollamos aplicaciones modernas, seguras y pensadas para mejorar tus procesos,
            sin que tengas que preocuparte de la parte técnica.
          </p>
        </div>
      </div>

      <!-- BLOQUE 1: TEXTO + MOCKUP DISPOSITIVOS -->
      <div class="row align-items-center g-5 mb-5">
        <!-- Texto -->
        <div class="col-lg-5">
          <h4 class="fw-bold mb-3">Qué tipo de aplicaciones desarrollamos</h4>
          <p class="mb-3">
            En <strong>Joaisoft</strong> trabajamos con negocios reales que necesitan herramientas
            que de verdad se usen en el día a día.
          </p>

          <ul class="list-unstyled mb-3" style="font-size:.95rem;">
            <li><i class="fas fa-check text-success me-2"></i> Apps móviles para Android y iOS para tu equipo o tus clientes.</li>
            <li><i class="fas fa-check text-success me-2"></i> Aplicaciones web internas para gestión, reservas o consultas.</li>
            <li><i class="fas fa-check text-success me-2"></i> Paneles de administración y backoffice para tu negocio.</li>
            <li><i class="fas fa-check text-success me-2"></i> Automatización de procesos y conexión con tus herramientas actuales.</li>
            <li><i class="fas fa-check text-success me-2"></i> Apps híbridas y progresivas (PWA) para llegar a más usuarios.</li>
            <li><i class="fas fa-check text-success me-2"></i> Soluciones a medida para proyectos específicos o internos.</li>
          </ul>

          <p class="mb-3" style="font-size:.95rem;">
            Siempre con foco en usabilidad, rendimiento y seguridad,
            para que tu equipo y tus clientes quieran usar la aplicación.
          </p>

          <span class="badge bg-light text-dark dw-badge-small">
            Ideal para empresas, servicios y proyectos que necesitan ir un paso más allá
          </span>
        </div>

        <!-- Mockup dispositivos -->
        <div class="col-lg-7">
          <div class="dw-device-card bg-white rounded-4 shadow-lg p-3 h-100">
            <div class="ratio ratio-16x9">
              <img
                src="assets/imgapps.png"
                alt="Ejemplo de aplicaciones Joaisoft en varios dispositivos"
                class="w-100 h-100 object-fit-cover dw-gallery-img"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- BLOQUE VIDEO: APPS EN ACCIÓN -->
      <div class="row align-items-center g-4 mb-5">
        <div class="col-lg-6">
          <div class="dw-device-card bg-dark rounded-4 overflow-hidden shadow-lg">
            <div class="ratio ratio-16x9">
              <!-- Cambia la ruta del vídeo por el tuyo -->
              <video
                src="assets/videoapps.mp4"
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
            Apps ágiles & escalables
          </p>
          <h3 class="fw-bold mb-3">
            Aplicaciones <span class="dw-highlight">rápidas, seguras</span> y preparadas para crecer
          </h3>
          <p class="mb-3">
            No se trata solo de tener una app: se trata de que funcione siempre, sea fácil de usar
            y pueda evolucionar con tu negocio sin romperlo todo cada vez.
          </p>
          <ul class="list-unstyled" style="font-size:.95rem;">
            <li><i class="fas fa-check text-success me-2"></i> Arquitecturas modernas y mantenibles.</li>
            <li><i class="fas fa-check text-success me-2"></i> Integración con APIs, ERPs, CRMs y otras plataformas.</li>
            <li><i class="fas fa-check text-success me-2"></i> Enfoque en seguridad, permisos y trazabilidad.</li>
          </ul>
          <p class="mb-0 text-muted" style="font-size:.9rem;">
            Tú decides qué necesitas, nosotros nos encargamos del diseño técnico y la implementación.
          </p>
        </div>
      </div>

      <!-- BLOQUE PROCESOS (APPS) -->
      <section class="dw-process container py-5">
        <div class="row mb-5 text-center">
          <div class="col">
            <h2 class="fw-bold mb-3">Nuestro proceso de trabajo en apps</h2>
            <p class="text-muted mb-0">
              Un método claro, paso a paso, para que tu aplicación nazca con buena base y sea fácil de mantener.
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
              <h3 class="h5 mb-3">Análisis y requisitos</h3>
              <p class="mb-0 text-muted">
                Entendemos tu proceso, quién va a usar la app y qué debe resolver exactamente.
              </p>
            </div>
          </div>

          <!-- PASO 2 -->
          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
                PASO 2
              </span>
              <h3 class="h5 mb-3">Diseño UX/UI</h3>
              <p class="mb-0 text-muted">
                Definimos pantallas, flujos y experiencia de usuario para que todo sea intuitivo.
              </p>
            </div>
          </div>

          <!-- PASO 3 -->
          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
                PASO 3
              </span>
              <h3 class="h5 mb-3">Arquitectura técnica</h3>
              <p class="mb-0 text-muted">
                Elegimos la tecnología adecuada (móvil, web, híbrida) y definimos cómo se conectará
                con el resto de sistemas.
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
                Programamos la app siguiendo buenas prácticas, control de calidad y versión de código.
              </p>
            </div>
          </div>

          <!-- PASO 5 -->
          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
                PASO 5
              </span>
              <h3 class="h5 mb-3">Pruebas y validación</h3>
              <p class="mb-0 text-muted">
                Probamos en distintos dispositivos y perfiles de usuario, ajustando detalles antes del lanzamiento.
              </p>
            </div>
          </div>

          <!-- PASO 6 -->
          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem; letter-spacing:.18em;">
                PASO 6
              </span>
              <h3 class="h5 mb-3">Lanzamiento y evolución</h3>
              <p class="mb-0 text-muted">
                Publicamos la app (stores o interno), monitorizamos su uso y la vamos mejorando con tus métricas reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- BLOQUE ESTILO "SECCIÓN SERVICIOS" -->
      <div class="row align-items-center g-4 mb-4">
        <div class="col-lg-8">
          <h3 class="fw-bold mb-3">
            Desarrollo de aplicaciones para empresas y proyectos innovadores
          </h3>
          <p class="mb-0" style="max-width: 720px;">
            Te ayudamos a convertir una idea o un proceso en una herramienta real:
            desde apps internas para tu equipo hasta soluciones completas para tus clientes.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
          <a href="ContactoApps.html" class="btn btn-outline-primary btn-lg dw-cta-servicio">
            Cuéntanos tu idea de app
          </a>
        </div>
      </div>

      <!-- GRID DE SERVICIOS PRINCIPALES (APPS) -->
      <div class="row g-3 mb-5 dw-services-grid">
        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-mobile-alt fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Apps móviles</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-laptop-code fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Aplicaciones web</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-plug fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Integraciones y APIs</h4>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="dw-service-card bg-white border rounded-4 px-4 py-3 h-100 d-flex align-items-center">
            <div class="me-3 dw-service-icon">
              <i class="fas fa-sync-alt fa-lg text-primary"></i>
            </div>
            <div class="flex-grow-1">
              <h4 class="h6 mb-0">Mantenimiento evolutivo</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCIÓN FAQS (APPS) -->
      <section class="dw-faqs container py-5">
        <div class="row mb-4 text-center">
          <div class="col-lg-8 mx-auto">
            <h2 class="fw-bold mb-3">Preguntas frecuentes sobre apps</h2>
            <p class="text-muted mb-0">
              Resolvemos las dudas más habituales antes de empezar tu proyecto de aplicación.
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="accordion" id="faqDesarrolloApps">
              <!-- FAQ 1 -->
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqApps1-heading">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqApps1" aria-expanded="true" aria-controls="faqApps1">
                    ¿Cuánto tarda en estar lista una aplicación?
                  </button>
                </h3>
                <div id="faqApps1" class="accordion-collapse collapse show" aria-labelledby="faqApps1-heading"
                     data-bs-parent="#faqDesarrolloApps">
                  <div class="accordion-body">
                    Depende del alcance. Una aplicación sencilla puede estar lista en pocas semanas.
                    Proyectos más completos, con muchas pantallas e integraciones, pueden requerir
                    varios meses de trabajo y pruebas.
                  </div>
                </div>
              </div>

              <!-- FAQ 2 -->
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqApps2-heading">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqApps2" aria-expanded="false" aria-controls="faqApps2">
                    ¿La app funcionará en Android y en iOS?
                  </button>
                </h3>
                <div id="faqApps2" class="accordion-collapse collapse" aria-labelledby="faqApps2-heading"
                     data-bs-parent="#faqDesarrolloApps">
                  <div class="accordion-body">
                    Sí. Podemos desarrollar apps nativas, híbridas o progresivas (PWA) según tu caso.
                    Te asesoramos sobre la mejor opción en función del presupuesto y del tipo de proyecto.
                  </div>
                </div>
              </div>

              <!-- FAQ 3 -->
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqApps3-heading">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqApps3" aria-expanded="false" aria-controls="faqApps3">
                    ¿Os encargáis de publicar la app en las tiendas?
                  </button>
                </h3>
                <div id="faqApps3" class="accordion-collapse collapse" aria-labelledby="faqApps3-heading"
                     data-bs-parent="#faqDesarrolloApps">
                  <div class="accordion-body">
                    Podemos encargarnos del alta y publicación en Google Play y App Store,
                    así como de las actualizaciones necesarias y fichas de la tienda.
                  </div>
                </div>
              </div>

              <!-- FAQ 4 -->
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqApps4-heading">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqApps4" aria-expanded="false" aria-controls="faqApps4">
                    ¿Podremos ampliar la app más adelante?
                  </button>
                </h3>
                <div id="faqApps4" class="accordion-collapse collapse" aria-labelledby="faqApps4-heading"
                     data-bs-parent="#faqDesarrolloApps">
                  <div class="accordion-body">
                    Sí. Diseñamos la arquitectura pensando en el futuro, para poder añadir nuevas funciones
                    sin tener que rehacer la aplicación desde cero.
                  </div>
                </div>
              </div>

              <!-- FAQ 5 -->
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqApps5-heading">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqApps5" aria-expanded="false" aria-controls="faqApps5">
                    ¿Cómo funcionará el presupuesto y la forma de pago?
                  </button>
                </h3>
                <div id="faqApps5" class="accordion-collapse collapse" aria-labelledby="faqApps5-heading"
                     data-bs-parent="#faqDesarrolloApps">
                  <div class="accordion-body">
                    Primero definimos el alcance del proyecto y te enviamos un presupuesto detallado.
                    Normalmente trabajamos por hitos: un pago inicial y siguientes pagos vinculados
                    a entregas concretas.
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
