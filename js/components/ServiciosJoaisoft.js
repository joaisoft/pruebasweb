export function ServiciosJoaisoft() {
  const seccion = document.getElementById("servicios-root");

  if (seccion) {
    seccion.innerHTML = `
      <section class="servicios-joaisoft py-5">
        <div class="container text-center">
          <h2 class="titulo-seccion mb-4">¿Qué hacemos en Joaisoft?</h2>
          <p class="descripcion-seccion mb-5">Ofrecemos soluciones digitales completas para empresas que quieren crecer, automatizar y destacar en su sector.</p>

          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-cubes icono-servicio"></i>
                <h4 class="servicio-titulo">Desarrrollo Web</h4>
                <p>Desarrollamos tu web y digitalizamos tu empresa de forma inteligente.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-code icono-servicio"></i>
                <h4 class="servicio-titulo">Aplicaciones a medida</h4>
                <p>Desarrollamos aplicaciones a medida que se adaptan exactamente a las necesidades de tu negocio.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-desktop icono-servicio"></i>
                <h4 class="servicio-titulo">Servicios IT</h4>
                <p>Ofrecemos servicios IT de reparación, recuperación de datos y helpdesk para que tu negocio nunca se detenga.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-robot icono-servicio"></i>
                <h4 class="servicio-titulo">Automatización</h4>
                <p>Conectamos tus herramientas, creamos bots y automatizamos procesos para que tu negocio funcione.</p>
              </div>
            </div>
          </div>

                <div class="text-center">
        <a href="#presupuesto" class="btn btn-gradient btn-lg px-4 py-2 mt-2">
          Cuentanos que es lo que necesitas y nos pondremos a trabajar juntos
        </a>
      </div>
        </div>
      </section>
    `;
  }
}
