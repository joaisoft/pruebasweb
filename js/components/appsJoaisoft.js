export function appsJoaisoft() {
  const seccion = document.getElementById("appsJoaisoft");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="apps-joaisoft container py-5">
      <!-- CABECERA -->
      <div class="text-center mb-5">
        <span class="badge rounded-pill apps-badge text-uppercase mb-3">
          Apps propias Joaisoft
        </span>
        <h2 class="fw-bold mb-3">Aplicaciones pensadas para gente real</h2>
        <p class="lead mb-0">
          Desarrollamos nuestras propias aplicaciones para resolver problemas concretos
          de particulares y pequeños negocios. Tecnología a tu medida, sin complicaciones.
        </p>
      </div>

      <!-- TARJETAS DE APPS -->
      <div class="row g-4 align-items-stretch">
        <!-- APP 1 -->
        <div class="col-md-6">
          <article class="app-card h-100 p-4">
            <div class="text-center mb-3">
              <div class="app-logo-wrap mx-auto">
                <img 
                  src="assets/copistat2.png" 
                  alt="Logo aplicación 1" 
                  class="app-logo"
                />
              </div>
              <h3 class="h4 fw-bold mb-1 mt-3">COPISTAT</h3>
              <p class="text-muted mb-2">Desarrollada por Joaisoft</p>
              <span class="badge rounded-pill apps-tag">Ideal para particulares</span>
            </div>

            <p class="mb-3 text-center">
              Una app pensada para simplificar tu día a día digital: menos estrés con
              tus gestiones y más control sobre lo importante.
            </p>

            <ul class="list-unstyled mb-4 small">
              <li><i class="fas fa-check text-success me-2"></i> Interfaz muy sencilla, sin menús complicados</li>
              <li><i class="fas fa-check text-success me-2"></i> Pensada para usarse a diario sin perder tiempo</li>
              <li><i class="fas fa-check text-success me-2"></i> Te ayuda a tener tus cosas organizadas y accesibles</li>
              <li><i class="fas fa-check text-success me-2"></i> Evoluciona con nuevas funciones según el feedback</li>
            </ul>

            <div class="text-center mt-auto">
              <a href="#contacto" class="btn btn-gradient btn-sm px-4">
                Obteber Copistat

              </a>
            </div>
          </article>
        </div>

        <!-- APP 2 -->
        <div class="col-md-6">
          <article class="app-card h-100 p-4">
            <div class="text-center mb-3">
              <div class="app-logo-wrap mx-auto">
                <img 
                  src="assets/bilatag.png" 
                  alt="Logo aplicación 2" 
                  class="app-logo"
                />
              </div>
              <h3 class="h4 fw-bold mb-1 mt-3">bilaTag</h3>
              <p class="text-muted mb-2">Desarrollada por Joaisoft</p>
              <span class="badge rounded-pill apps-tag">Pensada para pymes</span>
            </div>

            <p class="mb-3 text-center">
              Una solución diseñada para pequeños negocios que quieren trabajar mejor,
              con menos errores y más claridad sobre lo que pasa en su día a día.
            </p>

            <ul class="list-unstyled mb-4 small">
              <li><i class="fas fa-check text-success me-2"></i> Organiza procesos y datos sin necesidad de un gran ERP</li>
              <li><i class="fas fa-check text-success me-2"></i> Reduce tareas repetitivas y trabajo manual</li>
              <li><i class="fas fa-check text-success me-2"></i> Información más clara para tomar decisiones con seguridad</li>
              <li><i class="fas fa-check text-success me-2"></i> Posibilidad de adaptar la app a tu negocio</li>
            </ul>

            <div class="text-center mt-auto">
              <a href="#contacto" class="btn btn-gradient btn-sm px-4">
                Obtener bilaTag
              </a>
            </div>
          </article>
        </div>
      </div>


    </section>
  `;
}
