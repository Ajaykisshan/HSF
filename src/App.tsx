/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNav, NavTab } from './components/TopNav';
import { ApplePresentation } from './components/ApplePresentation';
import { ScoreLogicView } from './components/ScoreLogicView';
import { SchoolCardsTour } from './components/SchoolCardsTour';
import { ScoreSimulator } from './components/ScoreSimulator';
import { RoadmapView } from './components/RoadmapView';
import { ScorecardMatrix } from './components/ScorecardMatrix';
import { SchoolDetailModal } from './components/SchoolDetailModal';
import { SchoolAudit, AUDIT_METADATA } from './data/auditData';
import { Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('apple');
  const [selectedSchool, setSelectedSchool] = useState<SchoolAudit | null>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar (Apple Frosted Glass) */}
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} onPrint={handlePrint} />

      {/* Main Executive Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Tab Content Routing */}
        {activeTab === 'apple' && (
          <ApplePresentation onJumpToFixes={() => setActiveTab('simulator')} />
        )}

        {activeTab === 'logic' && (
          <ScoreLogicView />
        )}

        {activeTab === 'tour' && (
          <SchoolCardsTour 
            onOpenDetails={(school) => setSelectedSchool(school)}
          />
        )}

        {activeTab === 'simulator' && (
          <ScoreSimulator />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView />
        )}

        {activeTab === 'scorecard' && (
          <ScorecardMatrix />
        )}
      </main>

      {/* School Detailed Evidence Inspector Modal */}
      {selectedSchool && (
        <SchoolDetailModal 
          school={selectedSchool} 
          onClose={() => setSelectedSchool(null)} 
        />
      )}

      {/* Clean Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">Hiranandani Group of Schools</span>
            <span aria-hidden="true">·</span>
            <span>Admissions 2027–28 Strategy</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-mono">25·25·25·25 Pathway</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            Master Audit File: Hiranandani_Digital_Footprint_Scorecard.xlsx · Public data, school websites re-checked 1 Oct 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
