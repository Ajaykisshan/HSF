/**
 * Comprehensive Audit Data & Verification Evidence
 * Source: Digital Footprint Audit (Admissions 2027-28) & Live Web Cross-Checks
 * Assessment Date: 27 September 2026 | Re-checked: 30 September 2026 | Live-site corrections: 1 October 2026
 * 
 * PRIMARY MODEL: 25 · 25 · 25 · 25 Parent Decision Pathway
 * (Stage 1: Discovery, Stage 2: Proof of Life, Stage 3: Reputation, Stage 4: Conversion)
 * 
 * SECONDARY MODEL: 22-Indicator Legacy Agency Funnel (20-30-20-15-15)
 */

export interface StageItemAudit {
  name: string;
  score: number;
  max: number;
  status: 'pass' | 'fail' | 'warn';
  detail: string;
  isPhotoMetric?: boolean;
}

export interface SocialLink {
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'LinkedIn' | 'Twitter / X' | 'WhatsApp';
  url: string | null; // null = icon present on site but has no working destination
  status: 'linked' | 'dead' | 'placeholder' | 'admin-only';
  note?: string;
}

export interface Stages25Breakdown {
  discovery: { score: number; max: 25; items: StageItemAudit[] };
  freshness: { score: number; max: 25; items: StageItemAudit[] };
  reputation: { score: number; max: 25; items: StageItemAudit[] };
  conversion: { score: number; max: 25; items: StageItemAudit[] };
}

export interface SchoolAudit {
  id: string;
  name: string;
  shortName: string;
  city: string;
  locality: string;
  curriculum: string;
  score: number; // Primary 25-25-25-25 score
  legacyScore: number; // Legacy 20-30-20-15-15 score
  band: 'At risk' | 'Partially ready' | 'Ready';
  websiteUrl: string;
  googleCategory: string;
  googleReviewsVisible: number;
  googleRating: number | null;
  googlePhotosCount: number;
  socialLinks: SocialLink[]; // as linked from the school's own website
  admissionsStatus: {
    cycleAdvertised: string;
    mentions2027_28: boolean;
    evidenceText: string;
    statusSummary: string;
    evidenceUrl: string;
    criticalIssue?: string;
  };
  teachersFacultyStatus: {
    principalNamed: boolean;
    principalName: string;
    facultyRosterPublished: boolean;
    teacherStudentRatio: string;
    evidenceText: string;
    evidenceUrl: string;
    criticalIssue?: string;
  };
  boardMarksStatus: {
    resultsPosted: boolean;
    displayFormat: 'Homepage Showcase' | 'Inner Subpage' | 'Image Graphic Only' | 'Statutory PDF Table';
    latestBatch: string;
    highlights: string;
    evidenceText: string;
    evidenceUrl: string;
    criticalIssue?: string;
  };
  feeStructureStatus: {
    feePageExists: boolean;
    tuitionDisclosed: boolean;
    statedFees: string;
    thirdPartyAggregatorRange: string;
    evidenceText: string;
    evidenceUrl: string;
    criticalIssue?: string;
  };
  stages25: Stages25Breakdown;
  pillars: {
    discoverability: { score: number; max: 20 };
    reputation: { score: number; max: 30 };
    conversionPath: { score: number; max: 20 };
    contentFreshness: { score: number; max: 15 };
    communityVoice: { score: number; max: 15 };
  };
  indicatorScores: {
    [key: string]: number;
  };
}

type StageKey = keyof Stages25Breakdown;

/** Hand-entered evidence. Every total (stage, school, pillar, band) is derived from it below. */
type RawSchoolAudit = Omit<SchoolAudit, 'score' | 'legacyScore' | 'band' | 'pillars' | 'stages25'> & {
  stages25: Record<StageKey, { items: StageItemAudit[] }>;
};

