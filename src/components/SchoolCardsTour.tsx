import React, { useState } from 'react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ExternalLink,
  Info,
  CalendarCheck,
  Users,
  Award,
  CreditCard,
  MapPin,
  Sparkles
} from 'lucide-react';

interface SchoolCardsTourProps {
  onOpenDetails: (school: SchoolAudit) => void;
}

export const SchoolCardsTour: React.FC<SchoolCardsTourProps> = ({ onOpenDetails }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredCriterion, setHoveredCriterion] = useState<string | null>(null);

  const school = SCHOOLS_DATA[currentIndex];

  const nextSchool = () => {
    setCurrentIndex((prev) => (prev < SCHOOLS_DATA.length - 1 ? prev + 1 : 0));
  };

  const prevSchool = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : SCHOOLS_DATA.length - 1));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
      {/* Top Header & Campus Carousel Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            One Campus at a Time · Visual Storytelling
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            {school.name}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{school.locality}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Curriculum: <strong className="text-slate-800">{school.curriculum}</strong></span>
          </div>
        </div>

        {/* Carousel controls & Jump Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {SCHOOLS_DATA.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  currentIndex === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s.shortName}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
            <button
              onClick={prevSchool}
              aria-label="Previous School"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSchool}
              aria-label="Next School"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Scorecard Cockpit for Active School */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column: Big Score Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-slate-400">
              Readiness Score
            </span>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
              school.score >= 80
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : school.score >= 60
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}>
              {school.score >= 80 ? 'Admissions Ready' : school.score >= 60 ? 'Partially Ready' : 'At-Risk Band (<60)'}
            </span>
          </div>

          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-5xl font-extrabold text-slate-900">
              {school.score}
            </span>
            <span className="text-slate-400 text-lg">/ 100</span>
          </div>

          <div className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-200">
            <div className="flex justify-between">
              <span>Google Category:</span>
              <strong className="text-slate-800">{school.googleCategory}</strong>
            </div>
            <div className="flex justify-between">
              <span>Google Reviews Visible:</span>
              <strong className="text-rose-600 font-mono">0 Reviews</strong>
            </div>
            <div className="flex justify-between">
              <span>Profile Photos:</span>
              <strong className="text-slate-800 font-mono">{school.googlePhotosCount}</strong>
            </div>
          </div>

          {/* Quick Math Bridge (How did we reach this score?) */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wider font-sans">
                25·25·25·25 Pathway:
              </span>
              <span className="text-[10px] text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
                4 Stages
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-700">
              <div className="flex justify-between">
                <span>1. Discovery:</span>
                <strong>{school.stages25.discovery.score} / 25</strong>
              </div>
              <div className="flex justify-between">
                <span>2. Freshness:</span>
                <strong>{school.stages25.freshness.score} / 25</strong>
              </div>
              <div className="flex justify-between text-rose-600">
                <span>3. Reputation:</span>
                <strong>{school.stages25.reputation.score} / 25</strong>
              </div>
              <div className="flex justify-between">
                <span>4. Conversion:</span>
                <strong>{school.stages25.conversion.score} / 25</strong>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold text-slate-900 text-xs font-sans">
                <span>Total Score:</span>
                <span className="text-emerald-700 font-mono">{school.score} / 100</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenDetails(school)}
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
          >
            <span>Open Verified Evidence Audit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center & Right Column: Why Score is Right vs Why Score is Less */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Why the Score is Right */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-emerald-950">
                  Why the score is RIGHT (Strengths):
                </h3>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed pl-8">
                {school.boardMarksStatus.highlights}
              </p>
              <div className="text-[11px] text-emerald-800 font-medium pl-8">
                ✓ Principal named ({school.teachersFacultyStatus.principalName}) & working enquiry form.
              </div>
            </div>

            {/* Why the Score is Less */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-rose-950">
                  Why the score is LESS (The Gaps):
                </h3>
              </div>
              <p className="text-xs text-rose-900 leading-relaxed pl-8">
                {school.admissionsStatus.criticalIssue || "No tuition fees published and zero reviews visible on Google."}
              </p>
              <div className="text-[11px] text-rose-800 font-medium pl-8">
                ✗ 0 visible reviews (Google Category policy) & zero WhatsApp inquiry.
              </div>
            </div>
          </div>

          {/* Traffic-Light Status Across the 4 Dealbreaker Inquiries (With Cursor Hover Overlays) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                The 4 Parent Inquiries Status (Hover cursor for evidence quotes)
              </h4>
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                <span>Hover over any item for proof</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Item 1: Admissions Open */}
              <div
                onMouseEnter={() => setHoveredCriterion('admissions')}
                onMouseLeave={() => setHoveredCriterion(null)}
                className="relative bg-white border border-slate-200 hover:border-slate-900 rounded-xl p-3.5 transition-all cursor-help"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-900">1. Admissions Open</span>
                  </div>
                  {school.admissionsStatus.mentions2027_28 ? (
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Image Only
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Stale / 2026-27 Only
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  {school.admissionsStatus.cycleAdvertised}
                </p>

                {/* Floating Hover Overlay */}
                {hoveredCriterion === 'admissions' && (
                  <div className="absolute left-0 bottom-full mb-2 w-80 bg-slate-900 text-white rounded-xl p-3 text-xs shadow-xl z-30 border border-slate-700 space-y-1 animate-fadeIn">
                    <div className="font-bold text-amber-400">Exact Evidence Quote:</div>
                    <p className="italic text-slate-300 font-serif">"{school.admissionsStatus.evidenceText}"</p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      URL: {school.admissionsStatus.evidenceUrl}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 2: Teachers Named */}
              <div
                onMouseEnter={() => setHoveredCriterion('teachers')}
                onMouseLeave={() => setHoveredCriterion(null)}
                className="relative bg-white border border-slate-200 hover:border-slate-900 rounded-xl p-3.5 transition-all cursor-help"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-900">2. Teachers Named</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Principal Only
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  Head: {school.teachersFacultyStatus.principalName}
                </p>

                {/* Floating Hover Overlay */}
                {hoveredCriterion === 'teachers' && (
                  <div className="absolute right-0 bottom-full mb-2 w-80 bg-slate-900 text-white rounded-xl p-3 text-xs shadow-xl z-30 border border-slate-700 space-y-1 animate-fadeIn">
                    <div className="font-bold text-blue-400">Faculty Disclosure Proof:</div>
                    <p className="text-slate-300">{school.teachersFacultyStatus.evidenceText}</p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      Student-Teacher Ratio: {school.teachersFacultyStatus.teacherStudentRatio}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 3: Board Marks */}
              <div
                onMouseEnter={() => setHoveredCriterion('marks')}
                onMouseLeave={() => setHoveredCriterion(null)}
                className="relative bg-white border border-slate-200 hover:border-slate-900 rounded-xl p-3.5 transition-all cursor-help"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-900">3. Board Results</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {school.boardMarksStatus.displayFormat}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  {school.boardMarksStatus.highlights}
                </p>

                {/* Floating Hover Overlay */}
                {hoveredCriterion === 'marks' && (
                  <div className="absolute left-0 bottom-full mb-2 w-80 bg-slate-900 text-white rounded-xl p-3 text-xs shadow-xl z-30 border border-slate-700 space-y-1 animate-fadeIn">
                    <div className="font-bold text-emerald-400">Academic Results Format:</div>
                    <p className="text-slate-300">{school.boardMarksStatus.evidenceText}</p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      Batch: {school.boardMarksStatus.latestBatch}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 4: Fee Structure */}
              <div
                onMouseEnter={() => setHoveredCriterion('fees')}
                onMouseLeave={() => setHoveredCriterion(null)}
                className="relative bg-white border border-slate-200 hover:border-slate-900 rounded-xl p-3.5 transition-all cursor-help"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-900">4. Fee Structure</span>
                  </div>
                  <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    0 Tuition Disclosed
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  {school.feeStructureStatus.statedFees}
                </p>

                {/* Floating Hover Overlay */}
                {hoveredCriterion === 'fees' && (
                  <div className="absolute right-0 bottom-full mb-2 w-80 bg-slate-900 text-white rounded-xl p-3 text-xs shadow-xl z-30 border border-slate-700 space-y-1 animate-fadeIn">
                    <div className="font-bold text-rose-400">Pricing Transparency Gap:</div>
                    <p className="text-slate-300">{school.feeStructureStatus.evidenceText}</p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      Aggregators Estimate: {school.feeStructureStatus.thirdPartyAggregatorRange}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
