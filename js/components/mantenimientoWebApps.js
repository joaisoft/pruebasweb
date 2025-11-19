export function mantenimientoWebApps() {
  const host = document.getElementById("mantenimientoWeb");
  if (!host) return;

  host.innerHTML = `
    <section class="container py-5">
      <!-- HERO -->
      <h2 class="text-center fw-bold mb-3 mt-5">Mantenimiento Web y de Aplicaciones</h2>
      <p class="text-center lead mb-5">
        En <strong>Joaisoft</strong> cuidamos de tu web y tus aplicaciones para que estén
        <strong>siempre actualizadas, seguras y rápidas</strong>. Nos ocupamos de todo:
        mejoras, seguridad, copias, monitorización y soporte técnico.
      </p>

      <!-- QUÉ INCLUYE -->
      <div class="row g-4 mb-5">
        <div class="col-12 col-md-6">
          <h4 class="fw-bold mb-3">Qué incluye el servicio</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-shield-alt text-success me-2"></i> Actualizaciones de seguridad y parches críticos</li>
            <li><i class="fas fa-sync-alt text-success me-2"></i> Actualizaciones de framework, librerías y dependencias</li>
            <li><i class="fas fa-broom text-success me-2"></i> Limpieza, optimización de rendimiento y cachés</li>
            <li><i class="fas fa-database text-success me-2"></i> Backups automáticos verificados y restauraciones bajo demanda</li>
            <li><i class="fas fa-chart-line text-success me-2"></i> Monitorización 24/7 (uptime, errores y métricas clave)</li>
            <li><i class="fas fa-bug text-success me-2"></i> Corrección de incidencias y bugs</li>
            <li><i class="fas fa-lock text-success me-2"></i> Endurecimiento (SSL/TLS, cabeceras, protección de formularios)</li>
            <li><i class="fas fa-rocket text-success me-2"></i> Roadmap de mejoras continuas y soporte funcional</li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <h4 class="fw-bold mb-3">Cobertura</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-globe text-success me-2"></i> Sitios web corporativos, portfolios y landings</li>
            <li><i class="fas fa-store text-success me-2"></i> E-commerce y TPV</li>
            <li><i class="fas fa-project-diagram text-success me-2"></i> APIs y microservicios</li>
            <li><i class="fas fa-mobile-alt text-success me-2"></i> PWA y apps híbridas</li>
            <li><i class="fas fa-plug text-success me-2"></i> Integraciones (Odoo, ERP/CRM, pasarelas, Make/Telegram)</li>
          </ul>
        </div>
      </div>

      <!-- PLANES / SLA -->
      <div class="row g-4 mb-5">
        <div class="col-12">
          <h4 class="fw-bold text-center mb-4">Planes y niveles de servicio (SLA)</h4>
        </div>
        <div class="col-12 col-md-4">
          <div class="p-4 rounded shadow-sm bg-white h-100">
            <h5 class="fw-bold mb-2">Esencial</h5>
            <p class="mb-3">Para webs informativas y portfolios.</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ Actualizaciones mensuales</li>
              <li>✔ Backup diario</li>
              <li>✔ Monitorización uptime</li>
              <li>✔ Respuesta ≤ 48 h</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="p-4 rounded shadow-sm bg-white h-100">
            <h5 class="fw-bold mb-2">Profesional</h5>
            <p class="mb-3">Para sitios con transacciones o catálogos.</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ Actualizaciones quincenales</li>
              <li>✔ Backup cada 12 h</li>
              <li>✔ Monitorización + alertas</li>
              <li>✔ Respuesta ≤ 24 h</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="p-4 rounded shadow-sm bg-white h-100">
            <h5 class="fw-bold mb-2">Empresa</h5>
            <p class="mb-3">Para entornos críticos y APIs.</p>
            <ul class="list-unstyled small mb-3">
              <li>✔ Actualizaciones semanales</li>
              <li>✔ Backup cada 4 h</li>
              <li>✔ Monitorización avanzada</li>
              <li>✔ Respuesta ≤ 4 h</li>
            </ul>
            <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-sm">Solicitar</a>
          </div>
        </div>
      </div>

      <!-- FLUJO DE INCIDENCIAS -->
      <div class="mb-5">
        <h4 class="fw-bold text-center mb-4">Cómo gestionamos incidencias</h4>
        <div class="row text-center g-4">
          <div class="col-6 col-md-3">
            <i class="fas fa-headset fa-2x text-primary mb-2"></i>
            <h6>1. Aviso</h6>
            <p class="mb-0">Nos contactas o salta una alerta.</p>
          </div>
          <div class="col-6 col-md-3">
            <i class="fas fa-search fa-2x text-primary mb-2"></i>
            <h6>2. Diagnóstico</h6>
            <p class="mb-0">Analizamos logs, métricas y el alcance.</p>
          </div>
          <div class="col-6 col-md-3">
            <i class="fas fa-tools fa-2x text-primary mb-2"></i>
            <h6>3. Resolución</h6>
            <p class="mb-0">Aplicamos la solución y verificamos.</p>
          </div>
          <div class="col-6 col-md-3">
            <i class="fas fa-clipboard-check fa-2x text-primary mb-2"></i>
            <h6>4. Informe</h6>
            <p class="mb-0">Resumen con causa raíz y prevención.</p>
          </div>
        </div>
      </div>

      <!-- PREGUNTAS CLAVE -->
      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <h5 class="fw-bold mb-2">Proactividad</h5>
          <p class="mb-0">No esperamos a que fallen las cosas: auditamos, parcheamos y optimizamos de forma preventiva.</p>
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold mb-2">Transparencia</h5>
          <p class="mb-0">Informes periódicos: cambios aplicados, incidencias, métricas y próximas acciones.</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2">
          Quiero mantenimiento · Pide propuesta
        </a>
      </div>
    </section>
  `;
}