const RAW_SCHOOLS: RawSchoolAudit[] = [
  {
    id: "hfs-thane",
    name: "Hiranandani Foundation School, Thane",
    shortName: "HFS Thane",
    city: "Thane",
    locality: "Hiranandani Estate, Ghodbunder Road",
    curriculum: "ICSE / ISC",
    websiteUrl: "https://www.hfsthane.in",
    googleCategory: "General education school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 39,
    socialLinks: [
      { platform: 'Facebook', url: "https://www.facebook.com/share/1BVomPSFa7/", status: 'linked' },
      { platform: 'Instagram', url: "https://www.instagram.com/hiranandanischoolthaneofficial", status: 'linked' },
      { platform: 'YouTube', url: "https://youtube.com/@hfsthaneevents4992", status: 'linked' }
    ],
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 (displays closed April 2026 window)",
      mentions2027_28: false,
      evidenceText: "Homepage banner still displayed: 'Admissions window closed on 28 April 2026'. No 2027-28 announcement.",
      statusSummary: "Stale closed window discourages prospective parents planning 12 months ahead.",
      evidenceUrl: "https://www.hfsthane.in/admissions",
      criticalIssue: "Displayed notice stating application window closed in April 2026."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Ms. Neelu Lamba",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:35 (approx 149 staff for 4,150+ students)",
      evidenceText: "Principal's address published with name and photo; subject-wise teacher directory or credentials omitted.",
      evidenceUrl: "https://www.hfsthane.in/about-us",
      criticalIssue: "No subject-matter faculty roster with qualifications."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "2024-25 / 2025-26",
      highlights: "ISC topper 99.3%, 65% of ISC cohort scored 90%+; ICSE topper 96.4%.",
      evidenceText: "Homepage features prominent ICSE & ISC topper cards and academic roll of honour.",
      evidenceUrl: "https://www.hfsthane.in/achievements",
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Only ₹500 registration fee shown in online portal",
      thirdPartyAggregatorRange: "₹1,24,080 - ₹1,75,400/yr (UniApply / Justdial)",
      evidenceText: "Zero tuition or quarterly fee tables published. Portal requires login/application to see figures.",
      evidenceUrl: "https://www.hfsthane.in/admissions",
      criticalIssue: "Aggregators publish conflicting amounts; no direct schedule provided."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified Google profile active at Hiranandani Estate, Thane.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "General education school". No reviews are visible on the Google profile.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct working link to hfsthane.in on profile.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Direct telephone line linked and operational.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 1, max: 3, status: 'warn', detail: 'Has 39 photos (20–49 band). Competitors feature 53 to 237 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Displays stale notice: "Admissions window closed on 28 April 2026". Discourages new parents.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'Stellar 99.3% ISC topper and 65% scoring 90%+ celebrated on site.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh news item from August 2026 (57 days old).' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Neelu Lamba officially introduced with message and photograph.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Shows 0 reviews on Google Maps.' },
          { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Website links to real Facebook, Instagram (@hiranandanischoolthaneofficial) and YouTube channels.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on all major school search directories (Edustoke, Justdial, UniApply).' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Active inquiry form capturing student grade and parent contact details.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No floating WhatsApp button. Indian parents prefer instant chat.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Only shows ₹500 registration fee. No tuition fee table published.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 5, max: 5, status: 'pass', detail: 'Prospectus download available upon submitting inquiry.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 5,
      "Phone on profile": 2,
      "Profile photos": 3,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 3,
      "Brochure download": 3,
      "Phone on page": 3,
      "Fee information link": 0,
      "WhatsApp click-to-chat": 0,
      "Latest news age": 7,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 5,
      "Unit Instagram": 5,
      "Listing sites (of 7)": 5
    }
  },
  {
    id: "hus-chennai",
    name: "Hiranandani Upscale School, Chennai (HUS)",
    shortName: "HUS Chennai",
    city: "Chennai",
    locality: "House of Hiranandani, 5/63 OMR, Egattur",
    curriculum: "IB Continuum (PYP, MYP, DP) & Cambridge",
    websiteUrl: "https://hus.edu.in",
    googleCategory: "International school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 68,
    socialLinks: [
      { platform: 'Facebook', url: "https://www.facebook.com/HUSChennai", status: 'linked' },
      { platform: 'Instagram', url: "https://www.instagram.com/huschennai/", status: 'linked' },
      { platform: 'YouTube', url: "https://www.youtube.com/@huschennai7664/videos", status: 'linked' },
      { platform: 'LinkedIn', url: "https://www.linkedin.com/company/106246287/admin/page-posts/published/", status: 'admin-only', note: "Points to the LinkedIn admin console; public visitors cannot open it." }
    ],
    admissionsStatus: {
      cycleAdvertised: "Rolling Admissions for 2026-27 & 2027-28 Intake",
      mentions2027_28: true,
      evidenceText: "Online application portal is active with structured 4-step admission process (Apply Online, Documents, Interaction, Enrollment). Clear age criteria for EYP to DP.",
      statusSummary: "Active online admissions portal with structured rolling admissions across all IB levels.",
      evidenceUrl: "https://hus.edu.in/ib-admission-in-chennai"
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Mr. Sivakumar Srinivasan (Director) & Mrs. Gayathri Loganathan (Primary Head)",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:15 (IB World School ratio)",
      evidenceText: "Director and Head of Primary officially introduced with international qualifications and pedagogical philosophy.",
      evidenceUrl: "https://hus.edu.in/about-us"
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "May 2025 / 2026 IBDP & IGCSE",
      highlights: "Consistently above world average in IBDP (34+ points avg); 100% Diploma pass rate; IGCSE distinctions.",
      evidenceText: "Prominently highlights international examination milestones and global university acceptances.",
      evidenceUrl: "https://hus.edu.in/ib-academics-in-chennai"
    },
    feeStructureStatus: {
      feePageExists: true,
      tuitionDisclosed: false,
      statedFees: "Fee page exists but lists no figures (Registration ₹50k + deposit ₹50k shared on inquiry)",
      thirdPartyAggregatorRange: "₹2,50,000 - ₹5,50,000/yr (EducationWorld / Doris)",
      evidenceText: "An 'IB Fee Structure' page exists but only describes what fees cover; families are told to contact admissions for programme-specific figures.",
      evidenceUrl: "https://hus.edu.in/ib-fees-structure",
      criticalIssue: "Fee page has no numbers — high-ticket IB programme keeps the actual schedule behind an enquiry."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at House of Hiranandani, Egattur, OMR, Chennai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "International school". Reviews suppressed on Google Maps.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to hus.edu.in active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Admissions phone number active.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 2, max: 3, status: 'warn', detail: '68 photos on Google Maps Knowledge Panel (50–99 band; 42 more on website gallery).', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 8, max: 8, status: 'pass', detail: 'Active 4-step rolling admissions portal for 2026-27 & 2027-28.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'World-class IBDP (34+ avg) and Cambridge IGCSE toppers celebrated.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh term updates and academic calendar posted.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Director Sivakumar Srinivasan & Primary Head Gayathri Loganathan named.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Reviews hidden on Google Maps (Justdial displays 193 reviews, 3.9★).' },
          { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Website links to real Facebook (HUSChennai) and Instagram (@huschennai) pages. LinkedIn icon points to an admin-only URL the public cannot open.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed across major Chennai school directories.' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Direct online admission application portal active on hus.edu.in.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No direct WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: '"IB Fee Structure" page exists but publishes no figures; asks families to contact admissions.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 5, max: 5, status: 'pass', detail: 'Prominent Apply Online CTA button and IB curriculum guides.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 5,
      "Phone on profile": 2,
      "Profile photos": 4,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 3,
      "Brochure download": 3,
      "Phone on page": 3,
      "Fee information link": 3,
      "WhatsApp click-to-chat": 0,
      "Latest news age": 7,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 5,
      "Unit Instagram": 5,
      "Listing sites (of 7)": 5
    }
  },
  {
    id: "hfs-powai",
    name: "Hiranandani Foundation School, Powai",
    shortName: "HFS Powai",
    city: "Mumbai",
    locality: "Hiranandani Gardens, Powai",
    curriculum: "ICSE / ISC",
    websiteUrl: "https://www.hiranandanifoundationschoolpowai.com",
    googleCategory: "General education school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 49,
    socialLinks: [
      { platform: 'Facebook', url: null, status: 'dead', note: '"Follow on Facebook" links to "#".' },
      { platform: 'Twitter / X', url: null, status: 'dead', note: '"Follow on Twitter" links to "#".' }
    ],
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 (+ outdated 2024-2026 IBDP banner)",
      mentions2027_28: false,
      evidenceText: "Homepage admissions box still reads: 'IBDP admissions (11th & 12th) for the year 2024-2026 has begun.' No 2027-28 announcement.",
      statusSummary: "Outdated notice from two years ago undermines high-tech reputation.",
      evidenceUrl: "https://www.hiranandanifoundationschoolpowai.com",
      criticalIssue: "Outdated banner from two academic cycles ago remains on live homepage."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Mrs. Kalyani Patnaik",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:32 (approx 135 staff for 3,800+ students)",
      evidenceText: "Principal and leadership messages documented; department-wise teacher profiles omitted from website.",
      evidenceUrl: "https://www.hiranandanifoundationschoolpowai.com/principal_readmore.php",
      criticalIssue: "No subject-wise faculty roster with teacher credentials."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "2024-25 / 2025-26",
      highlights: "ICSE topper 99.4%, 100% pass rate; ISC science stream topper 98.8%.",
      evidenceText: "Prominently displays toppers roll and subject distinction statistics on main landing view.",
      evidenceUrl: "https://www.hiranandanifoundationschoolpowai.com/news-events.php",
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Not disclosed on website",
      thirdPartyAggregatorRange: "₹1,40,000 - ₹2,10,000/yr (UniApply / Edustoke)",
      evidenceText: "No fee structure page exists; parents must call or physically visit the admissions desk.",
      evidenceUrl: "https://www.hiranandanifoundationschoolpowai.com",
      criticalIssue: "Zero tuition or fee schedule published anywhere on website."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at Hiranandani Gardens, Powai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews suppressed under "General education school".' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to the school website active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number listed on Google profile.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 1, max: 3, status: 'warn', detail: '49 profile photos (20–49 band). Direct competitor Podar Powai features 263 photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Homepage still says "IBDP admissions for the year 2024-2026 has begun".' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: '99.4% ICSE topper and 100% pass rate highlighted.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'News updated within last 90 days.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Principal & Head of School.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google (vs Podar Powai showing 589 reviews at 4.4★).' },
          { name: 'Active Campus Instagram & Facebook', score: 0, max: 8, status: 'fail', detail: 'Both "Follow on Facebook" and "Follow on Twitter" link to a dead "#". No Instagram link on the site.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major Mumbai listing portals.' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Working admissions inquiry form.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp chat option.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'No tuition fees disclosed on website.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No downloadable prospectus PDF; standard CTA.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 5,
      "Phone on profile": 2,
      "Profile photos": 3,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 3,
      "Brochure download": 0,
      "Phone on page": 3,
      "Fee information link": 0,
      "WhatsApp click-to-chat": 0,
      "Latest news age": 7,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 1,
      "Unit Instagram": 0,
      "Listing sites (of 7)": 5
    }
  },
  {
    id: "thriveni-academy",
    name: "Thriveni Academy, Chennai",
    shortName: "Thriveni Academy",
    city: "Chennai / Kanchipuram",
    locality: "Hiranandani Parks, Oragadam & Vadakkupattu",
    curriculum: "CBSE (Nursery - XII)",
    websiteUrl: "https://www.thriveniacademy.com",
    googleCategory: "Secondary school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 23,
    socialLinks: [
      { platform: 'Facebook', url: "https://www.facebook.com/Thrivenischool/", status: 'linked' },
      { platform: 'Instagram', url: "https://www.instagram.com/sitepad", status: 'placeholder', note: "Website-builder (SitePad) template placeholder, not the school." },
      { platform: 'Twitter / X', url: "https://twitter.com/sitepad_editor", status: 'placeholder', note: "Website-builder (SitePad) template placeholder, not the school." },
      { platform: 'LinkedIn', url: "https://www.linkedin.com/sitepad", status: 'placeholder', note: "Website-builder (SitePad) template placeholder, not the school." }
    ],
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 pop-up (+ stale 2024-25 poster PDF)",
      mentions2027_28: false,
      evidenceText: "Pop-up dialog announces 2026-27 admissions; menu still links 'School Admission Poster 2024 - 25' PDF.",
      statusSummary: "Conflicting years shown on site; no mention of 2027-28 cycle.",
      evidenceUrl: "https://www.thriveniacademy.com/sitepad-data/uploads/2024/03/Admission-poster.pdf",
      criticalIssue: "Legacy 2024-25 poster still linked from the main menu."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Dr. M.P. Anand",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:30 (81 teachers across primary/secondary)",
      evidenceText: "Principal message published; CBSE mandatory disclosure reports 81 faculty members and department heads.",
      evidenceUrl: "https://www.thriveniacademy.com/page-13/",
      criticalIssue: "Individual teacher profiles not accessible on public parent portal."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Statutory PDF Table",
      latestBatch: "2024-25 / 2025-26",
      highlights: "100% pass record in CBSE Class 10 & 12 board examinations.",
      evidenceText: "Results documented strictly in CBSE Mandatory Disclosure PDF table; not highlighted as marketing asset.",
      evidenceUrl: "https://www.thriveniacademy.com/page-13/",
      criticalIssue: "Burying 100% pass results in regulatory compliance tables hides key achievement."
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Not disclosed on website",
      thirdPartyAggregatorRange: "₹35,000 - ₹64,000/yr (Careers360 / Vidyavista)",
      evidenceText: "General statement of 'affordable structured fee' without any numerical figures.",
      evidenceUrl: "https://www.thriveniacademy.com",
      criticalIssue: "No fee disclosure despite promoting affordability."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Parks, Oragadam, Chennai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden on standard CBSE school category.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to thriveniacademy.com active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number displayed.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 1, max: 3, status: 'warn', detail: '23 photos on Google Maps profile (20–49 band). Direct Oragadam area competitors maintain 64 to 98 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Only a 2026–27 pop-up; menu still links a stale 2024–25 admission poster PDF. No 2027–28 mention.' },
          { name: 'Board Results Posted with Batch Year', score: 4, max: 7, status: 'warn', detail: '100% CBSE Class X pass rate with 85% first-class distinctions, but only inside the Mandatory Disclosure PDF table.' },
          { name: 'News & Event Recency (≤90 Days)', score: 4, max: 6, status: 'warn', detail: 'Latest news item is 97 days old.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Dr. M.P. Anand officially named with credentials.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google Maps.' },
          { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook link is real. Instagram, Twitter and LinkedIn icons still point to the website builder\'s "sitepad" placeholder accounts.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major educational search aggregators.' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Enquiry form operational.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees not disclosed.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 0, max: 5, status: 'fail', detail: 'Brochure download link leads to an empty page.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 5,
      "Phone on profile": 2,
      "Profile photos": 3,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 3,
      "Brochure download": 0,
      "Phone on page": 3,
      "Fee information link": 0,
      "WhatsApp click-to-chat": 0,
      "Latest news age": 4,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 5,
      "Unit Instagram": 0,
      "Listing sites (of 7)": 5
    }
  },
  {
    id: "hfs-international",
    name: "HFS International, Powai",
    shortName: "HFS International",
    city: "Mumbai",
    locality: "Hiranandani Gardens, Powai",
    curriculum: "IB Continuum & Cambridge (A Levels / IGCSE)",
    websiteUrl: "https://www.hfsinternationalpowai.com",
    googleCategory: "Building (CRITICAL ERROR)",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 1,
    socialLinks: [
      { platform: 'Instagram', url: "https://www.instagram.com/hfsinternationalpowai/", status: 'linked' },
      { platform: 'LinkedIn', url: "https://www.linkedin.com/company/hfs-international-powai/", status: 'linked' },
      { platform: 'YouTube', url: "https://www.youtube.com/@HFSInternational", status: 'linked' },
      { platform: 'WhatsApp', url: "https://wa.me/918657954016", status: 'linked' },
      { platform: 'Facebook', url: null, status: 'dead', note: "Facebook link is commented out of the site code." }
    ],
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 & 2027-28 (flyer text in flat image)",
      mentions2027_28: true,
      evidenceText: "Admission inquiry form mentions 2027-28, but announcement is locked inside an unsearchable image banner.",
      statusSummary: "Critical admissions data locked in raster graphic images, preventing SEO indexing.",
      evidenceUrl: "https://www.hfsinternationalpowai.com",
      criticalIssue: "Admissions text trapped in flattened image graphics; zero HTML text for search bots."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Mrs. Kalyani Patnaik (Principal & Head of School; also heads HFS Powai)",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:18 (approx 78 international curriculum faculty)",
      evidenceText: "Director's credentials highlighted; individual subject educator biographies not catalogued.",
      evidenceUrl: "https://www.hfsinternationalpowai.com/about-us.php",
      criticalIssue: "No subject-by-subject IB teacher roster published."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "May 2025 / 2026 IBDP & CAIE",
      highlights: "IBDP cohort average 37.2 points (global avg 30.2); 100% diploma pass rate.",
      evidenceText: "Homepage features prominent graphic cards with IBDP point averages and world topper ranks.",
      evidenceUrl: "https://www.hfsinternationalpowai.com/student_achievement.php",
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Not disclosed on website",
      thirdPartyAggregatorRange: "₹4,20,000 - ₹7,80,000/yr (UniApply / Edustoke)",
      evidenceText: "International school tuition fees omitted; requires structured registration through office.",
      evidenceUrl: "https://www.hfsinternationalpowai.com",
      criticalIssue: "High-ticket IB programme gives zero fee guidance on website."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile exists on Google Maps.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'CRITICAL: Misfiled on Google Maps as a "Building", not a school.' },
          { name: 'Official Website Linked on Maps', score: 0, max: 6, status: 'fail', detail: 'No website link attached to Google profile.' },
          { name: 'Admissions Telephone on Profile', score: 0, max: 3, status: 'fail', detail: 'No telephone number listed on Google profile.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 0, max: 3, status: 'fail', detail: 'Only 1 photo uploaded on Google Maps. Competitor Oberoi International features 195 photos; Podar features 263.', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 4, max: 8, status: 'warn', detail: 'Mentions 2027-28, but only inside a flat graphic flyer (unsearchable).' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'IBDP (37.2 avg) and Cambridge A-Level toppers celebrated.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh event updates posted.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Principal & Head of School.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible due to "Building" category.' },
          { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Instagram, LinkedIn and YouTube are real. No Facebook link: it is commented out of the site code.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed on major IB school portals.' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Online enquiry form working.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 6, max: 6, status: 'pass', detail: 'Working WhatsApp click-to-chat link (wa.me/918657954016) on the website.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees withheld.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No direct prospectus download button.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 0,
      "Phone on profile": 0,
      "Profile photos": 1,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 3,
      "Brochure download": 0,
      "Phone on page": 3,
      "Fee information link": 0,
      "WhatsApp click-to-chat": 3,
      "Latest news age": 7,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 1,
      "Unit Instagram": 5,
      "Listing sites (of 7)": 5
    }
  },
  {
    id: "hts-panvel",
    name: "Hiranandani Trust School, Panvel",
    shortName: "HTS Panvel",
    city: "Navi Mumbai / Panvel",
    locality: "Hiranandani Fortune City, Panvel",
    curriculum: "ICSE (Nursery - X)",
    websiteUrl: "https://www.htspanvel.com",
    googleCategory: "School",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 11,
    socialLinks: [],
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 (zero mention of 2027-28)",
      mentions2027_28: false,
      evidenceText: "Only advertises ongoing 2026-27 intake; no rolling or advance admissions notice for 2027-28.",
      statusSummary: "Leaves parents uncertain whether next year's admissions have commenced.",
      evidenceUrl: "https://www.htspanvel.com/addmision.aspx",
      criticalIssue: "Zero mention of 2027-28 academic intake on entire website."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Ms. Rupa Choudhury",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:25 (approx 42 teachers)",
      evidenceText: "Principal's note and credentials documented; individual teaching faculty roster omitted.",
      evidenceUrl: "https://www.htspanvel.com/principal-desk.aspx",
      criticalIssue: "No subject-wise faculty roster published."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Image Graphic Only",
      latestBatch: "2025-26 (Inaugural Class X Batch)",
      highlights: "100% pass rate in maiden ICSE examination; multiple distinctions.",
      evidenceText: "Results are locked inside a flattened JPEG image flyer; zero indexable text on the webpage.",
      evidenceUrl: "https://www.htspanvel.com/curriculum.aspx",
      criticalIssue: "Historic first batch ICSE achievements unsearchable and invisible on mobile."
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Not disclosed on website (mentions 'Feesback' reward scheme)",
      thirdPartyAggregatorRange: "₹85,000 - ₹1,20,000/yr (Yellow Slate / ResPaper)",
      evidenceText: "School mentions 'Feesback' loyalty partner, but provides no actual schedule of tuition fees.",
      evidenceUrl: "https://www.htspanvel.com",
      criticalIssue: "Mentions third-party fee coin loyalty system without publishing base fees."
    },
    stages25: {
      discovery: {
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Fortune City, Panvel.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden under standard school category.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to htspanvel.com active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Telephone line listed.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 0, max: 3, status: 'fail', detail: 'Only 11 photos on Google Maps Knowledge Panel. Navi Mumbai competitors feature 312 to 534 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'States only 2026-27; zero mention of 2027-28.' },
          { name: 'Board Results Posted with Batch Year', score: 4, max: 7, status: 'warn', detail: '100% maiden ICSE pass locked inside an unsearchable JPEG flyer.' },
          { name: 'News & Event Recency (≤90 Days)', score: 0, max: 6, status: 'fail', detail: 'No dated news items on website.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Rupa Choudhury officially named as Principal.' }
        ]
      },
      reputation: {
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google.' },
          { name: 'Active Campus Instagram & Facebook', score: 0, max: 8, status: 'fail', detail: 'No social media links anywhere on the website, and no school-owned Facebook or Instagram page found. The school only appears in posts by the Hiranandani Communities page.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 2, max: 4, status: 'warn', detail: 'Found on only 2 portal directories.' }
        ]
      },
      conversion: {
        items: [
          { name: 'Online Enquiry & Application Form', score: 5, max: 8, status: 'warn', detail: 'Enquiry form exists on inner page, but no Apply Now button on homepage.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Mentions "Feesback" reward scheme without publishing base fees.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 2, max: 5, status: 'warn', detail: 'No prospectus download link.' }
        ]
      }
    },
    indicatorScores: {
      "Google profile found": 5,
      "Reviews visible (category)": 0,
      "Website on profile": 5,
      "Phone on profile": 2,
      "Profile photos": 1,
      "Google rating": 0,
      "Number of reviews": 0,
      "Share of 1-2 stars": 0,
      "Owner reply rate": 0,
      "Enquiry form": 5,
      "Enquire / Apply CTA": 0,
      "Brochure download": 0,
      "Phone on page": 3,
      "Fee information link": 0,
      "WhatsApp click-to-chat": 0,
      "Latest news age": 0,
      "Board results posted": 4,
      "Gallery of 10+ photos": 2,
      "Principal named": 2,
      "Unit Facebook": 0,
      "Unit Instagram": 0,
      "Listing sites (of 7)": 3
    }
  }
];

