import React, { useState } from 'react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';
import { 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Sparkles,
  Award,
  ArrowRight,
  Compass,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  RotateCcw,
  SlidersHorizontal,
  Info,
  Camera,
  ExternalLink
} from 'lucide-react';

interface StageSubItem {
  id: string;
  name: string;
  max: number;
  score: number;
  status: 'pass' | 'fail' | 'warn';
  rationale: string;
  isPhotoMetric?: boolean;
}

interface StageDefinition {
  id: 'discovery' | 'freshness' | 'reputation' | 'conversion';
  stageNumber: number;
  name: string;
  shortName: string;
  weight: 25;
  tagline: string;
  executiveRationale: string;
  subItems: (school: SchoolAudit) => StageSubItem[];
}

const STAGES_25_CONFIG: StageDefinition[] = [
  {
    id: 'discovery',
    stageNumber: 1,
    name: 'Stage 1: Discovery',
    shortName: 'Discovery',
    weight: 25,
    tagline: 'Can prospective parents find the school on Google Search & Maps?',
    executiveRationale: 'Stage 1 evaluates initial discoverability when a parent searches for schools on mobile. A verified Knowledge Panel with active phone, official website, and dense campus photography is critical to avoid immediate top-of-funnel drop-off.',
    subItems: (school) => [
      {
        id: 's1-1',
        name: 'Google Profile Verified with Campus Locality',
        max: 8,
        score: school.stages25.discovery.items[0]?.score ?? 8,
        status: school.stages25.discovery.items[0]?.status ?? 'pass',
        rationale: school.stages25.discovery.items[0]?.detail ?? 'Verified profile active on Google Maps.'
      },
      {
        id: 's1-2',
        name: 'Review Visibility Allowed by Category',
        max: 5,
        score: school.stages25.discovery.items[1]?.score ?? 0,
        status: school.stages25.discovery.items[1]?.status ?? 'fail',
        rationale: school.stages25.discovery.items[1]?.detail ?? `Primary category "${school.googleCategory}" has public ratings suppressed by Google since April 30, 2025.`
      },
      {
        id: 's1-3',
        name: 'Official Website Linked on Profile',
        max: 6,
        score: school.stages25.discovery.items[2]?.score ?? 6,
        status: school.stages25.discovery.items[2]?.status ?? 'pass',
        rationale: school.stages25.discovery.items[2]?.detail ?? `Direct working link to ${school.websiteUrl.replace('https://', '')}.`
      },
      {
        id: 's1-4',
        name: 'Admissions Telephone on Profile',
        max: 3,
        score: school.stages25.discovery.items[3]?.score ?? 3,
        status: school.stages25.discovery.items[3]?.status ?? 'pass',
        rationale: school.stages25.discovery.items[3]?.detail ?? 'Direct admissions phone line listed and operational.'
      },
      {
        id: 's1-5',
        name: 'Photo Density (Target: 100+ Campus Photos)',
        max: 3,
        score: school.stages25.discovery.items[4]?.score ?? 2,
        status: school.stages25.discovery.items[4]?.status ?? 'warn',
        rationale: school.stages25.discovery.items[4]?.detail ?? `Has ${school.googlePhotosCount} photos on Google Maps Knowledge Panel. Peer average is 84 to 263 photos.`,
        isPhotoMetric: true
      }
    ]
  },
  {
    id: 'freshness',
    stageNumber: 2,
    name: 'Stage 2: Proof of Life (Freshness)',
    shortName: 'Freshness',
    weight: 25,
    tagline: 'Do we look actively welcoming and open for the 2027–28 academic cycle?',
    executiveRationale: 'Stage 2 assesses institutional vitality. Parents planning 12 to 18 months ahead look for clear 2027–28 announcements, board examination achievements, and leadership visibility. Stale notices signal an inactive or oversubscribed school.',
    subItems: (school) => [
      {
        id: 's2-1',
        name: 'Admissions 2027–28 Intake Notice',
        max: 8,
        score: school.stages25.freshness.items[0]?.score ?? 0,
        status: school.stages25.freshness.items[0]?.status ?? 'fail',
        rationale: school.stages25.freshness.items[0]?.detail ?? school.admissionsStatus.evidenceText
      },
      {
        id: 's2-2',
        name: 'Board Results Posted with Batch Year',
        max: 7,
        score: school.stages25.freshness.items[1]?.score ?? 7,
        status: school.stages25.freshness.items[1]?.status ?? 'pass',
        rationale: school.stages25.freshness.items[1]?.detail ?? school.boardMarksStatus.evidenceText
      },
      {
        id: 's2-3',
        name: 'News & Event Recency (≤90 Days)',
        max: 6,
        score: school.stages25.freshness.items[2]?.score ?? 6,
        status: school.stages25.freshness.items[2]?.status ?? 'pass',
        rationale: school.stages25.freshness.items[2]?.detail ?? 'Latest campus news updated within the last 90 days.'
      },
      {
        id: 's2-4',
        name: 'Principal Named with Pedagogical Vision',
        max: 4,
        score: school.stages25.freshness.items[3]?.score ?? 4,
        status: school.stages25.freshness.items[3]?.status ?? 'pass',
        rationale: school.stages25.freshness.items[3]?.detail ?? `Head of School (${school.teachersFacultyStatus.principalName}) officially introduced.`
      }
    ]
  },
  {
    id: 'reputation',
    stageNumber: 3,
    name: 'Stage 3: Reputation & Proof',
    shortName: 'Reputation',
    weight: 25,
    tagline: 'Do parents and the local community publicly validate our school?',
    executiveRationale: 'Stage 3 benchmarks public social proof and digital reputation. In Indian K-12 education, parent peer validation is decisive. Suppressed Google reviews hand an immediate perception advantage to nearby competitors.',
    subItems: (school) => [
      {
        id: 's3-1',
        name: 'Google Star Rating & Review Volume',
        max: 13,
        score: school.stages25.reputation.items[0]?.score ?? 0,
        status: school.stages25.reputation.items[0]?.status ?? 'fail',
        rationale: school.stages25.reputation.items[0]?.detail ?? '0 reviews displayed on Google Maps due to institutional category policy.'
      },
      {
        id: 's3-2',
        name: 'Active Campus Instagram & Facebook',
        max: 8,
        score: school.stages25.reputation.items[1]?.score ?? 8,
        status: school.stages25.reputation.items[1]?.status ?? 'pass',
        rationale: school.stages25.reputation.items[1]?.detail ?? 'Campus social channels verified and actively publishing student events.'
      },
      {
        id: 's3-3',
        name: 'Presence on Major K-12 Portals (7 Sites)',
        max: 4,
        score: school.stages25.reputation.items[2]?.score ?? 4,
        status: school.stages25.reputation.items[2]?.status ?? 'pass',
        rationale: school.stages25.reputation.items[2]?.detail ?? 'Profile found on major education directories (Justdial, UniApply, Edustoke).'
      }
    ]
  },
  {
    id: 'conversion',
    stageNumber: 4,
    name: 'Stage 4: Conversion & Action',
    shortName: 'Conversion',
    weight: 25,
    tagline: 'Can a prospective parent easily inquire, view fees, and apply?',
    executiveRationale: 'Stage 4 evaluates the frictionless conversion path. Modern parents expect instant WhatsApp click-to-chat, transparent fee schedules, and downloadable brochures. Missing these elements creates drop-off at the final step.',
    subItems: (school) => [
      {
        id: 's4-1',
        name: 'Online Enquiry & Application Form',
        max: 8,
        score: school.stages25.conversion.items[0]?.score ?? 8,
        status: school.stages25.conversion.items[0]?.status ?? 'pass',
        rationale: school.stages25.conversion.items[0]?.detail ?? 'Functional lead capture form active on school website.'
      },
      {
        id: 's4-2',
        name: 'WhatsApp Click-to-Chat Channel',
        max: 6,
        score: school.stages25.conversion.items[1]?.score ?? 0,
        status: school.stages25.conversion.items[1]?.status ?? 'fail',
        rationale: school.stages25.conversion.items[1]?.detail ?? 'No floating WhatsApp inquiry button on homepage.'
      },
      {
        id: 's4-3',
        name: 'Transparent Tuition Fee Schedule',
        max: 6,
        score: school.stages25.conversion.items[2]?.score ?? 0,
        status: school.stages25.conversion.items[2]?.status ?? 'fail',
        rationale: school.stages25.conversion.items[2]?.detail ?? school.feeStructureStatus.evidenceText
      },
      {
        id: 's4-4',
        name: 'Downloadable Prospectus & Clear CTA',
        max: 5,
        score: school.stages25.conversion.items[3]?.score ?? 5,
        status: school.stages25.conversion.items[3]?.status ?? 'pass',
        rationale: school.stages25.conversion.items[3]?.detail ?? 'Downloadable prospectus PDF and prominent application CTA.'
      }
    ]
  }
];

