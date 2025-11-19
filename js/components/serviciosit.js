export function serviciosIT() {
  const seccion = document.getElementById("serviciosIT");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">
      <h2 class="mt-5 text-center fw-bold mb-4">Servicios informáticos para particulares y pymes</h2>
      <p class="text-center lead mb-5">
        Te ayudo con todo lo relacionado con tus equipos, datos y pequeñas soluciones IT:
        tanto si eres particular como si tienes un pequeño negocio.
      </p>

      <!-- QUÉ OFRECEMOS -->
      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">¿Qué incluye el servicio?</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> Diagnóstico y reparación de ordenadores (sobremesa y portátiles)</li>
            <li><i class="fas fa-check text-success me-2"></i> Limpieza de virus, malware y optimización de rendimiento</li>
            <li><i class="fas fa-check text-success me-2"></i> Configuración de impresoras, escáneres y otros periféricos</li>
            <li><i class="fas fa-check text-success me-2"></i> Copias de seguridad y recuperación básica de datos</li>
            <li><i class="fas fa-check text-success me-2"></i> Configuración de redes WiFi en casa y en pequeños negocios</li>
            <li><i class="fas fa-check text-success me-2"></i> Asesoramiento tecnológico para comprar equipos y software</li>
            <li><i class="fas fa-check text-success me-2"></i> Soporte remoto para incidencias sencillas del día a día</li>
          </ul>
        </div>
      </div>

      <!-- PROCESO -->
      <div class="row mb-5">
        <div class="col text-center">
          <h4 class="fw-bold mb-4">Cómo trabajamos</h4>
        </div>
        <div class="row text-center">
          <div class="col-md-3">
            <i class="fas fa-comments fa-2x mb-2 text-primary"></i>
            <h6>1. Primer contacto</h6>
            <p>Nos cuentas el problema o la necesidad que tienes.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-search fa-2x mb-2 text-primary"></i>
            <h6>2. Diagnóstico</h6>
            <p>Revisamos el equipo o la situación para saber qué hace falta.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-tools fa-2x mb-2 text-primary"></i>
            <h6>3. Solución</h6>
            <p>Aplicamos la solución acordada y te explicamos cada paso.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-check-circle fa-2x mb-2 text-primary"></i>
            <h6>4. Seguimiento</h6>
            <p>Comprobamos que todo funciona bien y resolvemos dudas.</p>
          </div>
        </div>
      </div>

      <!-- SOPORTE PRESENCIAL Y REMOTO -->
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <h4 class="fw-bold mb-3">Soporte presencial y remoto</h4>
          <p>Nos adaptamos a cómo trabajas: en casa, en tu oficina o a distancia.</p>
          <ul class="list-unstyled">
            <li><i class="fas fa-laptop-house text-success me-2"></i> Visitas a domicilio para particulares (según zona)</li>
            <li><i class="fas fa-briefcase text-success me-2"></i> Soporte a pymes y pequeños negocios</li>
            <li><i class="fas fa-headset text-success me-2"></i> Asistencia remota segura para incidencias rápidas</li>
            <li><i class="fas fa-user-friends text-success me-2"></i> Explicaciones en lenguaje sencillo, sin tecnicismos</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="assets/soporte-it.jpg" alt="Soporte informático" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- VENTAJAS -->
      <div class="row text-center mb-5">
        <h4 class="fw-bold mb-4">¿Por qué elegir Joaisoft para tu soporte IT?</h4>
        <div class="col-md-4">
          <i class="fas fa-hand-holding-heart fa-2x text-warning mb-2"></i>
          <p>Trato cercano y de confianza, pensado para personas que no son técnicas.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-euro-sign fa-2x text-warning mb-2"></i>
          <p>Precios ajustados para particulares y pymes, sin sorpresas finales.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-shield-alt fa-2x text-warning mb-2"></i>
          <p>Cuidamos tus datos y tu privacidad como si fueran nuestros.</p>
        </div>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2 mt-2">
          Cuéntame qué necesitas en informática
        </a>
      </div>
    </section>
  `;
}
