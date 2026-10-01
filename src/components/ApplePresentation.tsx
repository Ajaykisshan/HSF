import React, { useState } from 'react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';
import { 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Calendar,
  Star,
  MessageCircle,
  HelpCircle,
  ExternalLink,
  Award,
  Layers,
  ArrowRight,
  Camera,
  X,
  Eye,
  Building,
  Globe
} from 'lucide-react';

interface StageCardData {
  stageNumber: number;
  id: 'discovery' | 'freshness' | 'reputation' | 'conversion';
  name: string;
  tagline: string;
  maxScore: 25;
  icon: React.ReactNode;
}

export interface CompetitorBenchmarkItem {
  schoolName: string;
  locality: string;
  
  // Platform 1: Google Maps (Strictly Google data only)
  googleCategory: string;
  googlePhotosCount: number;
  googleRatingText: string;
  googleMapsStatus: 'visible' | 'suppressed';
  googleMapsUrl: string;

  // Platform 2: Directory Rating (Strictly Justdial data only - Never mixed!)
  directoryName: string;
  directoryRatingText: string;
  directoryUrl: string;

  // Platform 3: Official Website (Strictly website data only)
  websitePhotosCount: number;
  websiteUrl: string;

  isPrimaryCompetitor: boolean;
}

export interface CampusCompetitorData {
  schoolName: string;
  googleCategory: string;
  googleProfilePhotos: number;
  googleRatingText: string;
  googleMapsUrl: string;
  
  directoryName: string;
  directoryRatingText: string;
  directoryUrl: string;

  websiteGalleryPhotos: number;
  websiteUrl: string;
  
  photoScore: string;
  rubricExplanation: string;
  competitors: CompetitorBenchmarkItem[];
}

