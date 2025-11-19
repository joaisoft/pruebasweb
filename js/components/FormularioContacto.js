export function FormularioContacto() {
  const seccion = document.getElementById("contacto-root");

  if (seccion) {
    seccion.innerHTML = `
      <section class="contacto-joaisoft py-5">
        <div class="container">
          <h2 class="titulo-contacto text-center mb-4">Contáctanos</h2>
          <p class="descripcion-contacto text-center mb-5">
            ¿Tienes dudas, propuestas o quieres pedir presupuesto?<br />
            Escríbenos y nos pondremos en contacto contigo lo antes posible.
          </p>

          <form class="formulario-contacto mx-auto" style="max-width: 700px;">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Nombre completo" required />
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Correo electrónico" required />
              </div>
              <div class="col-12">
                <input type="text" class="form-control" placeholder="Asunto" />
              </div>
              <div class="col-12">
                <textarea class="form-control" rows="5" placeholder="Tu mensaje..." required></textarea>
              </div>
              <div class="col-12 text-center mt-3">
                <button type="submit" class="btn btn-gradient">> Enviar mensaje</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    `;
  }
}
