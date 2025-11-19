export function PresentacionJoaisoft() {
  const seccion = document.getElementById("presentacion-root");

  if (seccion) {
    seccion.innerHTML = `
      <section class="presentacion-joaisoft">
        <div class="container d-flex flex-wrap align-items-center justify-content-between">
          
          <div class="presentacion-texto">
            <h2 class="titulo-principal">¡HOLA! SOMOS JOAISOFT</h2>
            
            <p>
              En JOAISOFT somos especialistas en diseño web y en la digitalización de negocios mediante soluciones tecnológicas a medida. Trabajamos codo con codo con nuestros clientes para automatizar procesos, aumentar su productividad y hacer crecer su empresa.
            </p>

            <p>
            Contamos con un equipo multidisciplinar de desarrolladores, consultores y diseñadores especializados en impulsar la transformación digital de las empresas.
            Acompañamos a nuestros clientes en todo el ciclo del proyecto, desde la consultoría funcional y la definición de la solución hasta su desarrollo, implementación y mantenimiento técnico continuo.o.
            </p>

            <!--<ul>
              <li>🔧 <strong>Odoo ERP:</strong> personalización e implementación completa para empresas.</li>
              <li>💻 <strong>Aplicaciones a medida:</strong> backend robusto con Spring Boot y frontend dinámico con React o Angular.</li>
              <li>🌐 <strong>Diseño web profesional:</strong> presencia online moderna, adaptable y optimizada.</li>
            </ul>-->

            <p class="enfasis">
              ¿Tienes una idea? Nosotros la convertimos en una solución digital de alto impacto.
            </p>

            <a href="contacto.html" class="btn btn-gradient"> Haz que tu negocio avance</a>
          </div>

          <div class="presentacion-imagen">
            <img src="assets/presentacion-js.png" alt="Joaisoft servidores y desarrollo" />
          </div>

        </div>
      </section>
    `;
  }
}