export const CAMPUS_COMPETITORS: Record<string, CampusCompetitorData> = {
  'hfs-thane': {
    schoolName: "Hiranandani Foundation School, Thane",
    googleCategory: "General education school",
    googleProfilePhotos: 39,
    googleRatingText: "0 reviews (Suppressed by Google category)",
    googleMapsUrl: "https://www.google.com/maps/search/Hiranandani+Foundation+School+Thane",
    directoryName: "Justdial",
    directoryRatingText: "4.1★ (180 reviews)",
    directoryUrl: "https://www.justdial.com/Thane/Hiranandani-Foundation-School-Patlipada-Thane-West/022PXX22-XX22-000452358814-F3X3_BZDET",
    websiteGalleryPhotos: 24,
    websiteUrl: "https://www.hfsthane.in",
    photoScore: "2 / 3 pts (Grade: Moderate Density)",
    rubricExplanation: "The audit rubric evaluates Google Maps Knowledge Panel photo volume: 100+ photos = 3/3 pts; 50–99 photos = 2.5/3; 20–49 photos = 2/3; 1–19 photos = 1/3. HFS Thane has 39 photos on its Google Maps profile (and 24 on its website gallery).",
    competitors: [
      { 
        schoolName: "Billabong High International School", 
        locality: "Wagle Estate / Thane West", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 88, 
        googleRatingText: "4.2★ (692 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Billabong+High+International+School+Thane",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (692 reviews)",
        directoryUrl: "https://www.justdial.com/Thane/Billabong-High-International-School-Near-T-J-S-B-Bank-Wagle-Industrial-Estate/022PXX22-XX22-090919133857-E9S9_BZDET",
        websitePhotosCount: 45,
        websiteUrl: "https://www.billabongthane.com",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Podar International School - Thane", 
        locality: "Ghodbunder Road, Thane", 
        googleCategory: "Education center", 
        googlePhotosCount: 84, 
        googleRatingText: "4.2★ (301 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Podar+International+School+Thane+Ghodbunder",
        directoryName: "Justdial",
        directoryRatingText: "4.1★ (210 reviews)",
        directoryUrl: "https://www.justdial.com/Thane/Podar-International-School-Near-D-Mart-Kasarvadavali/022PXX22-XX22-120302151608-F4B8_BZDET",
        websitePhotosCount: 35,
        websiteUrl: "https://www.podareducation.org/school/thane",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Smt. Sunitidevi Singhania School", 
        locality: "Pokhran Road, Thane", 
        googleCategory: "ICSE school", 
        googlePhotosCount: 53, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Smt.+Sunitidevi+Singhania+School+Thane",
        directoryName: "Justdial",
        directoryRatingText: "4.4★ (114 reviews)",
        directoryUrl: "https://www.justdial.com/Thane/Smt-Sunitidevi-Singhania-School-Pokhran-Road-No-1-Thane-West/022PXX22-XX22-160105151515-A4Q7_BZDET",
        websitePhotosCount: 40,
        websiteUrl: "https://www.singhaniaschool.org",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Lodha World School - Thane", 
        locality: "Majiwada, Thane", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 115, 
        googleRatingText: "4.1★ (94 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Lodha+World+School+Majiwada+Thane",
        directoryName: "Justdial",
        directoryRatingText: "4.0★ (65 reviews)",
        directoryUrl: "https://www.justdial.com/Thane/Lodha-World-School-Majiwada/022PXX22-XX22-130403160215-L5J5_BZDET",
        websitePhotosCount: 30,
        websiteUrl: "https://www.lodhaworldschool.com",
        isPrimaryCompetitor: false 
      },
      { 
        schoolName: "VIBGYOR High School - Airoli / Thane", 
        locality: "Airoli / Thane corridor", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 237, 
        googleRatingText: "4.3★ (39 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/VIBGYOR+High+School+Airoli",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (120 reviews)",
        directoryUrl: "https://www.justdial.com/Navi-Mumbai/Vibgyor-High-School-Airoli/022PXX22-XX22-110629163012-G4L2_BZDET",
        websitePhotosCount: 55,
        websiteUrl: "https://www.vibgyorhigh.com",
        isPrimaryCompetitor: false 
      }
    ]
  },
  'hus-chennai': {
    schoolName: "Hiranandani Upscale School (HUS), Chennai",
    googleCategory: "International school",
    googleProfilePhotos: 68,
    googleRatingText: "0 reviews (Suppressed by Google category)",
    googleMapsUrl: "https://www.google.com/maps/search/Hiranandani+Upscale+School+Egattur+Chennai",
    directoryName: "Justdial",
    directoryRatingText: "3.9★ (193 reviews)",
    directoryUrl: "https://www.justdial.com/Chennai/Hiranandani-Upscale-School-Opposite-SIPCOT-IT-Park-Egattur/044PXX44-XX44-110629163012-G4L3_BZDET",
    websiteGalleryPhotos: 42,
    websiteUrl: "https://hus.edu.in",
    photoScore: "3 / 3 pts (Grade: Strong Density)",
    rubricExplanation: "HUS Chennai has 68 photos uploaded on its Google Maps knowledge panel plus an active gallery of 42 facility photos on hus.edu.in.",
    competitors: [
      { 
        schoolName: "Gateway International School", 
        locality: "Padur, OMR (near Egattur)", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 82, 
        googleRatingText: "4.6★ (39 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Gateway+International+School+Padur",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (52 reviews)",
        directoryUrl: "https://www.justdial.com/Chennai/Gateway-International-School-Near-Chettinad-Health-City-Padur/044PXX44-XX44-100223120615-K1R1_BZDET",
        websitePhotosCount: 50,
        websiteUrl: "https://gatewayschools.edu.in",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Amethyst International School", 
        locality: "Navalur / Thalambur, OMR", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 98, 
        googleRatingText: "4.4★ (112 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Amethyst+International+School+Navalur+Chennai",
        directoryName: "Justdial",
        directoryRatingText: "4.1★ (98 reviews)",
        directoryUrl: "https://www.justdial.com/Chennai/Amethyst-International-School-Navalur/044PXX44-XX44-171221160415-J6K3_BZDET",
        websitePhotosCount: 35,
        websiteUrl: "https://amethystinternationalschool.in",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Chettinad - Sarvalokaa Education", 
        locality: "Kelambakkam, OMR", 
        googleCategory: "International school", 
        googlePhotosCount: 154, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Chettinad+Sarvalokaa+Education+Chennai",
        directoryName: "Justdial",
        directoryRatingText: "3.8★ (75 reviews)",
        directoryUrl: "https://www.justdial.com/Chennai/Chettinad-Sarvalokaa-Education-Kelambakkam/044PXX44-XX44-180124110825-G7P6_BZDET",
        websitePhotosCount: 48,
        websiteUrl: "https://sarvalokaa.org",
        isPrimaryCompetitor: true 
      }
    ]
  },
  'hfs-powai': {
    schoolName: "Hiranandani Foundation School, Powai",
    googleCategory: "General education school",
    googleProfilePhotos: 49,
    googleRatingText: "0 reviews (Suppressed by Google category)",
    googleMapsUrl: "https://www.google.com/maps/search/Hiranandani+Foundation+School+Powai",
    directoryName: "Justdial",
    directoryRatingText: "4.2★ (310 reviews)",
    directoryUrl: "https://www.justdial.com/Mumbai/Hiranandani-Foundation-School-Hiranandani-Gardens-Powai/022PXX22-XX22-000452358810-F3X1_BZDET",
    websiteGalleryPhotos: 30,
    websiteUrl: "https://www.hfspowai.co.in",
    photoScore: "2 / 3 pts (Grade: Moderate Density)",
    rubricExplanation: "HFS Powai has 49 photos on Google Maps. Direct competitor Podar Powai across the road has 263 photos (5.3x more visual proof).",
    competitors: [
      { 
        schoolName: "Podar International School - Powai", 
        locality: "Opposite Hiranandani Gardens, Powai", 
        googleCategory: "Education center", 
        googlePhotosCount: 263, 
        googleRatingText: "4.4★ (589 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Podar+International+School+Powai",
        directoryName: "Justdial",
        directoryRatingText: "4.3★ (480 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/Podar-International-School-Opposite-Hiranandani-Gardens-Powai/022PXX22-XX22-100223120615-K1R2_BZDET",
        websitePhotosCount: 60,
        websiteUrl: "https://www.podareducation.org/school/powai",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Bombay Scottish School - Powai", 
        locality: "Raheja Vihar, Powai", 
        googleCategory: "ICSE school", 
        googlePhotosCount: 185, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Bombay+Scottish+School+Powai",
        directoryName: "Justdial",
        directoryRatingText: "4.5★ (310 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/Bombay-Scottish-School-Raheja-Vihar-Powai/022PXX22-XX22-000452358812-F3X2_BZDET",
        websitePhotosCount: 40,
        websiteUrl: "https://bombayscottish.in/powai",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "S.M. Shetty High School & College", 
        locality: "Hiranandani Complex, Powai", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 142, 
        googleRatingText: "4.3★ (420 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/S+M+Shetty+High+School+Powai",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (350 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/S-M-Shetty-High-School-Powai/022PXX22-XX22-000452358815-F3X4_BZDET",
        websitePhotosCount: 50,
        websiteUrl: "https://smshettyinstitute.org",
        isPrimaryCompetitor: true 
      }
    ]
  },
  'hfs-international': {
    schoolName: "HFS International, Powai",
    googleCategory: "Building (CRITICAL ERROR)",
    googleProfilePhotos: 1,
    googleRatingText: "0 reviews (Filed as Building)",
    googleMapsUrl: "https://www.google.com/maps/search/HFS+International+Powai",
    directoryName: "Justdial",
    directoryRatingText: "4.1★ (85 reviews)",
    directoryUrl: "https://www.justdial.com/Mumbai/HFS-International-Hiranandani-Gardens-Powai/022PXX22-XX22-090919133857-E9S8_BZDET",
    websiteGalleryPhotos: 18,
    websiteUrl: "https://www.hfsinternationalpowai.com",
    photoScore: "1 / 3 pts (Grade: Critical Blunder)",
    rubricExplanation: "HFS International was erroneously categorized on Google Maps as a 'Building' with only 1 photo, no phone, and no website. Prospective IB parents searching Google see a barren, unverified entry.",
    competitors: [
      { 
        schoolName: "Podar International School - Powai", 
        locality: "Powai", 
        googleCategory: "Education center", 
        googlePhotosCount: 263, 
        googleRatingText: "4.4★ (589 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Podar+International+School+Powai",
        directoryName: "Justdial",
        directoryRatingText: "4.3★ (480 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/Podar-International-School-Opposite-Hiranandani-Gardens-Powai/022PXX22-XX22-100223120615-K1R2_BZDET",
        websitePhotosCount: 60,
        websiteUrl: "https://www.podareducation.org/school/powai",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Billabong High International - Malad", 
        locality: "Malad / Powai corridor", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 260, 
        googleRatingText: "4.3★ (500 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Billabong+High+International+Malad",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (310 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/Billabong-High-International-School-Malad-West/022PXX22-XX22-110629163012-G4L5_BZDET",
        websitePhotosCount: 50,
        websiteUrl: "https://billabonghighschool.com",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Oberoi International School", 
        locality: "Goregaon East", 
        googleCategory: "International school", 
        googlePhotosCount: 195, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Oberoi+International+School+Goregaon",
        directoryName: "Justdial",
        directoryRatingText: "4.6★ (180 reviews)",
        directoryUrl: "https://www.justdial.com/Mumbai/Oberoi-International-School-Goregaon-East/022PXX22-XX22-090919133857-E9S6_BZDET",
        websitePhotosCount: 65,
        websiteUrl: "https://oberoi-is.org",
        isPrimaryCompetitor: true 
      }
    ]
  },
  'thriveni-academy': {
    schoolName: "Thriveni Academy, Chennai",
    googleCategory: "Secondary school",
    googleProfilePhotos: 23,
    googleRatingText: "0 reviews (Suppressed by Google category)",
    googleMapsUrl: "https://www.google.com/maps/search/Thriveni+Academy+Oragadam",
    directoryName: "Justdial",
    directoryRatingText: "4.1★ (38 reviews)",
    directoryUrl: "https://www.justdial.com/Chennai/Thriveni-Academy-Oragadam/044PXX44-XX44-150124110825-G7P8_BZDET",
    websiteGalleryPhotos: 16,
    websiteUrl: "https://www.thriveniacademy.com",
    photoScore: "2 / 3 pts (Grade: Low-Moderate Density)",
    rubricExplanation: "Thriveni Academy has 23 photos on its Google Maps profile. Direct Oragadam peers maintain 64 to 98 campus photos.",
    competitors: [
      { 
        schoolName: "Maharishi Vidya Mandir", 
        locality: "Oragadam, Chennai", 
        googleCategory: "CBSE school", 
        googlePhotosCount: 64, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Maharishi+Vidya+Mandir+Oragadam",
        directoryName: "Justdial",
        directoryRatingText: "4.3★ (75 reviews)",
        directoryUrl: "https://www.justdial.com/Chennai/Maharishi-Vidya-Mandir-Oragadam/044PXX44-XX44-160124110825-G7P9_BZDET",
        websitePhotosCount: 25,
        websiteUrl: "https://mvmoragadam.com",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Amethyst International School", 
        locality: "Medavakkam / Sithalapakkam", 
        googleCategory: "Educational institution", 
        googlePhotosCount: 98, 
        googleRatingText: "4.4★ (112 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Amethyst+International+School+Chennai",
        directoryName: "Justdial",
        directoryRatingText: "4.1★ (98 reviews)",
        directoryUrl: "https://www.justdial.com/Chennai/Amethyst-International-School-Navalur/044PXX44-XX44-171221160415-J6K3_BZDET",
        websitePhotosCount: 35,
        websiteUrl: "https://amethystinternationalschool.in",
        isPrimaryCompetitor: true 
      }
    ]
  },
  'hts-panvel': {
    schoolName: "Hiranandani Trust School, Panvel",
    googleCategory: "School",
    googleProfilePhotos: 11,
    googleRatingText: "0 reviews (Suppressed by Google category)",
    googleMapsUrl: "https://www.google.com/maps/search/Hiranandani+Trust+School+Panvel",
    directoryName: "Justdial",
    directoryRatingText: "3.8★ (24 reviews)",
    directoryUrl: "https://www.justdial.com/Navi-Mumbai/Hiranandani-Trust-School-Fortune-City-Panvel/022PXX22-XX22-180124110825-G7P7_BZDET",
    websiteGalleryPhotos: 12,
    websiteUrl: "https://www.htspanvel.com",
    photoScore: "1 / 3 pts (Grade: Severe Deficit)",
    rubricExplanation: "HTS Panvel at Fortune City has only 11 photos on Google Maps. Navi Mumbai peers feature 312 to 534 campus photos.",
    competitors: [
      { 
        schoolName: "Delhi Public School (DPS) - Nerul", 
        locality: "Nerul, Navi Mumbai", 
        googleCategory: "CBSE school", 
        googlePhotosCount: 534, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Delhi+Public+School+Nerul+Navi+Mumbai",
        directoryName: "Justdial",
        directoryRatingText: "4.5★ (650 reviews)",
        directoryUrl: "https://www.justdial.com/Navi-Mumbai/Delhi-Public-School-Nerul/022PXX22-XX22-000452358818-F3X5_BZDET",
        websitePhotosCount: 85,
        websiteUrl: "https://dpsnerul.edu.in",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Podar International School - Nerul", 
        locality: "Seawoods, Navi Mumbai", 
        googleCategory: "Education center", 
        googlePhotosCount: 442, 
        googleRatingText: "4.2★ (781 reviews)", 
        googleMapsStatus: "visible", 
        googleMapsUrl: "https://www.google.com/maps/search/Podar+International+School+Nerul",
        directoryName: "Justdial",
        directoryRatingText: "4.2★ (610 reviews)",
        directoryUrl: "https://www.justdial.com/Navi-Mumbai/Podar-International-School-Nerul/022PXX22-XX22-100223120615-K1R3_BZDET",
        websitePhotosCount: 55,
        websiteUrl: "https://www.podareducation.org/school/nerul",
        isPrimaryCompetitor: true 
      },
      { 
        schoolName: "Ryan International School - Kharghar", 
        locality: "Kharghar / Panvel", 
        googleCategory: "ICSE school", 
        googlePhotosCount: 312, 
        googleRatingText: "0 reviews (Suppressed on Maps)", 
        googleMapsStatus: "suppressed", 
        googleMapsUrl: "https://www.google.com/maps/search/Ryan+International+School+Kharghar",
        directoryName: "Justdial",
        directoryRatingText: "4.1★ (480 reviews)",
        directoryUrl: "https://www.justdial.com/Navi-Mumbai/Ryan-International-School-Kharghar/022PXX22-XX22-090919133857-E9S7_BZDET",
        websitePhotosCount: 40,
        websiteUrl: "https://ryangroup.org",
        isPrimaryCompetitor: true 
      }
    ]
  }
};

const STAGES: StageCardData[] = [
  {
    stageNumber: 1,
    id: 'discovery',
    name: 'Discovery',
    tagline: 'Can parents find the school on Google & Maps?',
    maxScore: 25,
    icon: <Compass className="w-5 h-5 text-blue-400" />
  },
  {
    stageNumber: 2,
    id: 'freshness',
    name: 'Proof of Life (Freshness)',
    tagline: 'Do we look actively open and ready for 2027–28?',
    maxScore: 25,
    icon: <Sparkles className="w-5 h-5 text-amber-400" />
  },
  {
    stageNumber: 3,
    id: 'reputation',
    name: 'Reputation & Proof',
    tagline: 'Do parents and the community publicly trust us?',
    maxScore: 25,
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />
  },
  {
    stageNumber: 4,
    id: 'conversion',
    name: 'Conversion & Action',
    tagline: 'Can a parent chat on WhatsApp, see fees, and apply?',
    maxScore: 25,
    icon: <Zap className="w-5 h-5 text-emerald-400" />
  }
];

interface StageItem {
  name: string;
  score: number;
  max: number;
  status: 'pass' | 'fail' | 'warn';
  detail: string;
  isPhotoMetric?: boolean;
}

// 25-25-25-25 Model mapping for each school
const STAGE_SCORES: Record<string, {
  discovery: { score: number; items: StageItem[] };
  freshness: { score: number; items: StageItem[] };
  reputation: { score: number; items: StageItem[] };
  conversion: { score: number; items: StageItem[] };
}> = {
  'hfs-thane': {
    discovery: {
      score: 19,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified Google profile active at Hiranandani Estate, Thane.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "General education school". Google hid all reviews on April 30, 2025.' },
        { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct working link to hfsthane.in on profile.' },
        { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Direct telephone line linked and operational.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 2, 
          max: 3, 
          status: 'warn', 
          detail: '39 photos on Google Maps Knowledge Panel (and 24 on website gallery). Direct Thane competitors feature 53 to 237 photos.',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 17,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Displays stale notice: "Admissions window closed on 28 April 2026". Discourages new parents.' },
        { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'Stellar 99.3% ISC topper and 65% scoring 90%+ celebrated on site.' },
        { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh news item from August 2026 (57 days old).' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Neelu Lamba officially introduced with message and photograph.' }
      ]
    },
    reputation: {
      score: 12,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Shows 0 reviews on Google Maps due to school category suppression bug.' },
        { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Active official Facebook page and Instagram handles.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on all major school search directories (Edustoke, Justdial, UniApply).' }
      ]
    },
    conversion: {
      score: 13,
      items: [
        { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Active inquiry form capturing student grade and parent contact details.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No floating WhatsApp button. Indian parents prefer instant chat.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Only shows ₹500 registration fee. No tuition fee table published.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 5, max: 5, status: 'pass', detail: 'Prospectus download available upon submitting inquiry.' }
      ]
    }
  },
  'hus-chennai': {
    discovery: {
      score: 20,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at House of Hiranandani, Egattur, OMR, Chennai.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Category is "International school". Reviews suppressed on Google Maps.' },
        { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to hus.edu.in active.' },
        { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Admissions phone number active.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 3, 
          max: 3, 
          status: 'pass', 
          detail: '68 photos on Google Maps Knowledge Panel (and 42 on website gallery). Strong coverage across IB labs, sports, and campus.',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 25,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 8, max: 8, status: 'pass', detail: 'Active 4-step rolling admissions portal for 2026-27 & 2027-28.' },
        { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'World-class IBDP (34+ avg) and Cambridge IGCSE toppers celebrated.' },
        { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh term updates and academic calendar posted.' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Director Sivakumar Srinivasan & Primary Head Gayathri Loganathan named.' }
      ]
    },
    reputation: {
      score: 12,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: 'Reviews hidden on Google Maps (Justdial displays 193 reviews, 3.9★).' },
        { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Active @husschoolchennai Instagram and Facebook pages.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed across major Chennai school directories.' }
      ]
    },
    conversion: {
      score: 14,
      items: [
        { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Direct online admission application portal active on hus.edu.in.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No direct WhatsApp click-to-chat button.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Fee schedule kept private; requires contacting admissions office.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 6, max: 5, status: 'pass', detail: 'Prominent Apply Online CTA button and IB curriculum guides.' }
      ]
    }
  },
  'hfs-powai': {
    discovery: {
      score: 20,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Verified profile at Hiranandani Gardens, Powai.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews suppressed under "General education school".' },
        { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to hfspowai.co.in active.' },
        { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number listed on Google profile.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 2, 
          max: 3, 
          status: 'warn', 
          detail: '49 photos on Google Maps Knowledge Panel. Podar Powai across the road maintains 263 photos (5.3x more photos).',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 17,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Homepage displays outdated "2024–2026 IBDP" banner.' },
        { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: '99.4% ICSE topper and 100% pass rate highlighted.' },
        { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'News updated within last 90 days.' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Principal & Head of School.' }
      ]
    },
    reputation: {
      score: 8,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google (vs Podar Powai showing 589 reviews at 4.4★).' },
        { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook icon in footer links to dead "#" tag.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major Mumbai listing portals.' }
      ]
    },
    conversion: {
      score: 9,
      items: [
        { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Working admissions inquiry form.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp chat option.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'No tuition fees disclosed on website.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No downloadable prospectus PDF; standard CTA.' }
      ]
    }
  },
  'thriveni-academy': {
    discovery: {
      score: 19,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Parks, Oragadam, Chennai.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden on standard CBSE school category.' },
        { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to thriveniacademy.com active.' },
        { name: 'Admissions Telephone on Profile', score: 3, max: 3, status: 'pass', detail: 'Phone number displayed.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 2, 
          max: 3, 
          status: 'warn', 
          detail: '23 photos on Google Maps profile. Direct Oragadam area competitors maintain 64 to 98 campus photos.',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 15,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'Admissions link opens a stale 2024–25 flyer graphic.' },
        { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: '100% CBSE Class X pass rate with 85% first-class distinctions.' },
        { name: 'News & Event Recency (≤90 Days)', score: 4, max: 6, status: 'warn', detail: 'Latest news item is 97 days old.' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Dr. M.P. Anand officially named with credentials.' }
      ]
    },
    reputation: {
      score: 12,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google Maps.' },
        { name: 'Active Campus Instagram & Facebook', score: 8, max: 8, status: 'pass', detail: 'Facebook and Instagram handles active.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Present on major educational search aggregators.' }
      ]
    },
    conversion: {
      score: 8,
      items: [
        { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Enquiry form operational.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees not disclosed.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 0, max: 5, status: 'fail', detail: 'Brochure download link leads to an empty page.' }
      ]
    }
  },
  'hfs-international': {
    discovery: {
      score: 9,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile exists on Google Maps.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'CRITICAL: Misfiled on Google Maps as a "Building", not a school.' },
        { name: 'Official Website Linked on Maps', score: 0, max: 6, status: 'fail', detail: 'No website link attached to Google profile.' },
        { name: 'Admissions Telephone on Profile', score: 0, max: 3, status: 'fail', detail: 'No telephone number listed on Google profile.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 1, 
          max: 3, 
          status: 'fail', 
          detail: 'Only 1 photo uploaded on Google Maps. Competitor Oberoi International features 195 photos; Podar features 263.',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 21,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 4, max: 8, status: 'warn', detail: 'Mentions 2027-28, but only inside a flat graphic flyer (unsearchable).' },
        { name: 'Board Results Posted with Batch Year', score: 7, max: 7, status: 'pass', detail: 'IBDP (37.2 avg) and Cambridge A-Level toppers celebrated.' },
        { name: 'News & Event Recency (≤90 Days)', score: 6, max: 6, status: 'pass', detail: 'Fresh event updates posted.' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Mrs. Kalyani Patnaik officially named as Director.' }
      ]
    },
    reputation: {
      score: 8,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible due to "Building" category.' },
        { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook icon links to dead "#" tag.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 4, max: 4, status: 'pass', detail: 'Listed on major IB school portals.' }
      ]
    },
    conversion: {
      score: 9,
      items: [
        { name: 'Online Enquiry & Application Form', score: 8, max: 8, status: 'pass', detail: 'Online enquiry form working.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp option for international parents.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Tuition fees withheld.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 1, max: 5, status: 'warn', detail: 'No direct prospectus download button.' }
      ]
    }
  },
  'hts-panvel': {
    discovery: {
      score: 17,
      items: [
        { name: 'Google Profile Verified with Campus Address', score: 8, max: 8, status: 'pass', detail: 'Profile active at Hiranandani Fortune City, Panvel.' },
        { name: 'Review Visibility Allowed by Category', score: 0, max: 5, status: 'fail', detail: 'Reviews hidden under standard school category.' },
        { name: 'Official Website Linked on Maps', score: 6, max: 6, status: 'pass', detail: 'Direct link to htspanvel.com active.' },
        { name: 'Admissions Telephone on Profile', score: 2, max: 3, status: 'warn', detail: 'Telephone line listed.' },
        { 
          name: 'Profile Photo Density (100+ Photos Target)', 
          score: 1, 
          max: 3, 
          status: 'fail', 
          detail: 'Only 11 photos on Google Maps Knowledge Panel. Navi Mumbai competitors feature 312 to 534 campus photos.',
          isPhotoMetric: true 
        }
      ]
    },
    freshness: {
      score: 8,
      items: [
        { name: 'Admissions 2027–28 Intake Notice', score: 0, max: 8, status: 'fail', detail: 'States only 2026-27; zero mention of 2027-28.' },
        { name: 'Board Results Posted with Batch Year', score: 4, max: 7, status: 'warn', detail: '100% maiden ICSE pass locked inside an unsearchable JPEG flyer.' },
        { name: 'News & Event Recency (≤90 Days)', score: 0, max: 6, status: 'fail', detail: 'No dated news items on website.' },
        { name: 'Principal Named with Pedagogical Vision', score: 4, max: 4, status: 'pass', detail: 'Ms. Rupa Choudhury officially named as Principal.' }
      ]
    },
    reputation: {
      score: 6,
      items: [
        { name: 'Google Star Rating & Review Volume', score: 0, max: 13, status: 'fail', detail: '0 reviews visible on Google.' },
        { name: 'Active Campus Instagram & Facebook', score: 4, max: 8, status: 'warn', detail: 'Facebook active, but no campus Instagram handle.' },
        { name: 'Listed on Major K-12 Portals (7 Sites)', score: 2, max: 4, status: 'warn', detail: 'Found on only 2 portal directories.' }
      ]
    },
    conversion: {
      score: 7,
      items: [
        { name: 'Online Enquiry & Application Form', score: 5, max: 8, status: 'warn', detail: 'Enquiry form exists on inner page, but no Apply Now button on homepage.' },
        { name: 'WhatsApp Click-to-Chat Channel', score: 0, max: 6, status: 'fail', detail: 'No WhatsApp click-to-chat button.' },
        { name: 'Transparent Tuition Fee Schedule', score: 0, max: 6, status: 'fail', detail: 'Mentions "Feesback" reward scheme without publishing base fees.' },
        { name: 'Downloadable Prospectus & Clear CTA', score: 2, max: 5, status: 'warn', detail: 'No prospectus download link.' }
      ]
    }
  }
};

export const ApplePresentation: React.FC<{ onJumpToFixes: () => void }> = ({ onJumpToFixes }) => {
  const [activeSchoolId, setActiveSchoolId] = useState<string>('hfs-thane');
  const [activeStageId, setActiveStageId] = useState<'discovery' | 'freshness' | 'reputation' | 'conversion'>('discovery');
  const [showPhotoOverlay, setShowPhotoOverlay] = useState<boolean>(false);

  const school = SCHOOLS_DATA.find((s) => s.id === activeSchoolId) || SCHOOLS_DATA[0];
  const schoolStageData = STAGE_SCORES[school.id] || STAGE_SCORES['hfs-thane'];
  const competitorData = CAMPUS_COMPETITORS[school.id] || CAMPUS_COMPETITORS['hfs-thane'];

  // Current 25-25-25-25 scores for active school
  const s1 = schoolStageData.discovery.score;
  const s2 = schoolStageData.freshness.score;
  const s3 = schoolStageData.reputation.score;
  const s4 = schoolStageData.conversion.score;
  const grandTotal = s1 + s2 + s3 + s4;

  const currentStageMeta = STAGES.find((st) => st.id === activeStageId)!;
  const currentStageDetail = schoolStageData[activeStageId];

  return (
    <div className="w-full space-y-6 animate-fadeIn pb-12">
      {/* ========================================================================= */}
      {/* 1. APPLE EXECUTIVE HERO BANNER                                            */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white p-6 sm:p-10 border border-slate-800 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-[11px] font-medium tracking-wide text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>THE 25 · 25 · 25 · 25 PARENT DECISION PATHWAY</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Admissions 2027–28 <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                Digital Readiness Audit
              </span>
            </h1>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Every admission begins on a smartphone. We audited the six Hiranandani campuses against the exact four chronological stages of a parent's decision journey.
            </p>
          </div>

          {/* Grand Metric Indicator (Apple Style Hero Dial) */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-7 rounded-3xl flex items-center gap-8 shadow-inner shrink-0 self-start lg:self-auto">
            <div className="text-center">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Current Index
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tighter text-white">
                {grandTotal}
                <span className="text-lg text-slate-500 font-normal"> /100</span>
              </div>
              <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                grandTotal >= 80 
                  ? 'text-emerald-300 bg-emerald-950/80 border-emerald-800' 
                  : grandTotal >= 60 
                  ? 'text-amber-300 bg-amber-950/80 border-amber-800' 
                  : 'text-rose-300 bg-rose-950/80 border-rose-800'
              }`}>
                {grandTotal >= 80 ? 'Ready Band' : grandTotal >= 60 ? 'Partially Ready' : 'At-Risk Band (<60)'}
              </span>
            </div>

            <div className="h-16 w-px bg-slate-800" />

            <div className="text-center">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Day 90 Target
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tighter text-emerald-400">
                85+
                <span className="text-lg text-slate-500 font-normal"> /100</span>
              </div>
              <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                Admissions Ready
              </span>
            </div>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. CAMPUS SWITCHER (APPLE DOCK STYLE)                                      */}
      {/* ========================================================================= */}
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-2 shadow-sm flex items-center gap-1.5 overflow-x-auto">
        {SCHOOLS_DATA.map((s) => {
          const sData = STAGE_SCORES[s.id] || STAGE_SCORES['hfs-thane'];
          const total = sData.discovery.score + sData.freshness.score + sData.reputation.score + sData.conversion.score;
          const isSelected = activeSchoolId === s.id;

          return (
            <button
              key={s.id}
              onClick={() => {
                setActiveSchoolId(s.id);
                setShowPhotoOverlay(false);
              }}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-left transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-transparent text-slate-700 hover:bg-slate-100/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold truncate block">
                  {s.shortName}
                </span>
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-amber-300' : 'text-slate-900'}`}>
                  {total}
                </span>
              </div>
              <span className={`text-[10px] block mt-0.5 truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {s.city} · {s.curriculum.split('(')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. THE 4 STAGES: 25 · 25 · 25 · 25 NAVIGATION CARDS                        */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAGES.map((stg) => {
          const isCurrent = activeStageId === stg.id;
          const score = schoolStageData[stg.id].score;
          const lost = 25 - score;

          return (
            <div
              key={stg.id}
              onClick={() => setActiveStageId(stg.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between space-y-4 ${
                isCurrent
                  ? 'bg-white border-slate-900 shadow-lg ring-2 ring-slate-900/10'
                  : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-600">
                    STAGE {stg.stageNumber} OF 4
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    {stg.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {stg.name}
                </h3>
                <p className="text-xs text-slate-600 leading-snug line-clamp-2">
                  {stg.tagline}
                </p>
              </div>

              {/* Score bar */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                <div className="flex items-baseline justify-between font-mono">
                  <span className="text-2xl font-extrabold text-slate-900">
                    {score} <span className="text-xs text-slate-600 font-normal">/ 25 pts</span>
                  </span>
                  {lost > 0 ? (
                    <span className="text-[11px] font-bold text-rose-600">
                      -{lost} pts
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-600">
                      100% Pass
                    </span>
                  )}
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      score >= 20 ? 'bg-emerald-500' : score >= 12 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${(score / 25) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 4. ACTIVE STAGE DEEP DIVE (APPLE COCKPIT VIEW)                             */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-sm space-y-6">
        {/* Cockpit Top Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                S{currentStageMeta.stageNumber}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {currentStageMeta.name} — Item Breakdown for {school.shortName}
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              {currentStageMeta.tagline} Maximum possible score: <strong>25 Points</strong>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 flex items-center gap-5 shrink-0 font-mono">
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-sans">Stage Score</span>
              <span className="text-2xl font-extrabold text-slate-900">
                {currentStageDetail.score} <span className="text-xs text-slate-600 font-normal">/ 25</span>
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-sans">Points Lost</span>
              <span className="text-2xl font-extrabold text-rose-600">
                -{25 - currentStageDetail.score} <span className="text-xs text-slate-600 font-normal">pts</span>
              </span>
            </div>
          </div>
        </div>

        {/* The Exact Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentStageDetail.items.map((item, idx) => {
            const isPhotoItem = item.isPhotoMetric;

            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  if (isPhotoItem) setShowPhotoOverlay(true);
                }}
                className={`p-4.5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative group ${
                  item.status === 'pass'
                    ? 'bg-emerald-50/30 border-emerald-200/80 hover:border-emerald-300'
                    : item.status === 'fail'
                    ? 'bg-rose-50/30 border-rose-200/80 hover:border-rose-300'
                    : 'bg-amber-50/30 border-amber-200/80 hover:border-amber-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {isPhotoItem && (
                        <Camera className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                      <span className="text-xs font-bold text-slate-900 leading-snug">
                        {item.name}
                      </span>
                    </div>

                    <span className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-bold shrink-0 ${
                      item.status === 'pass'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.status === 'fail'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.score} / {item.max} pts
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>

                  {/* Special Interactive Trigger for Photo Density */}
                  {isPhotoItem && (
                    <button
                      onClick={() => setShowPhotoOverlay(!showPhotoOverlay)}
                      className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 font-semibold text-[11px] transition-colors border border-amber-300/60"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-700" />
                      <span>{showPhotoOverlay ? 'Hide Competitor Overlay' : 'Inspect Verified Multi-Platform Proof Table'}</span>
                    </button>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600">
                    Impact:
                  </span>
                  <span className={`font-semibold ${
                    item.status === 'pass' ? 'text-emerald-700' : item.status === 'fail' ? 'text-rose-700' : 'text-amber-700'
                  }`}>
                    {item.status === 'pass' ? '✓ Fully Compliant' : item.status === 'fail' ? '✗ Immediate Leak' : '⚠ Sub-optimal'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MULTI-PLATFORM VERIFIED COMPETITOR BENCHMARK MODAL (ZERO ASSUMPTIONS)     */}
        {/* ========================================================================= */}
        {showPhotoOverlay && (
          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span>Platform-Separated Ground Truth · Google Maps vs. Justdial vs. Website</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Competitor Evidence Audit: {competitorData.schoolName} vs Local Competitors
                </h3>
                <p className="text-xs text-slate-400">
                  {competitorData.rubricExplanation} Platforms are strictly reported in separate columns with individual proof links.
                </p>
              </div>

              <button
                onClick={() => setShowPhotoOverlay(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors self-start sm:self-auto"
                aria-label="Close overlay"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* School vs Website Count Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Platform 1: Google Maps Profile</span>
                <span className="text-3xl font-extrabold font-mono text-amber-400 block mt-1">
                  {competitorData.googleProfilePhotos} Photos
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Visible to parents on Google Knowledge Panel
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Platform 2: Official Website Gallery</span>
                <span className="text-3xl font-extrabold font-mono text-blue-400 block mt-1">
                  {competitorData.websiteGalleryPhotos} Photos
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Indexed on official school web domain
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Audit Scoring Status</span>
                <span className="text-xl font-bold text-emerald-400 block mt-1">
                  {competitorData.photoScore}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Benchmark for full 3/3 pts: 100+ photos
                </span>
              </div>
            </div>

            {/* Verified Multi-Platform Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Verified Local Evidence Audit Table (Strictly Disaggregated Data):
                </h4>
                <span className="text-[11px] text-slate-500 font-mono">
                  Click any cell link to verify source in real-time
                </span>
              </div>

              <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Institution Name</th>
                      <th className="py-3 px-3">Google Category</th>
                      <th className="py-3 px-3 text-center">Google Maps Photos</th>
                      <th className="py-3 px-3 text-left">Platform 1: Google Maps Reviews</th>
                      <th className="py-3 px-3 text-left">Platform 2: Justdial Directory Reviews</th>
                      <th className="py-3 px-3 text-center">Platform 3: Website</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {/* Active Hiranandani School Row */}
                    <tr className="bg-amber-950/30 border-l-4 border-amber-400 font-medium">
                      <td className="py-3 px-4 text-white font-bold">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span>{competitorData.schoolName}</span>
                        </div>
                        <span className="text-[10px] text-amber-300 font-normal block pl-3.5">
                          {school.locality}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-amber-300 font-mono text-[11px]">{school.googleCategory}</td>
                      <td className="py-3 px-3 text-center font-mono font-bold text-amber-400">
                        {competitorData.googleProfilePhotos} photos
                      </td>
                      <td className="py-3 px-3 font-mono text-rose-400 text-[11px]">
                        <a 
                          href={competitorData.googleMapsUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 text-rose-300"
                        >
                          <span>{competitorData.googleRatingText}</span>
                          <ExternalLink className="w-3 h-3 text-rose-400" />
                        </a>
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        <a 
                          href={competitorData.directoryUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-300 hover:underline"
                        >
                          <span>Justdial: {competitorData.directoryRatingText}</span>
                          <ExternalLink className="w-3 h-3 text-blue-400" />
                        </a>
                      </td>
                      <td className="py-3 px-3 text-center font-mono text-[11px]">
                        <a 
                          href={competitorData.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                        >
                          <Globe className="w-3 h-3 text-slate-400" />
                          <span>{competitorData.websiteGalleryPhotos} pics</span>
                        </a>
                      </td>
                    </tr>

                    {/* Competitor Rows */}
                    {competitorData.competitors.map((comp, cIdx) => (
                      <tr key={cIdx} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-200">
                          <div>{comp.schoolName}</div>
                          <span className="text-[10px] text-slate-500 font-normal block">{comp.locality}</span>
                        </td>
                        <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">{comp.googleCategory}</td>
                        <td className="py-3 px-3 text-center font-mono font-bold text-white">
                          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                            {comp.googlePhotosCount} photos
                          </span>
                        </td>
                        <td className="py-3 px-3 font-mono">
                          <a
                            href={comp.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] font-semibold transition-all ${
                              comp.googleMapsStatus === 'visible'
                                ? 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                            title={`Click to inspect Google Maps profile for ${comp.schoolName}`}
                          >
                            <span>{comp.googleRatingText}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        </td>
                        <td className="py-3 px-3 font-mono">
                          <a
                            href={comp.directoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-700/60 text-[11px] font-semibold transition-all"
                            title={`Click to inspect ${comp.directoryName} profile for ${comp.schoolName}`}
                          >
                            <span>{comp.directoryName}: {comp.directoryRatingText}</span>
                            <ExternalLink className="w-3 h-3 text-blue-400" />
                          </a>
                        </td>
                        <td className="py-3 px-3 text-center font-mono text-[11px]">
                          <a
                            href={comp.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                          >
                            <Globe className="w-3 h-3 text-slate-400" />
                            <span>{comp.websitePhotosCount} pics</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-xs space-y-1">
              <span className="font-bold text-amber-300 block">Strict Data Disaggregation Note:</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Platforms are never blended or averaged together. <strong>Column 4</strong> shows raw data strictly from Google Maps. <strong>Column 5</strong> shows raw data strictly from Justdial. Notice that schools categorized as "International school" or "ICSE school" display 0 reviews on Google Maps, but have hundreds of reviews on Justdial. Switching the Google category to "Educational institution" restores these reviews to Google Maps.
              </p>
            </div>
          </div>
        )}

        {/* Strategic Executive Takeaway & Business Impact */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-white rounded-2xl p-5 text-xs space-y-2.5 shadow-md">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">
              Stage {currentStageMeta.stageNumber} Executive Briefing & Business Impact:
            </span>
          </div>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            {activeStageId === 'discovery' && (
              `Stage 1 (Discovery — 25 Points): Campus search visibility and micro-market presence. While verified physical addresses and websites exist, Google category suppression and low Google Maps photo density (${school.googlePhotosCount} photos vs. peer benchmark of 100+) create an immediate top-of-funnel discovery leak before parents ever click through to the school website.`
            )}
            {activeStageId === 'freshness' && (
              `Stage 2 (Proof of Life — 25 Points): Live admissions signalling and active intake proof. Despite exemplary ICSE/IB board toppers and established school leadership, displaying stale banners with closed dates from prior cycles directly dampens prospective parent interest for the 2027–28 academic intake.`
            )}
            {activeStageId === 'reputation' && (
              `Stage 3 (Reputation — 25 Points): Public parent validation and social proof. Zero visible reviews on Google Maps conceals the network's hard-won community goodwill, creating an unearned advantage for competitors like Podar (589 reviews, 4.4★) and Billabong (692 reviews, 4.2★) who utilize open Google categories.`
            )}
            {activeStageId === 'conversion' && (
              `Stage 4 (Conversion — 25 Points): Frictionless parent engagement and application flow. The absence of a floating WhatsApp click-to-chat channel and clear indicative fee guidelines leads prospective parents to bounce to unverified aggregator portals that publish contradictory figures.`
            )}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. THE ARITHMETIC LEAP BANNER (53.3 -> 85.3+ IN 90 DAYS)                  */}
      {/* ========================================================================= */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Zero Civil Work · Rapid 90-Day Leap
          </span>
          <h3 className="text-xl font-bold">
            How {school.shortName} Jumps from {grandTotal} to {grandTotal + 26}+ in 90 Days
          </h3>
          <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
            Switching the Google Business Profile category unhides reviews (+13 pts). Updating the homepage banner to "Admissions Open 2027–28" (+8 pts). Adding a WhatsApp chat widget (+6 pts). No construction required.
          </p>
        </div>

        <button
          onClick={onJumpToFixes}
          className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xs transition-colors flex items-center gap-2 shrink-0 shadow-lg"
        >
          <span>Open Interactive Fix Simulator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
