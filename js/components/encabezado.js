export function header() {
  const header = document.getElementById("header");
  if (!header) return;

  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  header.innerHTML = `
    <header class="hero-header d-flex flex-column justify-content-center align-items-center text-center position-relative">
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
        <source src="assets/fondo.webm" type="video/webm">
        Tu navegador no soporta video HTML5.
      </video>

      <!-- CAPA OSCURA -->
      <div class="video-overlay"></div>

      <!-- CONTENIDO -->
      <div class="container position-relative px-3">
        <h1 class="fw-bold animate__animated animate__fadeInDown hero-title">Joaisoft</h1>
        <p class="animate__animated animate__fadeInUp hero-subtitle">
          <span><strong>Somos&nbsp;</strong></span>
          <span id="changing-word" class="changing-word" aria-live="polite">innovación</span>
        </p>
      </div>
    </header>
  `;

  // Palabras dinámicas
  const palabras = ["desarrollo", "innovación", "confianza", "tecnología", "impacto", "diseño"];
  let index = 0;
  const changingWord = document.getElementById("changing-word");

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
