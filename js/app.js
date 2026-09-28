/**
 * Main Application Orchestrator
 * Bootstraps portfolio modules, category filters, micro-interactions, and navigation.
 */

import { portfolioData } from "./data.js";
import { initScrollReveal } from "./scroll-reveal.js";
import { initFeaturedProject } from "./featured-project.js";
import { initHorizontalShowcase } from "./horizontal-showcase.js";
import { initBeforeAfterSlider } from "./before-after.js";
import { initCaseStudyViewer } from "./case-study-viewer.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Subsystems
  initScrollReveal();
  initFeaturedProject();
  initHorizontalShowcase();
  initBeforeAfterSlider();
  initCaseStudyViewer();

  // 2. Header Scroll Effect
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // 3. Category Filter Tabs for Work Section
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-grid .project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(16px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });

  // 4. Mobile Navigation Drawer
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });
  }

  // 5. Back to Top Button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Smooth anchor scrolling for header links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  console.log("Sneha Presentation Portfolio Initialized Successfully.");
});