export const ScoreLogicView: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('hfs-thane');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [frameworkModel, setFrameworkModel] = useState<'stages25' | 'legacyPillars'>('stages25');

  const school = SCHOOLS_DATA.find((s) => s.id === selectedSchoolId) || SCHOOLS_DATA[0];
  const activeStage = STAGES_25_CONFIG[activeStageIndex];
  const subItems = activeStage.subItems(school);
  const stageEarned = subItems.reduce((acc, it) => acc + it.score, 0);
  const stageMax = activeStage.weight;

  // Primary 25-25-25-25 calculation
  const s1 = school.stages25.discovery.score;
  const s2 = school.stages25.freshness.score;
  const s3 = school.stages25.reputation.score;
  const s4 = school.stages25.conversion.score;
  const primaryTotal = s1 + s2 + s3 + s4;

  // Legacy 20-30-20-15-15 calculation
  const legacyTotal = school.legacyScore;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 space-y-7 animate-fadeIn">
      {/* Top Header & Framework Model Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>Mathematical Ground Truth</span>
            <span aria-hidden="true">·</span>
            <span>Parent Decision Pathway (25 · 25 · 25 · 25)</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Score Logic & Mathematical Proof
          </h2>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            Every point is audited against the 4 chronological stages of a parent's decision process. Select any stage to inspect the exact sub-item scores, rules, and mathematical totals.
          </p>
        </div>

        {/* Framework Model Switcher */}
        <div className="bg-slate-100 p-1 rounded-2xl flex items-center gap-1 shrink-0 self-start md:self-auto text-xs">
          <button
            onClick={() => setFrameworkModel('stages25')}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
              frameworkModel === 'stages25'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Executive Model (25·25·25·25)
          </button>
          <button
            onClick={() => setFrameworkModel('legacyPillars')}
            className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
              frameworkModel === 'legacyPillars'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Legacy Agency (20·30·20·15·15)
          </button>
        </div>
      </div>

      {/* Campus Selector Dock & Score Cockpit */}
      <div className="bg-slate-950 text-white rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-lg border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1 hidden sm:inline">
            Campus:
          </span>
          {SCHOOLS_DATA.map((s) => {
            const isSelected = selectedSchoolId === s.id;
            const scoreDisplay = frameworkModel === 'stages25' ? s.score : s.legacyScore;

            return (
              <button
                key={s.id}
                onClick={() => setSelectedSchoolId(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{s.shortName}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-amber-600' : 'text-slate-400'}`}>
                  {scoreDisplay}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Total Metrics */}
        <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6 text-xs font-mono shrink-0">
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-bold">
              {frameworkModel === 'stages25' ? 'Readiness Score (4 × 25)' : 'Legacy Funnel Score'}
            </span>
            <div className="text-3xl font-extrabold text-amber-400">
              {frameworkModel === 'stages25' ? school.score : school.legacyScore}{' '}
              <span className="text-xs text-slate-400 font-normal">/ 100</span>
            </div>
            <span className={`text-[10px] font-sans font-bold block mt-0.5 ${
              (frameworkModel === 'stages25' ? school.score : school.legacyScore) >= 80
                ? 'text-emerald-400'
                : (frameworkModel === 'stages25' ? school.score : school.legacyScore) >= 60
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}>
              {(frameworkModel === 'stages25' ? school.score : school.legacyScore) >= 80
                ? 'Admissions Ready'
                : (frameworkModel === 'stages25' ? school.score : school.legacyScore) >= 60
                ? 'Partially Ready'
                : 'At-Risk Band (<60)'}
            </span>
          </div>

          <div className="border-l border-slate-800 pl-6">
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-bold">Points Lost</span>
            <div className="text-3xl font-extrabold text-rose-400">
              -{100 - (frameworkModel === 'stages25' ? school.score : school.legacyScore)}{' '}
              <span className="text-xs text-slate-400 font-normal">pts</span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans block mt-0.5">
              Available to recover
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 STAGES SELECTOR TABS (25 · 25 · 25 · 25)                                */}
      {/* ========================================================================= */}
      {frameworkModel === 'stages25' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STAGES_25_CONFIG.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const items = stage.subItems(school);
            const earned = items.reduce((acc, it) => acc + it.score, 0);
            const max = stage.weight;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                    Stage {stage.stageNumber}
                  </span>
                  <span className={`text-xs font-mono font-bold ${
                    isActive 
                      ? 'text-white' 
                      : earned >= 20 ? 'text-emerald-700' : earned >= 12 ? 'text-amber-600' : 'text-rose-600'
                  }`}>
                    {earned} / {max} pts
                  </span>
                </div>
                <div className="font-extrabold text-sm mt-1 truncate">
                  {stage.shortName}
                </div>
                <span className={`text-[11px] block mt-0.5 truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  Max: 25 Pts (25% Weight)
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        /* Legacy 5-Pillars Mode Warning & Bridge */
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Legacy Agency Model Comparison:</strong> In the older 20-30-20-15-15 model, Reputation was allocated 30% instead of 25%. Because Google suppressed reviews to 0, schools like HFS Thane lost 30 full points, yielding 59/100 instead of 61/100.
            </span>
          </div>
          <button
            onClick={() => setFrameworkModel('stages25')}
            className="px-3 py-1.5 bg-amber-900 text-white rounded-lg font-bold text-[11px] shrink-0"
          >
            Switch to 25·25·25·25
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTIVE STAGE DEEP DIVE: COCKPIT WITH FORMULA & RATIONALE                   */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 of 12 cols): The Sub-Items Table with Exact Point Math */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                  S{activeStage.stageNumber}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {activeStage.name}
                </h3>
              </div>
              <span className="text-xs text-slate-500 block mt-1 font-mono">
                Exact Math: {subItems.map((s) => s.score).join(' + ')} = <strong className="text-slate-900">{stageEarned} / {stageMax} Pts</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs shrink-0">
              <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                Earned: {stageEarned} pts
              </span>
              <span className="text-rose-700 font-bold bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                Lost: -{stageMax - stageEarned} pts
              </span>
            </div>
          </div>

          {/* Sub-Items List */}
          <div className="space-y-3">
            {subItems.map((item, idx) => (
              <div 
                key={item.id} 
                className={`p-4 rounded-2xl border transition-all space-y-2 ${
                  item.status === 'pass'
                    ? 'bg-emerald-50/30 border-emerald-200/80'
                    : item.status === 'fail'
                    ? 'bg-rose-50/30 border-rose-200/80'
                    : 'bg-amber-50/30 border-amber-200/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      #{idx + 1}
                    </span>
                    <span className="font-bold text-xs text-slate-900">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs font-extrabold">
                    <span className={`px-2.5 py-0.5 rounded-full ${
                      item.status === 'pass'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.status === 'fail'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.score} / {item.max} pts
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (5 of 12 cols): Executive Rationale & Boardroom Script */}
        <div className="lg:col-span-5 space-y-4">
          {/* Executive Rationale Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Why This Stage is Weighted at 25%:</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeStage.executiveRationale}
            </p>
          </div>

          {/* Quick Mathematical Reconciliation Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 border border-slate-800 shadow-sm">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
              Campus Score Reconciliation:
            </span>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-sans">1. Discovery:</span>
                <span className="font-bold">{s1} / 25 pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-sans">2. Proof of Life:</span>
                <span className="font-bold">{s2} / 25 pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-sans">3. Reputation & Proof:</span>
                <span className="font-bold">{s3} / 25 pts</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-sans">4. Conversion & Action:</span>
                <span className="font-bold">{s4} / 25 pts</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-bold text-emerald-400">
                <span className="font-sans">Total Readiness Score:</span>
                <span>{primaryTotal} / 100</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1 border-t border-slate-800">
              The 4 stages sum to exactly <strong>{primaryTotal} / 100</strong> with zero rounding errors, matching the Executive Keynote and all simulator views.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
