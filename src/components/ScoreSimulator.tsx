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
import { SCHOOLS_DATA, SCORE_FIXES, ScoreFix, AUDIT_METADATA, bandFor, fixGain } from '../data/auditData';

export const ScoreSimulator: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('hfs-thane');
  const [activeFixIds, setActiveFixIds] = useState<string[]>([
    'google-category',
    'admissions-2027-banner',
    'whatsapp-chat'
  ]);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const selectedSchool = SCHOOLS_DATA.find((s) => s.id === selectedSchoolId);

  // Points a fix adds = the selected school's actual shortfall on the items it fixes
  // (network view: the mean shortfall across all schools).
  const gainFor = (fix: ScoreFix) =>
    selectedSchool
      ? fixGain(selectedSchool, fix)
      : Number((SCHOOLS_DATA.reduce((sum, s) => sum + fixGain(s, fix), 0) / SCHOOLS_DATA.length).toFixed(1));

  const baseScore = selectedSchool ? selectedSchool.score : AUDIT_METADATA.networkScore;

  // Only show fixes that would actually move this school's score
  const applicableFixes = SCORE_FIXES.filter((fix) => gainFor(fix) > 0);

  const addedPoints = applicableFixes
    .filter((fix) => activeFixIds.includes(fix.id))
    .reduce((sum, fix) => sum + gainFor(fix), 0);

  const simulatedScore = Math.min(100, Number((baseScore + addedPoints).toFixed(1)));
  const scoreDelta = Number((simulatedScore - baseScore).toFixed(1));

  const headlineFixes = applicableFixes.filter((f) => ['google-category', 'admissions-2027-banner', 'whatsapp-chat'].includes(f.id));
  const headlineGain = headlineFixes.reduce((sum, f) => sum + gainFor(f), 0);

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
          Simulate the 90-Day Leap Toward the Ready Band (80+)
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Select any campus below. Notice how the baseline immediately matches the 25-25-25-25 audit (e.g. <strong>{SCHOOLS_DATA[0].shortName} starts at {SCHOOLS_DATA[0].score} / 100</strong>). Each fix adds only the points that campus is actually missing.
        </p>
      </div>

      {/* Campus Selector Dock */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider px-2">
          Select Campus to Simulate:
        </span>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[...SCHOOLS_DATA.map((sc) => ({ id: sc.id, label: `${sc.shortName} (Base: ${sc.score})` })),
            { id: 'all', label: `Network Mean (Base: ${AUDIT_METADATA.networkScore})` }].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedSchoolId(opt.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedSchoolId === opt.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
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
            {selectedSchoolId === 'all' ? 'Network Mean Simulation' : `${selectedSchool?.name}`}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Toggle the digital code & profile updates below to see how far they move this campus toward the <strong>Admissions Ready band (80+)</strong>, with zero civil construction costs.
          </p>
        </div>

        {/* Live Gauges */}
        <div className="flex items-center gap-4 sm:gap-6 bg-slate-800/90 border border-slate-700 p-4 sm:p-5 rounded-2xl shrink-0">
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-medium">Audited Baseline</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-300">
              {baseScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 100</span>
            </div>
            <span className="text-[10px] text-rose-400 font-semibold block mt-0.5">{bandFor(baseScore)}</span>
          </div>

          <div className="text-2xl text-slate-600 font-extrabold">→</div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-sans font-medium">Simulated Result</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
              {simulatedScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 100</span>
            </div>
            <span className="text-[10px] text-emerald-300 font-semibold block mt-0.5">
              +{scoreDelta.toFixed(1)} pts · {bandFor(simulatedScore)}
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
                  +{gainFor(fix).toFixed(1)} pts
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
          With zero civil infrastructure costs, three high-leverage digital actions ({headlineFixes.map((f) => `${f.title} +${gainFor(f).toFixed(1)}`).join('; ') || 'none outstanding for this campus'}) move <strong>{selectedSchool ? selectedSchool.shortName : 'the Hiranandani network'}</strong> from <strong>{baseScore.toFixed(1)} / 100</strong> to <strong>{Math.min(100, baseScore + headlineGain).toFixed(1)} / 100</strong> ({bandFor(Math.min(100, baseScore + headlineGain))}). The full 90-day roadmap targets a network mean of <strong>{AUDIT_METADATA.targetScoreDay90}</strong>.
        </p>
      </div>
    </div>
  );
};
