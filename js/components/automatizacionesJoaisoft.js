export function automatizacionesJoaisoft() {
  const seccion = document.getElementById("automatizacionesJoaisoft");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="automatizaciones container py-5">

      <!-- HERO FUTURISTA -->
      <div class="row align-items-center gy-4 mt-5 mb-5 auto-hero">
        <!-- Texto -->
        <div class="col-lg-6">
          <span class="auto-pill text-uppercase mb-3 d-inline-block">
            Automatizaciones · Bots · Flujos inteligentes
          </span>
          <h2 class="fw-bold mb-3">
            Menos tareas repetitivas,
            <span class="dw-highlight">más tiempo para lo importante</span>
          </h2>
          <p class="lead mb-4">
            Conectamos tus herramientas, diseñamos flujos automáticos y creamos bots que trabajan
            en segundo plano por ti. Tu negocio sigue funcionando aunque tú no estés delante del ordenador.
          </p>

          <ul class="list-unstyled mb-4" style="font-size:.95rem;">
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Automatización de correos, reservas, facturas y recordatorios.
            </li>
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Integración entre formularios, CRM, ERP y herramientas de comunicación.
            </li>
            <li class="mb-2">
              <i class="fas fa-check text-success me-2"></i>
              Bots que clasifican, etiquetan y envían la información donde corresponde.
            </li>
            <li class="mb-0">
              <i class="fas fa-check text-success me-2"></i>
              Flujos medibles: cada automatización deja rastro para que sepas qué está pasando.
            </li>
          </ul>

          <div class="d-flex flex-wrap gap-2 mb-4 auto-chips">
            <span class="auto-chip">Workflows 24/7</span>
            <span class="auto-chip">Sin código para el usuario final</span>
            <span class="auto-chip">Integraciones seguras</span>
            <span class="auto-chip">Alertas inteligentes</span>
          </div>

          <div class="d-flex flex-wrap gap-3">
            <a href="ContactoAutomatizaciones.html" class="btn btn-gradient btn-lg px-4 py-2">
              Quiero automatizar mi negocio
            </a>
            <a href="#casos-automatizaciones" class="btn btn-outline-light auto-btn-ghost">
              Ver ejemplos de automatizaciones
            </a>
          </div>
        </div>

        <!-- Visual / Vídeo -->
        <div class="col-lg-6">
          <div class="auto-card-glass rounded-4 shadow-lg p-3 h-100">
            <div class="ratio ratio-16x9 rounded-4 overflow-hidden">
              <!-- Cambia la ruta del vídeo por el tuyo -->
              <video
                src="assets/autovideo.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-100 h-100"
              ></video>
            </div>

          </div>
        </div>
      </div>

      <!-- QUÉ PODEMOS AUTOMATIZAR -->
      <section id="casos-automatizaciones" class="mb-5">
        <div class="row mb-4">
          <div class="col-lg-8">
            <h3 class="fw-bold mb-2">Qué podemos automatizar en tu día a día</h3>
            <p class="text-muted mb-0">
              Empezamos por lo que más tiempo te roba: tareas repetitivas, copias de datos,
              avisos que siempre se te escapan o procesos que dependen de “que alguien se acuerde”.
            </p>
          </div>
        </div>

        <div class="row g-3 auto-grid">
          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-envelope-open-text"></i>
                </div>
                <h4 class="h6 mb-0">Correos y comunicaciones</h4>
              </div>
              <p class="mb-0 text-muted">
                Confirmaciones automáticas, recordatorios, avisos internos y mensajes personalizados
                según lo que haga el cliente.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-calendar-check"></i>
                </div>
                <h4 class="h6 mb-0">Reservas y citas</h4>
              </div>
              <p class="mb-0 text-muted">
                Agenda sincronizada, mensajes de confirmación, cambios de hora
                y avisos al equipo sin tocar una hoja de cálculo.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-file-invoice-dollar"></i>
                </div>
                <h4 class="h6 mb-0">Facturas y documentación</h4>
              </div>
              <p class="mb-0 text-muted">
                Recepción, clasificación y archivo de facturas, albaranes o partes,
                conectados con tu sistema de contabilidad o gestión.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-users-cog"></i>
                </div>
                <h4 class="h6 mb-0">Onboarding de clientes</h4>
              </div>
              <p class="mb-0 text-muted">
                Cuando entra un nuevo cliente, el sistema crea su ficha, envía documentación,
                asigna responsable y programa los primeros seguimientos.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-robot"></i>
                </div>
                <h4 class="h6 mb-0">Bots de clasificación</h4>
              </div>
              <p class="mb-0 text-muted">
                Bots que leen la información, la etiquetan y la envían a la persona o herramienta correcta
                sin que tengas que leerlo todo a mano.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="auto-card bg-white border-0 rounded-4 p-4 h-100">
              <div class="d-flex align-items-center mb-3">
                <div class="auto-icon me-3">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h4 class="h6 mb-0">Informes y métricas</h4>
              </div>
              <p class="mb-0 text-muted">
                Recogida de datos desde distintas fuentes y envío automático de informes periódicos
                a tu correo o al canal del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CÓMO TRABAJAMOS (FLUJO DE AUTOMATIZACIÓN) -->
      <section class="auto-flow mb-5">
        <div class="row mb-4 text-center">
          <div class="col-lg-8 mx-auto">
            <h3 class="fw-bold mb-2">Cómo diseñamos tus flujos de automatización</h3>
            <p class="text-muted mb-0">
              Nada de cajas negras. Ves el flujo, lo entiendes y puedes ampliarlo con nosotros cuando tu negocio crezca.
            </p>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4 text-center">
          <div class="col">
            <div class="auto-step h-100 rounded-4 p-4">
              <span class="auto-step-number">01</span>
              <h4 class="h6 mb-2">Descubrimiento</h4>
              <p class="mb-0 text-muted">
                Analizamos qué tareas repites cada día y qué herramientas utilizas.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="auto-step h-100 rounded-4 p-4">
              <span class="auto-step-number">02</span>
              <h4 class="h6 mb-2">Mapa de flujo</h4>
              <p class="mb-0 text-muted">
                Dibujamos un diagrama claro con entradas, reglas, acciones y alertas.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="auto-step h-100 rounded-4 p-4">
              <span class="auto-step-number">03</span>
              <h4 class="h6 mb-2">Implementación</h4>
              <p class="mb-0 text-muted">
                Configuramos las automatizaciones, las probamos contigo y dejamos todo documentado.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="auto-step h-100 rounded-4 p-4">
              <span class="auto-step-number">04</span>
              <h4 class="h6 mb-2">Monitorización</h4>
              <p class="mb-0 text-muted">
                Activamos los flujos, medimos resultados y ajustamos hasta que todo funcione suave.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA FINAL -->
      <div class="text-center mb-5">
        <h3 class="fw-bold mb-3">
          ¿Listo para que las tareas repetitivas dejen de depender de ti?
        </h3>
        <p class="text-muted mb-4">
          Cuéntanos qué te gustaría que “se hiciera solo” y preparamos una propuesta de automatización
          clara, visual y sin tecnicismos.
        </p>
        <a href="ContactoAutomatizaciones.html" class="btn btn-gradient btn-lg px-4 py-2">
          Empezar a automatizar con Joaisoft
        </a>
      </div>

    </section>
  `;
}
