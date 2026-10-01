import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  TrendingUp, 
  Search,
  MessageSquare,
  HelpCircle,
  Award,
  Users,
  EyeOff,
  Flame,
  ArrowRight
} from 'lucide-react';
import { SCHOOLS_DATA, PEER_BENCHMARK_DATA, ROADMAP_STAGES, SchoolAudit } from '../data/auditData';

interface SlideDeckProps {
  onSelectSchool: (school: SchoolAudit) => void;
  onNavigateTab: (tab: 'slides' | 'scorecard' | 'four-core' | 'peers' | 'roadmap') => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({ onSelectSchool, onNavigateTab }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('hfs-thane');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev < 3 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
      } else if (e.key === '1') {
        setCurrentSlide(1);
      } else if (e.key === '2') {
        setCurrentSlide(2);
      } else if (e.key === '3') {
        setCurrentSlide(3);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectedSchool = SCHOOLS_DATA.find((s) => s.id === selectedSchoolId) || SCHOOLS_DATA[0];

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Slide Navigation Header */}
      <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 bg-slate-800 text-slate-200 rounded text-xs font-mono font-medium">
            SLIDE {currentSlide} OF 3
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight text-white block">
              {currentSlide === 1 && "Executive Scorecard: 4 Core Admissions Inquiries & Status"}
              {currentSlide === 2 && "Verification & Evidence: 4 Conversion Leaks Cross-Checked"}
              {currentSlide === 3 && "90-Day Action Roadmap: Elevating Footprint to 78+ Ready Band"}
            </span>
            <span className="text-xs text-slate-400">
              Audit Date: September 2026 · Target Intake: Academic Year 2027–28
            </span>
          </div>
        </div>

