/**
 * Kumari Sneha — Interactive Animation Suite
 * 1. Liquid Number Counter (Count-up on viewport enter)
 * 2. Staggered Scroll-Reveal Engine (Apple/Awwwards style)
 * 3. 3D Card Physics Tilt with Dynamic Specular Glare
 * 4. Ambient Studio Bokeh Particle Canvas (Hero Depth)
 * 5. Magnetic Button Micro-Interactions
 */

(function () {
  'use strict';

  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. ANIMATED NUMBER COUNTER ENGINE
     ========================================================================== */
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateCounter(el) {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';

      const target = parseFloat(el.getAttribute('data-target') || '0');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = parseInt(el.getAttribute('data-duration') || '1800', 10);
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(target * easeOutExpo(progress));

        el.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     2. STAGGERED SCROLL REVEAL ENGINE
     ========================================================================== */
  function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    if (!revealItems.length) return;

    if (prefersReducedMotion) {
      revealItems.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          setTimeout(() => {
            el.classList.add('is-revealed');
          }, delay);
          obs.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    });

    revealItems.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     3. 3D CARD TILT & SPECULAR GLARE ENGINE
     ========================================================================== */
  function initCardTilt() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
      let bounds = null;
      let rafId = null;

      // Add specular glare overlay if missing
      let glare = card.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'tilt-glare';
        card.appendChild(glare);
      }

      function onMouseEnter() {
        bounds = card.getBoundingClientRect();
        card.classList.add('is-tilting');
      }

      function onMouseMove(e) {
        if (!bounds) bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const xPct = (mouseX / bounds.width - 0.5) * 2; // -1 to 1
        const yPct = (mouseY / bounds.height - 0.5) * 2; // -1 to 1

        const maxRotate = parseFloat(card.getAttribute('data-tilt-max') || '10');
        const rotateY = xPct * maxRotate;
        const rotateX = -yPct * maxRotate;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
          if (glare) {
            const glareX = ((xPct + 1) / 2) * 100;
            const glareY = ((yPct + 1) / 2) * 100;
            glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%)`;
            glare.style.opacity = '1';
          }
        });
      }

      function onMouseLeave() {
        if (rafId) cancelAnimationFrame(rafId);
        card.classList.remove('is-tilting');
        card.style.transform = '';
        if (glare) glare.style.opacity = '0';
        bounds = null;
      }

      card.addEventListener('mouseenter', onMouseEnter, { passive: true });
      card.addEventListener('mousemove', onMouseMove, { passive: true });
      card.addEventListener('mouseleave', onMouseLeave, { passive: true });
    });
  }

  /* ==========================================================================
     4. HERO AMBIENT STUDIO BOKEH PARTICLE CANVAS
     ========================================================================== */
  function initHeroBokeh() {
    const heroSection = document.getElementById('hero');
    if (!heroSection || prefersReducedMotion) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero-bokeh-canvas';
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;

    function resize() {
      width = canvas.width = heroSection.offsetWidth;
      height = canvas.height = heroSection.offsetHeight;
    }

    const colors = [
      'rgba(56, 189, 248, 0.45)',  // Electric Blue
      'rgba(99, 102, 241, 0.4)',   // Indigo
      'rgba(251, 191, 36, 0.35)',  // Warm Amber Desk Lamp
      'rgba(168, 85, 247, 0.35)'   // Purple Accent
    ];

    function createParticles() {
      particles = [];
      const count = Math.min(Math.floor(width / 50), 32);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 3.5 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.4,
          vy: -(Math.random() * 0.35 + 0.15),
          baseAlpha: Math.random() * 0.5 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.2;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.radius * 3;
        ctx.globalAlpha = Math.max(0.1, Math.min(alpha, 0.85));
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    }

    resize();
    createParticles();
    render();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    }, { passive: true });
  }

  /* ==========================================================================
     5. MAGNETIC BUTTON MICRO-INTERACTIONS
     ========================================================================== */
  function initMagneticButtons() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const magneticBtns = document.querySelectorAll('.ref-btn-primary, .ref-nav-cta, .open-consultation-btn');

    magneticBtns.forEach(btn => {
      let rect = null;

      btn.addEventListener('mouseenter', () => {
        rect = btn.getBoundingClientRect();
      });

      btn.addEventListener('mousemove', (e) => {
        if (!rect) rect = btn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distanceX = e.clientX - btnCenterX;
        const distanceY = e.clientY - btnCenterY;

        // Subtle pull max 6px
        const pullX = (distanceX / (rect.width / 2)) * 5;
        const pullY = (distanceY / (rect.height / 2)) * 4;

        btn.style.transform = `translate3d(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
        rect = null;
      });
    });
  }

  /* ==========================================================================
     6. TOOLS 1-BY-1 STAGGER ENTRANCE (Triggered on Scroll Down)
     ========================================================================== */
  function initToolsStagger() {
    const toolsGrid = document.querySelector('.tools-stagger-grid');
    if (!toolsGrid) return;

    const cards = toolsGrid.querySelectorAll('.tool-item-stagger');
    if (!cards.length) return;

    if (prefersReducedMotion) {
      cards.forEach(c => c.classList.add('is-in-view'));
      return;
    }

    let isRevealed = false;
    let timeouts = [];

    function revealCards() {
      if (isRevealed) return;
      isRevealed = true;
      timeouts.forEach(t => clearTimeout(t));
      timeouts = [];

      cards.forEach((card, index) => {
        // Distinct 1-by-1 rhythm: 0ms, 200ms, 400ms, 600ms, 800ms
        const delay = index * 200;
        const timer = setTimeout(() => {
          card.classList.add('is-in-view');
        }, delay);
        timeouts.push(timer);
      });
    }

    function resetCards() {
      if (!isRevealed) return;
      isRevealed = false;
      timeouts.forEach(t => clearTimeout(t));
      timeouts = [];
      cards.forEach(card => {
        card.classList.remove('is-in-view');
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealCards();
        } else if (entry.boundingClientRect.top > 0) {
          // If the user scrolls back UP above the tools section, reset
          // so next time they "go down on the website", it comes 1 by 1 again!
          resetCards();
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    });

    observer.observe(toolsGrid);
  }

  /* ==========================================================================
     INITIALIZATION DISPATCHER
     ========================================================================== */
  function init() {
    initCounters();
    initScrollReveal();
    initCardTilt();
    initHeroBokeh();
    initMagneticButtons();
    initToolsStagger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