// ---------------------------------------------------------------------------
// Derived scores: never type a total by hand, compute it from the evidence.
// ---------------------------------------------------------------------------

/** 25·25·25·25 bands (≥80 Ready, 60–79 Partially ready, <60 At risk). */
export const bandFor = (score: number): SchoolAudit['band'] =>
  score >= 80 ? 'Ready' : score >= 60 ? 'Partially ready' : 'At risk';

/** Legacy 20·30·20·15·15 funnel: which of the 22 indicators roll up into which pillar. */
const LEGACY_PILLARS: Record<keyof SchoolAudit['pillars'], { max: number; indicators: string[] }> = {
  discoverability: { max: 20, indicators: ["Google profile found", "Reviews visible (category)", "Website on profile", "Phone on profile", "Profile photos"] },
  reputation: { max: 30, indicators: ["Google rating", "Number of reviews", "Share of 1-2 stars", "Owner reply rate"] },
  conversionPath: { max: 20, indicators: ["Enquiry form", "Enquire / Apply CTA", "Brochure download", "Phone on page", "Fee information link", "WhatsApp click-to-chat"] },
  contentFreshness: { max: 15, indicators: ["Latest news age", "Board results posted", "Gallery of 10+ photos", "Principal named"] },
  communityVoice: { max: 15, indicators: ["Unit Facebook", "Unit Instagram", "Listing sites (of 7)"] },
};

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const round1 = (n: number) => Math.round(n * 10) / 10;

