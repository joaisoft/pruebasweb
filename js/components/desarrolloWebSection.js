// desarrolloWebSection.js

export function desarrolloWeb() {
  const seccion = document.getElementById("desarrolloWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">
      <h2 class="text-center fw-bold mb-4">Desarrollo de Páginas Web</h2>
      <p class="text-center lead mb-5">
        Creamos soluciones digitales 100% adaptadas a tu negocio, acompañándote en todo el proceso: idea, diseño, desarrollo, publicación y mantenimiento.
      </p>

      <!-- QUÉ OFRECEMOS -->
      <div class="row mb-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">¿Qué incluye nuestro servicio?</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> Diseño web personalizado y actual</li>
            <li><i class="fas fa-check text-success me-2"></i> Desarrollo optimizado con HTML5, CSS3, JavaScript y frameworks modernos</li>
            <li><i class="fas fa-check text-success me-2"></i> Web responsive (móvil, tablet y escritorio)</li>
            <li><i class="fas fa-check text-success me-2"></i> Posicionamiento SEO y velocidad mejorada</li>
            <li><i class="fas fa-check text-success me-2"></i> Integración con redes sociales, formularios y analítica</li>
            <li><i class="fas fa-check text-success me-2"></i> Soporte para ecommerce, catálogos y blogs</li>
            <li><i class="fas fa-check text-success me-2"></i> Panel de administración fácil de usar</li>
            <li><i class="fas fa-check text-success me-2"></i> Formación básica para gestión de contenidos</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Tecnología y Garantía</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-code text-primary me-2"></i> Stack: HTML, CSS, JavaScript, Bootstrap, React, PHP o Node.js (según proyecto)</li>
            <li><i class="fas fa-lock text-primary me-2"></i> Seguridad avanzada y backups automáticos</li>
            <li><i class="fas fa-sync text-primary me-2"></i> Actualizaciones y soporte incluidos el primer año</li>
            <li><i class="fas fa-thumbs-up text-primary me-2"></i> Garantía de satisfacción: revisiones ilimitadas en fase de entrega</li>
          </ul>
        </div>
      </div>

      <!-- PROCESO -->
      <div class="row mb-5">
        <div class="col text-center">
          <h4 class="fw-bold mb-4">Nuestro proceso de trabajo</h4>
        </div>
        <div class="row text-center">
          <div class="col-md-2 col-6">
            <i class="fas fa-comments fa-2x mb-2 text-primary"></i>
            <h6>1. Reunión inicial</h6>
            <p>Escuchamos tus necesidades y planteamos ideas.</p>
          </div>
          <div class="col-md-2 col-6">
            <i class="fas fa-lightbulb fa-2x mb-2 text-primary"></i>
            <h6>2. Propuesta personalizada</h6>
            <p>Te enviamos presupuesto y un primer boceto visual.</p>
          </div>
          <div class="col-md-2 col-6">
            <i class="fas fa-pencil-ruler fa-2x mb-2 text-primary"></i>
            <h6>3. Diseño UI/UX</h6>
            <p>Preparamos la estructura y el diseño visual.</p>
          </div>
          <div class="col-md-2 col-6">
            <i class="fas fa-code fa-2x mb-2 text-primary"></i>
            <h6>4. Desarrollo</h6>
            <p>Programamos tu web aplicando las mejores prácticas.</p>
          </div>
          <div class="col-md-2 col-6">
            <i class="fas fa-rocket fa-2x mb-2 text-primary"></i>
            <h6>5. Publicación</h6>
            <p>Lanzamos la web y realizamos test de calidad y velocidad.</p>
          </div>
          <div class="col-md-2 col-6">
            <i class="fas fa-headset fa-2x mb-2 text-primary"></i>
            <h6>6. Soporte & mantenimiento</h6>
            <p>Resolvemos dudas y te acompañamos tras la entrega.</p>
          </div>
        </div>
      </div>

      <!-- HOSTING Y DOMINIO -->
      <div class="row mb-5">
        <div class="col-md-12">
          <h4 class="fw-bold mb-3">Alojamiento y Dominio incluidos</h4>
          <p>
            No necesitas buscar proveedores externos. En Joaisoft gestionamos todo por ti, para que solo te preocupes por tu negocio:
          </p>
          <ul class="list-unstyled">
            <li><i class="fas fa-globe text-success me-2"></i> Dominio propio (.com, .es, .net, etc.)</li>
            <li><i class="fas fa-server text-success me-2"></i> Hosting profesional con un 99,9% de disponibilidad</li>
            <li><i class="fas fa-shield-alt text-success me-2"></i> Certificado SSL gratis para tu web</li>
            <li><i class="fas fa-cogs text-success me-2"></i> Mantenimiento técnico y copias de seguridad periódicas</li>
            <li><i class="fas fa-envelope text-success me-2"></i> Correo profesional asociado al dominio</li>
          </ul>
        </div>
      </div>

      <!-- VENTAJAS -->
      <div class="row text-center mb-5">
        <h4 class="fw-bold mb-4">¿Por qué elegir Joaisoft?</h4>
        <div class="col-md-3 col-6 mb-3">
          <i class="fas fa-rocket fa-2x text-warning mb-2"></i>
          <p>Entrega ágil y cumplimiento de plazos</p>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <i class="fas fa-handshake fa-2x text-warning mb-2"></i>
          <p>Trato cercano, atención y asesoría profesional</p>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <i class="fas fa-user-shield fa-2x text-warning mb-2"></i>
          <p>Máxima seguridad y soporte postventa</p>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <i class="fas fa-lightbulb fa-2x text-warning mb-2"></i>
          <p>Soluciones innovadoras y escalables</p>
        </div>
      </div>

      <!-- GARANTÍAS Y CONFIANZA -->
      <div class="row mb-5">
        <div class="col-md-12 text-center">
          <h5 class="fw-bold mb-2">Garantía de satisfacción</h5>
          <p>
            Si no quedas 100% satisfecho, revisamos y ajustamos tu web sin coste adicional. <br>
            Tu éxito es nuestro objetivo principal.
          </p>
        </div>
      </div>

      <!-- FAQ -->
      <div class="row mb-5">
        <div class="col-md-12">
          <h4 class="fw-bold mb-3">Preguntas frecuentes</h4>
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h6 class="accordion-header" id="faq1">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1">
                  ¿Cuánto tarda en estar lista mi página web?
                </button>
              </h6>
              <div id="faqCollapse1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Normalmente entre 2 y 4 semanas, según la complejidad y funcionalidades requeridas.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header" id="faq2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2">
                  ¿Puedo modificar los contenidos después?
                </button>
              </h6>
              <div id="faqCollapse2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Sí, te formamos para que puedas gestionar textos e imágenes fácilmente desde un panel de control.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header" id="faq3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3">
                  ¿Qué soporte tengo tras la entrega?
                </button>
              </h6>
              <div id="faqCollapse3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Soporte incluido durante el primer año. Después, puedes elegir un plan de mantenimiento.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header" id="faq4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4">
                  ¿Puedo pedir nuevas funcionalidades tras la entrega?
                </button>
              </h6>
              <div id="faqCollapse4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Sí, podemos añadir nuevas secciones o servicios según crezca tu proyecto. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2 mt-2">
          Solicita tu página web ahora
        </a>
        <p class="small mt-3">Resolvemos cualquier duda sin compromiso. ¡Haz crecer tu negocio con Joaisoft!</p>
      </div>
    </section>
  `;
}
