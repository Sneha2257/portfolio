/**
 * Interactive Before → After Slide Makeover Slider
 * Draggable split slider with boundary clamping and touch/mouse gesture support.
 */

export function initBeforeAfterSlider() {
  const container = document.querySelector(".ba-container");
  const beforeLayer = document.querySelector(".ba-before-layer");
  const divider = document.querySelector(".ba-divider");

  if (!container || !beforeLayer || !divider) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    // Clamp between 5% and 95% so both handles and labels stay comfortably reachable
    percentage = Math.max(5, Math.min(percentage, 95));

    beforeLayer.style.width = `${percentage}%`;
    divider.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch Events (Mobile & Tablet)
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Keyboard Accessibility (Left/Right arrows when focused)
  container.setAttribute("tabindex", "0");
  container.addEventListener("keydown", (e) => {
    const currentWidth = parseFloat(beforeLayer.style.width) || 50;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const next = Math.max(5, currentWidth - 5);
      beforeLayer.style.width = `${next}%`;
      divider.style.left = `${next}%`;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = Math.min(95, currentWidth + 5);
      beforeLayer.style.width = `${next}%`;
      divider.style.left = `${next}%`;
    }
  });

  // Set initial position to 50%
  beforeLayer.style.width = "50%";
  divider.style.left = "50%";
}
