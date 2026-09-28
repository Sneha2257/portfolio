/**
 * Kumari Sneha — Interactive Cursor & Executive 3D Engine
 * 1. Fluid Custom Cursor with Optical Scroll Zoom-Out Effect.
 * 2. Executive 3D Architectural Canvas rendering floating 16:9 glass presentation
 *    deck planes, orbital rings, and depth dust with mouse parallax and scroll momentum.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CUSTOM CURSOR WITH SCROLL ZOOM-OUT EFFECT
     ========================================================================== */
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursorWrap = document.createElement('div');
    cursorWrap.className = 'custom-cursor-wrap';
    cursorWrap.id = 'customCursor';
    cursorWrap.innerHTML = `
      <div class="cursor-dot"></div>
      <div class="cursor-ring"></div>
      <div class="cursor-zoom-echo"></div>
    `;
    document.body.appendChild(cursorWrap);

    const dot = cursorWrap.querySelector('.cursor-dot');
    const ring = cursorWrap.querySelector('.cursor-ring');
    const echo = cursorWrap.querySelector('.cursor-zoom-echo');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    let isVisible = false;
    let isHovering = false;
    let isDown = false;
    let isScrolling = false;
    let scrollTimeout = null;
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorWrap.classList.add('is-visible');
      }
    });

    window.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorWrap.classList.remove('is-visible');
    });

    window.addEventListener('mousedown', () => {
      isDown = true;
      cursorWrap.classList.add('is-down');
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
      cursorWrap.classList.remove('is-down');
    });

    // Detect Scroll & trigger ZOOM-OUT effect
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY);
      lastScrollY = currentY;
      scrollSpeed = Math.min(delta, 50);

      if (!isScrolling) {
        isScrolling = true;
        cursorWrap.classList.add('is-scrolling');
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        cursorWrap.classList.remove('is-scrolling');
        scrollSpeed = 0;
      }, 160);
    }, { passive: true });

    // Interactive hover detection
    const interactiveQuery = 'a, button, [data-open-case], .ref-filter-btn, .ref-grid-card, .ref-featured-card, .ref-brand-logo-item, .ref-tool-card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveQuery)) {
        isHovering = true;
        cursorWrap.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveQuery)) {
        isHovering = false;
        cursorWrap.classList.remove('is-hovering');
      }
    });

    // 60fps Cursor Render Loop
    function updateCursor() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      let scale = 1;
      if (isDown) {
        scale = 0.7;
      } else if (isScrolling) {
        // Zoom-out expansion
        const speedBoost = (scrollSpeed / 50) * 0.6;
        scale = 2.8 + speedBoost;
      } else if (isHovering) {
        scale = 1.65;
      }

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      echo.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);
  }

  /* ==========================================================================
     2. EXECUTIVE 3D ARCHITECTURAL CANVAS SCENE
     ========================================================================== */
  function init3DBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg3dCanvas';
    canvas.className = 'ref-bg-3d-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollYOffset = 0;
    let targetScrollYOffset = 0;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    });

    window.addEventListener('scroll', () => {
      targetScrollYOffset = window.scrollY * 0.12;
    }, { passive: true });

    // 3D Projection & Math
    const fov = 750;

    function project(p, cx, cy) {
      const scale = fov / (fov + p.z);
      return {
        x: cx + p.x * scale,
        y: cy + p.y * scale,
        scale: scale,
        z: p.z
      };
    }

    function rotateX(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos
      };
    }

    function rotateY(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos + p.z * sin,
        y: p.y,
        z: -p.x * sin + p.z * cos
      };
    }

    function rotateZ(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos - p.y * sin,
        y: p.x * sin + p.y * cos,
        z: p.z
      };
    }

    // Class: Floating 16:9 Presentation Glass Slide Plane
    class ExecutiveSlide3D {
      constructor(x, y, z, w, h) {
        this.baseX = x;
        this.baseY = y;
        this.baseZ = z;
        this.w = w;
        this.h = h;

        this.rotX = 0.18 + Math.random() * 0.15;
        this.rotY = -0.25 + Math.random() * 0.2;
        this.rotZ = 0.05;

        this.speedRotX = 0.0015;
        this.speedRotY = 0.002;
        this.speedRotZ = 0.0008;

        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed = 0.008 + Math.random() * 0.004;

        // 4 corners of 16:9 slide plane
        this.corners = [
          { x: -w / 2, y: -h / 2, z: 0 },
          { x: w / 2, y: -h / 2, z: 0 },
          { x: w / 2, y: h / 2, z: 0 },
          { x: -w / 2, y: h / 2, z: 0 }
        ];

        // Etched internal layout guide lines
        this.headerLine = [
          { x: -w / 2 + 16, y: -h / 2 + 18, z: 0 },
          { x: w / 2 - 16, y: -h / 2 + 18, z: 0 }
        ];

        this.subLine = [
          { x: -w / 2 + 16, y: -h / 2 + 28, z: 0 },
          { x: -w / 2 + 75, y: -h / 2 + 28, z: 0 }
        ];
      }

      update(time, parallaxX, parallaxY, scrollOffset) {
        this.rotX += this.speedRotX;
        this.rotY += this.speedRotY;
        this.rotZ += this.speedRotZ;

        this.floatOffset += this.floatSpeed;
        this.currentX = this.baseX + Math.sin(this.floatOffset * 0.7) * 16 + parallaxX * 40;
        this.currentY = this.baseY + Math.cos(this.floatOffset) * 20 - (scrollOffset % 1400) * 0.35;
        this.currentZ = this.baseZ + parallaxY * 30;
      }

      transformPt(pt, cx, cy) {
        let p = rotateX(pt, this.rotX);
        p = rotateY(p, this.rotY);
        p = rotateZ(p, this.rotZ);

        p.x += this.currentX;
        p.y += this.currentY;
        p.z += this.currentZ;

        return project(p, cx, cy);
      }

      render(cx, cy) {
        const c = this.corners.map((pt) => this.transformPt(pt, cx, cy));

        // Draw translucent frosted slide plane
        ctx.beginPath();
        ctx.moveTo(c[0].x, c[0].y);
        ctx.lineTo(c[1].x, c[1].y);
        ctx.lineTo(c[2].x, c[2].y);
        ctx.lineTo(c[3].x, c[3].y);
        ctx.closePath();

        // Elegant frosted glass fill
        ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
        ctx.fill();

        // Razor-sharp 1px border in platinum/slate
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.32)';
        ctx.lineWidth = 1.1;
        ctx.stroke();

        // Draw slide header etched guide line
        const h0 = this.transformPt(this.headerLine[0], cx, cy);
        const h1 = this.transformPt(this.headerLine[1], cx, cy);
        ctx.beginPath();
        ctx.moveTo(h0.x, h0.y);
        ctx.lineTo(h1.x, h1.y);
        ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Draw subline
        const s0 = this.transformPt(this.subLine[0], cx, cy);
        const s1 = this.transformPt(this.subLine[1], cx, cy);
        ctx.beginPath();
        ctx.moveTo(s0.x, s0.y);
        ctx.lineTo(s1.x, s1.y);
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Microscopic slide corner registration mark
        ctx.beginPath();
        ctx.arc(c[0].x, c[0].y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
        ctx.fill();
      }
    }

    // Class: Architectural Precision Orbital Ring
    class ExecutiveOrbit3D {
      constructor(x, y, z, radius, segments) {
        this.baseX = x;
        this.baseY = y;
        this.baseZ = z;
        this.radius = radius;
        this.segments = segments;

        this.rotX = 0.85;
        this.rotY = 0.35;
        this.speedRotX = 0.003;
        this.speedRotY = 0.004;

        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed = 0.009;
      }

      update(time, parallaxX, parallaxY, scrollOffset) {
        this.rotX += this.speedRotX;
        this.rotY += this.speedRotY;
        this.floatOffset += this.floatSpeed;

        this.currentX = this.baseX + Math.sin(this.floatOffset * 0.6) * 18 + parallaxX * 35;
        this.currentY = this.baseY + Math.cos(this.floatOffset) * 22 - (scrollOffset % 1400) * 0.3;
        this.currentZ = this.baseZ + parallaxY * 25;
      }

      render(cx, cy) {
        const pts = [];
        for (let i = 0; i < this.segments; i++) {
          const theta = (i / this.segments) * Math.PI * 2;
          let p = {
            x: Math.cos(theta) * this.radius,
            y: Math.sin(theta) * this.radius,
            z: 0
          };

          p = rotateX(p, this.rotX);
          p = rotateY(p, this.rotY);

          p.x += this.currentX;
          p.y += this.currentY;
          p.z += this.currentZ;

          pts.push(project(p, cx, cy));
        }

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();

        ctx.strokeStyle = 'rgba(148, 163, 184, 0.24)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Microscopic Silver Depth Dust (Subtle floating ambient particles)
    const dustParticles = [];
    for (let i = 0; i < 35; i++) {
      dustParticles.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1400,
        z: (Math.random() - 0.5) * 700,
        size: 1 + Math.random() * 1.5,
        alpha: 0.12 + Math.random() * 0.18,
        speed: 0.2 + Math.random() * 0.25
      });
    }

    // Executive 3D Objects Collection (Exclusively positioned in outer gutters)
    const execObjects = [
      // Left Gutter Deck Planes & Rings
      new ExecutiveSlide3D(-640, -160, 80, 170, 96),
      new ExecutiveOrbit3D(-620, 180, -40, 75, 28),
      new ExecutiveSlide3D(-630, 520, 60, 160, 90),

      // Right Gutter Deck Planes & Rings
      new ExecutiveSlide3D(640, -120, 70, 175, 98),
      new ExecutiveOrbit3D(630, 240, -30, 80, 28),
      new ExecutiveSlide3D(650, 560, 80, 165, 92)
    ];

    function animate(time) {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollYOffset += (targetScrollYOffset - scrollYOffset) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle silver depth dust
      for (let i = 0; i < dustParticles.length; i++) {
        const p = dustParticles[i];
        p.y -= p.speed;
        if (p.y < -700) p.y = 700;

        const proj = project(
          {
            x: p.x + mouseX * 20,
            y: p.y - (scrollYOffset % 1000) * 0.2,
            z: p.z + mouseY * 15
          },
          cx,
          cy
        );

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, Math.max(0.6, p.size * proj.scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha * proj.scale})`;
        ctx.fill();
      }

      // Draw executive 3D objects
      execObjects.forEach((obj) => {
        obj.update(time, mouseX, mouseY, scrollYOffset);
        obj.render(cx, cy);
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCursor();
      init3DBackground();
    });
  } else {
    initCursor();
    init3DBackground();
  }

})();
