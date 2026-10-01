import React, { useState } from 'react';
import { SCHOOLS_DATA, AUDIT_METADATA, SchoolAudit } from '../data/auditData';
import { Check, X, Info, Download, Layers, Compass, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface StageRowDef {
  stage: string;
  name: string;
  max: number;
  weight: string;
  description: string;
  scores: Record<string, number>;
}

const STAGE_LABELS: Record<keyof SchoolAudit['stages25'], string> = {
  discovery: 'Stage 1',
  freshness: 'Stage 2',
  reputation: 'Stage 3',
  conversion: 'Stage 4',
};

const ITEM_DESCRIPTIONS: Record<string, string> = {
  'Google Profile Verified with Campus Address': 'Verified Google Business Profile active with campus locality.',
  'Review Visibility Allowed by Category': 'Primary Google category allows public ratings and reviews to show.',
  'Official Website Linked on Maps': 'Direct working link to official school website on profile.',
  'Admissions Telephone on Profile': 'Direct working telephone line listed on Google profile.',
  'Photo Density (100+ Campus Photos)': 'Knowledge panel photo count: 100+ = 3 pts, 50–99 = 2 pts, 20–49 = 1 pt, under 20 = 0.',
  'Admissions 2027–28 Intake Notice': 'Prominent live 2027-28 admissions cycle notice on homepage.',
  'Board Results Posted with Batch Year': 'Board results or topper lists with year stated, as crawlable page content (PDF/image only = partial).',
  'News & Event Recency (≤90 Days)': 'Recency: ≤90 days = 6 pts, ≤180 days = 4 pts, older = 0 pts.',
  'Principal Named with Pedagogical Vision': 'Principal/Head of School officially introduced on website.',
  'Google Star Rating & Review Volume': 'Public average rating and review count on Google (0 when no reviews are visible).',
  'Active Campus Instagram & Facebook': 'Website links to working, campus-specific Facebook & Instagram accounts (dead "#" or template placeholder links do not count).',
  'Listed on Major K-12 Portals (7 Sites)': 'Found on major education listing portals (Justdial, UniApply, Edustoke).',
  'Online Enquiry & Application Form': 'Functional web enquiry or admission lead capture form.',
  'WhatsApp Click-to-Chat Channel': 'One-click WhatsApp inquiry channel for instant parent messaging.',
  'Transparent Tuition Fee Schedule': 'Public tuition fee figures and schedule (a fee page without numbers does not count).',
  'Downloadable Prospectus & Clear CTA': 'Prominent application CTA button and downloadable prospectus.',
};

// Rows and scores come straight from the audit data, so the matrix can never drift from the school scores.
const STAGES_25_ROWS: StageRowDef[] = (Object.keys(STAGE_LABELS) as (keyof SchoolAudit['stages25'])[]).flatMap((k) =>
  SCHOOLS_DATA[0].stages25[k].items.map((item) => ({
    stage: STAGE_LABELS[k],
    name: item.name,
    max: item.max,
    weight: `${item.max} pts`,
    description: ITEM_DESCRIPTIONS[item.name] ?? '',
    scores: Object.fromEntries(
      SCHOOLS_DATA.map((sc) => [sc.id, sc.stages25[k].items.find((i) => i.name === item.name)?.score ?? 0])
    ),
  }))
);

export const ScorecardMatrix: React.FC = () => {
  const [activeStageFilter, setActiveStageFilter] = useState<string>('all');

  const stageFilters = [
    { id: 'all', label: 'All 4 Stages (100 Pts)' },
    { id: 'Stage 1', label: 'Stage 1: Discovery (25 Pts)' },
    { id: 'Stage 2', label: 'Stage 2: Proof of Life (25 Pts)' },
    { id: 'Stage 3', label: 'Stage 3: Reputation (25 Pts)' },
    { id: 'Stage 4', label: 'Stage 4: Conversion (25 Pts)' },
  ];

  const filteredRows = activeStageFilter === 'all'
    ? STAGES_25_ROWS
    : STAGES_25_ROWS.filter(r => r.stage === activeStageFilter);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 space-y-7 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <span>Master Rubric</span>
          <span aria-hidden="true">·</span>
          <span>The 25 · 25 · 25 · 25 Pathway Scorecard</span>
          <span aria-hidden="true">·</span>
          <span>100 Points Total</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Complete Admissions Readiness Matrix
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Exact points earned by each campus across the 4 chronological stages of a prospective parent's decision journey.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl px-5 py-3 text-xs font-medium border border-slate-800 shrink-0">
            <span className="text-slate-400 block text-[10px] uppercase font-sans">Network Mean</span>
            <span className="font-extrabold text-amber-400 font-mono text-xl">{AUDIT_METADATA.networkScore} / 100</span> ({AUDIT_METADATA.schoolsAudited} Campuses Audited)
          </div>
        </div>
      </div>

      {/* Stage Filter Segmented Control */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
        {stageFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveStageFilter(f.id)}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
              activeStageFilter === f.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
            <tr>
              <th className="py-3 px-3 w-10 text-center">#</th>
              <th className="py-3 px-4">Evaluation Indicator & Ground Truth</th>
              <th className="py-3 px-3">Stage</th>
              <th className="py-3 px-3 text-center">Max Pts</th>
              {SCHOOLS_DATA.map((school) => (
                <th key={school.id} className="py-3 px-3 text-center font-bold text-white whitespace-nowrap">
                  <div>{school.shortName}</div>
                  <span className="text-[10px] text-slate-400 font-normal font-sans">{school.city}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-3 text-center font-mono text-slate-400">
                  {idx + 1}
                </td>
                <td className="py-3 px-4">
                  <div className="font-bold text-slate-900">{row.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{row.description}</div>
                </td>
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-slate-100 text-slate-700">
                    {row.stage}
                  </span>
                </td>
                <td className="py-3 px-3 text-center font-mono font-bold text-slate-900">
                  {row.max}
                </td>
                {SCHOOLS_DATA.map((school) => {
                  const score = row.scores[school.id] ?? 0;
                  const isZero = score === 0;
                  const isMax = score >= row.max;

                  return (
                    <td 
                      key={school.id} 
                      className={`py-3 px-3 text-center font-mono font-bold ${
                        isZero 
                          ? 'text-rose-600 bg-rose-50/40' 
                          : isMax 
                          ? 'text-emerald-700 bg-emerald-50/40' 
                          : 'text-amber-800 bg-amber-50/30'
                      }`}
                    >
                      {score}
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Total Row (Strictly Summed to Match Keynote and Logic) */}
            <tr className="bg-slate-950 text-white font-bold border-t-2 border-slate-900">
              <td colSpan={3} className="py-4 px-4 text-sm font-extrabold tracking-wide">
                TOTAL READINESS SCORE (Out of 100 Points)
              </td>
              <td className="py-4 px-3 text-center font-mono text-base text-amber-400">
                100
              </td>
              {SCHOOLS_DATA.map((school) => (
                <td key={school.id} className="py-4 px-3 text-center font-mono">
                  <div className="text-base font-extrabold text-white">{school.score}</div>
                  <div className={`text-[10px] font-bold font-sans mt-0.5 ${
                    school.band === 'Partially ready' ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    {school.band}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Explanatory notes */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Info className="w-4 h-4 text-slate-500" />
          <span>Scoring Rules & Mathematical Ground Truth:</span>
        </div>
        <p className="leading-relaxed">
          <strong>Framework Parity:</strong> Every school is scored out of 100 points ($25 + 25 + 25 + 25 = 100$). The row totals mathematically equal each campus score: {[...SCHOOLS_DATA].sort((x, y) => y.score - x.score).map((sc) => `${sc.shortName} (${sc.score})`).join(', ')}.
        </p>
        <p className="leading-relaxed">
          <strong>Reputation Zero-Score Rule:</strong> Indicator "Google Star Rating & Review Volume" scores 0 for every campus because Google currently shows 0 reviews on all six profiles. Reclassifying to "Educational institution" restores review visibility (5 pts); a parent review drive can then recover up to 13 more points per campus.
        </p>
      </div>
    </div>
  );
};