function deriveSchool(raw: RawSchoolAudit): SchoolAudit {
  const stage = (k: StageKey) => {
    const items = raw.stages25[k].items;
    if (sum(items.map((i) => i.max)) !== 25) throw new Error(`${raw.id}.${k}: item maxima must total 25`);
    for (const i of items) {
      if (i.score < 0 || i.score > i.max) throw new Error(`${raw.id}: "${i.name}" scored ${i.score}/${i.max}`);
    }
    return { score: sum(items.map((i) => i.score)), max: 25 as const, items };
  };
  const stages25: Stages25Breakdown = {
    discovery: stage('discovery'),
    freshness: stage('freshness'),
    reputation: stage('reputation'),
    conversion: stage('conversion'),
  };
  const pillarOf = (k: keyof SchoolAudit['pillars']) => {
    const { max, indicators } = LEGACY_PILLARS[k];
    return { score: sum(indicators.map((n) => raw.indicatorScores[n] ?? 0)), max } as any;
  };
  const pillars: SchoolAudit['pillars'] = {
    discoverability: pillarOf('discoverability'),
    reputation: pillarOf('reputation'),
    conversionPath: pillarOf('conversionPath'),
    contentFreshness: pillarOf('contentFreshness'),
    communityVoice: pillarOf('communityVoice'),
  };
  const score = sum(Object.values(stages25).map((st) => st.score));
  return {
    ...raw,
    stages25,
    score,
    band: bandFor(score),
    pillars,
    legacyScore: sum(Object.values(pillars).map((p) => p.score)),
  };
}

