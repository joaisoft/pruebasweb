export function proyectos() {
  const seccion = document.getElementById("proyectos");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="proyectos-section py-5">
      <div class="container">
        <!-- CABECERA -->
        <div class="text-center mb-4">

          <h2 class="fw-bold mb-2">Algunos de los proyectos que hemos lanzado</h2>
          <p class="text-muted mb-0">
            Haz clic en cada imagen para visitar la web del proyecto.
          </p>
        </div>

        <!-- GRID SOLO IMÁGENES -->
        <div class="proyectos-grid">
          <!-- PROYECTO 1 -->
          <a 
            href="https://tu-url-copistat.com" 
            target="_blank" 
            rel="noopener" 
            class="proyecto-link"
          >
            <img 
              src="assets/copistat.png" 
              alt="Proyecto Copistat" 
              class="proyecto-img"
            />
          </a>


          <!-- PROYECTO 3 -->
          <a 
            href="https://tu-url-gestor-tareas.com" 
            target="_blank" 
            rel="noopener" 
            class="proyecto-link"
          >
            <img 
              src="assets/bilatag3.png" 
              alt="Gestor de tareas Ayuntamiento" 
              class="proyecto-img"
            />
          </a>

          <!-- PROYECTO 4 -->
          <a 
            href="https://tu-url-automatizaciones.com" 
            target="_blank" 
            rel="noopener" 
            class="proyecto-link"
          >
            <img 
              src="assets/tokitan.png" 
              alt="Flujos de automatización" 
              class="proyecto-img"
            />
          </a>
        </div>
      </div>
    </section>
  `;
}
