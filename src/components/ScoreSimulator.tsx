import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  RotateCcw, 
  TrendingUp, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  Sliders,
  Copy,
  Check,
  Building,
  MessageCircle,
  Camera,
  Calendar,
  DollarSign,
  Star,
  Award
} from 'lucide-react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';

interface FixAction {
  id: string;
  title: string;
  stageName: string;
  pointsAdded: number;
  description: string;
  effort: string;
  readySnippet?: string;
  applicableCampuses?: string[]; // If undefined, applies to all
}

const UNIVERSAL_25_FIXES: FixAction[] = [
  {
    id: 'google-category',
    title: 'Switch Google Business Category to "Educational institution"',
    stageName: 'Stage 3: Reputation & Proof',
    pointsAdded: 13.0,
    description: 'Bypasses Google\'s April 2025 review suppression bug on school categories. Instantly restores latent parent reviews and star ratings on Google Maps, matching Podar (4.4★) and Billabong (4.2★).',
    effort: '5 mins (Google Business Profile setting)',
    readySnippet: 'Action in Google Business Profile Manager: Edit Profile -> Business Category -> Change primary category from "ICSE School" / "General Education School" to "Educational institution" or "Education center".'
  },
  {
    id: 'admissions-2027-banner',
    title: 'Publish Hero "Admissions Open 2027–28" Banner',
    stageName: 'Stage 2: Proof of Life (Freshness)',
    pointsAdded: 8.0,
    description: 'Purges HFS Thane\'s stale "closed 28 April 2026" notice and HFS Powai\'s "IBDP 2024-26" banner. Signals an actively enrolling campus for the upcoming academic cycle.',
    effort: '30 mins per site (CMS update)',
    readySnippet: 'Banner Copy: "Admissions Open for Academic Year 2027–28 across Pre-Primary, Primary & Secondary. Register for upcoming Open House & Campus Tours."'
  },
  {
    id: 'whatsapp-chat',
    title: 'Embed Floating WhatsApp Click-to-Chat Button',
    stageName: 'Stage 4: Conversion & Action',
    pointsAdded: 6.0,
    description: 'Zero Hiranandani schools currently offer WhatsApp. Adding a floating button connects modern Indian parents directly to admissions officers without phone friction.',
    effort: '1 hour web developer',
    readySnippet: '<a href="https://wa.me/918657954016?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Admissions%202027-28" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat with Admissions</a>'
  },
  {
    id: 'tuition-fee-page',
    title: 'Publish Transparent Tuition Fee Schedule',
    stageName: 'Stage 4: Conversion & Action',
    pointsAdded: 6.0,
    description: 'Publishes indicative tuition bands and payment schedules. Stops prospective parents bouncing to third-party aggregators that show conflicting or outdated numbers.',
    effort: '1 day (Admissions office sign-off)',
    readySnippet: 'Publish a dedicated /fees page outlining standard tuition fee bands, installment options, transport policies, and registration guidelines.'
  },
  {
    id: 'campus-photos-density',
    title: 'Upload 60+ High-Res Facility Photos to Google Maps',
    stageName: 'Stage 1: Discovery',
    pointsAdded: 1.0,
    description: 'Elevates photo count from 39 to 100+, reaching full compliance on Google Maps Knowledge Panel alongside peers like Podar (84–263) and Billabong (88).',
    effort: '1 afternoon (Zero civil cost)',
    readySnippet: 'Upload 60 high-resolution photos of laboratories, sports grounds, smart classrooms, libraries, and campus architecture to Google Business Profile.'
  },
  {
    id: 'hfs-intl-reclassify',
    title: 'Fix HFS International Listing (Currently Categorized as "Building")',
    stageName: 'Stage 1: Discovery',
    pointsAdded: 16.0,
    description: 'CRITICAL: HFS International was filed on Google Maps as an inanimate "Building" with only 1 photo and no phone/website. Claiming and fixing it restores direct search presence.',
    effort: '15 mins (Google Maps claim & edit)',
    applicableCampuses: ['hfs-international'],
    readySnippet: 'Claim Google Maps profile. Change category to "International school". Link official URL (hfsinternationalpowai.com) and phone (+91 22 4966 6900).'
  }
];

// Baseline scores in the 25-25-25-25 Model
const BASELINE_25_SCORES: Record<string, number> = {
  'hfs-thane': 61.0,
  'hus-chennai': 71.0,
  'hfs-powai': 54.0,
  'thriveni-academy': 54.0,
  'hfs-international': 47.0,
  'hts-panvel': 38.0,
  'all': 54.2
};

