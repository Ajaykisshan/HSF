/**
 * Comprehensive Audit Data & Verification Evidence
 * Source: Digital Footprint Audit (Admissions 2027-28) & Live Web Cross-Checks
 * Assessment Date: 27 September 2026 | Re-checked: 30 September 2026
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

export interface PeerSchool {
  name: string;
  network: string;
  city: string;
  category: string;
  rating: number;
  reviewsCount: number;
  photosCount: number;
  verificationUrl?: string;
}

export const AUDIT_METADATA = {
  title: "Digital Footprint Audit: Admissions 2027-28 Readiness",
  client: "Dr Niranjan Hiranandani",
  clientRole: "Co-founder & Managing Director, Hiranandani Group",
  auditor: "The Chalk Story & Live Web Cross-Check",
  date: "September 2026 (Audited 27 Sep 2026, Re-verified 30 Sep 2026)",
  networkScore: 54.2, // 25-25-25-25 Primary Model Mean
  networkMedian: 54.0,
  schoolsAudited: 6,
  schoolsAtRisk: 4, // Powai (54), Thriveni (54), International (47), Panvel (38)
  schoolsPartiallyReady: 2, // Thane (61), Chennai (71)
  schoolsReady: 0,
  targetScoreDay90: 85.3,
  legacyNetworkScore: 50.5, // 20-30-20-15-15 Legacy Funnel Mean
  indicatorsTotal: 22,
  pillarsTotal: 5,
  ruleNote: "Rule Update: Principal / Leadership named is accepted as full compliance for faculty disclosure (100% across all campuses)."
};

export const SCHOOLS_DATA: SchoolAudit[] = [
  {
    id: "hfs-thane",
    name: "Hiranandani Foundation School, Thane",
    shortName: "HFS Thane",
    city: "Thane",
    locality: "Hiranandani Estate, Ghodbunder Road",
    curriculum: "ICSE / ISC",
    score: 61,
    legacyScore: 59,
    band: "Partially ready",
    websiteUrl: "https://www.hfsthane.in",
    googleCategory: "General education school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 39,
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
        score: 19,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified Google profile active at Hiranandani Estate, Thane.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "General education school". Google hid all reviews on April 30, 2025.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct working link to hfsthane.in on profile.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Direct telephone line linked and operational.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 2, max: 3, status: 'warn', detail: 'Has 39 photos. Competitors feature 53 to 237 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 17,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Displays stale notice: "Admissions window closed on 28 April 2026". Discourages new parents.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'Stellar 99.3% ISC topper and 65% scoring 90%+ celebrated on site.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh news item from August 2026 (57 days old).' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Neelu Lamba officially introduced with message and photograph.' }
        ]
      },
      reputation: {
        score: 12,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Shows 0 reviews on Google Maps due to school category suppression bug.' },
          { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Active official Facebook page and Instagram handles.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on all major school search directories (Edustoke, Justdial, UniApply).' }
        ]
      },
      conversion: {
        score: 13,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Active inquiry form capturing student grade and parent contact details.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No floating WhatsApp button. Indian parents prefer instant chat.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Only shows ₹500 registration fee. No tuition fee table published.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 5, max: 5, status: 'pass', detail: 'Prospectus download available upon submitting inquiry.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 15, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 14, max: 20 },
      contentFreshness: { score: 15, max: 15 },
      communityVoice: { score: 15, max: 15 }
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
    score: 71,
    legacyScore: 60,
    band: "Partially ready",
    websiteUrl: "https://hus.edu.in",
    googleCategory: "International school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 68,
    admissionsStatus: {
      cycleAdvertised: "Rolling Admissions for 2026-27 & 2027-28 Intake",
      mentions2027_28: true,
      evidenceText: "Online application portal is active with structured 4-step admission process (Apply Online, Documents, Interaction, Enrollment). Clear age criteria for EYP to DP.",
      statusSummary: "Active online admissions portal with structured rolling admissions across all IB levels.",
      evidenceUrl: "https://hus.edu.in/admissions"
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Mr. Sivakumar Srinivasan (Director) & Mrs. Gayathri Loganathan (Primary Head)",
      facultyRosterPublished: true,
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
      evidenceUrl: "https://hus.edu.in/academics"
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Shared via Admissions Team upon inquiry (Registration ₹50k + deposit ₹50k)",
      thirdPartyAggregatorRange: "₹2,50,000 - ₹5,50,000/yr (EducationWorld / Doris)",
      evidenceText: "Requires submitting the online enquiry form to receive official fee sheet for EYP, PYP, MYP, and DP.",
      evidenceUrl: "https://hus.edu.in/admissions",
      criticalIssue: "High-ticket IB program keeps fee schedule behind inquiry form."
    },
    stages25: {
      discovery: {
        score: 20,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at House of Hiranandani, Egattur, OMR, Chennai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "International school". Reviews suppressed on Google Maps.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to hus.edu.in active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Admissions phone number active.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 3, max: 3, status: 'pass', detail: '68 photos on Google Maps Knowledge Panel (and 42 on website gallery).', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 25,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 8, max: 8, status: 'pass', detail: 'Active 4-step rolling admissions portal for 2026-27 & 2027-28.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'World-class IBDP (34+ avg) and Cambridge IGCSE toppers celebrated.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh term updates and academic calendar posted.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Director Sivakumar Srinivasan & Primary Head Gayathri Loganathan named.' }
        ]
      },
      reputation: {
        score: 12,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Reviews hidden on Google Maps (Justdial displays 193 reviews, 3.9★).' },
          { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Active @husschoolchennai Instagram and Facebook pages.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed across major Chennai school directories.' }
        ]
      },
      conversion: {
        score: 14,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Direct online admission application portal active on hus.edu.in.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No direct WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Fee schedule kept private; requires contacting admissions office.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 6, max: 5, status: 'pass', detail: 'Prominent Apply Online CTA button and IB curriculum guides.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 16, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 14, max: 20 },
      contentFreshness: { score: 15, max: 15 },
      communityVoice: { score: 15, max: 15 }
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
    id: "hfs-powai",
    name: "Hiranandani Foundation School, Powai",
    shortName: "HFS Powai",
    city: "Mumbai",
    locality: "Hiranandani Gardens, Powai",
    curriculum: "ICSE / ISC",
    score: 54,
    legacyScore: 52,
    band: "At risk",
    websiteUrl: "https://www.hfspowai.co.in",
    googleCategory: "General education school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 49,
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 (+ outdated 2024-2026 IBDP banner)",
      mentions2027_28: false,
      evidenceText: "Displays admissions for 2026-27, but homepage features legacy 'Admissions Open IBDP 2024-2026' graphic banner. No 2027-28 announcement.",
      statusSummary: "Outdated banner from two years ago undermines high-tech reputation.",
      evidenceUrl: "https://www.hfspowai.co.in",
      criticalIssue: "Outdated banner from two academic cycles ago remains on live homepage."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Mrs. Kalyani Patnaik",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:32 (approx 135 staff for 3,800+ students)",
      evidenceText: "Principal and leadership messages documented; department-wise teacher profiles omitted from website.",
      evidenceUrl: "https://www.hfspowai.co.in/about-us",
      criticalIssue: "No subject-wise faculty roster with teacher credentials."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "2024-25 / 2025-26",
      highlights: "ICSE topper 99.4%, 100% pass rate; ISC science stream topper 98.8%.",
      evidenceText: "Prominently displays toppers roll and subject distinction statistics on main landing view.",
      evidenceUrl: "https://www.hfspowai.co.in/achievements",
    },
    feeStructureStatus: {
      feePageExists: false,
      tuitionDisclosed: false,
      statedFees: "Not disclosed on website",
      thirdPartyAggregatorRange: "₹1,40,000 - ₹2,10,000/yr (UniApply / Edustoke)",
      evidenceText: "No fee structure page exists; parents must call or physically visit the admissions desk.",
      evidenceUrl: "https://www.hfspowai.co.in",
      criticalIssue: "Zero tuition or fee schedule published anywhere on website."
    },
    stages25: {
      discovery: {
        score: 20,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at Hiranandani Gardens, Powai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews suppressed under "General education school".' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to hfspowai.co.in active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number listed on Google profile.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 3, max: 3, status: 'pass', detail: '49 profile photos uploaded. Direct competitor Podar Powai features 263 photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 17,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Homepage displays outdated "2024–2026 IBDP" banner.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: '99.4% ICSE topper and 100% pass rate highlighted.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'News updated within last 90 days.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Principal & Head of School.' }
        ]
      },
      reputation: {
        score: 8,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google (vs Podar Powai showing 589 reviews at 4.4★).' },
          { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook icon in footer links to dead "#" tag.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major Mumbai listing portals.' }
        ]
      },
      conversion: {
        score: 9,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Working admissions inquiry form.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp chat option.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'No tuition fees disclosed on website.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No downloadable prospectus PDF; standard CTA.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 15, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 11, max: 20 },
      contentFreshness: { score: 15, max: 15 },
      communityVoice: { score: 11, max: 15 }
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
      "Unit Instagram": 5,
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
    score: 54,
    legacyScore: 53,
    band: "At risk",
    websiteUrl: "https://www.thriveniacademy.com",
    googleCategory: "Secondary school",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 23,
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 pop-up (+ stale 2024-25 poster PDF)",
      mentions2027_28: false,
      evidenceText: "Pop-up dialog announces 2026-27 admissions; legacy 2024-25 admissions poster PDF still downloadable.",
      statusSummary: "Conflicting years shown on site; no mention of 2027-28 cycle.",
      evidenceUrl: "https://www.thriveniacademy.com/admissions",
      criticalIssue: "Legacy 2024-25 poster still linked in the download section."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Dr. M.P. Anand",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:30 (81 teachers across primary/secondary)",
      evidenceText: "Principal message published; CBSE mandatory disclosure reports 81 faculty members and department heads.",
      evidenceUrl: "https://www.thriveniacademy.com/mandatory-disclosure",
      criticalIssue: "Individual teacher profiles not accessible on public parent portal."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Statutory PDF Table",
      latestBatch: "2024-25 / 2025-26",
      highlights: "100% pass record in CBSE Class 10 & 12 board examinations.",
      evidenceText: "Results documented strictly in CBSE Mandatory Disclosure PDF table; not highlighted as marketing asset.",
      evidenceUrl: "https://www.thriveniacademy.com/disclosure",
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
        score: 19,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Parks, Oragadam, Chennai.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden on standard CBSE school category.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to thriveniacademy.com active.' },
          { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number displayed.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 2, max: 3, status: 'warn', detail: '23 photos on Google Maps profile. Direct Oragadam area competitors maintain 64 to 98 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 15,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Admissions link opens a stale 2024–25 flyer graphic.' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: '100% CBSE Class X pass rate with 85% first-class distinctions.' },
          { name: 'News & Event Recency (≤90 Days)', score: 4, max: 6, status: 'warn', detail: 'Latest news item is 97 days old.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Dr. M.P. Anand officially named with credentials.' }
        ]
      },
      reputation: {
        score: 12,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google Maps.' },
          { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Facebook and Instagram handles active.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major educational search aggregators.' }
        ]
      },
      conversion: {
        score: 8,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Enquiry form operational.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees not disclosed.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 0, max: 5, status: 'fail', detail: 'Brochure download link leads to an empty page.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 15, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 11, max: 20 },
      contentFreshness: { score: 12, max: 15 },
      communityVoice: { score: 15, max: 15 }
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
      "Unit Instagram": 5,
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
    score: 47,
    legacyScore: 44,
    band: "At risk",
    websiteUrl: "https://www.hfsinternationalpowai.com",
    googleCategory: "Building (CRITICAL ERROR)",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 1,
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
      principalName: "Mrs. Kalyani Patnaik (Director & Head of School)",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:18 (approx 78 international curriculum faculty)",
      evidenceText: "Director's credentials highlighted; individual subject educator biographies not catalogued.",
      evidenceUrl: "https://www.hfsinternationalpowai.com/about-us",
      criticalIssue: "No subject-by-subject IB teacher roster published."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Homepage Showcase",
      latestBatch: "May 2025 / 2026 IBDP & CAIE",
      highlights: "IBDP cohort average 37.2 points (global avg 30.2); 100% diploma pass rate.",
      evidenceText: "Homepage features prominent graphic cards with IBDP point averages and world topper ranks.",
      evidenceUrl: "https://www.hfsinternationalpowai.com/academics",
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
        score: 9,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile exists on Google Maps.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'CRITICAL: Misfiled on Google Maps as a "Building", not a school.' },
          { name: 'Official Website Linked on Maps', score: 0, max: 6, status: 'fail', detail: 'No website link attached to Google profile.' },
          { name: 'Admissions Telephone on Profile', score: 0, max: 3, status: 'fail', detail: 'No telephone number listed on Google profile.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 1, max: 3, status: 'fail', detail: 'Only 1 photo uploaded on Google Maps. Competitor Oberoi International features 195 photos; Podar features 263.', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 21,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 4, max: 8, status: 'warn', detail: 'Mentions 2027-28, but only inside a flat graphic flyer (unsearchable).' },
          { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'IBDP (37.2 avg) and Cambridge A-Level toppers celebrated.' },
          { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh event updates posted.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Director.' }
        ]
      },
      reputation: {
        score: 8,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible due to "Building" category.' },
          { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook icon links to dead "#" tag.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed on major IB school portals.' }
        ]
      },
      conversion: {
        score: 9,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Online enquiry form working.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp option for international parents.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees withheld.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No direct prospectus download button.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 7, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 11, max: 20 },
      contentFreshness: { score: 15, max: 15 },
      communityVoice: { score: 11, max: 15 }
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
      "WhatsApp click-to-chat": 0,
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
    score: 38,
    legacyScore: 35,
    band: "At risk",
    websiteUrl: "https://www.htspanvel.com",
    googleCategory: "School",
    googleReviewsVisible: 0,
    googleRating: null,
    googlePhotosCount: 11,
    admissionsStatus: {
      cycleAdvertised: "Academic Year 2026-27 (zero mention of 2027-28)",
      mentions2027_28: false,
      evidenceText: "Only advertises ongoing 2026-27 intake; no rolling or advance admissions notice for 2027-28.",
      statusSummary: "Leaves parents uncertain whether next year's admissions have commenced.",
      evidenceUrl: "https://www.htspanvel.com/admissions",
      criticalIssue: "Zero mention of 2027-28 academic intake on entire website."
    },
    teachersFacultyStatus: {
      principalNamed: true,
      principalName: "Ms. Rupa Choudhury",
      facultyRosterPublished: false,
      teacherStudentRatio: "1:25 (approx 42 teachers)",
      evidenceText: "Principal's note and credentials documented; individual teaching faculty roster omitted.",
      evidenceUrl: "https://www.htspanvel.com/about-us",
      criticalIssue: "No subject-wise faculty roster published."
    },
    boardMarksStatus: {
      resultsPosted: true,
      displayFormat: "Image Graphic Only",
      latestBatch: "2025-26 (Inaugural Class X Batch)",
      highlights: "100% pass rate in maiden ICSE examination; multiple distinctions.",
      evidenceText: "Results are locked inside a flattened JPEG image flyer; zero indexable text on the webpage.",
      evidenceUrl: "https://www.htspanvel.com/academics",
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
        score: 17,
        max: 25,
        items: [
          { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Fortune City, Panvel.' },
          { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden under standard school category.' },
          { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to htspanvel.com active.' },
          { name: 'Admissions Telephone on Profile', score: 2, max: 3, status: 'warn', detail: 'Telephone line listed.' },
          { name: 'Photo Density (100+ Campus Photos)', score: 1, max: 3, status: 'fail', detail: 'Only 11 photos on Google Maps Knowledge Panel. Navi Mumbai competitors feature 312 to 534 campus photos.', isPhotoMetric: true }
        ]
      },
      freshness: {
        score: 8,
        max: 25,
        items: [
          { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'States only 2026-27; zero mention of 2027-28.' },
          { name: 'Board Results Posted with Batch Year', score: 4, max: 7, status: 'warn', detail: '100% maiden ICSE pass locked inside an unsearchable JPEG flyer.' },
          { name: 'News & Event Recency (≤90 Days)', score: 0, max: 6, status: 'fail', detail: 'No dated news items on website.' },
          { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Rupa Choudhury officially named as Principal.' }
        ]
      },
      reputation: {
        score: 6,
        max: 25,
        items: [
          { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google.' },
          { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook active, but no campus Instagram handle.' },
          { name: 'Listed on Major K-12 Portals (7 Sites)', score: 2, max: 4, status: 'warn', detail: 'Found on only 2 portal directories.' }
        ]
      },
      conversion: {
        score: 7,
        max: 25,
        items: [
          { name: 'Online Enquiry & Application Form', score: 5, max: 8, status: 'warn', detail: 'Enquiry form exists on inner page, but no Apply Now button on homepage.' },
          { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
          { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Mentions "Feesback" reward scheme without publishing base fees.' },
          { name: 'Downloadable Prospectus & Clear CTA', score: 2, max: 5, status: 'warn', detail: 'No prospectus download link.' }
        ]
      }
    },
    pillars: {
      discoverability: { score: 13, max: 20 },
      reputation: { score: 0, max: 30 },
      conversionPath: { score: 8, max: 20 },
      contentFreshness: { score: 8, max: 15 },
      communityVoice: { score: 8, max: 15 }
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
      "Unit Facebook": 5,
      "Unit Instagram": 0,
      "Listing sites (of 7)": 3
    }
  }
];

export const PEER_BENCHMARK_DATA: PeerSchool[] = [
  { name: "Billabong High International - Thane", network: "Billabong High", city: "Thane", category: "Educational institution", rating: 4.2, reviewsCount: 692, photosCount: 88, verificationUrl: "https://www.google.com/maps/search/Billabong+High+International+School+Thane" },
  { name: "Podar International School - Nerul", network: "Podar", city: "Navi Mumbai", category: "Education center", rating: 4.2, reviewsCount: 781, photosCount: 442, verificationUrl: "https://www.google.com/maps/search/Podar+International+School+Nerul" },
  { name: "Podar International School - Powai", network: "Podar", city: "Mumbai", category: "Education center", rating: 4.4, reviewsCount: 589, photosCount: 263, verificationUrl: "https://www.google.com/maps/search/Podar+International+School+Powai" },
  { name: "Billabong High International - Malad", network: "Billabong High", city: "Mumbai", category: "Educational institution", rating: 4.3, reviewsCount: 500, photosCount: 260, verificationUrl: "https://www.google.com/maps/search/Billabong+High+International+Malad" },
  { name: "Podar International School - Thane", network: "Podar", city: "Thane", category: "Education center", rating: 4.2, reviewsCount: 301, photosCount: 84, verificationUrl: "https://www.google.com/maps/search/Podar+International+School+Thane+Ghodbunder" },
  { name: "Billabong High International - Mulund", network: "Billabong High", city: "Mumbai", category: "Educational institution", rating: 4.8, reviewsCount: 223, photosCount: 88, verificationUrl: "https://www.google.com/maps/search/Billabong+High+International+Mulund" },
  { name: "VIBGYOR High School - Goregaon", network: "Vibgyor", city: "Mumbai", category: "Educational institution", rating: 4.1, reviewsCount: 79, photosCount: 305, verificationUrl: "https://www.google.com/maps/search/VIBGYOR+High+School+Goregaon" },
  { name: "VIBGYOR High School - Malad East", network: "Vibgyor", city: "Mumbai", category: "Educational institution", rating: 4.6, reviewsCount: 43, photosCount: 204, verificationUrl: "https://www.google.com/maps/search/VIBGYOR+High+School+Malad+East" },
  { name: "VIBGYOR High - Airoli / Thane", network: "Vibgyor", city: "Navi Mumbai", category: "Educational institution", rating: 4.3, reviewsCount: 39, photosCount: 237, verificationUrl: "https://www.google.com/maps/search/VIBGYOR+High+School+Airoli" },
  { name: "Gateway International School - Padur", network: "Gateway", city: "Chennai (OMR)", category: "Educational institution", rating: 4.6, reviewsCount: 39, photosCount: 82, verificationUrl: "https://www.google.com/maps/search/Gateway+International+School+Padur" },
  { name: "Chettinad Sarvalokaa Education", network: "Chettinad", city: "Chennai (OMR)", category: "International school", rating: 4.5, reviewsCount: 120, photosCount: 154, verificationUrl: "https://www.google.com/maps/search/Chettinad+Sarvalokaa+Education+Chennai" },
  { name: "Delhi Public School (DPS) - Nerul", network: "DPS", city: "Navi Mumbai", category: "CBSE school", rating: 4.5, reviewsCount: 650, photosCount: 534, verificationUrl: "https://www.google.com/maps/search/Delhi+Public+School+Nerul+Navi+Mumbai" }
];

export const HIDDEN_REVIEWS_PREMIUM_PEERS = [
  { name: "Dhirubhai Ambani International (DAIS)", city: "Mumbai", category: "International school", visibleReviews: 0 },
  { name: "Oberoi International School", city: "Mumbai", category: "International school", visibleReviews: 0 },
  { name: "Smt. Sulochanadevi Singhania School", city: "Thane", category: "ICSE school", visibleReviews: 0 },
  { name: "Bombay Scottish School - Mahim", city: "Mumbai", category: "ICSE school", visibleReviews: 0 },
  { name: "Chettinad Vidyashram", city: "Chennai", category: "CBSE school", visibleReviews: 0 },
  { name: "Sishya School", city: "Chennai", category: "ICSE school", visibleReviews: 0 }
];

export const ROADMAP_STAGES = [
  {
    phase: "Weeks 1–2",
    title: "Google Business Profiles Reclassification & Fixes",
    owner: "School Administrator / Digital Lead",
    effort: "Low (No web development needed)",
    actions: [
      "Change primary Google category from 'ICSE school' / 'General education school' to 'Educational institution' or 'Education center' to restore latent parent ratings & reviews.",
      "Fix HFS International profile immediately: currently misclassified as a 'Building' with 1 photo; add official website URL, phone number, and 50+ photos.",
      "Upload 50–100 high-resolution campus, lab, sports, and library photos across all profiles to match peer averages (84–534 photos)."
    ],
    impact: "+13 points on Reputation pillar, instant social proof parity with Podar & Billabong."
  },
  {
    phase: "Weeks 2–4",
    title: "Admissions 2027–28 Live Signalling & Stale Content Removal",
    owner: "Content Editor / Webmaster",
    effort: "1 day per school site",
    actions: [
      "Publish an unequivocal 'Admissions Open for Academic Year 2027–28' hero announcement on every homepage with key registration deadlines.",
      "Remove damaging stale elements: delete HFS Powai's 'IBDP 2024-2026' banner, HFS Thane's 'closed 28 April 2026' notice, and Thriveni's legacy 2024-25 poster PDF.",
      "Convert HFS International's flyer image text into crawlable, mobile-responsive HTML."
    ],
    impact: "Eliminates parent bounce rate; signals an active, welcoming institution for prospective families."
  },
  {
    phase: "Weeks 3–6",
    title: "Fast-Lane Conversion: WhatsApp, Fees & Digital Brochure",
    owner: "Web Developer + Admissions Office",
    effort: "2–3 days web implementation",
    actions: [
      "Embed a verified WhatsApp click-to-chat button on all 6 homepages (the primary communication channel preferred by Indian parents).",
      "Introduce a transparent 'Fee Structure & Financial Overview' page with standard tuition bands, transport policy, and payment schedules.",
      "Add an instant 1-click digital prospectus download (currently only HFS Thane offers one, and it is gated behind a long form).",
      "Add a prominent, high-contrast 'Apply Now' CTA button to HTS Panvel's homepage."
    ],
    impact: "+6 to +12 points per school on Conversion Path; stops loss of inquiries to aggregators."
  },
  {
    phase: "Weeks 6–12",
    title: "Faculty Showcase, Crawlable Results & Social Channel Upkeep",
    owner: "Admissions, Marketing & Department Heads",
    effort: "Ongoing routine cadence",
    actions: [
      "Build a dedicated 'Our Educators' page showcasing faculty credentials, subject leadership, and teacher-student engagement.",
      "Reformat board results from PDFs and flat JPEG graphics (Panvel & Thriveni) into responsive HTML tables with interactive topper highlights.",
      "Fix broken footer links: remove HFS Powai's '#' Facebook link and Thriveni's broken template link; establish verified campus social profiles.",
      "Implement a 90-day review response SLA to engage with feedback on listing portals (Yellow Slate, UniApply)."
    ],
    impact: "+15+ points; elevates network score from 54.2 (At-Risk) to 85.3+ (Ready band)."
  }
];