export const SCHOOLS_DATA: SchoolAudit[] = RAW_SCHOOLS.map(deriveSchool);

// ---------------------------------------------------------------------------
// Fix catalogue: each fix closes the gap on specific audit items, so the
// points it adds are that school's actual shortfall, not a flat number.
// ---------------------------------------------------------------------------

export interface ScoreFix {
  id: string;
  title: string;
  stageName: string;
  items: string[]; // audit item names this fix brings to full marks
  description: string;
  effort: string;
  readySnippet?: string;
}

export const SCORE_FIXES: ScoreFix[] = [
  {
    id: 'google-category',
    title: 'Switch Google Business Category to "Educational institution"',
    stageName: 'Stage 1: Discovery',
    items: ['Review Visibility Allowed by Category'],
    description: 'None of the six profiles currently shows reviews. Peers filed as "Educational institution" / "Education center" (Podar, Billabong) show hundreds. Confirm reviews reappear in the Google Business Profile dashboard after the switch.',
    effort: '5 mins (Google Business Profile setting)',
    readySnippet: 'Google Business Profile Manager -> Edit Profile -> Business Category -> change primary category to "Educational institution" or "Education center".'
  },
  {
    id: 'review-drive',
    title: 'Run a Parent Google Review Drive (4★+, 100+ reviews)',
    stageName: 'Stage 3: Reputation & Proof',
    items: ['Google Star Rating & Review Volume'],
    description: 'Once reviews are visible, ask current parents for reviews and reply to every one. Points assume the profile reaches a 4★+ average with review volume comparable to Podar / Billabong. This takes months, so it sits outside the 90-day target.',
    effort: '3–6 months (ongoing)',
  },
  {
    id: 'google-profile-complete',
    title: 'Complete the Google listing (website + phone)',
    stageName: 'Stage 1: Discovery',
    items: ['Official Website Linked on Maps', 'Admissions Telephone on Profile'],
    description: 'HFS International is filed on Google Maps as a "Building" with no website or phone. Claiming the listing and filling these fields restores direct search presence.',
    effort: '15 mins (Google Maps claim & edit)',
    readySnippet: 'Claim Google Maps profile. Change category to "International school" / "Educational institution". Add website https://www.hfsinternationalpowai.com and the admissions phone.'
  },
  {
    id: 'campus-photos-density',
    title: 'Upload 100+ Campus Photos to Google Maps',
    stageName: 'Stage 1: Discovery',
    items: ['Photo Density (100+ Campus Photos)'],
    description: 'Photo scoring: 100+ = 3 pts, 50–99 = 2, 20–49 = 1, under 20 = 0. Peers like Podar (84–442) and Billabong (88–260) set the bar.',
    effort: '1 afternoon (zero civil cost)',
    readySnippet: 'Upload high-resolution photos of labs, sports grounds, classrooms, library and campus architecture to the Google Business Profile until it passes 100.'
  },
  {
    id: 'admissions-2027-banner',
    title: 'Publish Hero "Admissions Open 2027–28" Banner',
    stageName: 'Stage 2: Proof of Life (Freshness)',
    items: ['Admissions 2027–28 Intake Notice'],
    description: 'Removes stale notices (HFS Thane "closed 28 April 2026", HFS Powai "IBDP 2024-2026", Thriveni 2024–25 poster) and puts a crawlable 2027–28 announcement on the homepage.',
    effort: '30 mins per site (CMS update)',
    readySnippet: 'Banner copy: "Admissions Open for Academic Year 2027–28 across Pre-Primary, Primary & Secondary. Register for upcoming Open House & Campus Tours."'
  },
  {
    id: 'crawlable-results',
    title: 'Publish Board Results as Crawlable HTML',
    stageName: 'Stage 2: Proof of Life (Freshness)',
    items: ['Board Results Posted with Batch Year'],
    description: 'Moves results out of PDFs and flat JPEGs (Thriveni, HTS Panvel) into an HTML results page that search engines and phones can read.',
    effort: '½ day per site',
  },
  {
    id: 'news-cadence',
    title: 'Post Dated News at Least Every 90 Days',
    stageName: 'Stage 2: Proof of Life (Freshness)',
    items: ['News & Event Recency (≤90 Days)'],
    description: 'A dated news or events post at least once a quarter shows parents the campus is active.',
    effort: 'Ongoing (1 post / month)',
  },
  {
    id: 'social-links',
    title: 'Fix Website Social Links & Campus Profiles',
    stageName: 'Stage 3: Reputation & Proof',
    items: ['Active Campus Instagram & Facebook'],
    description: 'Replace dead "#" links (HFS Powai) and template placeholders (Thriveni\'s "sitepad" Instagram/Twitter/LinkedIn), restore HFS International\'s Facebook link, and give HTS Panvel its own Facebook + Instagram.',
    effort: '1 hour web developer + profile setup',
  },
  {
    id: 'whatsapp-chat',
    title: 'Embed Floating WhatsApp Click-to-Chat Button',
    stageName: 'Stage 4: Conversion & Action',
    items: ['WhatsApp Click-to-Chat Channel'],
    description: 'Only HFS International offers WhatsApp today. A floating button connects parents directly to admissions without phone friction.',
    effort: '1 hour web developer',
    readySnippet: '<a href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Admissions%202027-28" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat with Admissions</a>'
  },
  {
    id: 'tuition-fee-page',
    title: 'Publish Transparent Tuition Fee Schedule',
    stageName: 'Stage 4: Conversion & Action',
    items: ['Transparent Tuition Fee Schedule'],
    description: 'Publishes indicative tuition bands and payment schedules. Stops parents bouncing to aggregators that show conflicting numbers. (HUS has a fee page but it lists no figures.)',
    effort: '1 day (Admissions office sign-off)',
    readySnippet: 'Publish a /fees page with standard tuition bands, instalment options, transport policy and registration charges.'
  },
  {
    id: 'prospectus-cta',
    title: 'Add 1-Click Prospectus & Homepage "Apply Now"',
    stageName: 'Stage 4: Conversion & Action',
    items: ['Downloadable Prospectus & Clear CTA', 'Online Enquiry & Application Form'],
    description: 'An ungated prospectus PDF and a high-contrast Apply Now button on every homepage (HTS Panvel currently has none).',
    effort: '½ day web developer',
  },
];

