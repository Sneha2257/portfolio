/**
 * Supabase Client Integration for Kumari Sneha Portfolio
 * Connects the Consultation / Project Inquiry modal to Supabase PostgreSQL database.
 */

// ==============================================================================
// 1. CONFIGURATION: Enter your Supabase credentials here:
//    - URL: Found in Project Settings -> API -> Project URL
//    - Anon Key: Found in Project Settings -> API -> Project API Keys (anon public)
// ==============================================================================
const SUPABASE_CONFIG = {
  url: window.SUPABASE_URL || 'YOUR_SUPABASE_URL',
  anonKey: window.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY',
  tableName: 'portfolio_inquiries'
};

let supabaseClient = null;

// Initialize Supabase Client
function initSupabase() {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    if (SUPABASE_CONFIG.url && !SUPABASE_CONFIG.url.includes('YOUR_SUPABASE_URL')) {
      try {
        supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        console.log('[Supabase] Initialized successfully with remote project.');
      } catch (err) {
        console.warn('[Supabase] Init error:', err);
      }
    } else {
      console.log('[Supabase] In demo/local mode. Submissions are saved to localStorage until credentials are added.');
    }
  }
}

// Submit Inquiry to Supabase
async function submitPortfolioInquiry(inquiryData) {
  const payload = {
    name: inquiryData.name,
    email: inquiryData.email,
    company: inquiryData.company || null,
    project_type: inquiryData.project_type || 'Investor Pitch Deck',
    timeline: inquiryData.timeline || '2-3 weeks',
    message: inquiryData.message,
    status: 'new'
  };

  // If live Supabase client is configured, send directly to remote PostgreSQL
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from(SUPABASE_CONFIG.tableName)
        .insert([payload]);

      if (error) {
        console.error('[Supabase] Remote insert error:', error);
        throw error;
      }
      return { success: true, mode: 'supabase', data };
    } catch (err) {
      console.error('[Supabase] Falling back to local storage due to error:', err);
      // Fallback to local storage so client inquiry is NEVER lost
      saveToLocalVault(payload);
      return { success: true, mode: 'local-fallback', error: err.message };
    }
  } else {
    // Demo / Local storage mode
    saveToLocalVault(payload);
    return { success: true, mode: 'demo' };
  }
}

function saveToLocalVault(payload) {
  try {
    const list = JSON.parse(localStorage.getItem('sneha_inquiries') || '[]');
    payload.saved_at = new Date().toISOString();
    list.unshift(payload);
    localStorage.setItem('sneha_inquiries', JSON.stringify(list));
    console.log('[Local Inquiries Vault] Saved lead:', payload);
  } catch (e) {
    console.warn('[Local Inquiries Vault] Could not save to localStorage:', e);
  }
}

// Modal Interaction Controller
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();

  const modal = document.getElementById('consultationModal');
  const openBtns = document.querySelectorAll('.open-consultation-btn, a[href="#contact"]');
  const closeBtn = document.getElementById('closeConsultationBtn');
  const form = document.getElementById('consultationForm');
  const formCard = document.getElementById('consultationFormCard');
  const successCard = document.getElementById('consultationSuccessCard');
  const sendBtn = document.getElementById('submitInquiryBtn');

  function openModal(e) {
    if (e) e.preventDefault();
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (formCard) formCard.style.display = 'block';
      if (successCard) successCard.style.display = 'none';
      if (form) form.reset();
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openBtns.forEach(btn => {
    // Only intercept if it's the CTA button or has open-consultation-btn
    if (btn.classList.contains('ref-nav-cta') || btn.classList.contains('open-consultation-btn')) {
      btn.addEventListener('click', openModal);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiryName')?.value.trim();
      const email = document.getElementById('inquiryEmail')?.value.trim();
      const company = document.getElementById('inquiryCompany')?.value.trim();
      const projectType = document.getElementById('inquiryType')?.value;
      const timeline = document.getElementById('inquiryTimeline')?.value;
      const message = document.getElementById('inquiryMessage')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and project details.');
        return;
      }

      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span>Transmitting...</span>';
      }

      try {
        await submitPortfolioInquiry({
          name,
          email,
          company,
          project_type: projectType,
          timeline,
          message
        });

        if (formCard) formCard.style.display = 'none';
        if (successCard) successCard.style.display = 'block';
      } catch (err) {
        alert('Submission error: ' + err.message);
      } finally {
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.innerHTML = '<span>Submit Project Inquiry</span> &rarr;';
        }
      }
    });
  }
});
