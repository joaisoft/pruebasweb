export function desarrolloWeb() {
  const seccion = document.getElementById("desarrolloWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">
      <h2  mt-5 class="text-center fw-bold mb-4">Desarrollo de Páginas Web</h2>
      <p class="text-center lead mb-5">Creamos soluciones digitales 100% adaptadas a tu negocio, desde la idea inicial hasta el alojamiento y mantenimiento.</p>

      <!-- QUÉ OFRECEMOS -->
      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">¿Qué incluye nuestro servicio?</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> Diseño web personalizado y moderno</li>
            <li><i class="fas fa-check text-success me-2"></i> Desarrollo optimizado con HTML, CSS, JS y frameworks</li>
            <li><i class="fas fa-check text-success me-2"></i> Responsive: adaptado a móvil, tablet y escritorio</li>
            <li><i class="fas fa-check text-success me-2"></i> Posicionamiento SEO desde el primer día</li>
            <li><i class="fas fa-check text-success me-2"></i> Integración con redes sociales, formularios y analítica</li>
          </ul>
        </div>

      </div>

      <!-- PROCESO -->
      <div class="row mb-5">
        <div class="col text-center">
          <h4 class="fw-bold mb-4">Nuestro proceso de trabajo</h4>
        </div>
        <div class="row text-center">
          <div class="col-md-3">
            <i class="fas fa-comments fa-2x mb-2 text-primary"></i>
            <h6>1. Reunión inicial</h6>
            <p>Analizamos tus necesidades y objetivos.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-pencil-ruler fa-2x mb-2 text-primary"></i>
            <h6>2. Diseño</h6>
            <p>Te presentamos un prototipo visual personalizado.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-code fa-2x mb-2 text-primary"></i>
            <h6>3. Desarrollo</h6>
            <p>Programamos tu sitio web con las mejores tecnologías.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-rocket fa-2x mb-2 text-primary"></i>
            <h6>4. Publicación</h6>
            <p>Subimos tu web y la dejamos funcionando al 100%.</p>
          </div>
        </div>
      </div>

      <!-- HOSTING Y DOMINIO -->
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <h4 class="fw-bold mb-3">Alojamiento y Dominio incluidos</h4>
          <p>Olvídate de buscar proveedores externos. En Joaisoft ofrecemos:</p>
          <ul class="list-unstyled">
            <li><i class="fas fa-globe text-success me-2"></i> Dominio personalizado (.com, .es, etc.)</li>
            <li><i class="fas fa-server text-success me-2"></i> Hosting profesional 99.9% uptime</li>
            <li><i class="fas fa-shield-alt text-success me-2"></i> Certificado SSL gratuito</li>
            <li><i class="fas fa-cogs text-success me-2"></i> Mantenimiento técnico y actualizaciones</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="assets/hosting.jpg" alt="Hosting" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- VENTAJAS -->
      <div class="row text-center mb-5">
        <h4 class="fw-bold mb-4">¿Por qué elegir Joaisoft?</h4>
        <div class="col-md-4">
          <i class="fas fa-rocket fa-2x text-warning mb-2"></i>
          <p>Rápida entrega de proyectos</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-handshake fa-2x text-warning mb-2"></i>
          <p>Atención cercana y asesoramiento continuo</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-user-shield fa-2x text-warning mb-2"></i>
          <p>Seguridad y soporte incluidos</p>
        </div>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2 mt-2">Solicita tu página web ahora</a>
      </div>
    </section>
  `;
}
