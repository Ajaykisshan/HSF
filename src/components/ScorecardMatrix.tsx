import React, { useState } from 'react';
import { SCHOOLS_DATA, AUDIT_METADATA } from '../data/auditData';
import { Check, X, Info, Download, Layers, Compass, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface StageRowDef {
  stage: string;
  name: string;
  max: number;
  weight: string;
  description: string;
  scores: Record<string, number>;
}

const STAGES_25_ROWS: StageRowDef[] = [
  // Stage 1: Discovery (25 Pts)
  { stage: "Stage 1", name: "Google Profile Verified with Campus Locality", max: 8, weight: "8 pts", description: "Verified Google Business Profile active with campus locality.", scores: { 'hfs-thane': 8, 'hus-chennai': 8, 'hfs-powai': 8, 'thriveni-academy': 8, 'hfs-international': 8, 'hts-panvel': 8 } },
  { stage: "Stage 1", name: "Review Visibility Allowed by Category", max: 5, weight: "5 pts", description: "Primary Google category allows public ratings and reviews to show.", scores: { 'hfs-thane': 0, 'hus-chennai': 0, 'hfs-powai': 0, 'thriveni-academy': 0, 'hfs-international': 0, 'hts-panvel': 0 } },
  { stage: "Stage 1", name: "Official Website Linked on Profile", max: 6, weight: "6 pts", description: "Direct working link to official school website on profile.", scores: { 'hfs-thane': 6, 'hus-chennai': 6, 'hfs-powai': 6, 'thriveni-academy': 6, 'hfs-international': 0, 'hts-panvel': 6 } },
  { stage: "Stage 1", name: "Admissions Telephone on Profile", max: 3, weight: "3 pts", description: "Direct working telephone line listed on Google profile.", scores: { 'hfs-thane': 3, 'hus-chennai': 3, 'hfs-powai': 3, 'thriveni-academy': 3, 'hfs-international': 0, 'hts-panvel': 2 } },
  { stage: "Stage 1", name: "Photo Density (100+ Campus Photos Target)", max: 3, weight: "3 pts", description: "Knowledge panel photo count: 100+ = 3 pts, 50-99 = 2.5 pts, 20-49 = 2 pts, 1-19 = 1 pt.", scores: { 'hfs-thane': 2, 'hus-chennai': 3, 'hfs-powai': 3, 'thriveni-academy': 2, 'hfs-international': 1, 'hts-panvel': 1 } },

  // Stage 2: Proof of Life / Freshness (25 Pts)
  { stage: "Stage 2", name: "Admissions 2027–28 Intake Notice", max: 8, weight: "8 pts", description: "Prominent live 2027-28 admissions cycle notice on homepage.", scores: { 'hfs-thane': 0, 'hus-chennai': 8, 'hfs-powai': 0, 'thriveni-academy': 0, 'hfs-international': 4, 'hts-panvel': 0 } },
  { stage: "Stage 2", name: "Board Results Posted with Batch Year", max: 7, weight: "7 pts", description: "Official board exam marks or topper lists with year stated.", scores: { 'hfs-thane': 7, 'hus-chennai': 7, 'hfs-powai': 7, 'thriveni-academy': 7, 'hfs-international': 7, 'hts-panvel': 4 } },
  { stage: "Stage 2", name: "News & Event Recency (≤90 Days)", max: 6, weight: "6 pts", description: "Recency: ≤90 days = 6 pts, ≤180 days = 4 pts, older = 0 pts.", scores: { 'hfs-thane': 6, 'hus-chennai': 6, 'hfs-powai': 6, 'thriveni-academy': 4, 'hfs-international': 6, 'hts-panvel': 0 } },
  { stage: "Stage 2", name: "Principal Named with Pedagogical Vision", max: 4, weight: "4 pts", description: "Principal/Head of School officially introduced on website.", scores: { 'hfs-thane': 4, 'hus-chennai': 4, 'hfs-powai': 4, 'thriveni-academy': 4, 'hfs-international': 4, 'hts-panvel': 4 } },

  // Stage 3: Reputation & Proof (25 Pts)
  { stage: "Stage 3", name: "Google Star Rating & Review Volume", max: 13, weight: "13 pts", description: "Public average rating on Google (0 if reviews suppressed by category).", scores: { 'hfs-thane': 0, 'hus-chennai': 0, 'hfs-powai': 0, 'thriveni-academy': 0, 'hfs-international': 0, 'hts-panvel': 0 } },
  { stage: "Stage 3", name: "Active Campus Instagram & Facebook", max: 8, weight: "8 pts", description: "Active official campus-specific Facebook & Instagram channels.", scores: { 'hfs-thane': 8, 'hus-chennai': 8, 'hfs-powai': 4, 'thriveni-academy': 8, 'hfs-international': 4, 'hts-panvel': 4 } },
  { stage: "Stage 3", name: "Presence on Major K-12 Portals (7 Sites)", max: 4, weight: "4 pts", description: "Found on major education listing portals (Justdial, UniApply, Edustoke).", scores: { 'hfs-thane': 4, 'hus-chennai': 4, 'hfs-powai': 4, 'thriveni-academy': 4, 'hfs-international': 4, 'hts-panvel': 2 } },

  // Stage 4: Conversion & Action (25 Pts)
  { stage: "Stage 4", name: "Online Enquiry & Application Form", max: 8, weight: "8 pts", description: "Functional web enquiry or admission lead capture form.", scores: { 'hfs-thane': 8, 'hus-chennai': 8, 'hfs-powai': 8, 'thriveni-academy': 8, 'hfs-international': 8, 'hts-panvel': 5 } },
  { stage: "Stage 4", name: "WhatsApp Click-to-Chat Channel", max: 6, weight: "6 pts", description: "One-click WhatsApp inquiry channel for instant parent messaging.", scores: { 'hfs-thane': 0, 'hus-chennai': 0, 'hfs-powai': 0, 'thriveni-academy': 0, 'hfs-international': 0, 'hts-panvel': 0 } },
  { stage: "Stage 4", name: "Transparent Tuition Fee Schedule", max: 6, weight: "6 pts", description: "Transparent public tuition fees and fee schedule page.", scores: { 'hfs-thane': 0, 'hus-chennai': 0, 'hfs-powai': 0, 'thriveni-academy': 0, 'hfs-international': 0, 'hts-panvel': 0 } },
  { stage: "Stage 4", name: "Downloadable Prospectus & Clear CTA", max: 5, weight: "5 pts", description: "Prominent application CTA button and downloadable syllabus brochure.", scores: { 'hfs-thane': 5, 'hus-chennai': 6, 'hfs-powai': 1, 'thriveni-academy': 0, 'hfs-international': 1, 'hts-panvel': 2 } },
];

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
            <span className="font-extrabold text-amber-400 font-mono text-xl">54.2 / 100</span> (6 Campuses Audited)
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
          <strong>Framework Parity:</strong> Every school is scored out of 100 points ($25 + 25 + 25 + 25 = 100$). The row totals mathematically equal each campus score: HUS Chennai (71), HFS Thane (61), HFS Powai (54), Thriveni Academy (54), HFS International (47), and HTS Panvel (38).
        </p>
        <p className="leading-relaxed">
          <strong>Reputation Zero-Score Rule:</strong> Indicator "Google Star Rating & Review Volume" scores 0 for every campus because Google displays 0 reviews under standard institutional categories. Reclassifying to "Educational institution" immediately recovers up to 13 points per campus.
        </p>
      </div>
    </div>
  );
};
