export function formularioDesarrolloWeb() {
  const seccion = document.getElementById("formularioDesarrolloWeb");
  if (!seccion) return;

  seccion.innerHTML = `
  <section class="container py-5">
    <!-- Estilos mínimos para el “tick” y el borde activo -->
    <style>
      .plan-label { display:block; cursor:pointer; }
      .plan-card, .mant-card { position:relative; transition:box-shadow .2s, border-color .2s; }
      .plan-check, .mant-check {
        display:none; position:absolute; top:10px; right:12px; font-size:1.25rem;
      }
      /* Mostrar tick y resaltar cuando el radio está marcado */
      input[type="radio"].plan-radio:checked + .plan-card { border:2px solid #0d6efd; box-shadow:0 0 0 .2rem rgba(13,110,253,.15); }
      input[type="radio"].plan-radio:checked + .plan-card .plan-check { display:block; color:#0d6efd; }

      input[type="radio"].mant-radio:checked + .mant-card { border:2px solid #0d6efd; box-shadow:0 0 0 .2rem rgba(13,110,253,.15); }
      input[type="radio"].mant-radio:checked + .mant-card .mant-check { display:block; color:#0d6efd; }
    </style>

    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-9">

        <h2 class="text-center fw-bold mt-5">Solicita tu Proyecto </h2>
        <p class="text-center text-muted mb-4">
          Rellena el formulario y te contactaremos con una propuesta a medida. Elige tu plan de <b>Dominio + Hosting</b> y de <b>Mantenimiento</b>.
        </p>

        <form id="fdw-form" class="bg-light p-4 rounded shadow-sm needs-validation" novalidate>

          <!-- 1) CONTACTO -->
          <h5 class="fw-bold mb-3">1) Datos de contacto</h5>
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <label for="fdw-nombre" class="form-label">Nombre completo *</label>
              <input type="text" id="fdw-nombre" class="form-control" required>
              <div class="invalid-feedback">Indica tu nombre.</div>
            </div>
            <div class="col-md-6">
              <label for="fdw-email" class="form-label">Correo electrónico *</label>
              <input type="email" id="fdw-email" class="form-control" required>
              <div class="invalid-feedback">Introduce un email válido.</div>
            </div>
            <div class="col-md-6">
              <label for="fdw-telefono" class="form-label">Teléfono</label>
              <input type="tel" id="fdw-telefono" class="form-control" placeholder="+34 6XX XXX XXX">
            </div>
            <div class="col-md-6">
              <label for="fdw-sector" class="form-label">Sector</label>
              <select id="fdw-sector" class="form-select">
                <option value="" selected disabled>Selecciona una opción</option>
                <option>Comercio local</option>
                <option>Restauración</option>
                <option>Servicios profesionales</option>
                <option>Educación / Formación</option>
                <option>Portafolio personal</option>
                <option>Salud / Bienestar</option>
                <option>ONG / Asociaciones</option>
                <option>Otro</option>
              </select>
            </div>
          </div>

          <!-- 2) FUNCIONALIDADES -->
          <h5 class="fw-bold mb-3">2) Objetivo y funcionalidades</h5>
          <div class="row g-3 mb-4">
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-info"><label class="form-check-label" for="fdw-f-info">Web informativa</label></div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-ecom"><label class="form-check-label" for="fdw-f-ecom">Tienda online</label></div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-panel"><label class="form-check-label" for="fdw-f-panel">Autogestión con panel</label></div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-blog"><label class="form-check-label" for="fdw-f-blog">Blog / Noticias</label></div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-reservas"><label class="form-check-label" for="fdw-f-reservas">Reservas / Citas</label></div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-f-multilenguaje"><label class="form-check-label" for="fdw-f-multilenguaje">Multilenguaje</label></div>
            </div>

            <div class="col-12">
              <label for="fdw-mensaje" class="form-label">Cuéntanos más</label>
              <textarea id="fdw-mensaje" rows="4" class="form-control" placeholder="Ej: web moderna con catálogo, pagos y blog..."></textarea>
            </div>
          </div>

          <!-- 3) PLANES DOMINIO + HOSTING -->
          <h5 class="fw-bold mb-3">3) Plan de Dominio + Hosting</h5>
          <p class="text-muted small">Incluye dominio .com/.es, SSL y soporte.</p>
          <div class="row g-3 mb-4">

            <div class="col-md-4">
              <label class="plan-label">
                <input class="plan-radio" type="radio" name="fdw-hosting" id="fdw-hosting-basico" value="Básico" required>
                <div class="card plan-card h-100 shadow-sm p-3">
                  <span class="plan-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Básico</h6>
                  <p class="text-center text-muted mb-3">.com/.es + hosting compartido</p>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ 1 dominio incluido</li>
                    <li>✔ 10 GB almacenamiento</li>
                    <li>✔ SSL incluido</li>
                    <li>✔ Soporte por email</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="col-md-4">
              <label class="plan-label">
                <input class="plan-radio" type="radio" name="fdw-hosting" id="fdw-hosting-pro" value="Profesional" required>
                <div class="card plan-card h-100 shadow-sm p-3">
                  <span class="plan-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Profesional</h6>
                  <p class="text-center text-muted mb-3">.com + hosting optimizado</p>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ 2 dominios incluidos</li>
                    <li>✔ 50 GB almacenamiento</li>
                    <li>✔ SSL Premium</li>
                    <li>✔ Soporte 24/7</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="col-md-4">
              <label class="plan-label">
                <input class="plan-radio" type="radio" name="fdw-hosting" id="fdw-hosting-empresa" value="Empresa" required>
                <div class="card plan-card h-100 shadow-sm p-3">
                  <span class="plan-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Empresa</h6>
                  <p class="text-center text-muted mb-3">.com + hosting dedicado</p>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ Dominios ilimitados</li>
                    <li>✔ 200 GB almacenamiento</li>
                    <li>✔ Seguridad avanzada (WAF/CDN)</li>
                    <li>✔ Soporte prioritario</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="invalid-feedback d-block" id="fdw-hosting-error" style="display:none;">Selecciona un plan de hosting.</div>
          </div>

          <!-- 4) MANTENIMIENTO -->
          <h5 class="fw-bold mb-3">4) Plan de Mantenimiento</h5>
          <div class="row g-3 mb-4">

            <div class="col-md-4">
              <label class="plan-label">
                <input class="mant-radio" type="radio" name="fdw-mantenimiento" id="fdw-mant-basico" value="Básico" required>
                <div class="card mant-card h-100 border-0 shadow-sm p-3">
                  <span class="mant-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Básico</h6>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ Actualizaciones mensuales</li>
                    <li>✔ Copia semanal</li>
                    <li>✔ Soporte por email</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="col-md-4">
              <label class="plan-label">
                <input class="mant-radio" type="radio" name="fdw-mantenimiento" id="fdw-mant-estandar" value="Estándar" required>
                <div class="card mant-card h-100 border-0 shadow-sm p-3">
                  <span class="mant-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Estándar</h6>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ Actualizaciones quincenales</li>
                    <li>✔ Copia diaria</li>
                    <li>✔ Monitorización uptime</li>
                    <li>✔ Soporte email + chat</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="col-md-4">
              <label class="plan-label">
                <input class="mant-radio" type="radio" name="fdw-mantenimiento" id="fdw-mant-premium" value="Premium" required>
                <div class="card mant-card h-100 border-0 shadow-sm p-3">
                  <span class="mant-check"><i class="fa-solid fa-circle-check"></i></span>
                  <h6 class="fw-bold text-center mb-2">Premium</h6>
                  <ul class="list-unstyled small mb-0">
                    <li>✔ Actualizaciones semanales</li>
                    <li>✔ Copia + recuperación avanzada</li>
                    <li>✔ Hardening y WAF/CDN</li>
                    <li>✔ Soporte prioritario</li>
                  </ul>
                </div>
              </label>
            </div>

            <div class="invalid-feedback d-block" id="fdw-mant-error" style="display:none;">Selecciona un plan de mantenimiento.</div>
          </div>

          <!-- 5) SERVICIOS EXTRA -->
          <h5 class="fw-bold mb-3">5) Servicios adicionales</h5>
          <div class="row g-3 mb-4">
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-seo"><label class="form-check-label" for="fdw-seo">SEO avanzado</label></div></div>
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-analytics"><label class="form-check-label" for="fdw-analytics">Analítica y dashboards</label></div></div>
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-rgpd"><label class="form-check-label" for="fdw-rgpd">Textos legales y RGPD</label></div></div>
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-accesibilidad"><label class="form-check-label" for="fdw-accesibilidad">Accesibilidad (WCAG)</label></div></div>
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-integraciones"><label class="form-check-label" for="fdw-integraciones">Integraciones (Make, Telegram, SMTP, OAuth2)</label></div></div>
            <div class="col-sm-6 col-md-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="fdw-migracion"><label class="form-check-label" for="fdw-migracion">Migración desde web actual</label></div></div>
          </div>

          <!-- 6) DOMINIO -->
          <h5 class="fw-bold mb-3">6) Dominio</h5>
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <label class="form-label">¿Tienes dominio?</label>
              <div class="d-flex gap-3">
                <div class="form-check"><input class="form-check-input" type="radio" name="fdw-dom" id="fdw-dom-si" value="sí"><label class="form-check-label" for="fdw-dom-si">Sí</label></div>
                <div class="form-check"><input class="form-check-input" type="radio" name="fdw-dom" id="fdw-dom-no" value="no" checked><label class="form-check-label" for="fdw-dom-no">No</label></div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="fdw-dominio" class="form-label">Indica tu dominio (opcional)</label>
              <input type="text" id="fdw-dominio" class="form-control" placeholder="miempresa.com" disabled>
            </div>
          </div>

          <!-- 7) PRESUPUESTO / PLAZO -->
          <h5 class="fw-bold mb-3">7) Presupuesto y plazos</h5>
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <label for="fdw-presupuesto" class="form-label">Presupuesto estimado</label>
              <select id="fdw-presupuesto" class="form-select">
                <option value="" selected>Sin preferencia</option>
                <option>&lt; 800 €</option>
                <option>800 – 1.500 €</option>
                <option>1.500 – 3.000 €</option>
                <option>&gt; 3.000 €</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="fdw-plazo" class="form-label">Plazo deseado</label>
              <select id="fdw-plazo" class="form-select">
                <option value="" selected>Flexible</option>
                <option>2–3 semanas</option>
                <option>4–6 semanas</option>
                <option>8 semanas o más</option>
              </select>
            </div>
          </div>

          <!-- RGPD -->
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="fdw-legal" required>
            <label class="form-check-label" for="fdw-legal">He leído y acepto la política de privacidad.</label>
            <div class="invalid-feedback">Debes aceptar la política de privacidad.</div>
          </div>

          <!-- CTA -->
          <div class="text-center">
            <button type="submit" class="btn btn-gradient px-4 py-2">Enviar solicitud</button>
            <p class="small text-muted mt-2">Te responderemos en 24–48h laborables.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
  `;

  // ====== LÓGICA ======
  const form = document.getElementById("fdw-form");

  // Validación + verificación de radios obligatorios
  form.addEventListener("submit", (e) => {
    const hostingChecked = form.querySelector('input[name="fdw-hosting"]:checked');
    const mantChecked    = form.querySelector('input[name="fdw-mantenimiento"]:checked');

    document.getElementById("fdw-hosting-error").style.display = hostingChecked ? "none" : "block";
    document.getElementById("fdw-mant-error").style.display    = mantChecked ? "none" : "block";

    if (!form.checkValidity() || !hostingChecked || !mantChecked) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });

  // Habilitar / deshabilitar campo dominio
  const domSi = document.getElementById("fdw-dom-si");
  const domNo = document.getElementById("fdw-dom-no");
  const domInput = document.getElementById("fdw-dominio");
  const toggleDominio = () => { 
    domInput.disabled = !domSi.checked; 
    if (!domSi.checked) domInput.value = ""; 
  };
  domSi.addEventListener("change", toggleDominio);
  domNo.addEventListener("change", toggleDominio);
}
