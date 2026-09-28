/**
 * Scroll Reveal Engine
 * IntersectionObserver implementation for Apple-style smooth section entrance
 * Staggers titles, subtitles, and project cards with cubic-bezier easing.
 */

export function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".work-header, .work-featured-wrapper, .work-grid, .project-card, .showcase-section, .before-after-section"
  );

  // Fallback function to check visibility
  function checkInitialVisibility() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight + 100) {
        el.classList.add("is-visible");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Also mark direct child cards if container is grid
          if (entry.target.classList.contains("work-grid")) {
            entry.target.querySelectorAll(".project-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("is-visible"), i * 120);
            });
          }
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.05
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Run initial check
  checkInitialVisibility();
  window.addEventListener("scroll", checkInitialVisibility, { passive: true });
}
