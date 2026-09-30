/**
 * KUMARI SNEHA — Clean Portfolio Interactive Controller
 * Subtle, purposeful interactions: Slide switcher, Before/After toggle,
 * project filters, direct downloads, and form submissions.
 */

(function () {
  'use strict';

  // 1. Interactive Slide Switcher for Deck Cards
  function initSlideSwitchers() {
    const deckCards = document.querySelectorAll('.deck-card');
    deckCards.forEach(card => {
      const img = card.querySelector('.deck-slide-img');
      const pips = card.querySelectorAll('.deck-thumb-pip');
      if (!img || !pips.length) return;

      pips.forEach(pip => {
        pip.addEventListener('click', (e) => {
          e.preventDefault();
          const targetSrc = pip.getAttribute('data-slide-src');
          if (!targetSrc) return;

          // Update active state
          pips.forEach(p => p.classList.remove('active'));
          pip.classList.add('active');

          // Smooth crossfade
          img.style.opacity = '0.4';
          img.style.transform = 'scale(0.98)';
          setTimeout(() => {
            img.src = targetSrc;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
          }, 150);
        });
      });
    });
  }

  // 2. Before & After Transformation Toggle
  function initBeforeAfterToggle() {
    const toggleBtns = document.querySelectorAll('.ba-toggle-btn');
    const colBefore = document.querySelector('.ba-col-before');
    const colAfter = document.querySelector('.ba-col-after');

    if (!toggleBtns.length || !colBefore || !colAfter) return;

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const mode = btn.getAttribute('data-mode'); // 'split', 'before', 'after'

        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (mode === 'before') {
          colBefore.style.display = 'flex';
          colAfter.style.display = 'none';
        } else if (mode === 'after') {
          colBefore.style.display = 'none';
          colAfter.style.display = 'flex';
        } else {
          // split
          colBefore.style.display = 'flex';
          colAfter.style.display = 'flex';
        }
      });
    });
  }

  // 3. Category Filter
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const deckCards = document.querySelectorAll('.deck-card');

    if (!filterBtns.length || !deckCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        deckCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 4. Subtle, Purposeful Scroll Reveals
  function initSubtleReveals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealElements = document.querySelectorAll('.site-section, .deck-card, .philosophy-card, .tool-box');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // 5. Direct PDF Downloads & Toast System
  function initDownloads() {
    document.addEventListener('click', (e) => {
      const dlBtn = e.target.closest('[data-download]');
      if (!dlBtn) return;

      e.preventDefault();
      const url = dlBtn.getAttribute('data-download');
      const filename = dlBtn.getAttribute('data-filename') || url.split('/').pop();

      if (typeof window.downloadPortfolioFile === 'function') {
        window.downloadPortfolioFile(url, filename, dlBtn);
      } else {
        // Direct anchor fallback
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => a.remove(), 1000);
      }
    });
  }

  // 6. Project Consultation Form Submission (Supabase Connected)
  function initConsultationForm() {
    const form = document.getElementById('consultationFormInline') || document.getElementById('consultationForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Transmitting...';
      }

      const payload = {
        name: form.querySelector('#inquiryName')?.value || '',
        email: form.querySelector('#inquiryEmail')?.value || '',
        company: form.querySelector('#inquiryCompany')?.value || '',
        project_type: form.querySelector('#inquiryType')?.value || 'Presentation Deck',
        timeline: form.querySelector('#inquiryTimeline')?.value || 'Standard (2-3 weeks)',
        message: form.querySelector('#inquiryMessage')?.value || '',
        submitted_at: new Date().toISOString()
      };

      try {
        if (window.supabaseClient && typeof window.supabaseClient.from === 'function') {
          await window.supabaseClient.from('consultation_leads').insert([payload]);
        }
      } catch (err) {
        console.warn('Supabase submission fallback:', err);
      }

      // Success UX
      form.innerHTML = `
        <div style="text-align: center; padding: 32px 16px;">
          <div style="font-size: 2.2rem; color: #10b981; margin-bottom: 12px;">✓</div>
          <h4 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">Inquiry Transmitted</h4>
          <p style="color: #94a3b8; font-size: 0.92rem; line-height: 1.6; max-width: 420px; margin: 0 auto;">
            Thank you! Your requirements have been logged in Sneha's project queue. Expect a strategic response within 24 hours.
          </p>
        </div>
      `;
    });
  }

  // Dispatch on DOM Ready
  function init() {
    initSlideSwitchers();
    initBeforeAfterToggle();
    initProjectFilters();
    initSubtleReveals();
    initDownloads();
    initConsultationForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
