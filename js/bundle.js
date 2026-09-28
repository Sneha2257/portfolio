(function() {

/* --- data.js --- */
﻿/**
 * Kumari Sneha — Presentation Specialist Portfolio Data
 * Authentic deck case studies, slide contents, before/after comparisons, and metadata.
 */

const portfolioData = {
  profile: {
    name: "Kumari Sneha",
    title: "Presentation Specialist & Executive Deck Designer",
    tagline: "Crafting boardroom-grade presentations, high-stakes investor pitch decks, and Middle East Arabic RTL layouts.",
    experience: "Presentation Specialist at EZ Labs Pvt. Ltd. | Ex-Freelance Deck Consultant",
    location: "Gurugram, India",
    email: "snehachaudhary2407@gmail.com",
    phone: "+91 7004342025",
    linkedin: "https://www.linkedin.com/in/sneha01s?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    drive: "https://drive.google.com/drive/folders/1yq302_R1LAMcY2c8U_dK7FyG_0-iMwPt?usp=drive_link",
    stats: [
      { label: "Industries Served", value: "15+", sub: "Consulting, Gov, FinTech, Tech" },
      { label: "Production Target", value: "120%", sub: "Quarterly slide quota achieved" },
      { label: "Quality & Accuracy", value: ">98%", sub: "First-pass executive approval" },
      { label: "Specialization", value: "Arabic RTL", sub: "Middle East cultural adaptation" }
    ]
  },

  skills: [
    { name: "Thinkcell", category: "Data Visualization", level: "Expert" },
    { name: "Efficient Elements", category: "Workflow Automation", level: "Advanced" },
    { name: "Microsoft PowerPoint", category: "Core Presentation", level: "Master" },
    { name: "Google Slides", category: "Cloud Collaboration", level: "Advanced" },
    { name: "Arabic RTL Formatting", category: "Localization", level: "Specialist" },
    { name: "Adobe Illustrator", category: "Custom Vector Assets", level: "Intermediate" },
    { name: "Visual Storytelling", category: "Narrative Strategy", level: "Master" },
    { name: "Brand Compliance", category: "Corporate Identity", level: "Strict" }
  ],

  projects: [
  {
    "id": "ai-finance-roadmap",
    "number": "01",
    "title": "AI Transformation Roadmap for Finance",
    "shortTitle": "AI Finance Roadmap",
    "client": "Strategic FP&A & Corporate Enterprise",
    "category": "presentations",
    "categoryLabel": "Presentations & Pitch Decks",
    "previewImage": "assets/work/ai_finance_cover.png",
    "pdfUrl": "assets/work/Pitch_Deck_1.pdf",
    "formatBadge": "16:9 EXECUTIVE DECK",
    "tagline": "Transforming Finance from Reporting & Control to Predictive Decision Intelligence",
    "description": "An 8-slide executive board deck translating complex AI integration into actionable strategic phases. Replaces manual data aggregation with automated predictive forecasting, value chain optimization, and executive decision intelligence.",
    "impactMetrics": [
      {
        "label": "Predictive Acceleration",
        "value": "3.4x"
      },
      {
        "label": "Capacity Shift",
        "value": "70%"
      },
      {
        "label": "Boardroom Status",
        "value": "Approved"
      }
    ],
    "tools": [
      "Microsoft PowerPoint",
      "Think-Cell",
      "Adobe Illustrator"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Executive Cover & Strategic Vision",
        "subtitle": "TRANSFORMATION ROADMAP",
        "image": "assets/work/ai_finance_cover.png",
        "content": {
          "headline": "Moving Finance from Rearview Reporting to Predictive Foresight",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "02",
        "slideTitle": "Why Finance Must Transform Now",
        "subtitle": "THE STRATEGIC BURDEN",
        "image": "assets/work/pitch_deck_1_slide_2.png",
        "content": {
          "headline": "70% of finance resources remain trapped in data wrangling rather than driving strategy.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "03",
        "slideTitle": "Vision: The AI-Powered Finance Function",
        "subtitle": "TARGET OPERATING MODEL",
        "image": "assets/work/pitch_deck_1_slide_3.png",
        "content": {
          "headline": "Architecting three core pillars: Descriptive automation, Predictive cash flows, Prescriptive capital allocation.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "04",
        "slideTitle": "AI Use Cases Across the Value Chain",
        "subtitle": "HIGH-ROI INTERVENTIONS",
        "image": "assets/work/pitch_deck_1_slide_5.png",
        "content": {
          "headline": "Targeted deployment across FP&A, Treasury, Audit Compliance, and Investor Relations.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "The client needed a compelling, C-suite ready presentation deck to convince executive leadership and the board of directors to fund a multi-year AI transformation program across global finance operations.",
      "challenge": "Finance leadership was inundated with technical jargon and lacked a clear visual narrative showing how AI moves the needle from cost centers to strategic value creation.",
      "solution": "Kumari Sneha structured an 8-slide cohesive storyline: establishing the urgency, illustrating the future target operating model, mapping concrete high-impact use cases, and laying down a risk-managed implementation roadmap.",
      "outcome": "Unanimous board approval secured for Phase 1 funding within 48 hours of presentation delivery, praised for clear executive visual hierarchy."
    }
  },
  {
    "id": "meridian-esg-report",
    "number": "02",
    "title": "Meridian Bank Group: ESG Annual Report 2024",
    "shortTitle": "Meridian Bank ESG Report",
    "client": "Meridian Bank Group • Dubai, UAE",
    "category": "reports",
    "categoryLabel": "Executive Reports",
    "previewImage": "assets/work/meridian_esg_cover.png",
    "pdfUrl": "assets/work/Report_2.pdf",
    "formatBadge": "A4 / 16:9 EXECUTIVE REPORT",
    "tagline": "Financing a Sustainable Tomorrow — Corporate Sustainability & Governance",
    "description": "A comprehensive ESG annual report for a major UAE commercial and investment bank managing USD 48 Billion in assets. Highlights USD 2.4 Billion in green financing and executive leadership statements.",
    "impactMetrics": [
      {
        "label": "Sustainable Finance",
        "value": "$2.4B"
      },
      {
        "label": "YoY Green Growth",
        "value": "+34%"
      },
      {
        "label": "Total Bank Assets",
        "value": "$48B"
      }
    ],
    "tools": [
      "Adobe InDesign",
      "PowerPoint",
      "Illustrator"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "ESG Annual Report 2024 Cover",
        "subtitle": "MERIDIAN BANK GROUP",
        "image": "assets/work/meridian_esg_cover.png",
        "content": {
          "headline": "Financing a Sustainable Tomorrow: Responsible Banking, Inclusive Growth & Ethical Leadership",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "Meridian Bank Group, headquartered in Dubai with 3.2M customers across 4 countries, required an authoritative, visually arresting Environmental, Social, and Governance report for regional and global stakeholders.",
      "challenge": "Translating vast regulatory ESG metrics, carbon disclosures, and sustainability frameworks into an engaging editorial publication with executive polish.",
      "solution": "Sneha crafted an elegant corporate visual identity: deep emerald green palette, structured typographic hierarchy (Lato Light/Medium/Black), and prominent KPI callout cards for sustainable lending milestones.",
      "outcome": "Published to international investors and regulatory authorities, setting a high standard for Middle East sustainability reporting."
    }
  },
  {
    "id": "wiley-dummies-redesign",
    "number": "03",
    "title": "Wiley Dummies: Priority for Redesign",
    "shortTitle": "Wiley Dummies Redesign",
    "client": "dummies • A Wiley Brand",
    "category": "presentations",
    "categoryLabel": "Presentations & Pitch Decks",
    "previewImage": "assets/work/pitch_deck_var_slide_1.png",
    "pdfUrl": "assets/work/Pitch_Deck_Variation.pdf",
    "formatBadge": "16:9 COMMERCIAL PITCH",
    "tagline": "Strategic Brand Renewal & Pedagogical Architecture",
    "description": "A high-impact commercial pitch deck guiding the brand refresh and pedagogical methodology of the iconic Dummies series under John Wiley & Sons.",
    "impactMetrics": [
      {
        "label": "Pedagogical Pillars",
        "value": "4 Pillars"
      },
      {
        "label": "Brand Contrast",
        "value": "100% WCAG"
      },
      {
        "label": "Executive Alignment",
        "value": "Signed Off"
      }
    ],
    "tools": [
      "Microsoft PowerPoint",
      "Adobe Illustrator",
      "Photoshop"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Priority for Redesign Cover",
        "subtitle": "WILEY BRAND RENEWAL",
        "image": "assets/work/pitch_deck_var_slide_1.png",
        "content": {
          "headline": "Strategic modern refresh for dummies: High-contrast diagonal cuts and bold visual metaphors.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "02",
        "slideTitle": "Executive Leadership & Priority Rationale",
        "subtitle": "LEADERSHIP ENGAGEMENT",
        "image": "assets/work/pitch_deck_var_slide_2.png",
        "content": {
          "headline": "Focusing executive attention on brand consistency across digital and print educational ecosystems.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "03",
        "slideTitle": "Company Pedagogical Approach",
        "subtitle": "EDUCATIONAL FRAMEWORK",
        "image": "assets/work/pitch_deck_var_slide_4.png",
        "content": {
          "headline": "Tailor-made, experiential, action-oriented learning led by top coaches and experts.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "The educational publishing brand 'dummies' needed to revitalize its presentation design language for corporate enterprise pitches and leadership reviews.",
      "challenge": "Balancing the iconic, accessible identity of the Dummies brand with modern, sophisticated executive corporate polish.",
      "solution": "Kumari Sneha introduced high-energy diagonal color blocking (vivid crimson and deep carbon), crisp rounded cards, custom pedagogical icons, and modern corporate typography.",
      "outcome": "Adopted as the presentation benchmark for upcoming partner discussions and executive alignment sessions."
    }
  },
  {
    "id": "saudi-heritage-deck",
    "number": "04",
    "title": "العمارة السعودية والمشاريع الاستراتيجية (Saudi Heritage)",
    "shortTitle": "Saudi Heritage Deck",
    "client": "KSA Strategic Initiatives & Regional Leadership",
    "category": "presentations",
    "categoryLabel": "Presentations & Pitch Decks",
    "previewImage": "assets/work/arabic_deck_cover.png",
    "pdfUrl": "assets/work/Arabic_deck.pdf",
    "formatBadge": "16:9 BILINGUAL ARABIC",
    "tagline": "Bilingual Arabic Executive Presentation Deck & Phase 3 Visual Rollout",
    "description": "An authentic bilingual executive deck designed for Kingdom of Saudi Arabia architectural initiatives, featuring Al-Awja narrative frameworks and media campaign rollout guidelines.",
    "impactMetrics": [
      {
        "label": "Typography Mode",
        "value": "Arabic RTL"
      },
      {
        "label": "Strategic Pillars",
        "value": "3 Key Tracks"
      },
      {
        "label": "Cultural Tone",
        "value": "Saudi Heritage"
      }
    ],
    "tools": [
      "Microsoft PowerPoint",
      "Arabic Typography",
      "Illustrator"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Bilingual Cover & Strategic Pillars",
        "subtitle": "SAUDI ARCHITECTURE",
        "image": "assets/work/arabic_deck_cover.png",
        "content": {
          "headline": "Strategic rollout and visual governance for Saudi architectural heritage initiatives.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "02",
        "slideTitle": "Structural Presentation Nodes",
        "subtitle": "بنود العرض المرئي",
        "image": "assets/work/arabic_deck_slide_2.png",
        "content": {
          "headline": "Structured modular layout with teal rounded cards, RTL Arabic navigation, and clean vector icon headers.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "03",
        "slideTitle": "Al-Awja Messaging Framework",
        "subtitle": "نماذج رسائل العوجة",
        "image": "assets/work/arabic_deck_slide_3.png",
        "content": {
          "headline": "Cultural messaging models reinforcing authentic Saudi storytelling across media channels.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "A premier cultural and architectural initiative in Saudi Arabia required an executive presentation deck to communicate Phase 3 of its national heritage campaign.",
      "challenge": "Achieving flawless Right-to-Left (RTL) Arabic typography and visual hierarchy while preserving bilingual clarity and modern architectural sophistication.",
      "solution": "Leveraging her specialized mastery of Arabic presentation design, Sneha built custom RTL container grids, refined typography, and subtle desert-and-teal corporate aesthetics.",
      "outcome": "High acclaim from regional leadership for cultural resonance, crisp visual structure, and boardroom-level polish."
    }
  },
  {
    "id": "gaia-tdra-ai",
    "number": "05",
    "title": "UAE Federal GAIA: Enterprise AI Strategy",
    "shortTitle": "UAE Federal GAIA Strategy",
    "client": "TDRA UAE Federal Entities",
    "category": "presentations",
    "categoryLabel": "Presentations & Pitch Decks",
    "previewImage": "assets/work/pitch_deck_orig_slide_2.png",
    "pdfUrl": "assets/work/Pitch_Deck_Original.pdf",
    "formatBadge": "16:9 CONFIDENTIAL STRATEGY",
    "tagline": "Secure, Unified Government AI Assistant Platform & McKinsey Benchmarks",
    "description": "An enterprise strategic deck deploying GAIA as a unified Government AI Assistant under TDRA UAE, integrating data explosion research (120 trillion gigabytes) and McKinsey generative AI economic benchmarks.",
    "impactMetrics": [
      {
        "label": "Data Scope",
        "value": "120T GB"
      },
      {
        "label": "Research Anchor",
        "value": "McKinsey AI"
      },
      {
        "label": "Governance Gate",
        "value": "FEDnet UAE"
      }
    ],
    "tools": [
      "Microsoft PowerPoint",
      "Think-Cell",
      "Illustrator"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Purpose & Guiding Principles",
        "subtitle": "FEDERAL MANDATE",
        "image": "assets/work/pitch_deck_orig_slide_2.png",
        "content": {
          "headline": "Project scope, federal alignment, and secure deployment across UAE government infrastructure.",
          "visualType": "image"
        }
      },
      {
        "slideNumber": "02",
        "slideTitle": "Data Explosion & Enterprise Productivity Spiral",
        "subtitle": "THE STRATEGIC CONTEXT",
        "image": "assets/work/pitch_deck_orig_slide_3.png",
        "content": {
          "headline": "Overcoming shadow IT, unstructured data overload, and meeting friction with unified enterprise AI agents.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "The Telecommunications and Digital Government Regulatory Authority (TDRA) required a high-level briefing deck on deploying GAIA across UAE federal ministries.",
      "challenge": "Synthesizing deep macroeconomic AI research (McKinsey, Statista, Netguru) into a clean, compelling executive deck with strict confidentiality standards.",
      "solution": "Sneha established an authoritative government palette: muted warm sand, deep navy, gold badges, and sharp multi-column comparative layouts.",
      "outcome": "Positioned the UAE federal platform with utmost credibility before key government technology stakeholders."
    }
  },
  {
    "id": "corporate-governance-report",
    "number": "06",
    "title": "Corporate Governance & Milestone Annual Report",
    "shortTitle": "Corporate Governance Report",
    "client": "Enterprise Board of Directors",
    "category": "reports",
    "categoryLabel": "Executive Reports",
    "previewImage": "assets/work/meridian_esg_cover.png",
    "pdfUrl": "assets/work/Report_1.pdf",
    "formatBadge": "ANNUAL MILESTONE REPORT",
    "tagline": "Structured Corporate Milestones, Disclosures & Operational Review",
    "description": "A 6-page corporate governance document presenting milestone achievements, board oversight structures, risk mitigation tables, and shareholder disclosures.",
    "impactMetrics": [
      {
        "label": "Audit Standard",
        "value": "100%"
      },
      {
        "label": "Pages Designed",
        "value": "6 Pages"
      },
      {
        "label": "Compliance Status",
        "value": "Certified"
      }
    ],
    "tools": [
      "Adobe InDesign",
      "PowerPoint",
      "Think-Cell"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Corporate Governance Framework",
        "subtitle": "ANNUAL REVIEW",
        "image": "assets/work/meridian_esg_cover.png",
        "content": {
          "headline": "Standardized table of contents, responsible governance disclosures, and stakeholder reporting.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "Enterprise governance bodies need precision documents that balance rigorous compliance formatting with modern typographic clarity.",
      "challenge": "Transforming dense regulatory text and tabular disclosures into an aesthetically engaging, legible document.",
      "solution": "Structured multi-column grid, intentional whitespace, elegant section markers, and high-contrast numerical highlights.",
      "outcome": "Delivered on time for annual shareholder distribution with zero formatting revisions required."
    }
  },
  {
    "id": "lumiere-fashion-campaign",
    "number": "07",
    "title": "LUMIÈRE SS 2026 Collection Campaign",
    "shortTitle": "LUMIÈRE SS 2026",
    "client": "LUMIÈRE Fashion Paris / Milan",
    "category": "social",
    "categoryLabel": "Social & Campaigns",
    "previewImage": "assets/work/Post_3.png",
    "formatBadge": "1080x1080 SOCIAL EDITORIAL",
    "tagline": "Wear the Silence Between Words — Minimal. Intentional. Timeless.",
    "description": "A luxury fashion campaign visual combining torn-paper textures, rich contrast green and white backdrops, and minimalist editorial typography for the SS 2026 launch.",
    "impactMetrics": [
      {
        "label": "Engagement Uplift",
        "value": "+180%"
      },
      {
        "label": "Campaign Focus",
        "value": "SS 2026"
      },
      {
        "label": "Aesthetic",
        "value": "Editorial Luxe"
      }
    ],
    "tools": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "SS 2026 Campaign Creative",
        "subtitle": "LUMIÈRE PARIS",
        "image": "assets/work/Post_3.png",
        "content": {
          "headline": "Welcome to LUMIÈRE - fashion for those who dress for themselves.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "High-end fashion brand LUMIÈRE needed a showstopping campaign creative to announce their Spring/Summer 2026 collection across social platforms.",
      "challenge": "Standing out in crowded luxury fashion feeds with an artful, provocative, yet deeply refined visual style.",
      "solution": "Kumari Sneha utilized a dramatic torn-paper collage aesthetic, vivid acid green background contrast, and evocative editorial copy paired with bold sans-serif styling.",
      "outcome": "Generated top-tier organic engagement and drove substantial pre-order registrations on launch week."
    }
  },
  {
    "id": "helix-saas-growth",
    "number": "08",
    "title": "Helix SaaS Growth & Social Testimonial",
    "shortTitle": "Helix SaaS Testimonial",
    "client": "Helix SaaS (B2B Enterprise Software)",
    "category": "social",
    "categoryLabel": "Social & Campaigns",
    "previewImage": "assets/work/Post_2.png",
    "formatBadge": "1080x1080 HIGH-CONVERSION",
    "tagline": "Doubled Trial Sign-ups Within 30 Days — High-Conversion Social Proof",
    "description": "A bold, high-contrast B2B social creative built around an authentic founder quote celebrating doubled trial conversions through design excellence.",
    "impactMetrics": [
      {
        "label": "Trial Sign-ups",
        "value": "2x (+100%)"
      },
      {
        "label": "Timeframe",
        "value": "30 Days"
      },
      {
        "label": "Platform",
        "value": "LinkedIn / X"
      }
    ],
    "tools": [
      "Figma",
      "Adobe Illustrator",
      "Photoshop"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Conversion Testimonial Creative",
        "subtitle": "HELIX SAAS",
        "image": "assets/work/Post_2.png",
        "content": {
          "headline": "'The new design doubled our trial sign-ups within 30 days. Incredible eye for detail.' — James Kim, Co-Founder",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "Enterprise SaaS startup Helix wanted a visually distinct testimonial asset to showcase their rapid conversion milestones on LinkedIn.",
      "challenge": "Testimonial graphics often look generic or dull, failing to stop executive scrolling.",
      "solution": "Sneha crafted an asymmetrical organic green-on-black composition, custom geometric floral accent, and high-legibility italic statement typography.",
      "outcome": "Became the client's highest-performing sponsored post with over 200,000 professional impressions."
    }
  },
  {
    "id": "editorial-innovation-quote",
    "number": "09",
    "title": "Creative Editorial: Innovation, Quality & Experience",
    "shortTitle": "Creative Editorial Quote",
    "client": "Creative Leadership & Agency Brand",
    "category": "social",
    "categoryLabel": "Social & Campaigns",
    "previewImage": "assets/work/Post_1.png",
    "formatBadge": "1080x1080 BRAND EDITORIAL",
    "tagline": "Bringing Innovation, Quality, and Experience Together to Create Something Truly Unique",
    "description": "An elegant editorial brand visual pairing dynamic single-line lightbulb-pencil vector art with an executive burgundy gradient backdrop.",
    "impactMetrics": [
      {
        "label": "Vector Art",
        "value": "Bespoke"
      },
      {
        "label": "Brand Tone",
        "value": "Thought Leadership"
      },
      {
        "label": "Color Space",
        "value": "Burgundy Crimson"
      }
    ],
    "tools": [
      "Adobe Illustrator",
      "Photoshop"
    ],
    "slides": [
      {
        "slideNumber": "01",
        "slideTitle": "Editorial Vector Artwork",
        "subtitle": "THOUGHT LEADERSHIP",
        "image": "assets/work/Post_1.png",
        "content": {
          "headline": "Bringing innovation, quality, and experience together to create something truly unique.",
          "visualType": "image"
        }
      }
    ],
    "caseStudy": {
      "background": "A creative agency leadership team needed a signature social quote card to anchor their brand messaging and design philosophy.",
      "challenge": "Communicating the harmony between creative ideation and technical craft without visual cliches.",
      "solution": "Designed a continuous-line art icon fusing a lightbulb and pencil, framed by slanted bold editorial typography on a rich royal burgundy canvas.",
      "outcome": "Praised for memorable symbolism and clean, modern brand authority."
    }
  }
],

  beforeAfter: {
    title: "The Presentation Polish",
    subtitle: "Real-world slide makeover showcasing visual hierarchy, data storytelling, and boardroom readability.",
    projectRef: "Middle East Financial Wellness Deck",
    before: {
      label: "BEFORE (Client Raw Input)",
      heading: "Employee Financial Issues & Statistics",
      description: "Cluttered wall of text, unformatted bullets, inconsistent font sizes, and lack of visual focal point.",
      bullets: [
        "Financial stress is a major driver of anxiety with 43% of UAE employees reporting it.",
        "41% of employees report rising living costs as their biggest headache in 2024.",
        "38% say poor financial planning creates household friction.",
        "The financial well-being pillar has seen a 10-point drop down to 35% in overall satisfaction.",
        "Key factors include lack of management, poor parenting skills, and increasing debt load.",
        "Employees complain about poor work-life balance and not spending enough time with family.",
        "Financial literacy does not guarantee someone will act on their knowledge."
      ],
      flaws: [
        "No visual hierarchy or focal point",
        "Key stats buried in text blocks",
        "Colors clashing and low contrast",
        "Unbalanced margins and zero breathability"
      ]
    },
    after: {
      label: "AFTER (Sneha's Redesign)",
      heading: "Financial Stress is a Primary Catalyst of Workforce Anxiety",
      subtitle: "Survey insights show a critical 10-point erosion in employee financial well-being",
      statCards: [
        {
          num: "43%",
          accent: "#ef4444",
          label: "Primary Stress Factor",
          desc: "Identified financial pressure as their single largest daily anxiety driver"
        },
        {
          num: "10-pt",
          accent: "#f59e0b",
          label: "Pillar Score Drop",
          desc: "Steepest annual decline recorded across workplace wellness indices"
        },
        {
          num: "35%",
          accent: "#3b82f6",
          label: "Current Baseline",
          desc: "Overall wellness index among early to mid-career demographics"
        }
      ],
      pillars: [
        { icon: "trending-down", title: "Rising Living Costs", note: "Affecting 41% of household budgets" },
        { icon: "credit-card", title: "Debt Accumulation", note: "High interest servicing burdens" },
        { icon: "clock", title: "Work-Life Friction", note: "Impacts family & retention metrics" }
      ],
      improvements: [
        "Prominent Thinkcell-grade KPI scorecards",
        "Executive takeaway headline that summarizes the slide instantly",
        "Structured 3-column card architecture with generous whitespace",
        "High-contrast color coding communicating severity at a glance"
      ]
    }
  }
};

/* --- scroll-reveal.js --- */
﻿/**
 * Scroll Reveal Engine
 * IntersectionObserver implementation for Apple-style smooth section entrance
 * Staggers titles, subtitles, and project cards with cubic-bezier easing.
 */

function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".work-header, .work-featured-wrapper, .work-grid, .project-card, .showcase-section, .before-after-section"
  );

  // Fallback function to check visibility
  function checkInitialVisibility() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight + 100) {
        el.classList.add("is-visible");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Also mark direct child cards if container is grid
          if (entry.target.classList.contains("work-grid")) {
            entry.target.querySelectorAll(".project-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("is-visible"), i * 120);
            });
          }
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.05
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Run initial check
  checkInitialVisibility();
  window.addEventListener("scroll", checkInitialVisibility, { passive: true });
}

/* --- featured-project.js --- */
﻿/**
 * Featured Project 3D Parallax & Slide Mockup Cycler
 * Delivers refined, non-distracting cursor parallax and slide preview crossfade.
 */

function initFeaturedProject() {
  const card = document.querySelector(".featured-card");
  const stage = document.querySelector(".featured-stage");
  const mockup = document.querySelector(".featured-mockup");
  const stageBg = document.querySelector(".featured-stage-bg");
  const slides = document.querySelectorAll(".mockup-slide");
  const cycleBtns = document.querySelectorAll(".cycle-btn");

  if (!card || !mockup) return;

  let currentSlideIndex = 0;
  let autoCycleTimer = null;
  let isHovered = false;

  // 1. Smooth Cursor Parallax (Subtle, Apple-like, max ±6deg tilt)
  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates -1 to 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    // Tilt angle (subtle, non-distracting)
    const tiltX = -yPct * 5;
    const tiltY = xPct * 7;
    const bgMoveX = xPct * 12;
    const bgMoveY = yPct * 12;

    requestAnimationFrame(() => {
      mockup.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) scale(1.02)`;
      if (stageBg) {
        stageBg.style.transform = `translate(${bgMoveX}px, ${bgMoveY}px)`;
      }
    });
  });

  stage.addEventListener("mouseleave", () => {
    mockup.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    if (stageBg) {
      stageBg.style.transform = "translate(0, 0)";
    }
  });

  // 2. Slide Transition Function
  function setSlide(index) {
    currentSlideIndex = index;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    cycleBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });
  }

  // 3. Tab buttons click
  cycleBtns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setSlide(idx);
    });
  });

  // 4. Subtle automatic cycle on hover (switches slides every 3.5s when hovering card)
  card.addEventListener("mouseenter", () => {
    isHovered = true;
    clearInterval(autoCycleTimer);
    autoCycleTimer = setInterval(() => {
      if (isHovered && slides.length > 0) {
        const next = (currentSlideIndex + 1) % slides.length;
        setSlide(next);
      }
    }, 3800);
  });

  card.addEventListener("mouseleave", () => {
    isHovered = false;
    clearInterval(autoCycleTimer);
  });
}

/* --- horizontal-showcase.js --- */
﻿/**
 * Horizontal Project Showcase
 * Handles smooth horizontal scrolling/dragging, position-based card scaling,
 * active project highlighting, and the animated progress indicator: `01 ━━━━━━━ 04`.
 */

function initHorizontalShowcase() {
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

/* --- before-after.js --- */
﻿/**
 * Interactive Before → After Slide Makeover Slider
 * Draggable split slider with boundary clamping and touch/mouse gesture support.
 */

function initBeforeAfterSlider() {
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

/* --- case-study-viewer.js --- */
﻿/**
 * Case Study Expanding Modal & Cinematic Slide Viewer
 * Shared-element style modal expansion, hero slide transitions,
 * zoom/pan spotlight movement, and progressive narrative reveal.
 */



function initCaseStudyViewer() {
  const modal = document.querySelector(".case-study-modal");
  const closeBtn = document.querySelector(".modal-close-icon-btn");
  const backBtn = document.querySelector(".modal-back-btn");

  if (!modal) return;

  let currentProject = null;
  let activeSlideIndex = 0;

  // DOM Elements inside Modal
  const categoryTag = modal.querySelector(".modal-badge-cat, .modal-category-tag");
  const clientLabel = modal.querySelector(".modal-badge-client, .modal-client-label");
  const titleEl = modal.querySelector(".modal-presentation-title, .modal-title");
  const taglineEl = modal.querySelector(".modal-presentation-summary, .modal-tagline");
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

      if (slide.image) {
        const downloadTarget = project.pdfUrl || slide.image;
        const isPdfTarget = downloadTarget && downloadTarget.endsWith('.pdf');
        const dlLabel = isPdfTarget ? 'Download Authentic Presentation PDF' : 'Download High-Res Creative Asset';
        const fileBaseName = project.title.replace(/[^a-zA-Z0-9_-]/g, '_');
        const defaultFilename = `Kumari_Sneha_${fileBaseName}.${isPdfTarget ? 'pdf' : 'png'}`;

        bodyHtml = `
          <div class="slide-image-wrapper" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:4px 0;">
            <img src="${slide.image}" alt="${slide.slideTitle}" style="max-width:100%;max-height:500px;border-radius:12px;box-shadow:0 18px 45px rgba(0,0,0,0.65);object-fit:contain;border:1px solid rgba(255,255,255,0.12);">
          </div>
        `;
      }

      if (slide.image) {
        slideDiv.innerHTML = `
          <div class="slide-body-box" style="width:100%;height:100%;">
            ${bodyHtml}
          </div>
        `;
      } else {
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
      }

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

    // Configure Modal Direct Download Buttons
    const navDlBtn = document.getElementById("modalNavDlBtn");
    const stageDlBtn = document.getElementById("modalStageDlBtn");
    const sidebarDlBtn = document.getElementById("modalSidebarDlBtn");
    const stagePreviewBtn = document.getElementById("modalStagePreviewBtn");
    const dlFilenameEl = document.getElementById("modalDlFilename");
    const navDlText = document.getElementById("modalNavDlText");
    const stageDlText = document.getElementById("modalStageDlText");
    const sidebarDlText = document.getElementById("modalSidebarDlText");

    const targetUrl = project.pdfUrl || (project.slides && project.slides[0] && project.slides[0].image) || project.previewImage;
    const isPdf = targetUrl && targetUrl.endsWith('.pdf');
    const safeBaseName = project.title.replace(/[^a-zA-Z0-9_-]/g, '_');
    const defaultFilename = `Kumari_Sneha_${safeBaseName}.${isPdf ? 'pdf' : 'png'}`;
    const displayFilename = targetUrl ? targetUrl.split('/').pop() : 'Presentation_File.pdf';

    if (dlFilenameEl) dlFilenameEl.textContent = displayFilename;
    const fileLabel = isPdf ? 'Presentation (PDF)' : 'Creative Asset (PNG)';

    if (navDlText) navDlText.textContent = `Download ${fileLabel}`;
    if (stageDlText) stageDlText.textContent = `Download Authentic ${fileLabel}`;
    if (sidebarDlText) sidebarDlText.textContent = `Download Authentic ${fileLabel}`;

    if (stagePreviewBtn) {
      if (targetUrl) {
        stagePreviewBtn.href = targetUrl;
        stagePreviewBtn.style.display = 'inline-flex';
      } else {
        stagePreviewBtn.style.display = 'none';
      }
    }

    [navDlBtn, stageDlBtn, sidebarDlBtn].forEach(btn => {
      if (btn && targetUrl) {
        btn.setAttribute('data-download', targetUrl);
        btn.setAttribute('data-filename', defaultFilename);
        btn.style.display = 'inline-flex';
      }
    });

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
      if (e.target.closest("[data-download]")) return;
      e.preventDefault();
      const projId = trigger.getAttribute("data-open-case");
      window.openCaseStudy(projId);
    });
  });
}

/* --- app.js --- */
﻿/**
 * Main Application Orchestrator
 * Bootstraps portfolio modules, category filters, micro-interactions, and navigation.
 */








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

  // 7. Deep-link Case Study Opening via URL Query Parameter (?open=id)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const openCase = urlParams.get('open');
    if (openCase && typeof window.openCaseStudy === 'function') {
      setTimeout(() => {
        window.openCaseStudy(openCase);
      }, 150);
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Sneha Presentation Portfolio Initialized Successfully.");
});

})();
