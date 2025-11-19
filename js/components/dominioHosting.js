export function dominioHosting() {
  const contenedor = document.getElementById("dominioHosting");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <section class="container py-5">
      <!-- Título -->
      <h2 class="text-center fw-bold mb-3 mt-5">Dominio y Hosting Profesional</h2>
      <p class="text-center lead mb-5">
        En <strong>Joaisoft</strong> te ayudamos a conseguir el dominio perfecto y el hosting más rápido y seguro para tu proyecto.
        Nos encargamos de todo: registro, configuración, seguridad y mantenimiento.
      </p>

      <!-- Beneficios -->
      <div class="row g-4 mb-5">
        <div class="col-md-4 text-center">
          <i class="fas fa-globe fa-3x text-primary mb-3"></i>
          <h5 class="fw-bold">Registro de Dominios</h5>
          <p>Gestionamos el registro de tu dominio (.com, .es, .net y más) para que sea único y profesional.</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fas fa-server fa-3x text-primary mb-3"></i>
          <h5 class="fw-bold">Hosting Optimizado</h5>
          <p>Servidores rápidos, seguros y adaptados a tu proyecto con copias de seguridad y soporte técnico.</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fas fa-lock fa-3x text-primary mb-3"></i>
          <h5 class="fw-bold">Seguridad SSL</h5>
          <p>Instalamos certificados SSL para proteger la información y dar confianza a tus visitantes.</p>
        </div>
      </div>

      <!-- Planes -->
      <h4 class="fw-bold text-center mb-4">Planes de Dominio + Hosting</h4>
      <div class="row g-4 mb-5">
        <div class="col-md-4">
          <div class="p-4 bg-white shadow-sm rounded text-center h-100">
            <h5 class="fw-bold mb-2">Básico</h5>
            <p>.com o .es + hosting compartido</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ 1 dominio incluido</li>
              <li>✔ 10 GB de almacenamiento</li>
              <li>✔ Certificado SSL</li>
              <li>✔ Soporte por email</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-white shadow-sm rounded text-center h-100">
            <h5 class="fw-bold mb-2">Profesional</h5>
            <p>.com + hosting optimizado</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ 2 dominios incluidos</li>
              <li>✔ 50 GB de almacenamiento</li>
              <li>✔ Certificado SSL Premium</li>
              <li>✔ Soporte 24/7</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-white shadow-sm rounded text-center h-100">
            <h5 class="fw-bold mb-2">Empresa</h5>
            <p>.com + hosting dedicado</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ Dominios ilimitados</li>
              <li>✔ 200 GB de almacenamiento</li>
              <li>✔ SSL y seguridad avanzada</li>
              <li>✔ Soporte prioritario</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2">
          Quiero dominio y hosting · Solicitar propuesta
        </a>
      </div>
    </section>
  `;
}
