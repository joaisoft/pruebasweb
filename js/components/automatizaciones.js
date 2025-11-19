export function automatizaciones() {
  const section = document.getElementById("automatizaciones");
  if (!section) return;

  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  section.innerHTML = `
    <section class="hero-header d-flex flex-column justify-content-center align-items-center text-center position-relative">
      <!-- VIDEO DE FONDO -->
      <video
        ${reduceMotion ? "hidden" : ""}
        class="bg-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="assets/fondo_poster.jpg"
      >
        <source src="assets/autovideo.mp4" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>

      <!-- CAPA OSCURA -->
      <div class="video-overlay"></div>

      <!-- CONTENIDO -->
      <div class="container position-relative px-3">
        <h2 class="fw-bold animate__animated animate__fadeInDown hero-title">
          Automatizaciones que trabajan por ti
        </h2>
        <p class="animate__animated animate__fadeInUp hero-subtitle">
          <span><strong>Conecta y automatiza&nbsp;</strong></span>
          <span id="changing-word-automatiza" class="changing-word" aria-live="polite">
            tareas repetitivas
          </span>
        </p>
        <a href="#contacto" class="btn btn-gradient mt-3">
          Quiero saber qué puedo automatizar
        </a>
      </div>
    </section>
  `;

  // Palabras dinámicas centradas en automatizaciones
  const palabras = [
    "tareas repetitivas",
    "correos y formularios",
    "reservas y citas",
    "hojas de cálculo",
    "avisos y recordatorios",
    "flujos de trabajo"
  ];

  let index = 0;
  const changingWord = document.getElementById("changing-word-automatiza");

  if (!reduceMotion && changingWord) {
    setInterval(() => {
      index = (index + 1) % palabras.length;
      changingWord.classList.remove("fade-in");
      void changingWord.offsetWidth; // reinicia animación
      changingWord.textContent = palabras[index];
      changingWord.classList.add("fade-in");
    }, 2000);
  }
}
