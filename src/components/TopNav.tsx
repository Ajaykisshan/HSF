import React from 'react';
import { Sparkles, HelpCircle, School, Calculator, Clock, FileSpreadsheet, Printer } from 'lucide-react';

export type NavTab = 'apple' | 'logic' | 'tour' | 'simulator' | 'roadmap' | 'scorecard';

interface TopNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onPrint: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ activeTab, setActiveTab, onPrint }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Wordmark (Apple/Hiranandani Luxury Style) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-amber-400 flex items-center justify-center font-bold text-sm tracking-wider shadow-sm border border-slate-800">
            H
          </div>
          <div>
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 block leading-tight">
              Hiranandani Schools
            </span>
            <span className="text-[10px] uppercase tracking-wider text-amber-800 font-bold block">
              25·25·25·25 Audit · 2027–28
            </span>
          </div>
        </div>

        {/* Navigation Links (Apple Frosted Glass Segmented Control) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs font-semibold border border-slate-200/60">
          <button
            onClick={() => setActiveTab('apple')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'apple'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Keynote</span>
          </button>

          <button
            onClick={() => setActiveTab('logic')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'logic'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>Scorecard Logic</span>
          </button>

          <button
            onClick={() => setActiveTab('tour')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'tour'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <School className="w-3.5 h-3.5" />
            <span>1-by-1 Tour</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'simulator'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>Rapid Leap Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'roadmap'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>90-Day Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('scorecard')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'scorecard'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Master Rubric</span>
          </button>
        </nav>

        {/* Zone 3: Print Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrint}
            title="Print or export brief"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Print Brief</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center gap-1 px-4 py-2 border-t border-slate-100 overflow-x-auto text-xs font-medium">
        <button
          onClick={() => setActiveTab('apple')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'apple' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'}`}
        >
          Executive Keynote
        </button>
        <button
          onClick={() => setActiveTab('logic')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'logic' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'}`}
        >
          Score Logic
        </button>
        <button
          onClick={() => setActiveTab('tour')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'tour' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'}`}
        >
          1-by-1 Tour
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'simulator' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'}`}
        >
          Simulator
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'roadmap' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'}`}
        >
          Roadmap
        </button>
      </div>
    </header>
  );
};
