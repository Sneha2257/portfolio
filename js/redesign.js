/**
 * Kumari Sneha — Redesign Interactive Orchestrator & Direct Download Engine
 * Connects reference redesign cards, filter tabs, modal triggers, toast notifications,
 * and high-reliability direct presentation downloads.
 */

// 1. Sleek Floating Toast Notification Engine
function showPortfolioToast(msg, isSuccess = true) {
  let toast = document.getElementById('portfolioToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolioToast';
    toast.className = 'portfolio-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="toast-inner ${isSuccess ? 'toast-success' : 'toast-info'}">
      <div class="toast-icon">${isSuccess ? '✓' : '⬇'}</div>
      <div class="toast-message">${msg}</div>
    </div>
  `;
  toast.classList.add('visible');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 4200);
}

// 2. Universal Rock-Solid Direct File Download Engine
window.downloadPortfolioFile = async function(url, filename, triggerBtn = null) {
  if (!url) return;

  const resolvedFilename = filename || url.split('/').pop().replace(/\s+/g, '_');
  let originalHtml = '';

  if (triggerBtn) {
    originalHtml = triggerBtn.innerHTML;
    triggerBtn.disabled = true;
    triggerBtn.classList.add('is-downloading');
    triggerBtn.innerHTML = `
      <span class="dl-mini-spinner"></span>
      <span>Saving...</span>
    `;
  }

  showPortfolioToast(`Preparing download for <strong>${resolvedFilename}</strong>...`, false);

  try {
    // Strategy A: Fetch as Blob and trigger object URL download
    // Bypasses browser PDF viewer inline hijacking and works across modern Chromium
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = resolvedFilename;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
      a.remove();
    }, 1200);

    showPortfolioToast(`✓ <strong>${resolvedFilename}</strong> downloaded successfully!`, true);

    if (triggerBtn) {
      triggerBtn.classList.remove('is-downloading');
      triggerBtn.classList.add('is-success');
      triggerBtn.innerHTML = `<span>✓ Saved</span>`;
      setTimeout(() => {
        triggerBtn.classList.remove('is-success');
        triggerBtn.disabled = false;
        triggerBtn.innerHTML = originalHtml;
      }, 2000);
    }
  } catch (err) {
    console.warn('Blob fetch download failed, using direct attachment link fallback:', err);
    // Strategy B: Fallback to direct download endpoint with ?download=1 header (on HTTP/HTTPS)
    const isFileProto = window.location.protocol === 'file:';
    let fallbackUrl = url;
    if (!isFileProto) {
      const sep = url.includes('?') ? '&' : '?';
      fallbackUrl = url.includes('download=1') ? url : `${url}${sep}download=1`;
    }

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = fallbackUrl;
    a.download = resolvedFilename;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 1200);

    showPortfolioToast(`✓ Download started for <strong>${resolvedFilename}</strong>!`, true);

    if (triggerBtn) {
      triggerBtn.classList.remove('is-downloading');
      triggerBtn.classList.add('is-success');
      triggerBtn.innerHTML = `<span>✓ Saved</span>`;
      setTimeout(() => {
        triggerBtn.classList.remove('is-success');
        triggerBtn.disabled = false;
        triggerBtn.innerHTML = originalHtml;
      }, 2000);
    }
  }
};

// 3. Global Delegated Click Listener for All Download Elements
document.addEventListener('click', (e) => {
  const dlTarget = e.target.closest('[data-download]');
  if (dlTarget) {
    e.preventDefault();
    e.stopPropagation();
    const url = dlTarget.getAttribute('data-download');
    const filename = dlTarget.getAttribute('data-filename');
    window.downloadPortfolioFile(url, filename, dlTarget);
  }
});

// 4. Modal and Navigation Interaction Orchestrator
document.addEventListener('DOMContentLoaded', () => {

  // Modal Trigger for Featured & Grid Cards (safely ignoring download button clicks)
  document.querySelectorAll('[data-open-case]').forEach(card => {
    card.addEventListener('click', (e) => {
      // If the user clicked on a download button inside the card, do NOT open the modal!
      if (e.target.closest('[data-download]')) {
        return;
      }
      e.preventDefault();
      const caseId = card.getAttribute('data-open-case');
      if (typeof window.openCaseStudy === 'function') {
        window.openCaseStudy(caseId);
      }
    });
  });

  // Category Filter Tabs for Reference Work Grid
  const filterBtns = document.querySelectorAll('.ref-filter-btn');
  const gridCards = document.querySelectorAll('.ref-grid-card');

  if (filterBtns.length > 0 && gridCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        gridCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.ref-nav-link');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { passive: true });

});
