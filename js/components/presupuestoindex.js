export function presupuesto() {
  const seccion = document.getElementById("presupuesto");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="presupuesto-section py-5">
      <div class="container">
        <div class="row align-items-stretch g-4">
          
          <!-- IMAGEN IZQUIERDA -->
          <div class="col-lg-7 d-flex">
            <div class="w-100 d-flex align-items-center justify-content-center">
              <img 
                src="assets/atencioncli.png" 
                alt="Atención al cliente Joaisoft" 
                class="img-fluid rounded shadow-lg w-100"
              />
            </div>
          </div>

          <!-- FORMULARIO DERECHA -->
          <div class="col-lg-5 d-flex">
            <div class="presupuesto-card bg-white rounded shadow p-4 p-md-4 ms-lg-auto w-100">
              <h3 class="fw-bold mb-1 text-center text-lg-start">Presupuesto personalizado</h3>
              <p class="text-muted mb-4 text-center text-lg-start">
                Te respondo  en menos de 24&nbsp;horas.
              </p>

              <form>
                <div class="mb-3">
                  <label for="presuNombre" class="form-label">Tu nombre o empresa*</label>
                  <input type="text" class="form-control" id="presuNombre" placeholder="Ej. Marta · Peluquería Luna" required>
                </div>

                <div class="mb-3">
                  <label for="presuEmail" class="form-label">Email de contacto*</label>
                  <input type="email" class="form-control" id="presuEmail" placeholder="tucorreo@ejemplo.com" required>
                </div>

                <div class="mb-3">
                  <label for="presuTelefono" class="form-label">Teléfono de contacto (opcional)</label>
                  <input type="tel" class="form-control" id="presuTelefono" placeholder="+34 6XX XXX XXX">
                </div>

                <div class="mb-3">
                  <label for="presuTipo" class="form-label">¿Qué necesitas?</label>
                  <select class="form-select" id="presuTipo">
                    <option value="" selected>Elige una opción</option>
                    <option value="web">Página web / landing</option>
                    <option value="it">Servicios informáticos / soporte IT</option>
                    <option value="auto">Automatizaciones y flujos de trabajo</option>
                    <option value="apps">Desarrollo de un aplicación</option>
                    <option value="otro">Otro proyecto digital</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="presuMensaje" class="form-label">Cuenta un poco tu idea*</label>
                  <textarea class="form-control" id="presuMensaje" rows="4" placeholder="Cuéntame qué te gustaría conseguir, plazos aproximados, si ya tienes web, etc." required></textarea>
                </div>

                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="presuPrivacidad" required>
                  <label class="form-check-label small" for="presuPrivacidad">
                    He leído y acepto la <a href="politica-privacidad.html">política de privacidad</a>.
                  </label>
                </div>

                <button type="submit" class="btn btn-gradient w-100 mt-2">
                  PEDIR PRESUPUESTO
                </button>

                <p class="small text-muted mt-3 mb-0 text-center text-lg-start">
                  No te enviaré spam. Solo usaré estos datos para responder a tu solicitud de presupuesto.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
