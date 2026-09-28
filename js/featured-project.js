/**
 * Featured Project 3D Parallax & Slide Mockup Cycler
 * Delivers refined, non-distracting cursor parallax and slide preview crossfade.
 */

export function initFeaturedProject() {
  const card = document.querySelector(".featured-card");
  const stage = document.querySelector(".featured-stage");
  const mockup = document.querySelector(".featured-mockup");
  const stageBg = document.querySelector(".featured-stage-bg");
  const slides = document.querySelectorAll(".mockup-slide");
  const cycleBtns = document.querySelectorAll(".cycle-btn");

  if (!card || !mockup) return;

  let currentSlideIndex = 0;
  let autoCycleTimer = null;
  let isHovered = false;

  // 1. Smooth Cursor Parallax (Subtle, Apple-like, max ±6deg tilt)
  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates -1 to 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    // Tilt angle (subtle, non-distracting)
    const tiltX = -yPct * 5;
    const tiltY = xPct * 7;
    const bgMoveX = xPct * 12;
    const bgMoveY = yPct * 12;

    requestAnimationFrame(() => {
      mockup.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) scale(1.02)`;
      if (stageBg) {
        stageBg.style.transform = `translate(${bgMoveX}px, ${bgMoveY}px)`;
      }
    });
  });

  stage.addEventListener("mouseleave", () => {
    mockup.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    if (stageBg) {
      stageBg.style.transform = "translate(0, 0)";
    }
  });

  // 2. Slide Transition Function
  function setSlide(index) {
    currentSlideIndex = index;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    cycleBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });
  }

  // 3. Tab buttons click
  cycleBtns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setSlide(idx);
    });
  });

  // 4. Subtle automatic cycle on hover (switches slides every 3.5s when hovering card)
  card.addEventListener("mouseenter", () => {
    isHovered = true;
    clearInterval(autoCycleTimer);
    autoCycleTimer = setInterval(() => {
      if (isHovered && slides.length > 0) {
        const next = (currentSlideIndex + 1) % slides.length;
        setSlide(next);
      }
    }, 3800);
  });

  card.addEventListener("mouseleave", () => {
    isHovered = false;
    clearInterval(autoCycleTimer);
  });
}
