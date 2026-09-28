/**
 * Case Study Expanding Modal & Cinematic Slide Viewer
 * Shared-element style modal expansion, hero slide transitions,
 * zoom/pan spotlight movement, and progressive narrative reveal.
 */

import { portfolioData } from "./data.js";

export function initCaseStudyViewer() {
  const modal = document.querySelector(".case-study-modal");
  const closeBtn = document.querySelector(".modal-close-icon-btn");
  const backBtn = document.querySelector(".modal-back-btn");

  if (!modal) return;

  let currentProject = null;
  let activeSlideIndex = 0;

  // DOM Elements inside Modal
  const categoryTag = modal.querySelector(".modal-category-tag");
  const clientLabel = modal.querySelector(".modal-client-label");
  const titleEl = modal.querySelector(".modal-title");
  const taglineEl = modal.querySelector(".modal-tagline");
  const chromeTitle = modal.querySelector(".deck-current-title");
  const stepperLabel = modal.querySelector(".slide-stepper-label");
  const cinemaStage = modal.querySelector(".slide-cinema-stage");
  const thumbTray = modal.querySelector(".deck-thumb-tray");
  const prevSlideBtn = modal.querySelector(".deck-prev-btn");
  const nextSlideBtn = modal.querySelector(".deck-next-btn");

  // Narrative DOM elements
  const storyBackground = modal.querySelector(".story-background-text");
  const storyChallenge = modal.querySelector(".story-challenge-text");
  const storySolution = modal.querySelector(".story-solution-text");
  const storyOutcome = modal.querySelector(".story-outcome-text");
  const toolsList = modal.querySelector(".meta-tools-list");
  const metricsList = modal.querySelector(".meta-metrics-list");

  // Render Slide Content in the 16:9 Cinema Stage
  function renderSlides(project) {
    if (!project || !project.slides) return;
    cinemaStage.innerHTML = "";
    thumbTray.innerHTML = "";

    project.slides.forEach((slide, idx) => {
      // Create Cinema Slide element
      const slideDiv = document.createElement("div");
      slideDiv.className = `cinema-slide ${idx === 0 ? "active" : ""}`;
      slideDiv.dataset.slideIndex = idx;

      // Render custom content based on visual type
      let bodyHtml = "";
      if (slide.content.visualType === "kpi-grid") {
        const kpisHtml = slide.content.kpis ? slide.content.kpis.map(k => `
          <div class="slide-feature-card zoom-pan-target">
            <div class="slide-card-metric">${k.num}</div>
            <div class="slide-card-desc">${k.text}</div>
          </div>
        `).join("") : "";

        const pillarsHtml = slide.content.pillars ? slide.content.pillars.map(p => `
          <div class="slide-feature-card">
            <div class="slide-card-title">${p.title}</div>
            <div class="slide-card-desc">${p.desc}</div>
          </div>
        `).join("") : "";

        bodyHtml = `
          <div class="slide-grid-3col">
            ${kpisHtml || pillarsHtml}
          </div>
        `;
      } else if (slide.content.visualType === "process-chain") {
        bodyHtml = `
          <div class="slide-grid-4col">
            ${slide.content.steps.map(s => `
              <div class="slide-feature-card zoom-pan-target">
                <div class="phase-tag">${s.step} / ${s.tag}</div>
                <div class="slide-card-title">${s.name}</div>
                <div class="slide-card-metric" style="font-size: 1.4rem; color: var(--accent-gold);">${s.impact}</div>
              </div>
            `).join("")}
          </div>
        `;
      } else if (slide.content.visualType === "roadmap") {
        bodyHtml = `
          <div class="slide-roadmap-track">
            ${slide.content.phases.map(ph => `
              <div class="roadmap-phase-card zoom-pan-target">
                <div class="phase-tag">${ph.phase}</div>
                <div class="phase-title">${ph.focus}</div>
                <div class="phase-desc">${ph.deliverable}</div>
              </div>
            `).join("")}
          </div>
        `;
      } else if (slide.content.visualType === "mindspace-cards") {
        bodyHtml = `
          <div class="slide-grid-4col">
            ${slide.content.frameworks.map(f => `
              <div class="slide-feature-card zoom-pan-target">
                <div class="slide-card-metric" style="color: var(--accent-amber);">${f.code}</div>
                <div class="slide-card-title">${f.title}</div>
                <div class="slide-card-desc">${f.desc}</div>
              </div>
            `).join("")}
          </div>
        `;
      } else {
        bodyHtml = `
          <div class="slide-grid-3col">
            ${(slide.content.pillars || slide.content.features || slide.content.arabicFeatures || []).map(item => `
              <div class="slide-feature-card zoom-pan-target">
                <div class="slide-card-title">${item.title}</div>
                <div class="slide-card-desc">${item.desc || item.text}</div>
              </div>
            `).join("")}
          </div>
        `;
      }

      slideDiv.innerHTML = `
        <div class="slide-header-box">
          <div class="slide-supertitle">${slide.subtitle || "EXECUTIVE STRATEGY DECK"}</div>
          <h3 class="slide-main-title">${slide.slideTitle}</h3>
          <p class="slide-sub-takeaway">${slide.content.headline || ""}</p>
        </div>
        <div class="slide-body-box">
          ${bodyHtml}
        </div>
      `;

      cinemaStage.appendChild(slideDiv);

      // Create thumbnail button
      const thumbBtn = document.createElement("button");
      thumbBtn.className = `deck-thumb-btn ${idx === 0 ? "active" : ""}`;
      thumbBtn.textContent = `Slide ${idx + 1}`;
      thumbBtn.addEventListener("click", () => setSlide(idx));
      thumbTray.appendChild(thumbBtn);
    });

    setSlide(0);
  }

  // Switch Active Slide with Cinematic Transitions
  function setSlide(index) {
    if (!currentProject || !currentProject.slides) return;
    const slides = cinemaStage.querySelectorAll(".cinema-slide");
    const thumbBtns = thumbTray.querySelectorAll(".deck-thumb-btn");

    activeSlideIndex = index;

    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });

    thumbBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });

    if (stepperLabel) {
      stepperLabel.textContent = `${String(index + 1).padStart(2, "0")} / ${String(currentProject.slides.length).padStart(2, "0")}`;
    }

    if (chromeTitle && currentProject.slides[index]) {
      chromeTitle.textContent = currentProject.slides[index].slideTitle;
    }

    if (prevSlideBtn) prevSlideBtn.disabled = index === 0;
    if (nextSlideBtn) nextSlideBtn.disabled = index === currentProject.slides.length - 1;
  }

  // Next / Prev Deck Controls
  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", () => {
      if (activeSlideIndex > 0) setSlide(activeSlideIndex - 1);
    });
  }

  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", () => {
      if (currentProject && activeSlideIndex < currentProject.slides.length - 1) {
        setSlide(activeSlideIndex + 1);
      }
    });
  }

  // Open Case Study Modal
  window.openCaseStudy = function(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    currentProject = project;
    activeSlideIndex = 0;

    // Populate Headers
    if (categoryTag) categoryTag.textContent = project.categoryLabel;
    if (clientLabel) clientLabel.textContent = `Client: ${project.client}`;
    if (titleEl) titleEl.textContent = project.title;
    if (taglineEl) taglineEl.textContent = project.tagline;

    // Render presentation slides
    renderSlides(project);

    // Populate Case Study narrative
    if (storyBackground) storyBackground.textContent = project.caseStudy.background;
    if (storyChallenge) storyChallenge.textContent = project.caseStudy.challenge;
    if (storySolution) storySolution.textContent = project.caseStudy.solution;
    if (storyOutcome) storyOutcome.textContent = project.caseStudy.outcome;

    // Tools
    if (toolsList) {
      toolsList.innerHTML = project.tools.map(t => `<span class="meta-tool-pill">${t}</span>`).join("");
    }

    // Impact Metrics
    if (metricsList) {
      metricsList.innerHTML = project.impactMetrics.map(m => `
        <div class="meta-kpi-item">
          <div class="meta-kpi-val">${m.value}</div>
          <div class="meta-kpi-lbl">${m.label}</div>
        </div>
      `).join("");
    }

    // Trigger opening animation
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modal.scrollTo({ top: 0, behavior: "instant" });
  };

  // Close Case Study Modal
  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backBtn) backBtn.addEventListener("click", closeModal);

  // Keyboard navigation: Escape to close, Left/Right for slides
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      if (currentProject && activeSlideIndex < currentProject.slides.length - 1) {
        setSlide(activeSlideIndex + 1);
      }
    } else if (e.key === "ArrowLeft") {
      if (activeSlideIndex > 0) {
        setSlide(activeSlideIndex - 1);
      }
    }
  });

  // Attach click events to project cards and featured button
  document.querySelectorAll("[data-open-case]").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute("data-open-case");
      window.openCaseStudy(projId);
    });
  });
}