const itemGap = (school: SchoolAudit, itemName: string) => {
  for (const st of Object.values(school.stages25)) {
    const it = st.items.find((i: StageItemAudit) => i.name === itemName);
    if (it) return it.max - it.score;
  }
  return 0;
};

/** Points a fix would add for this school: the shortfall on the items it fixes. */
export const fixGain = (school: SchoolAudit, fix: ScoreFix) => sum(fix.items.map((n) => itemGap(school, n)));

/** Mean of a per-school number across the network. */
const networkMean = (f: (s: SchoolAudit) => number) => round1(sum(SCHOOLS_DATA.map(f)) / SCHOOLS_DATA.length);

const fixById = (id: string) => SCORE_FIXES.find((f) => f.id === id)!;
const meanGainOf = (ids: string[]) => networkMean((s) => sum(ids.map((id) => fixGain(s, fixById(id)))));

const ROADMAP_FIX_IDS = [
  ['google-category', 'google-profile-complete', 'campus-photos-density'],
  ['admissions-2027-banner'],
  ['whatsapp-chat', 'tuition-fee-page', 'prospectus-cta'],
  ['crawlable-results', 'social-links', 'news-cadence'],
];

const sortedScores = SCHOOLS_DATA.map((s) => s.score).sort((a, b) => a - b);
const mid = Math.floor(sortedScores.length / 2);

