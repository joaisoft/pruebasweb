export function portfolioWeb() {
  const seccion = document.getElementById("portfolioWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="portfolio-web container py-5">
      <!-- TÍTULO + INTRO -->
      <div class="row mt-5 mb-4 text-center">
        <div class="col-lg-10 mx-auto">
          <h2 class="fw-bold mb-3">
            Portafolios web profesionales para mostrar tu trabajo al mundo
          </h2>
          <p class="lead mb-0">
            En <strong>Joaisoft</strong> damos vida a tu talento y trayectoria creando
            <em>portafolios web</em> únicos, elegantes y funcionales.  
            Tanto si eres <strong>profesional independiente</strong>, <strong>artista</strong>,
            <strong>fotógrafo</strong>, <strong>estudiante</strong> o <strong>empresa</strong>,
            diseñamos una página que cuente tu historia, potencie tu marca y te ayude a conectar
            con nuevas oportunidades.
          </p>
        </div>
      </div>

      <!-- CONTENIDO PRINCIPAL -->
      <div class="row align-items-center mb-5 g-4">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">¿Qué incluye tu portafolio web?</h4>
          <ul class="list-unstyled mb-0" style="font-size:.95rem;">
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Diseño moderno y completamente adaptado a tu estilo personal o corporativo.
            </li>
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Experiencia <strong>responsive</strong>: se verá perfecta en móvil, tablet y ordenador.
            </li>
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Integración con redes sociales, formularios y sistemas de contacto.
            </li>
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Estructura preparada para posicionar mejor en Google (SEO on-page básico).
            </li>
            <li class="mb-0">
              <i class="fas fa-check text-success me-2"></i>
              Portafolio fácil de actualizar con tus nuevos proyectos y logros.
            </li>
          </ul>
        </div>

        <div class="col-md-6 text-center">
          <div class="rounded-4 shadow-lg overflow-hidden">
            <img
              src="assets/ejemplo_porfolio.png"
              alt="Ejemplo de diseño de portafolio web profesional"
              class="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- CÓMO TRABAJAMOS -->
      <div class="mt-5 mb-5">
        <h4 class="fw-bold text-center mb-4">Cómo creamos tu portafolio paso a paso</h4>
        <div class="row row-cols-1 row-cols-md-4 g-4 text-center">
          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem;letter-spacing:.18em;">
                Paso 1
              </span>
              <i class="fas fa-lightbulb fa-2x text-primary mb-2" aria-hidden="true"></i>
              <h6 class="fw-semibold">Descubrimiento</h6>
              <p class="mb-0 text-muted">
                Hablamos contigo para entender tu estilo, tu perfil profesional y tus objetivos.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem;letter-spacing:.18em;">
                Paso 2
              </span>
              <i class="fas fa-pencil-ruler fa-2x text-primary mb-2" aria-hidden="true"></i>
              <h6 class="fw-semibold">Diseño a medida</h6>
              <p class="mb-0 text-muted">
                Creamos un diseño personalizado alineado con tu marca y tu sector.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem;letter-spacing:.18em;">
                Paso 3
              </span>
              <i class="fas fa-code fa-2x text-primary mb-2" aria-hidden="true"></i>
              <h6 class="fw-semibold">Desarrollo</h6>
              <p class="mb-0 text-muted">
                Programamos tu portafolio con tecnologías modernas, rápido, seguro y optimizado.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="h-100 border rounded-4 p-4">
              <span class="text-primary text-uppercase d-block mb-2" style="font-size:.8rem;letter-spacing:.18em;">
                Paso 4
              </span>
              <i class="fas fa-rocket fa-2x text-primary mb-2" aria-hidden="true"></i>
              <h6 class="fw-semibold">Publicación</h6>
              <p class="mb-0 text-muted">
                Publicamos tu web, la conectamos con tus herramientas y te guiamos en los primeros pasos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center mt-4">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2">
          Quiero mi portafolio web profesional
        </a>
        <p class="mt-2 mb-0 text-muted" style="font-size:.9rem;">
          Cuéntanos en qué punto estás y te enviaremos una propuesta clara y sin compromiso.
        </p>
      </div>
    </section>
  `;
}
