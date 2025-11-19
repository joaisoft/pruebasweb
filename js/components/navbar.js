export function navbar() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <style>
        /* Icono hamburguesa visible en móvil */
        .navbar-dark .navbar-toggler {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .navbar-dark .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30'
            xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,0,1)' 
            stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' 
            d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        .navbar-dark .navbar-toggler:hover,
        .navbar-dark .navbar-toggler:focus {
          border-color: rgba(255, 255, 0, 0.8);
        }
      </style>

      <nav class="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
            <a class="navbar-brand" href="index.html">
              <img src="assets/logo.png" alt="Joaisoft Logo" height="36" class="me-2" />
            </a>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item has-sub" data-menu="desarrollo">
                <a class="nav-link has-sub" href="#" data-menu="desarrollo">Desarrollo</a>
              </li>
              <li class="nav-item has-sub" data-menu="marketing">
                <a class="nav-link has-sub" href="#" data-menu="marketing">Marketing</a>
              </li>
              </li>
              <li class="nav-item has-sub" data-menu="automatizaciones">
                <a class="nav-link has-sub" href="#" data-menu="automatizaciones">Automatizaciones</a>
              </li>
              <li class="nav-item has-sub" data-menu="branding">
                <a class="nav-link has-sub" href="#" data-menu="branding">Branding</a>
              </li>
              </li>
              <li class="nav-item has-sub" data-menu="serviciosit">
                <a class="nav-link has-sub" href="#" data-menu="serviciosit">Servicios IT</a>
              </li>

            </ul>

          <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
            <a class="navbar-brand" href="http://127.0.0.1:5500/index.htmll">
              <img src="assets/copistat2.png" alt="Copistat" height="36" class="me-2" />
            </a>
          </a>

          <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
            <a class="navbar-brand" href="index.html">
              <img src="assets/bilatag4.png" alt="bilatag" height="36" class="me-2" />
            </a>
          </a>

            <div class="d-none d-lg-block">
              <a href="contacto.html" class="btn btn-gradient"> HÁBLANOS</a>
            </div>

            <div class="mega-menu-container d-none" id="megaMenu">
              <div class="container mega-menu-grid py-4">
                <div id="submenu-desarrollo" class="submenu d-none">
                  <h6 class="submenu-title">Desarrollo Web</h6>
                  <a href="desarrolloWeb.html" class="submenu-item">Diseño y desarrollo de páginas</a>
                  <a href="porfolioweb.html" class="submenu-item">Desarrollo de porfolios web</a>
                  <a href="aplicaciones.html" class="submenu-item">Aplicaciones a medida</a>
                  <a href="hosting.html" class="submenu-item">Dominio y Hosting</a>
                  <a href="mantenimiento.html" class="submenu-item">Mantenimiento</a>
                </div>
                <div id="submenu-marketing" class="submenu d-none">
                  <h6 class="submenu-title">Marketing</h6>
                  <a href="#" class="submenu-item">SEO</a>
                  <a href="#" class="submenu-item">Redes Sociales</a>
                  <a href="#" class="submenu-item">Campañas Ads</a>
                </div>
                <div id="submenu-automatizaciones" class="submenu d-none">
                  <h6 class="submenu-title">Automatizaciones</h6>
                  <a href="automatizaciones.html" class="submenu-item">Automatiza tus tareas </a>
                  <a href="#" class="submenu-item">Automatiza tus Redes Sociales</a>
                  <a href="#" class="submenu-item">Campañas Ads</a>
                </div>
                <div id="submenu-branding" class="submenu d-none">
                  <h6 class="submenu-title">Branding</h6>
                  <a href="#" class="submenu-item">Diseño de logo</a>
                  <a href="#" class="submenu-item">Publicidad web</a>
                </div>
                  <div id="submenu-serviciosit" class="submenu d-none">
                  <h6 class="submenu-title">Servicios IT</h6>
                  <a href="#" class="submenu-item">Mantenimiento y reparaciones de equipos</a>
                  <a href="#" class="submenu-item">Servicios a PYMES</a>
                  <a href="#" class="submenu-item">HelpDesk</a>
                  <a href="#" class="submenu-item">Recuperaciones de datos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Interactividad del mega menú
    const items = document.querySelectorAll(".has-sub");
    const megaMenu = document.getElementById("megaMenu");
    let timeoutId;

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        const menu = item.getAttribute("data-menu");
        document
          .querySelectorAll(".submenu")
          .forEach((el) => el.classList.add("d-none"));
        document.getElementById(`submenu-${menu}`).classList.remove("d-none");
        megaMenu.classList.remove("d-none");
      });

      item.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          megaMenu.classList.add("d-none");
        }, 10000);
      });
    });

    megaMenu.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
    });

    megaMenu.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        megaMenu.classList.add("d-none");
      }, 300);
    });
  }
}