export const AUDIT_METADATA = {
  title: "Digital Footprint Audit: Admissions 2027-28 Readiness",
  client: "Dr Niranjan Hiranandani",
  clientRole: "Co-founder & Managing Director, Hiranandani Group",
  auditor: "The Chalk Story & Live Web Cross-Check",
  date: "September 2026 (Audited 27 Sep 2026, Re-verified 30 Sep 2026, live-site corrections 1 Oct 2026)",
  networkScore: networkMean((s) => s.score), // 25-25-25-25 primary model mean
  networkMedian: sortedScores.length % 2 ? sortedScores[mid] : (sortedScores[mid - 1] + sortedScores[mid]) / 2,
  schoolsAudited: SCHOOLS_DATA.length,
  schoolsAtRisk: SCHOOLS_DATA.filter((s) => s.band === 'At risk').length,
  schoolsPartiallyReady: SCHOOLS_DATA.filter((s) => s.band === 'Partially ready').length,
  schoolsReady: SCHOOLS_DATA.filter((s) => s.band === 'Ready').length,
  /** Network mean if every 90-day roadmap action lands (excludes the longer review drive). */
  targetScoreDay90: networkMean((s) => Math.min(100, s.score + sum(ROADMAP_FIX_IDS.flat().map((id) => fixGain(s, fixById(id)))))),
  legacyNetworkScore: networkMean((s) => s.legacyScore), // 20-30-20-15-15 legacy funnel mean
  indicatorsTotal: 22,
  pillarsTotal: 5,
  ruleNote: "Rule Update: Principal / Leadership named is accepted as full compliance for faculty disclosure (100% across all campuses)."
};

