/**
 * Horizontal Project Showcase
 * Handles smooth horizontal scrolling/dragging, position-based card scaling,
 * active project highlighting, and the animated progress indicator: `01 ━━━━━━━ 04`.
 */

export function initHorizontalShowcase() {
  const viewport = document.querySelector(".showcase-viewport");
  const track = document.querySelector(".showcase-track");
  const cards = document.querySelectorAll(".showcase-card");
  const prevBtn = document.querySelector(".showcase-prev-btn");
  const nextBtn = document.querySelector(".showcase-next-btn");
  const currentIndicator = document.querySelector(".progress-current");
  const totalIndicator = document.querySelector(".progress-total");
  const progressBarFill = document.querySelector(".progress-bar-fill");

  if (!viewport || !track || cards.length === 0) return;

  const totalCards = cards.length;
  if (totalIndicator) {
    totalIndicator.textContent = String(totalCards).padStart(2, "0");
  }

  let activeIndex = 0;
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // 1. Update Card Scaling and Progress Indicator based on current scroll position
  function updateShowcaseState() {
    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;

    let closestCardIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCardIndex = index;
      }

      // Smooth position-based scaling
      // Normalized distance from center (0 = exactly center, 1 = one card width away)
      const maxDist = cardRect.width * 1.5;
      const normDist = Math.min(distance / maxDist, 1);
      // Center card: scale ~1.04, furthest card: scale ~0.94
      const scale = 1.04 - (normDist * 0.1);
      const opacity = 1 - (normDist * 0.35);

      card.style.transform = `scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
    });

    activeIndex = closestCardIndex;

    cards.forEach((c, i) => {
      c.classList.toggle("is-active", i === activeIndex);
    });

    // Update Progress Indicator: `01 ━━━━━━━ 04`
    if (currentIndicator) {
      currentIndicator.textContent = String(activeIndex + 1).padStart(2, "0");
    }

    if (progressBarFill) {
      // Calculate exact progress percentage
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const scrollPct = maxScroll > 0 ? (viewport.scrollLeft / maxScroll) : (activeIndex / (totalCards - 1));
      const fillWidth = (100 / totalCards);
      const leftOffset = scrollPct * (100 - fillWidth);
      progressBarFill.style.width = `${fillWidth}%`;
      progressBarFill.style.left = `${Math.max(0, Math.min(leftOffset, 100 - fillWidth))}%`;
    }

    // Update Arrow button states
    if (prevBtn) prevBtn.disabled = activeIndex === 0;
    if (nextBtn) nextBtn.disabled = activeIndex === totalCards - 1;
  }

  // 2. Scroll into specific card index smoothly
  function scrollToCard(index) {
    if (index < 0 || index >= totalCards) return;
    const targetCard = cards[index];
    const cardRect = targetCard.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const targetScroll = viewport.scrollLeft + (cardRect.left - viewportRect.left) - (viewportRect.width / 2) + (cardRect.width / 2);

    viewport.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  }

  // 3. Arrow buttons
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      scrollToCard(activeIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      scrollToCard(activeIndex + 1);
    });
  }

  // 4. Click card to activate and center
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      // Only scroll if not already active
      if (index !== activeIndex) {
        e.preventDefault();
        scrollToCard(index);
      }
    });
  });

  // 5. Mouse Drag to Scroll
  viewport.addEventListener("mousedown", (e) => {
    isDown = true;
    viewport.classList.add("is-dragging");
    startX = e.pageX - viewport.offsetLeft;
    scrollLeft = viewport.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    if (isDown) {
      isDown = false;
      viewport.classList.remove("is-dragging");
    }
  });

  viewport.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 1.5;
    viewport.scrollLeft = scrollLeft - walk;
  });

  // 6. Scroll event listener
  viewport.addEventListener("scroll", () => {
    requestAnimationFrame(updateShowcaseState);
  }, { passive: true });

  // Initial calculation
  setTimeout(updateShowcaseState, 150);
  window.addEventListener("resize", updateShowcaseState);
}