export const ScoreSimulator: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('hfs-thane');
  const [activeFixIds, setActiveFixIds] = useState<string[]>([
    'google-category',
    'admissions-2027-banner',
    'whatsapp-chat'
  ]);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const baseScore = BASELINE_25_SCORES[selectedSchoolId] ?? 61.0;

  // Filter fixes applicable to selected school
  const applicableFixes = UNIVERSAL_25_FIXES.filter((fix) => {
    if (!fix.applicableCampuses) return true;
    return fix.applicableCampuses.includes(selectedSchoolId);
  });

  const addedPoints = activeFixIds.reduce((sum, id) => {
    const fix = applicableFixes.find((f) => f.id === id);
    return sum + (fix ? fix.pointsAdded : 0);
  }, 0);

  const simulatedScore = Math.min(100, Number((baseScore + addedPoints).toFixed(1)));
  const scoreDelta = Number((simulatedScore - baseScore).toFixed(1));

  const toggleFix = (id: string) => {
    setActiveFixIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setActiveFixIds(applicableFixes.map((f) => f.id));
  };

  const resetToBase = () => {
    setActiveFixIds([]);
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2500);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 space-y-8 animate-fadeIn shadow-xs">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Interactive 25 · 25 · 25 · 25 Fix Simulator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Simulate the Rapid 90-Day Leap to 85+ Ready Band
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Select any campus below. Notice how the baseline immediately matches the 25-25-25-25 audit (e.g. <strong>HFS Thane starts at 61 / 100</strong>). Toggle fixes to see the exact points won.
        </p>
      </div>

      {/* Campus Selector Dock */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider px-2">
          Select Campus to Simulate:
        </span>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedSchoolId('hfs-thane')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'hfs-thane'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            HFS Thane (Base: 61)
          </button>

          <button
            onClick={() => setSelectedSchoolId('hus-chennai')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'hus-chennai'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            HUS Chennai (Base: 71)
          </button>

          <button
            onClick={() => setSelectedSchoolId('hfs-powai')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'hfs-powai'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            HFS Powai (Base: 54)
          </button>

          <button
            onClick={() => setSelectedSchoolId('thriveni-academy')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'thriveni-academy'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Thriveni (Base: 54)
          </button>

          <button
            onClick={() => setSelectedSchoolId('hfs-international')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'hfs-international'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            HFS Int'l (Base: 47)
          </button>

          <button
            onClick={() => setSelectedSchoolId('hts-panvel')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'hts-panvel'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            HTS Panvel (Base: 38)
          </button>

          <button
            onClick={() => setSelectedSchoolId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedSchoolId === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Network Mean (Base: 54.2)
          </button>
        </div>
      </div>

      {/* Simulator Cockpit Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>Real-Time Math Engine</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            {selectedSchoolId === 'all' ? 'Network Mean Simulation' : `${SCHOOLS_DATA.find((s) => s.id === selectedSchoolId)?.name || 'HFS Thane'}`}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            By executing these digital code & profile updates over 90 days, the institution leaps from the At-Risk band into the top-tier <strong>Admissions Ready Band (&gt;80)</strong> with zero civil construction costs.
          </p>
        </div>

        {/* Live Gauges */}
        <div className="flex items-center gap-4 sm:gap-6 bg-slate-800/90 border border-slate-700 p-4 sm:p-5 rounded-2xl shrink-0">
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-medium">Audited Baseline</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-300">
              {baseScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 100</span>
            </div>
            <span className="text-[10px] text-rose-400 font-semibold block mt-0.5">At-Risk Band</span>
          </div>

          <div className="text-2xl text-slate-600 font-extrabold">→</div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-medium">Simulated Result</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
              {simulatedScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 100</span>
            </div>
            <span className="text-[10px] text-emerald-300 font-semibold block mt-0.5">
              +{scoreDelta.toFixed(1)} pts leap
            </span>
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs">
        <span className="font-bold text-slate-800">
          Toggle Fixes to Simulate Immediate Score Lift:
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={selectAll}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors"
          >
            Apply All Fixes
          </button>
          <button
            onClick={resetToBase}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3 text-slate-500" />
            <span>Reset to Base</span>
          </button>
        </div>
      </div>

      {/* Interactive Fixes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {applicableFixes.map((fix) => {
          const isApplied = activeFixIds.includes(fix.id);

          return (
            <div
              key={fix.id}
              onClick={() => toggleFix(fix.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer select-none space-y-3 ${
                isApplied
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-xs ring-1 ring-emerald-300'
                  : 'bg-white border-slate-200 hover:border-slate-300 opacity-70'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      isApplied ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isApplied ? '✓' : '+'}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {fix.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    {fix.stageName} · Effort: {fix.effort}
                  </span>
                </div>

                <span className={`font-mono text-xs font-extrabold px-2.5 py-1 rounded-full shrink-0 ${
                  isApplied ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  +{fix.pointsAdded.toFixed(1)} pts
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {fix.description}
              </p>

              {/* Ready Action Snippet */}
              {fix.readySnippet && (
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className="bg-slate-100/80 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2 text-[11px] font-mono text-slate-700"
                >
                  <span className="truncate">{fix.readySnippet}</span>
                  <button
                    onClick={() => copyToClipboard(fix.id, fix.readySnippet!)}
                    className="p-1 rounded hover:bg-white text-slate-500 hover:text-slate-800 shrink-0"
                    title="Copy code snippet"
                  >
                    {copiedSnippetId === fix.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Executive Strategy & Capital Allocation Summary */}
      <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-5 text-xs space-y-2.5 shadow-md">
        <div className="flex items-center gap-2 font-bold text-amber-400">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="uppercase tracking-wider font-mono text-[11px]">
            Executive Turnaround Summary & Resource Impact:
          </span>
        </div>
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
          With zero civil infrastructure costs, executing three high-leverage digital actions—reclassifying the Google Business Profile category to "Educational institution" (+13.0 pts), publishing an unequivocal 2027–28 admissions announcement (+8.0 pts), and deploying instant WhatsApp inquiry routing (+6.0 pts)—immediately propels <strong>{selectedSchoolId === 'all' ? 'the entire Hiranandani network' : SCHOOLS_DATA.find((s) => s.id === selectedSchoolId)?.shortName || 'HFS Thane'}</strong> from the current baseline of <strong>{baseScore.toFixed(1)} / 100</strong> to <strong>{(baseScore + 27).toFixed(1)} / 100</strong>, entering the top-tier Admissions Ready band (&gt;80) within 14 days.
        </p>
      </div>
    </div>
  );
};
