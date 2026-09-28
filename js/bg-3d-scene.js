/**
 * Interactive 3D Background Engine
 * Renders floating, rotating 3D geometric glass objects, presentation slide planes,
 * and perspective depth particles with real-time mouse parallax on a clean luminous canvas.
 */

(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg3dCanvas';
  canvas.className = 'bg-3d-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / width - 0.5) * 2;
    targetMouseY = (e.clientY / height - 0.5) * 2;
  });

  // 3D Math Utilities
  const fov = 650;

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

  // 3D Object Class: Floating Presentation Slide Card / Prism
  class FloatingSlide3D {
    constructor(x, y, z, w, h, d, colorType) {
      this.baseX = x;
      this.baseY = y;
      this.baseZ = z;
      this.w = w;
      this.h = h;
      this.d = d;
      this.colorType = colorType; // 'emerald', 'sapphire', 'pearl'

      this.rotX = Math.random() * Math.PI * 2;
      this.rotY = Math.random() * Math.PI * 2;
      this.rotZ = Math.random() * Math.PI * 2;

      this.speedRotX = (Math.random() - 0.5) * 0.005;
      this.speedRotY = (Math.random() - 0.5) * 0.007;
      this.speedRotZ = (Math.random() - 0.5) * 0.004;

      this.floatOffset = Math.random() * Math.PI * 2;
      this.floatSpeed = 0.012 + Math.random() * 0.008;

      // 8 Vertices of the 3D box
      this.vertices = [
        { x: -w / 2, y: -h / 2, z: -d / 2 },
        { x: w / 2, y: -h / 2, z: -d / 2 },
        { x: w / 2, y: h / 2, z: -d / 2 },
        { x: -w / 2, y: h / 2, z: -d / 2 },
        { x: -w / 2, y: -h / 2, z: d / 2 },
        { x: w / 2, y: -h / 2, z: d / 2 },
        { x: w / 2, y: h / 2, z: d / 2 },
        { x: -w / 2, y: h / 2, z: d / 2 }
      ];

      // 6 Faces defined by vertex indices
      this.faces = [
        [0, 1, 2, 3], // Front
        [5, 4, 7, 6], // Back
        [4, 0, 3, 7], // Left
        [1, 5, 6, 2], // Right
        [4, 5, 1, 0], // Top
        [3, 2, 6, 7]  // Bottom
      ];
    }

    update(time, parallaxX, parallaxY) {
      this.rotX += this.speedRotX;
      this.rotY += this.speedRotY;
      this.rotZ += this.speedRotZ;

      this.floatOffset += this.floatSpeed;
      this.currentY = this.baseY + Math.sin(this.floatOffset) * 28;
      this.currentX = this.baseX + Math.cos(this.floatOffset * 0.7) * 16 + parallaxX * 45;
      this.currentZ = this.baseZ + Math.sin(this.floatOffset * 0.5) * 20 + parallaxY * 35;
    }

    render(cx, cy) {
      // Rotate and project all vertices
      const transformed = this.vertices.map((v) => {
        let p = rotateX(v, this.rotX);
        p = rotateY(p, this.rotY);
        p = rotateZ(p, this.rotZ);

        p.x += this.currentX;
        p.y += this.currentY;
        p.z += this.currentZ;

        return project(p, cx, cy);
      });

      // Calculate face average depths for painter's algorithm
      const facesWithDepth = this.faces.map((faceIndices) => {
        let avgZ = 0;
        faceIndices.forEach((idx) => (avgZ += transformed[idx].z));
        avgZ /= faceIndices.length;

        const p0 = transformed[faceIndices[0]];
        const p1 = transformed[faceIndices[1]];
        const p2 = transformed[faceIndices[2]];

        const v01x = p1.x - p0.x;
        const v01y = p1.y - p0.y;
        const v02x = p2.x - p0.x;
        const v02y = p2.y - p0.y;
        const cross = v01x * v02y - v01y * v02x;

        return {
          indices: faceIndices,
          avgZ: avgZ,
          isFront: cross > 0
        };
      });

      facesWithDepth.sort((a, b) => b.avgZ - a.avgZ);

      facesWithDepth.forEach((f) => {
        const pts = f.indices.map((idx) => transformed[idx]);

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();

        let fillAlpha = f.isFront ? 0.07 : 0.03;
        let strokeAlpha = f.isFront ? 0.25 : 0.1;

        if (this.colorType === 'emerald') {
          ctx.fillStyle = 'rgba(5, 150, 105, ' + fillAlpha + ')';
          ctx.strokeStyle = 'rgba(5, 150, 105, ' + strokeAlpha + ')';
        } else if (this.colorType === 'sapphire') {
          ctx.fillStyle = 'rgba(37, 99, 235, ' + fillAlpha + ')';
          ctx.strokeStyle = 'rgba(37, 99, 235, ' + strokeAlpha + ')';
        } else {
          ctx.fillStyle = 'rgba(100, 116, 139, ' + fillAlpha + ')';
          ctx.strokeStyle = 'rgba(100, 116, 139, ' + strokeAlpha + ')';
        }

        ctx.lineWidth = 1.2;
        ctx.fill();
        ctx.stroke();

        if (f.isFront) {
          ctx.beginPath();
          ctx.arc(pts[0].x, pts[0].y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
        }
      });
    }
  }

  // Floating 3D Geometric Rings / Toruses
  class FloatingRing3D {
    constructor(x, y, z, radius, segments, colorType) {
      this.baseX = x;
      this.baseY = y;
      this.baseZ = z;
      this.radius = radius;
      this.segments = segments;
      this.colorType = colorType;

      this.rotX = Math.random() * Math.PI;
      this.rotY = Math.random() * Math.PI;
      this.speedRotX = 0.006;
      this.speedRotY = 0.005;

      this.floatOffset = Math.random() * Math.PI * 2;
      this.floatSpeed = 0.01 + Math.random() * 0.006;
    }

    update(time, parallaxX, parallaxY) {
      this.rotX += this.speedRotX;
      this.rotY += this.speedRotY;
      this.floatOffset += this.floatSpeed;

      this.currentX = this.baseX + Math.sin(this.floatOffset * 0.6) * 20 + parallaxX * 35;
      this.currentY = this.baseY + Math.cos(this.floatOffset) * 24;
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

      if (this.colorType === 'emerald') {
        ctx.strokeStyle = 'rgba(5, 150, 105, 0.3)';
        ctx.fillStyle = 'rgba(5, 150, 105, 0.03)';
      } else {
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.28)';
        ctx.fillStyle = 'rgba(79, 70, 229, 0.03)';
      }

      ctx.lineWidth = 1.3;
      ctx.fill();
      ctx.stroke();
    }
  }

  // Floating 3D Depth Particles
  const particles = [];
  for (let i = 0; i < 45; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 1400,
      z: (Math.random() - 0.5) * 800,
      size: 1.5 + Math.random() * 2.5,
      alpha: 0.12 + Math.random() * 0.22,
      speed: 0.2 + Math.random() * 0.4
    });
  }

  // Collection of 3D Objects
  const objects3D = [
    new FloatingSlide3D(-420, -220, 60, 150, 95, 16, 'emerald'),
    new FloatingRing3D(-480, 100, -80, 75, 24, 'sapphire'),
    new FloatingSlide3D(440, -180, 100, 170, 105, 18, 'sapphire'),
    new FloatingRing3D(400, 180, -50, 70, 20, 'emerald'),
    new FloatingSlide3D(-440, 380, 80, 130, 80, 14, 'pearl'),
    new FloatingSlide3D(460, 420, 40, 150, 95, 18, 'emerald'),
    new FloatingSlide3D(0, -320, 180, 120, 75, 14, 'emerald'),
    new FloatingRing3D(-120, 360, 120, 55, 18, 'emerald')
  ];

  function animate(time) {
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.speed;
      if (p.y < -700) p.y = 700;

      const proj = project(
        {
          x: p.x + mouseX * 25,
          y: p.y,
          z: p.z + mouseY * 20
        },
        cx,
        cy
      );

      ctx.beginPath();
      ctx.arc(proj.x, proj.y, Math.max(0.5, p.size * proj.scale), 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(5, 150, 105, ' + (p.alpha * proj.scale) + ')';
      ctx.fill();
    }

    objects3D.forEach((obj) => {
      obj.update(time, mouseX, mouseY);
      obj.render(cx, cy);
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
