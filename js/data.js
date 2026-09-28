/**
 * Kumari Sneha — Presentation Specialist Portfolio Data
 * Authentic deck case studies, slide contents, before/after comparisons, and metadata.
 */

export const portfolioData = {
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
      id: "ai-finance",
      number: "01",
      title: "AI Transformation Roadmap for Finance",
      shortTitle: "AI Finance Transformation",
      client: "Enterprise Consulting / FinTech",
      category: "fintech",
      categoryLabel: "FinTech & Strategy",
      featured: true,
      tagline: "Transforming Finance from Reporting & Control to Predictive Decision Intelligence",
      description: "An executive board deck translating complex AI integration into actionable strategic phases. Replaces traditional 70% data gathering burden with automated predictive intelligence, clear financial value chains, and strict governance models.",
      impactMetrics: [
        { label: "Strategic Insight Shift", value: "70%" },
        { label: "Approval Status", value: "Board-Level" },
        { label: "Turnaround Time", value: "3 Days" }
      ],
      tools: ["Thinkcell", "PowerPoint", "Efficient Elements", "Adobe Illustrator"],
      cardGradient: "linear-gradient(135deg, rgba(20, 25, 45, 0.95), rgba(10, 15, 30, 0.98))",
      accentColor: "#3b82f6",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      slides: [
        {
          slideNumber: "01",
          slideTitle: "The AI-Powered Finance Function: Strategic Vision",
          subtitle: "Executive Summary & Core Value Proposition",
          theme: "navy-tech",
          content: {
            headline: "Moving from Rearview Reporting to Predictive Foresight",
            takeaway: "Traditional finance dedicates 70% of headcount to data wrangling. Our AI roadmap frees capacity for strategic decision support.",
            visualType: "kpi-grid",
            kpis: [
              { num: "70%", text: "Current resource capacity trapped in manual data aggregation" },
              { num: "3.4x", text: "Speed acceleration in scenario forecasting & stress testing" },
              { num: "100%", text: "Audit compliance with automated traceability logging" }
            ],
            pillars: [
              { title: "Descriptive", desc: "Automated real-time ledger reconciliation and close cycle compression." },
              { title: "Predictive", desc: "Dynamic cash flow forecasting and algorithmic working capital optimization." },
              { title: "Prescriptive", desc: "Generative scenario simulations guiding capital allocation and M&A." }
            ]
          }
        },
        {
          slideNumber: "02",
          slideTitle: "Where AI Delivers Value Across the Finance Value Chain",
          subtitle: "End-to-End Enterprise Architecture Mapping",
          theme: "navy-tech",
          content: {
            headline: "Prioritizing High-ROI Interventions from Procure-to-Pay to FP&A",
            takeaway: "Deep-dive mapping across 4 primary finance pillars with targeted AI accelerators.",
            visualType: "process-chain",
            steps: [
              { step: "01", name: "FP&A & Budgeting", tag: "Predictive Driver Modeling", impact: "+45% Accuracy" },
              { step: "02", name: "Treasury & Cash", tag: "Liquidity Optimization", impact: "Zero Idle Capital" },
              { step: "03", name: "Risk & Compliance", tag: "Continuous Fraud Detection", impact: "Real-time Alerts" },
              { step: "04", name: "Investor Relations", tag: "Auto-Compiled Earnings Prep", impact: "3x Faster Turnaround" }
            ]
          }
        },
        {
          slideNumber: "03",
          slideTitle: "Three-Phase Execution Roadmap & Governance Gates",
          subtitle: "Value Realization vs. Organizational Readiness",
          theme: "navy-tech",
          content: {
            headline: "A Structured Phased Rollout Balancing Rapid Wins With Enterprise Governance",
            takeaway: "Clear milestone gates ensure each phase self-funds subsequent transformation waves.",
            visualType: "roadmap",
            phases: [
              { phase: "Wave 1 (Mo 1-3)", focus: "Foundations & Clean Data Lake", deliverable: "Single Source of Truth, API pipelines" },
              { phase: "Wave 2 (Mo 4-8)", focus: "Predictive Forecasting Pilots", deliverable: "Working Capital & FP&A Algorithmic Models" },
              { phase: "Wave 3 (Mo 9-14)", focus: "Autonomous Finance & GenAI Copilot", deliverable: "Enterprise-wide Self-Service Executive Portals" }
            ]
          }
        }
      ],
      caseStudy: {
        background: "A tier-1 global consulting partner required a master executive presentation deck for Fortune 500 CFOs. The subject was the urgent transition to predictive finance, requiring mathematical rigor, clear visual hierarchy, and instant boardroom comprehension.",
        challenge: "The initial input consisted of 40+ pages of dense, unformatted bullet points, fragmented Excel tables, and complex technical diagrams that overwhelmed senior executives.",
        solution: "Sneha overhauled the entire narrative architecture: establishing a 3-act storyline, converting raw figures into crisp Thinkcell charts, color-coding value drivers, and designing a cinematic dark-mode template with clear typographic discipline.",
        outcome: "Delivered in 72 hours, the deck was presented directly to the client's executive leadership team with zero revision cycles and subsequently adopted as the benchmark corporate template for enterprise finance transformation."
      }
    },
    {
      id: "middle-east-wellbeing",
      number: "02",
      title: "Behavioral Science & National Well-Being Strategy",
      shortTitle: "Middle East Well-Being Strategy",
      client: "Middle East Public Sector & ADGM",
      category: "arabic",
      categoryLabel: "Middle East & Arabic RTL",
      featured: false,
      tagline: "Empowering Consumers, Education Sector Reforms & Arabic RTL Cultural Formatting",
      description: "A dual-language research presentation for Middle East government entities. Combines behavioral economics (MINDSPACE, Nudge framework) with bespoke Arabic RTL layouts and multi-wave survey data visualization.",
      impactMetrics: [
        { label: "Cultural Adaptation", value: "Arabic RTL" },
        { label: "Target Sectors", value: "Gov & Edu" },
        { label: "FGDs Synthesized", value: "15+ Cohorts" }
      ],
      tools: ["Arabic RTL Layouts", "PowerPoint", "Illustrator", "Cultural Theming"],
      cardGradient: "linear-gradient(135deg, rgba(30, 24, 18, 0.95), rgba(15, 12, 10, 0.98))",
      accentColor: "#f59e0b",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      slides: [
        {
          slideNumber: "01",
          slideTitle: "National Financial Well-Being & Stress Drivers",
          subtitle: "Synthesizing Pulse Surveys Across UAE Workforces",
          theme: "amber-warm",
          content: {
            headline: "Addressing the Root Causes of Consumer Anxiety in the Modern Economy",
            takeaway: "Surveys revealed that 43% of employees identify financial stress as their primary driver of anxiety, triggering avoidance behaviors.",
            visualType: "kpi-grid",
            kpis: [
              { num: "43%", text: "Employees experiencing persistent financial anxiety" },
              { num: "10-Pt", text: "Drop in overall financial wellness pillar score" },
              { num: "35%", text: "Index low baseline among younger family demographics" }
            ],
            pillars: [
              { title: "Financial Literacy Gap", desc: "Knowledge alone fails to change habits without behavioral nudging." },
              { title: "Debt & Work-Life", desc: "Extended working hours reduce quality family time and compound stress." },
              { title: "Avoidance Patterns", desc: "Consumers delay bill review and long-term retirement planning." }
            ]
          }
        },
        {
          slideNumber: "02",
          slideTitle: "The MINDSPACE & Nudge Behavioral Architecture",
          subtitle: "Applied Behavioral Economics for Public Policy",
          theme: "amber-warm",
          content: {
            headline: "Shifting Default Behaviors Without Restricting Consumer Freedom",
            takeaway: "Leveraging 9 core behavioral drivers to engineer subtle, highly effective public health and literacy interventions.",
            visualType: "mindspace-cards",
            frameworks: [
              { code: "M", title: "Messenger", desc: "Information delivered by trusted community figures has 3x higher retention." },
              { code: "I", title: "Incentives", desc: "Immediate small micro-rewards outperform distant large promises." },
              { code: "N", title: "Norms", desc: "Highlighting that '8 out of 10 peers save monthly' triggers conformity." },
              { code: "D", title: "Defaults", desc: "Opt-out automated savings accounts double voluntary participation rates." }
            ]
          }
        },
        {
          slideNumber: "03",
          slideTitle: "Dual-Direction Master Layout: English LTR to Arabic RTL",
          subtitle: "Preserving Visual Balance Across Flipped Typographic Axes",
          theme: "amber-warm",
          content: {
            headline: "Seamless Mirroring of Visual Hierarchy for Regional Stakeholders",
            takeaway: "RTL design demands more than text translation; it requires careful realignment of focal weight, charts, and iconography.",
            visualType: "rtl-comparison",
            arabicFeatures: [
              { title: "Typographic Weight Balance", text: "Adjusting baseline leading and tracking for Arabic Amiri/Noto Kufi." },
              { title: "Chronological Flipping", text: "Timelines, progress arrows, and chart axes mirrored right-to-left." },
              { title: "Cultural Sensitivity", text: "Color harmony and formal governmental protocol iconography." }
            ]
          }
        }
      ],
      caseStudy: {
        background: "A Middle East strategy consultancy partnering with government authorities (ADGM, Ministry of Health and Prevention) needed bilingual presentations in English and Arabic to present behavioral science survey findings.",
        challenge: "Arabic is written right-to-left (RTL), which breaks standard LTR slide layouts. Simply flipping text results in backward flow, awkward icon placement, and visual discord.",
        solution: "Sneha applied specialized non-native Arabic presentation design principles: re-architecting master templates with mirrored grid systems, custom RTL infographics, and culturally refined color palettes.",
        outcome: "High-praise adoption by government clients in Abu Dhabi and Dubai, demonstrating adaptability, 100% brand compliance, and cultural sensitivity."
      }
    },
    {
      id: "cloud-coe",
      number: "03",
      title: "Cloud Infrastructure Center of Excellence (CoE)",
      shortTitle: "Infrastructure CoE",
      client: "Enterprise IT & Cloud Engineering",
      category: "enterprise",
      categoryLabel: "Enterprise & Tech",
      featured: false,
      tagline: "Driving Scalable, Secure & High-Performance Infrastructure for Global Enterprises",
      description: "A comprehensive capabilities and transformation deck positioning a strategic Infrastructure CoE. Outlines Zero Trust architecture, automated CI/CD platform pipelines, and multi-year migration roadmaps.",
      impactMetrics: [
        { label: "Deployment Velocity", value: "+50%" },
        { label: "Security Framework", value: "Zero Trust" },
        { label: "Governance Silos", value: "-80%" }
      ],
      tools: ["Thinkcell", "Google Slides", "PowerPoint", "Vector Icons"],
      cardGradient: "linear-gradient(135deg, rgba(16, 28, 26, 0.95), rgba(8, 16, 14, 0.98))",
      accentColor: "#10b981",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      slides: [
        {
          slideNumber: "01",
          slideTitle: "The Modern Cloud Dilemma vs. CoE Mandate",
          subtitle: "From Fragmented Silos to Unified Engineering Excellence",
          theme: "emerald-tech",
          content: {
            headline: "Solving Cloud Sprawl, Reactive Outages, and Uncontrolled Spending",
            takeaway: "The Infrastructure Center of Excellence centralizes governance while enabling self-service automation for developer teams.",
            visualType: "contrast-grid",
            beforeItems: [
              "Fragmented multiple vendor silos",
              "Manual operations and slow ticketing",
              "Uncontrolled runaway cloud spend"
            ],
            afterItems: [
              "Unified cloud architecture & accountability",
              "Automated GitOps & Infrastructure as Code",
              "FinOps guardrails with continuous optimization"
            ]
          }
        },
        {
          slideNumber: "02",
          slideTitle: "Platform & DevOps Core Capabilities Matrix",
          subtitle: "Enterprise Engineering Service Offerings",
          theme: "emerald-tech",
          content: {
            headline: "Four Pillars of Scalable Platform Engineering",
            takeaway: "Modular capabilities built for high-throughput enterprise workloads.",
            visualType: "pillar-cards",
            pillars: [
              { title: "Infrastructure as Code", desc: "Terraform & Pulumi modules with pre-approved compliance guardrails." },
              { title: "CI/CD & GitOps", desc: "Standardized automated release pipelines reducing release cycle times by 65%." },
              { title: "Zero Trust Security", desc: "Identity-aware access, mutual TLS, and automated SOC2 / ISO compliance." },
              { title: "Observability & SRE", desc: "Unified OpenTelemetry tracing, SLO error budgets, and auto-remediation." }
            ]
          }
        },
        {
          slideNumber: "03",
          slideTitle: "CoE Evolution Roadmap: 3-Phase Transformation",
          subtitle: "Scaling from Centralized Foundation to Federated Self-Service",
          theme: "emerald-tech",
          content: {
            headline: "A Structured Progression Toward Autonomous Infrastructure",
            takeaway: "Ensuring business continuity and clear KPI targets at every milestone.",
            visualType: "roadmap",
            phases: [
              { phase: "Phase 1: Standardize", focus: "Architecture Audit & Landings", deliverable: "Unified IAM, Baseline Security & Tagging" },
              { phase: "Phase 2: Automate", focus: "Self-Service Platform & Pipelines", deliverable: "Internal Developer Portal & Golden Paths" },
              { phase: "Phase 3: Innovate", focus: "AI-Driven Observability & FinOps", deliverable: "Autonomous scaling, Predictive cost containment" }
            ]
          }
        }
      ],
      caseStudy: {
        background: "An enterprise IT services provider needed to pitch a multi-million-dollar Infrastructure Center of Excellence (CoE) to CTOs and VP of Engineering buyers.",
        challenge: "Technical architects provided 60 dense slides full of complex terminal commands, unreadable network topologies, and wall-to-wall bullet points.",
        solution: "Sneha restructured the deck into an executive pitch: framing the business value first, turning architectural spaghetti into clean, modular isometric-style diagrams, and creating a cohesive 3-stage delivery lifecycle.",
        outcome: "The sales team reported a 40% reduction in meeting sales cycles and successfully won contracts across 3 Fortune 500 accounts."
      }
    },
    {
      id: "threadspan-pitch",
      number: "04",
      title: "ThreadSpan: Agentic Core — Seed Pitch Deck",
      shortTitle: "Agentic AI Pitch Deck",
      client: "AI Venture & Startup Founder",
      category: "pitch",
      categoryLabel: "Investor Pitch Decks",
      featured: false,
      tagline: "Venture Capital Pitch Deck for Autonomous Enterprise Operations",
      description: "A fast-paced, high-conviction investor pitch deck designed for Silicon Valley and Bangalore venture capitalists. Balances deep tech architecture with sharp unit economics, market size TAM/SAM, and funding milestones.",
      impactMetrics: [
        { label: "Target Round", value: "$4.5M" },
        { label: "Market TAM", value: "$38B" },
        { label: "Investor Traction", value: "Over-subscribed" }
      ],
      tools: ["Google Slides", "Illustrator", "Financial Projections", "Visual Storytelling"],
      cardGradient: "linear-gradient(135deg, rgba(28, 20, 35, 0.95), rgba(14, 10, 20, 0.98))",
      accentColor: "#8b5cf6",
      accentGlow: "rgba(139, 92, 246, 0.25)",
      slides: [
        {
          slideNumber: "01",
          slideTitle: "The Problem: The Enterprise Context Bottleneck",
          subtitle: "Why Traditional Automation Breaks Down at Scale",
          theme: "purple-vision",
          content: {
            headline: "Enterprise Data is Fragmented Across 200+ Disconnected SaaS Applications",
            takeaway: "Human operators spend 40% of their workday bridging silos manually because existing RPA lacks adaptive context.",
            visualType: "kpi-grid",
            kpis: [
              { num: "$120B", text: "Annual enterprise cost lost to workflow friction & manual sync" },
              { num: "68%", text: "Of enterprise automation initiatives fail to scale beyond pilot" },
              { num: "14 Days", text: "Average time to resolve cross-department operational tickets" }
            ],
            pillars: [
              { title: "Static Workflows", desc: "Brittle scripts break every time an API or interface changes." },
              { title: "Zero Cross-App Memory", desc: "No unified state shared between CRM, ERP, and engineering tools." },
              { title: "Human Burnout", desc: "Engineers acting as human routers for routine system alerts." }
            ]
          }
        },
        {
          slideNumber: "02",
          slideTitle: "The Solution: ThreadSpan Agentic Core Architecture",
          subtitle: "Self-Healing Autonomous Workflows With Enterprise Memory",
          theme: "purple-vision",
          content: {
            headline: "An Autonomous Multi-Agent Mesh Operating Seamlessly Within Enterprise Guardrails",
            takeaway: "ThreadSpan agents dynamically observe, plan, and execute cross-platform tasks with zero code alterations.",
            visualType: "mesh-diagram",
            features: [
              { title: "Universal Semantic Bus", desc: "Ingests real-time events from Slack, Jira, Salesforce, and Datadog." },
              { title: "Autonomous Planner", desc: "Dynamic goal decomposition with built-in reflection and self-correction." },
              { title: "Cryptographic Audit Trail", desc: "Immutable enterprise provenance on every autonomous action." }
            ]
          }
        },
        {
          slideNumber: "03",
          slideTitle: "Market Sizing, Unit Economics & Use of Funds",
          subtitle: "$4.5M Seed Round to Accelerate Core R&D and Enterprise Pilots",
          theme: "purple-vision",
          content: {
            headline: "Capturing a High-Growth $38B Enterprise Workflow Market",
            takeaway: "Strong unit economics driven by usage-based pricing with 85% gross margins.",
            visualType: "market-stats",
            stats: [
              { label: "TAM", val: "$38.4B", sub: "Enterprise workflow automation" },
              { label: "SAM", val: "$9.2B", sub: "Cloud-native IT & DevOps ops" },
              { label: "SOM", val: "$450M", sub: "Initial US & APAC focus segment" }
            ]
          }
        }
      ],
      caseStudy: {
        background: "An AI startup founder preparing for their Seed round required a 12-slide pitch deck capable of capturing attention within the critical 3-minute investor scanning window.",
        challenge: "The technical concept was highly abstract ('agentic execution loops'), and the founder's initial slides suffered from dense paragraphs, ambiguous charts, and weak visual rhythm.",
        solution: "Sneha crafted an authoritative pitch narrative: introducing an unforgettable 'Hook' slide, turning the complex multi-agent system into an intuitive flow diagram, and spotlighting bottom-up market sizing with crisp financial typography.",
        outcome: "The deck helped secure term sheets from leading venture capital firms, closing the seed round ahead of schedule."
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