const fmtGain = (ids: string[]) => `+${meanGainOf(ids).toFixed(1)} pts on the network mean`;

export const ROADMAP_STAGES = [
  {
    phase: "Weeks 1–2",
    title: "Google Business Profiles Reclassification & Fixes",
    owner: "School Administrator / Digital Lead",
    effort: "Low (No web development needed)",
    actions: [
      "Change primary Google category from 'General education school' / 'Secondary school' / 'School' to 'Educational institution' or 'Education center', then confirm in the profile dashboard that reviews are visible again.",
      "Fix HFS International profile immediately: currently misclassified as a 'Building' with 1 photo; add official website URL, phone number, and 100+ photos.",
      "Upload high-resolution campus, lab, sports, and library photos across all profiles until each passes 100 (peers show 84–534)."
    ],
    impact: `${fmtGain(ROADMAP_FIX_IDS[0])}; social-proof parity with Podar & Billabong.`
  },
  {
    phase: "Weeks 2–4",
    title: "Admissions 2027–28 Live Signalling & Stale Content Removal",
    owner: "Content Editor / Webmaster",
    effort: "1 day per school site",
    actions: [
      "Publish an unequivocal 'Admissions Open for Academic Year 2027–28' hero announcement on every homepage with key registration deadlines.",
      "Remove damaging stale elements: HFS Powai's 'IBDP admissions for 2024-2026' notice, HFS Thane's 'closed 28 April 2026' notice, and Thriveni's 2024-25 admission poster PDF.",
      "Convert HFS International's flyer image text into crawlable, mobile-responsive HTML."
    ],
    impact: `${fmtGain(ROADMAP_FIX_IDS[1])}; signals an active, welcoming institution for prospective families.`
  },
  {
    phase: "Weeks 3–6",
    title: "Fast-Lane Conversion: WhatsApp, Fees & Digital Brochure",
    owner: "Web Developer + Admissions Office",
    effort: "2–3 days web implementation",
    actions: [
      `Embed a WhatsApp click-to-chat button on the ${SCHOOLS_DATA.length - 1} homepages that lack one (only HFS International has it today).`,
      "Introduce a transparent 'Fee Structure & Financial Overview' page with standard tuition bands, transport policy, and payment schedules (HUS's existing fee page lists no figures).",
      "Add an instant 1-click digital prospectus download (today only HFS Thane offers one, gated behind the enquiry form; HUS offers IB curriculum guides).",
      "Add a prominent, high-contrast 'Apply Now' CTA button to HTS Panvel's homepage."
    ],
    impact: `${fmtGain(ROADMAP_FIX_IDS[2])}; stops loss of enquiries to aggregators.`
  },
  {
    phase: "Weeks 6–12",
    title: "Faculty Showcase, Crawlable Results & Social Channel Upkeep",
    owner: "Admissions, Marketing & Department Heads",
    effort: "Ongoing routine cadence",
    actions: [
      "Build a dedicated 'Our Educators' page showcasing faculty credentials, subject leadership, and teacher-student engagement.",
      "Reformat board results from PDFs and flat JPEG graphics (Panvel & Thriveni) into responsive HTML tables with topper highlights.",
      "Fix website social links: HFS Powai's dead '#' Facebook/Twitter links, Thriveni's 'sitepad' placeholder Instagram/Twitter/LinkedIn, HUS's admin-only LinkedIn URL, HFS International's missing Facebook; create HTS Panvel's own Facebook + Instagram.",
      "Implement a 90-day review response SLA to engage with feedback on listing portals (Yellow Slate, UniApply)."
    ],
    impact: `${fmtGain(ROADMAP_FIX_IDS[3])}; takes the network from ${AUDIT_METADATA.networkScore} (${bandFor(AUDIT_METADATA.networkScore)}) to as high as ${AUDIT_METADATA.targetScoreDay90} (${bandFor(AUDIT_METADATA.targetScoreDay90)}).`
  }
];
