import React from 'react';
import { ROADMAP_STAGES } from '../data/auditData';
import { Calendar, CheckCircle2, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span>Execution Blueprint</span>
          <span aria-hidden="true">·</span>
          <span>90-Day Digital Turnaround</span>
          <span aria-hidden="true">·</span>
          <span>Zero Civil Works Required</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Four Workstreams, Ninety Days: Restoring Digital Admissions Parity
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Sequenced by enquiry impact and implementation friction. Workstreams 1 & 2 alone deliver the largest visible perception shift: instant review display and clear 2027–28 availability.
        </p>
      </div>

      {/* Trajectory Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block mb-1">
            Network Trajectory
          </span>
          <div className="text-base font-bold text-slate-900">
            Current Index: <span className="font-mono text-rose-600">54.2 / 100</span> (At-Risk Baseline) → Target Day 90: <span className="font-mono text-emerald-600">85.3+ / 100</span> (Ready Band)
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md shadow-2xs font-mono text-emerald-700">
            +31.1 Point Net Gain
          </span>
        </div>
      </div>

      {/* Phased Roadmap Detailed Cards */}
      <div className="space-y-6">
        {ROADMAP_STAGES.map((stage, idx) => (
          <div 
            key={idx} 
            className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-slate-900 text-white rounded font-mono text-xs font-bold">
                  {stage.phase}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {stage.title}
                </h3>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Effort: <span className="text-slate-900 font-semibold">{stage.effort}</span> · Owner: <span className="text-slate-900 font-semibold">{stage.owner}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <span className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">
                  Mandatory Execution Tasks:
                </span>
                <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc">
                  {stage.actions.map((act, aIdx) => (
                    <li key={aIdx} className="leading-relaxed">
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-emerald-700 block mb-1">
                    Audited Outcome to Track:
                  </span>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {stage.impact}
                  </p>
                </div>
                <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
                  Re-measured via 22-indicator method at Day 90
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
