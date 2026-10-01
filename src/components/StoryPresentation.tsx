import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CalendarCheck, 
  Users, 
  Award, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  Info,
  MapPin,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';

interface StoryPresentationProps {
  onOpenDetails: (school: SchoolAudit) => void;
  onJumpToCalculator: () => void;
}

export const StoryPresentation: React.FC<StoryPresentationProps> = ({ 
  onOpenDetails,
  onJumpToCalculator
}) => {
  const [step, setStep] = useState<number>(1);
  const [activeSchoolIndex, setActiveSchoolIndex] = useState<number>(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setStep((prev) => (prev < 5 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setStep((prev) => (prev > 1 ? prev - 1 : prev));
      } else if (e.key >= '1' && e.key <= '5') {
        setStep(Number(e.key));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSchool = SCHOOLS_DATA[activeSchoolIndex];

  return (
    <div className="w-full flex flex-col space-y-5">
      {/* Top Storyline Progress Tracker */}
      <div className="bg-slate-900 text-white rounded-xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm border border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-200">
            PART {step} OF 5
          </span>
          <div className="text-sm font-bold text-white tracking-tight">
            {step === 1 && "Step 1: What Are We Assessing? (The 4 Parent Questions)"}
            {step === 2 && "Step 2: The Network Scorecard (48.6 / 100 At-Risk)"}
            {step === 3 && `Step 3: School-by-School Deep Dive (${currentSchool.shortName})`}
            {step === 4 && "Step 4: The 4 Big Leaks (Why Good Schools Look Bad Online)"}
            {step === 5 && "Step 5: The Turnaround (How 48.6 Jumps to 78.4+ in 90 Days)"}
          </div>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center gap-1.5">
          {[
            { num: 1, label: "Assessing" },
            { num: 2, label: "Overview" },
            { num: 3, label: "5 Schools" },
            { num: 4, label: "4 Leaks" },
            { num: 5, label: "Action" },
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => setStep(item.num)}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                step === item.num
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {item.num}. {item.label}
            </button>
          ))}

          <div className="flex items-center gap-1 ml-2 border-l border-slate-800 pl-2">
            <button
              onClick={() => setStep((p) => Math.max(1, p - 1))}
              disabled={step === 1}
              aria-label="Previous step"
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setStep((p) => Math.min(5, p + 1))}
              disabled={step === 5}
              aria-label="Next step"
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: WHAT WE ASSESSED (THE 4 PARENT QUESTIONS)                          */}
      {/* ========================================================================= */}
      {step === 1 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Auditing The Parent Journey</span>
              <span aria-hidden="true">·</span>
              <span>Six Hiranandani Campuses Audited</span>
              <span aria-hidden="true">·</span>
              <span>Admissions 2027–28 Intake</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Before a parent visits or calls, they check their phone. What do they look for?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We evaluated six Hiranandani schools (including HUS Chennai) against the exact four questions every family asks before deciding to submit an inquiry form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Question 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block">
                    Question 1
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Are Admissions Open?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Is there a clear, welcoming sign saying <strong>"Admissions Open 2027–28"</strong>, or do they see expired dates and closed deadlines?
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="font-semibold text-amber-800 block">
                  Ground Truth: 2 of 6 Active
                </span>
                <span className="text-[11px] text-slate-500">
                  HUS Chennai has active online portal; HFS Int'l in image only. 4 show stale/closed dates.
                </span>
              </div>
            </div>

            {/* Question 2 (Updated per User Rule: Principal/Leadership is Accepted) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block">
                    Question 2 · Updated Rule
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Who Leads The School?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Is the Principal or Head of School prominently named with credentials and vision? <em>(Subject teacher list not required)</em>.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="font-semibold text-emerald-700 block">
                  Ground Truth: 6 of 6 (100% Compliant)
                </span>
                <span className="text-[11px] text-slate-500">
                  All 6 campuses officially name their Principal / Director. Meets criterion in full.
                </span>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block">
                    Question 3
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Are Board Marks Shown?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Are stellar ICSE, ISC, CBSE & IB results prominently celebrated with toppers, averages, and 100% pass badges?
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="font-semibold text-emerald-700 block">
                  Ground Truth: 6 of 6 (3 Hidden)
                </span>
                <span className="text-[11px] text-slate-500">
                  Results are stellar across all 6, but 3 schools bury them in images, PDFs, or subpages.
                </span>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block">
                    Question 4
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    What Is The Fee Structure?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Can parents see indicative tuition brackets so they know if the school fits their budget before taking time off for a visit?
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="font-semibold text-rose-700 block">
                  Ground Truth: 0 of 6 Publicly Disclosed
                </span>
                <span className="text-[11px] text-slate-500">
                  Zero tuition schedules on websites. HUS shares via team; aggregators guess wildly.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Step 1 of 5: The Foundational Scope
            </span>
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>See How the Schools Scored (Step 2)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 2: THE NETWORK SCORECARD (50.5 / 100)                                 */}
      {/* ========================================================================= */}
      {step === 2 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Audited Network Index (6 Campuses)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Current Readiness Score: 50.5 of 100
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                With <strong>HUS Upscale Campus (Chennai) added at 60/100</strong>, the network average rises to 50.5. HUS Chennai is the first school in the group to cross into the <strong>"Partially Ready" band</strong> (threshold 60).
              </p>
            </div>

            {/* Score Pill */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-6 shrink-0">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">
                  Overall Score (6 Schools)
                </span>
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-5xl font-extrabold text-slate-900">50.5</span>
                  <span className="text-slate-400 text-sm">/ 100</span>
                </div>
                <span className="inline-block mt-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Network Mean: 50.5
                </span>
              </div>

              <div className="border-l border-slate-200 pl-6 space-y-1 text-xs text-slate-600">
                <div>Highest: <strong className="text-slate-900">HUS Chennai (60)</strong></div>
                <div>Second: <strong className="text-slate-900">HFS Thane (59)</strong></div>
                <div>Lowest: <strong className="text-slate-900">HTS Panvel (37)</strong></div>
                <div className="text-rose-600 font-semibold pt-1">
                  Reputation: 0 / 30 pts lost (Google Category)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Cards for the 6 Campuses */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              The 6 Campuses Ranked by Readiness
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {SCHOOLS_DATA.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setActiveSchoolIndex(idx);
                    setStep(3);
                  }}
                  className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl p-4 cursor-pointer transition-all hover:shadow-xs group space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {s.shortName}
                    </span>
                    <span className="text-sm font-mono font-extrabold text-slate-900">
                      {s.score}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 block truncate">
                    {s.city} · {s.curriculum}
                  </span>

                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                    <span>Rank #{idx + 1}</span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Inspect →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              ← Back to Step 1
            </button>
            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>Explore School-by-School (Step 3)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 3: SCHOOL-BY-SCHOOL TOUR (ONE SCHOOL AT A TIME)                      */}
      {/* ========================================================================= */}
      {step === 3 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
          {/* School Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {SCHOOLS_DATA.map((school, i) => (
                <button
                  key={school.id}
                  onClick={() => setActiveSchoolIndex(i)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeSchoolIndex === i
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {school.shortName} ({school.score})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <span>Campus {activeSchoolIndex + 1} of 5</span>
            </div>
          </div>

          {/* Active School Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left: Summary & Score */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-slate-500">
                  {currentSchool.locality}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {currentSchool.name}
                </h3>
                <span className="text-xs text-slate-600 block mt-1">
                  Offering: <strong>{currentSchool.curriculum}</strong>
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase text-slate-400 font-bold block">
                    Readiness Score
                  </span>
                  <div className="text-3xl font-extrabold font-mono text-slate-900">
                    {currentSchool.score} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  At-Risk Band
                </span>
              </div>

              {/* The Good vs The Bad */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 space-y-1">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>The Key Strength:</span>
                  </span>
                  <p className="text-emerald-800 leading-relaxed">
                    {currentSchool.boardMarksStatus.highlights}
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 space-y-1">
                  <span className="font-bold text-rose-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>The Primary Blunder:</span>
                  </span>
                  <p className="text-rose-800 leading-relaxed">
                    {currentSchool.admissionsStatus.criticalIssue || "No tuition fees published and zero reviews visible."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenDetails(currentSchool)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open Full Evidence Audit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Traffic Light Matrix across 4 Inquiries */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">
                Performance Across the 4 Core Inquiries:
              </h4>

              <div className="space-y-3">
                {/* 1. Admissions Open */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">1. Admissions Open Status</span>
                      {currentSchool.admissionsStatus.mentions2027_28 ? (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Image Only
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                          Stale / 2026-27 Only
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600">
                      Advertised: <strong>{currentSchool.admissionsStatus.cycleAdvertised}</strong>
                    </p>
                    <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-100">
                      "{currentSchool.admissionsStatus.evidenceText}"
                    </div>
                  </div>
                </div>

                {/* 2. Teachers Named */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">2. Teachers Named</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        Principal Only
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Head: <strong>{currentSchool.teachersFacultyStatus.principalName}</strong> (Ratio {currentSchool.teachersFacultyStatus.teacherStudentRatio})
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {currentSchool.teachersFacultyStatus.evidenceText}
                    </p>
                  </div>
                </div>

                {/* 3. Board Marks */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">3. Board Results</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {currentSchool.boardMarksStatus.displayFormat}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Latest Batch: <strong>{currentSchool.boardMarksStatus.latestBatch}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {currentSchool.boardMarksStatus.evidenceText}
                    </p>
                  </div>
                </div>

                {/* 4. Fee Structure */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">4. Fee Structure</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                        0 Disclosed
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Stated on site: <strong className="text-rose-600">{currentSchool.feeStructureStatus.statedFees}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Aggregators guess: {currentSchool.feeStructureStatus.thirdPartyAggregatorRange}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSchoolIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeSchoolIndex === 0}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
              >
                ← Previous School
              </button>
              <button
                onClick={() => setActiveSchoolIndex((prev) => Math.min(SCHOOLS_DATA.length - 1, prev + 1))}
                disabled={activeSchoolIndex === SCHOOLS_DATA.length - 1}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
              >
                Next School →
              </button>
            </div>

            <button
              onClick={() => setStep(4)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>See The 4 Critical Leaks (Step 4)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 4: THE 4 BIG LEAKS (VISUAL & CRISP)                                   */}
      {/* ========================================================================= */}
      {step === 4 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              The Root Cause
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Four Leaks Explain 90% of the Digital Footprint Gap
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              None of these requires new facilities, campus construction, or big budgets. All four sit in Google Business Profile category settings and website content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Leak 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase">
                  Leak 1 · Reputation Pillar (30 Points Lost)
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">
                  0 vs 2,595 Reviews
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                The Google Category Bug Hides Parent Reviews
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Google hid reviews on schools (ICSE/Secondary) on April 30, 2025. Hiranandani shows <strong>0 reviews</strong>. Competitors who chose <em>"Educational institution"</em> (Podar Powai: 589 reviews at 4.4★) keep them all.
              </p>
              <div className="text-[11px] text-rose-700 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                ⚠ Worst: HFS International is misfiled on Google as a "Building" with 1 photo and no phone.
              </div>
            </div>

            {/* Leak 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  Leak 2 · Admissions Signalling
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                  Looks Closed
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Stale Hero Banners Turn Away Early Planners
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents planning 12 months ahead arrive and see expired deadlines: HFS Powai displays a <em>"2024–2026 IBDP"</em> banner, while HFS Thane displays <em>"Closed on 28 April 2026"</em>.
              </p>
              <div className="text-[11px] text-amber-800 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                Fix: Replace with an unequivocal "Admissions Open 2027–28" notice on all 5 homepages.
              </div>
            </div>

            {/* Leak 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                  Leak 3 · Fast Lane Missing
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                  0 of 5 WhatsApp
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                No WhatsApp Click-to-Chat & Zero Fee Guidance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian parents communicate via WhatsApp. 0 of 5 schools offer WhatsApp inquiry. Zero disclose fees, driving prospective parents to unverified third-party listing aggregators.
              </p>
              <div className="text-[11px] text-blue-800 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                Fix: A floating WhatsApp widget (+3 pts per school) + an indicative fee range page.
              </div>
            </div>

            {/* Leak 4 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-600 uppercase">
                  Leak 4 · Broken Links & Trapped Results
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold">
                  Unindexed Content
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Achievements Locked in Images; Dead Social Icons
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                HTS Panvel’s 100% Class X ICSE board results are locked inside a flat JPEG flyer that Google cannot index. HFS Powai’s Facebook icon links to <code>"#"</code>, and Thriveni’s to a template.
              </p>
              <div className="text-[11px] text-purple-800 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                Fix: Convert images to responsive HTML topper tables; link active campus Instagrams.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setStep(3)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              ← Back to Step 3
            </button>
            <button
              onClick={() => setStep(5)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>See The Turnaround (Step 5)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 5: THE TURNAROUND (48.6 TO 78.4+ IN 90 DAYS)                          */}
      {/* ========================================================================= */}
      {step === 5 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 animate-fadeIn">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              The Rapid Turnaround
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Moving from 48.6 (At-Risk) to 78.4+ (Ready Band) in 90 Days
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every single fix is a profile setting or a website update. No architects, no construction contracts, no campus renovation.
            </p>
          </div>

          {/* Graphic Leap Visualizer */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                The Arithmetic Leap
              </span>
              <h3 className="text-xl font-bold">
                A +29.8 Point Score Transformation
              </h3>
              <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
                By simply executing Phase 1 (switching Google categories to unhide latent reviews) and Phase 2 (2027–28 banner + WhatsApp), Hiranandani immediately restores prestige parity with Podar and Billabong.
              </p>
            </div>

            <div className="flex items-center gap-6 bg-slate-800/90 border border-slate-700 p-5 rounded-2xl shrink-0">
              <div className="text-center">
                <span className="text-[11px] text-rose-400 font-mono block">Current</span>
                <span className="text-4xl font-extrabold font-mono text-white">48.6</span>
                <span className="text-[10px] text-rose-300 block">At-Risk</span>
              </div>
              <div className="text-2xl font-bold text-slate-500">→</div>
              <div className="text-center">
                <span className="text-[11px] text-emerald-400 font-mono block">Target Day 90</span>
                <span className="text-4xl font-extrabold font-mono text-emerald-400">78.4+</span>
                <span className="text-[10px] text-emerald-300 block">Ready Band</span>
              </div>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-1.5">
              <span className="font-mono font-bold text-[11px] text-slate-500">WEEKS 1–2</span>
              <h4 className="font-bold text-slate-900">Google Category Fix</h4>
              <p className="text-slate-600">Switch to "Educational institution". Unhides hundreds of reviews. Fix HFS Int'l building tag.</p>
              <span className="text-emerald-700 font-semibold block pt-1">+26.0 Points</span>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-1.5">
              <span className="font-mono font-bold text-[11px] text-slate-500">WEEKS 2–4</span>
              <h4 className="font-bold text-slate-900">Admissions 2027–28</h4>
              <p className="text-slate-600">One bold banner stating "Admissions Open 2027–28". Purge stale 2024–26 notices.</p>
              <span className="text-emerald-700 font-semibold block pt-1">+2.0 Points</span>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-1.5">
              <span className="font-mono font-bold text-[11px] text-slate-500">WEEKS 3–6</span>
              <h4 className="font-bold text-slate-900">WhatsApp & Fees</h4>
              <p className="text-slate-600">Floating WhatsApp widget. Transparent tuition fee page. 1-click digital prospectus.</p>
              <span className="text-emerald-700 font-semibold block pt-1">+6.0 Points</span>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-1.5">
              <span className="font-mono font-bold text-[11px] text-slate-500">WEEKS 6–12</span>
              <h4 className="font-bold text-slate-900">Faculty & Toppers</h4>
              <p className="text-slate-600">Publish "Our Educators" page with teacher degrees. HTML topper showcases.</p>
              <span className="text-emerald-700 font-semibold block pt-1">+4.0 Points</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              ↺ Restart Storyline
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={onJumpToCalculator}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Open Interactive Score Calculator & Code Snippets</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