        {/* Slide Selector Buttons & Arrow Navigation */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-800 p-1 rounded-lg">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  currentSlide === num
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Slide {num}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-slate-700 pl-2">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
              disabled={currentSlide === 1}
              aria-label="Previous Slide"
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(3, prev + 1))}
              disabled={currentSlide === 3}
              aria-label="Next Slide"
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 1: Executive Overview & The 4 Core Admissions Readout               */}
      {/* ========================================================================= */}
      {currentSlide === 1 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 animate-fadeIn">
          {/* Header section with high-level score */}
          <div className="border-b border-slate-100 pb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>Prepared for Dr. Niranjan Hiranandani</span>
                <span aria-hidden="true">·</span>
                <span>The Chalk Story Audit</span>
                <span aria-hidden="true">·</span>
                <span className="text-rose-600 font-semibold">All 5 Schools in 'At-Risk' Band</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                How Ready Are Five Hiranandani Schools for Admissions 2027–28?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                A public-data cross-check of what prospective parents see on Google, official school websites, and listing channels before enquiring. Evaluated on 22 objective public indicators across 5 pillars.
              </p>
            </div>

            {/* Network Score Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-center gap-6 shrink-0">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block mb-1">
                  Network Index
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-mono tabular-nums">
                    48.6
                  </span>
                  <span className="text-base text-slate-500 font-medium">/100</span>
                </div>
                <span className="inline-block mt-1 text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  At-Risk (Threshold &lt;60)
                </span>
              </div>

              <div className="border-l border-slate-200 pl-6 space-y-1.5 text-xs text-slate-600">
                <div>Highest: <strong className="text-slate-900">HFS Thane (59)</strong></div>
                <div>Lowest: <strong className="text-slate-900">HTS Panvel (37)</strong></div>
                <div>Reputation: <strong className="text-rose-600">0 / 30 pts</strong> (Google Category Bug)</div>
              </div>
            </div>
          </div>

          {/* THE 4 CORE INQUIRIES REQUESTED BY USER */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  The Four Admissions Readout Criteria
                </h3>
                <p className="text-xs text-slate-500">
                  Direct audit findings across Admissions Cycle, Teacher Roster, Board Marks, and Fee Transparency.
                </p>
              </div>
              <button 
                onClick={() => onNavigateTab('four-core')}
                className="text-xs font-semibold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors"
              >
                <span>View Full Evidence Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Criterion 1: Admissions Open */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      1. Admissions Open
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      1 of 5 (Images Only)
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    2027–28 Intake Invisible
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Only <strong className="text-slate-900">HFS International</strong> mentions 2027–28, but exclusively locked inside graphic image banners. Meanwhile:
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-xs space-y-1 text-slate-700">
                  <div>• <strong>HFS Powai:</strong> Shows stale "IBDP 2024-2026" banner</div>
                  <div>• <strong>HFS Thane:</strong> Displays "Closed 28 April 2026" window</div>
                  <div>• <strong>Thriveni:</strong> Stale 2024-25 admission PDF poster</div>
                </div>
              </div>

              {/* Criterion 2: Teachers Named */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      2. Teachers Named
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      Principals Only (5/5)
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Faculty Directory Absent
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All 5 schools name their Principal (Neelu Lamba, Kalyani Patnaik, Rupa Choudhury, Dr. M.P. Anand), but <strong className="text-slate-900">zero schools</strong> publish a subject teacher roster.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-xs space-y-1 text-slate-700">
                  <div>• <strong>Subject Faculty:</strong> 0 of 5 list teacher names or degrees</div>
                  <div>• <strong>Ratios:</strong> Thane (1:35), Panvel (1:18), Thriveni (1:30)</div>
                  <div>• <strong>Impact:</strong> Parents cannot judge teaching pedigree online</div>
                </div>
              </div>

              {/* Criterion 3: Board Marks */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      3. Board Marks
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      5 of 5 (3 Hidden)
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Strong Results, Hidden Formats
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Academic performance is stellar (up to 99.3% ISC at Thane, 100% pass at Panvel & Thriveni), but 3 schools bury them away from prospective families.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-xs space-y-1 text-slate-700">
                  <div>• <strong>HFS Thane & Powai:</strong> Prominent on homepages</div>
                  <div>• <strong>HTS Panvel:</strong> Locked inside a flat JPEG flyer</div>
                  <div>• <strong>Thriveni:</strong> Buried in CBSE statutory PDF tables</div>
                </div>
              </div>

              {/* Criterion 4: Fee Structure */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      4. Fee Structure
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      0 of 5 Disclosed
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Total Pricing Vacuum
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Not a single Hiranandani school publishes tuition fees. Only Thane lists a ₹500 registration fee. Third-party sites fill the void with conflicting figures.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-xs space-y-1 text-slate-700">
                  <div>• <strong>Third-Party Drift:</strong> Justdial, UniApply differ by ₹50k+</div>
                  <div>• <strong>No Fee Calculator:</strong> Forces phone calls during office hours</div>
                  <div>• <strong>Friction:</strong> Major drop-off factor for modern parents</div>
                </div>
              </div>
            </div>
          </div>

          {/* School Rankings Table */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Campus Scorecard Summary (All 5 in 'At-Risk' Band)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">School & Campus</th>
                    <th className="py-3 px-3">Offering</th>
                    <th className="py-3 px-3">Readiness Score</th>
                    <th className="py-3 px-3">2027-28 Intake Mention</th>
                    <th className="py-3 px-3">Teachers Named</th>
                    <th className="py-3 px-3">Board Marks</th>
                    <th className="py-3 px-3">Fees Disclosed</th>
                    <th className="py-3 px-4 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {SCHOOLS_DATA.map((school) => (
                    <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {school.name}
                        <span className="block text-[11px] font-normal text-slate-500">{school.locality}</span>
                      </td>
                      <td className="py-3 px-3">{school.curriculum}</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="text-sm">{school.score}</span>
                          <span className="text-[10px] font-medium text-slate-400">/ 100</span>
                          <span className="text-[10px] text-rose-600 font-medium bg-rose-50 px-1 py-0.5 rounded">
                            At risk
                          </span>
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {school.admissionsStatus.mentions2027_28 ? (
                          <span className="text-amber-700 font-medium">Yes (Image only)</span>
                        ) : (
                          <span className="text-rose-600 font-medium">No (Stale / 2026-27)</span>
                        )}
                      </td>
                      <td className="py-3 px-3">
                        <span>Principal only ({school.teachersFacultyStatus.principalName.split(' ')[0]})</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-slate-900 font-medium">{school.boardMarksStatus.displayFormat}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-rose-600 font-medium">None published</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedSchoolId(school.id);
                            onSelectSchool(school);
                          }}
                          className="px-2.5 py-1 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                        >
                          View Evidence
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 2: Verification & Evidence: The 4 Critical Conversion Leaks          */}
      {/* ========================================================================= */}
      {currentSlide === 2 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 animate-fadeIn">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Primary Goal: Rigorous Evidence</span>
              <span aria-hidden="true">·</span>
              <span>Cross-Checked Against Live Websites & Google Business Profiles</span>
              <span aria-hidden="true">·</span>
              <span>September 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Four Leaks Explain Most of the Gap Between School Quality and First Impression
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl">
              Each leak removes measurable points on the 100-point rubric. None requires construction or capital expenditure; all four are misconfigurations in Google Business Profile settings and website content.
            </p>
          </div>

          {/* 4 Leaks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leak 1 */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block">
                    Leak 1 · Reputation Pillar (30 Pts Lost)
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    The Google Category Blindspot (0 Reviews Visible)
                  </h3>
                </div>
                <div className="p-2 bg-rose-100 text-rose-700 rounded-lg">
                  <EyeOff className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Google hid reviews on school categories (<em>ICSE school, General education school, Secondary school</em>) starting April 30, 2025. Hiranandani schools carry these tags, while competitors bypass this by using <strong>"Education center"</strong> or <strong>"Educational institution"</strong>.
              </p>
              
              {/* Evidence Callout */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center justify-between">
                  <span>Verified Google Business Evidence:</span>
                  <span className="text-rose-600 font-mono">Hiranandani: 0 Reviews</span>
                </div>
                <ul className="text-slate-600 space-y-1 pl-4 list-disc">
                  <li><strong>Podar Powai:</strong> Listed as <em>Education center</em> → Shows <strong>589 reviews at 4.4★</strong> (same street as HFS Powai).</li>
                  <li><strong>Podar Nerul:</strong> <em>Education center</em> → Shows <strong>781 reviews at 4.2★</strong>.</li>
                  <li><strong>Billabong Malad:</strong> <em>Educational institution</em> → Shows <strong>500 reviews at 4.3★</strong>.</li>
                  <li><strong>HFS International:</strong> Catastrophically filed as a <strong>"Building"</strong> with 1 single photo, no website link, no phone number on profile!</li>
                </ul>
              </div>
            </div>

            {/* Leak 2 */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">
                    Leak 2 · Content Freshness (Stale Cycles)
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Stale Admissions Signalling Deters Early Planners
                  </h3>
                </div>
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents planning 12 months ahead for 2027–28 arrive at school sites and see expired deadlines or years-old notices, leading them to believe admissions are closed or websites are abandoned.
              </p>

              {/* Evidence Callout */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center justify-between">
                  <span>Website Cross-Check Evidence:</span>
                  <span className="text-amber-700 font-mono">3 of 5 Stale Cycles</span>
                </div>
                <ul className="text-slate-600 space-y-1 pl-4 list-disc">
                  <li><strong>HFS Powai:</strong> Prominently displays: <em>"IBDP Admissions for the year 2024–2026"</em>.</li>
                  <li><strong>HFS Thane:</strong> Displays an alert that application window <em>closed on 28 April 2026</em>.</li>
                  <li><strong>Thriveni Academy:</strong> Modal pop-up says 2026-27, while admissions section still links a <em>2024-25 admission poster PDF</em>.</li>
                  <li><strong>HFS International:</strong> Flyer says "Admissions Open 2027-28" inside image only; HTML text still says 2026-27.</li>
                </ul>
              </div>
            </div>

            {/* Leak 3 */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                    Leak 3 · Conversion Path
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Enquiry Path Has No Fast Lane (WhatsApp & Fees Missing)
                  </h3>
                </div>
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern mobile parents in Mumbai MMR and Chennai expect instant communication. Zero schools offer WhatsApp click-to-chat, and zero publish clear tuition schedules.
              </p>

              {/* Evidence Callout */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center justify-between">
                  <span>Conversion Barrier Evidence:</span>
                  <span className="text-blue-700 font-mono">0 of 5 WhatsApp</span>
                </div>
                <ul className="text-slate-600 space-y-1 pl-4 list-disc">
                  <li><strong>WhatsApp:</strong> 0 of 5 offer WhatsApp inquiry, the #1 communication medium used by Indian families.</li>
                  <li><strong>Brochures:</strong> Only 1 of 5 (HFS Thane) offers a downloadable prospectus, but gates it behind a multi-field lead form.</li>
                  <li><strong>HTS Panvel:</strong> Has no prominent "Apply Now" or "Enquire Now" CTA button on its homepage.</li>
                  <li><strong>Fee Schedule:</strong> Zero pricing guidance leaves parents to unverified third-party listing sites.</li>
                </ul>
              </div>
            </div>

            {/* Leak 4 */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider block">
                    Leak 4 · Community & Voice
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Dead Social Links & Buried Board Achievements
                  </h3>
                </div>
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                While the schools have authentic community presence, their official websites fail to link to them properly, and stellar board marks are concealed inside PDFs or images.
              </p>

              {/* Evidence Callout */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center justify-between">
                  <span>Audit Evidence:</span>
                  <span className="text-purple-700 font-mono">Broken Links & Hidden Marks</span>
                </div>
                <ul className="text-slate-600 space-y-1 pl-4 list-disc">
                  <li><strong>HFS Powai:</strong> Homepage Facebook icon href points to empty anchor <code>"#"</code>.</li>
                  <li><strong>Thriveni Academy:</strong> Facebook icon opens an unavailable dead link; Instagram icon points to a generic website builder template!</li>
                  <li><strong>HTS Panvel:</strong> Historic first ICSE graduating batch (2025-26) locked inside a flat JPEG flyer—unreadable to Google.</li>
                  <li><strong>Yellow Slate Reviews:</strong> 31 to 48 unmoderated, unanswered parent reviews per school on aggregator directories.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive School Selector to View Exact URLs & Evidence */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  School-Specific Evidence Inspector
                </h4>
                <p className="text-xs text-slate-500">
                  Select a campus to review verified URLs, quoted text, and audit logs.
                </p>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto">
                {SCHOOLS_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSchoolId(s.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      selectedSchoolId === s.id
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {s.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* School Detailed Evidence Box */}
            <div className="bg-white rounded-lg p-4 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <div className="text-slate-500 font-medium">Admissions Evidence ({selectedSchool.shortName}):</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-900">Cycle Advertised:</div>
                  <div className="text-slate-700">{selectedSchool.admissionsStatus.cycleAdvertised}</div>
                  <div className="font-semibold text-slate-900 mt-2">Quoted Evidence:</div>
                  <div className="italic text-slate-600 bg-white p-2 rounded border border-slate-200">
                    "{selectedSchool.admissionsStatus.evidenceText}"
                  </div>
                  <a
                    href={selectedSchool.admissionsStatus.evidenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-1 font-medium"
                  >
                    <span>Inspect Target URL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-500 font-medium">Board Results & Fee Evidence:</div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-900">Board Results Format:</div>
                  <div className="text-slate-700">{selectedSchool.boardMarksStatus.displayFormat} — {selectedSchool.boardMarksStatus.highlights}</div>
                  <div className="font-semibold text-slate-900 mt-2">Fee Transparency:</div>
                  <div className="text-slate-700">
                    Website: <span className="text-rose-600 font-medium">{selectedSchool.feeStructureStatus.statedFees}</span>
                  </div>
                  <div className="text-slate-500">
                    Aggregator Estimate: {selectedSchool.feeStructureStatus.thirdPartyAggregatorRange}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 3: 90-Day Action Roadmap & Evidence-Backed Rapid Turnaround         */}
      {/* ========================================================================= */}
      {currentSlide === 3 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 animate-fadeIn">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Execution Strategy</span>
              <span aria-hidden="true">·</span>
              <span>Zero Civil Construction · Rapid Content & Profile Configuration</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 font-semibold">Expected Leap: 48.6 → 78.4+</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Four Workstreams, Ninety Days: Restoring Digital Admissions Dominance
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl">
              Sequenced by inquiry conversion impact and implementation friction. The first two workstreams are simple administrative content changes; the third takes 1–2 days of web development; the fourth establishes ongoing reputation governance.
            </p>
          </div>

          {/* Phased Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP_STAGES.map((stage, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-mono font-semibold">
                      {stage.phase}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {stage.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                      Owner: {stage.owner}
                    </span>
                  </div>

                  <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc">
                    {stage.actions.map((act, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900 block text-[11px] uppercase tracking-wider mb-0.5">
                    Measurable Outcome:
                  </span>
                  <p className="text-emerald-700 font-medium leading-tight">
                    {stage.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI & Target Band Projection */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Audited Trajectory
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                From 'At-Risk' Band (48.6) to 'Admissions Ready' Band (78.4+)
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                By simply executing Phase 1 (reclassifying Google categories to unlock latent reviews) and Phase 2 (publishing explicit 2027–28 intake notices), Hiranandani schools immediately restore social proof parity with Podar, Billabong, and Vibgyor.
              </p>
            </div>

            <div className="flex items-center gap-6 shrink-0 bg-slate-800/80 border border-slate-700 p-4 rounded-xl">
              <div className="text-center">
                <span className="text-[11px] text-rose-400 font-medium block">Current Score</span>
                <span className="text-3xl font-extrabold font-mono text-white">48.6</span>
                <span className="text-[10px] text-rose-300 block">At-Risk</span>
              </div>
              <div className="text-slate-500 font-bold text-lg">→</div>
              <div className="text-center">
                <span className="text-[11px] text-emerald-400 font-medium block">Day 90 Target</span>
                <span className="text-3xl font-extrabold font-mono text-emerald-400">78.4+</span>
                <span className="text-[10px] text-emerald-300 block">Ready Band</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
