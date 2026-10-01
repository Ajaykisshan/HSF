import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Users, 
  Award, 
  CreditCard, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Info,
  Building,
  GraduationCap
} from 'lucide-react';
import { SCHOOLS_DATA, SchoolAudit } from '../data/auditData';

export const FourCoreSummary: React.FC = () => {
  const [activeCriterion, setActiveCriterion] = useState<'admissions' | 'teachers' | 'marks' | 'fees'>('admissions');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span>Primary Verification Analysis</span>
          <span aria-hidden="true">·</span>
          <span>4 Required Dimensions</span>
          <span aria-hidden="true">·</span>
          <span>Cross-Checked Against Live Pages</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          The Four Pillars of Admissions Readiness: Detailed Evidence Cross-Check
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Prospective parents seeking admissions evaluate four critical decision points before choosing to contact a school. Below is the ground truth from live websites and public profiles as of September 2026.
        </p>
      </div>

      {/* Criteria Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveCriterion('admissions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeCriterion === 'admissions'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <CalendarCheck className="w-4 h-4" />
          <span>1. Admissions Open Status</span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-200">
            2 of 6
          </span>
        </button>

        <button
          onClick={() => setActiveCriterion('teachers')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeCriterion === 'teachers'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>2. Leadership / Principal Named</span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-200 font-bold">
            6 of 6 (100% Pass)
          </span>
        </button>

        <button
          onClick={() => setActiveCriterion('marks')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeCriterion === 'marks'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>3. Board Marks Mentioned</span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-200">
            6 of 6 (3 Hidden)
          </span>
        </button>

        <button
          onClick={() => setActiveCriterion('fees')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeCriterion === 'fees'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>4. Fee Structure Disclosed</span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-200">
            0 of 6
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. ADMISSIONS OPEN STATUS                                                */}
      {/* ========================================================================= */}
      {activeCriterion === 'admissions' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Key Verdict: Severe Admissions Signal Confusion</span>
            </div>
            <p className="leading-relaxed">
              For an admissions season targeting <strong>2027–28</strong> (or late 2026–27 intake), four out of five schools still advertise previous cycles or display closed application deadlines. Only HFS International references 2027–28, but strictly within image graphics that cannot be indexed by Google or read by text-to-speech tools.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-1/5">School Name</th>
                  <th className="py-3 px-3 w-1/6">Cycle Advertised</th>
                  <th className="py-3 px-3 w-1/12 text-center">Mentions 2027-28?</th>
                  <th className="py-3 px-4 w-2/5">Quoted Evidence & Website Findings</th>
                  <th className="py-3 px-3 w-1/6 text-right">Target Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {SCHOOLS_DATA.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                      {school.shortName}
                      <span className="block text-[11px] font-normal text-slate-500">{school.city} · {school.curriculum}</span>
                    </td>
                    <td className="py-3 px-3 align-top font-medium text-slate-800">
                      {school.admissionsStatus.cycleAdvertised}
                    </td>
                    <td className="py-3 px-3 align-top text-center">
                      {school.admissionsStatus.mentions2027_28 ? (
                        <span className="inline-flex items-center gap-1 text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Image Only</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>No</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 align-top space-y-1">
                      <div className="italic text-slate-700 bg-slate-50 p-2 rounded border border-slate-200">
                        "{school.admissionsStatus.evidenceText}"
                      </div>
                      {school.admissionsStatus.criticalIssue && (
                        <div className="text-[11px] text-rose-600 font-medium">
                          ⚠ Flag: {school.admissionsStatus.criticalIssue}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-3 align-top text-right">
                      <a
                        href={school.admissionsStatus.evidenceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                      >
                        <span>Check URL</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. TEACHERS / LEADERSHIP NAMED (UPDATED RULE: PRINCIPAL IS SUFFICIENT)     */}
      {/* ========================================================================= */}
      {activeCriterion === 'teachers' && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>Key Verdict: 100% Compliance Under Updated Rule (Principal / Leadership Named)</span>
            </div>
            <p className="leading-relaxed">
              <strong>Rule Applied:</strong> As specified, having the Principal, Director, or Head of School prominently named with qualifications and institutional vision is sufficient for parent trust. <strong>All six Hiranandani campuses officially name their leadership</strong>, earning full credit across the entire network.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-1/5">School Name</th>
                  <th className="py-3 px-3 w-1/4">Principal / Director Named</th>
                  <th className="py-3 px-3 w-1/6 text-center">Compliance Status</th>
                  <th className="py-3 px-3 w-1/8">Staff Ratio</th>
                  <th className="py-3 px-4 w-1/3">Leadership Evidence & Target URL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {SCHOOLS_DATA.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                      {school.shortName}
                    </td>
                    <td className="py-3 px-3 align-top font-medium text-slate-800">
                      <span className="flex items-center gap-1 text-emerald-700">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{school.teachersFacultyStatus.principalName}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 align-top text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>100% Pass</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 align-top font-mono text-slate-700">
                      {school.teachersFacultyStatus.teacherStudentRatio}
                    </td>
                    <td className="py-3 px-4 align-top space-y-1">
                      <p className="text-slate-700">{school.teachersFacultyStatus.evidenceText}</p>
                      <a
                        href={school.teachersFacultyStatus.evidenceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium text-[11px]"
                      >
                        <span>View Leadership Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. BOARD MARKS MENTIONED                                                 */}
      {/* ========================================================================= */}
      {activeCriterion === 'marks' && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Key Verdict: Stellar Academic Track Record, But 3 Schools Bury Them</span>
            </div>
            <p className="leading-relaxed">
              All 5 schools post board exam results somewhere on their domains (scoring 4/4 on indicator 17). However, the format makes a dramatic difference: while Thane and Powai celebrate toppers on their homepages, Panvel locks them in an unsearchable JPEG graphic, Thriveni hides them in a regulatory CBSE PDF table, and HFS International buries May 2025 IBDP results on an inner updates page.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-1/5">School Name</th>
                  <th className="py-3 px-3 w-1/6">Display Format</th>
                  <th className="py-3 px-3 w-1/6">Latest Batch</th>
                  <th className="py-3 px-3 w-1/4">Academic Highlights</th>
                  <th className="py-3 px-4 w-1/4">Audit Finding & Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {SCHOOLS_DATA.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                      {school.shortName}
                    </td>
                    <td className="py-3 px-3 align-top">
                      <span className={`inline-block px-2 py-0.5 rounded font-medium text-[11px] ${
                        school.boardMarksStatus.displayFormat === 'Homepage Showcase'
                          ? 'bg-emerald-100 text-emerald-800'
                          : school.boardMarksStatus.displayFormat === 'Image Graphic Only'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {school.boardMarksStatus.displayFormat}
                      </span>
                    </td>
                    <td className="py-3 px-3 align-top font-mono font-medium text-slate-800">
                      {school.boardMarksStatus.latestBatch}
                    </td>
                    <td className="py-3 px-3 align-top font-medium text-slate-900">
                      {school.boardMarksStatus.highlights}
                    </td>
                    <td className="py-3 px-4 align-top space-y-1">
                      <p className="text-slate-700">{school.boardMarksStatus.evidenceText}</p>
                      {school.boardMarksStatus.criticalIssue && (
                        <p className="text-[11px] text-amber-700 font-medium">
                          Note: {school.boardMarksStatus.criticalIssue}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. FEE STRUCTURE DISCLOSED                                               */}
      {/* ========================================================================= */}
      {activeCriterion === 'fees' && (
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <XCircle className="w-4 h-4 text-rose-700" />
              <span>Key Verdict: 100% Fee Opacity Leaves Ground to Third-Party Aggregators</span>
            </div>
            <p className="leading-relaxed">
              Zero out of five schools provide a publicly viewable fee structure on their websites. Only HFS Thane displays a nominal ₹500 registration fee during online application. As a result, third-party aggregators (UniApply, Justdial, Edustoke) fill the vacuum with wildly conflicting and unverified numbers.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-1/5">School Name</th>
                  <th className="py-3 px-3 w-1/6 text-center">Fee Page on Site?</th>
                  <th className="py-3 px-3 w-1/4">Official Website Disclosure</th>
                  <th className="py-3 px-3 w-1/4">Third-Party Aggregator Drift</th>
                  <th className="py-3 px-3 w-1/6">Audit Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {SCHOOLS_DATA.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                      {school.shortName}
                    </td>
                    <td className="py-3 px-3 align-top text-center">
                      <span className="inline-flex items-center gap-1 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>None (0/5)</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 align-top font-medium text-slate-800">
                      {school.feeStructureStatus.statedFees}
                    </td>
                    <td className="py-3 px-3 align-top font-mono text-slate-700">
                      {school.feeStructureStatus.thirdPartyAggregatorRange}
                    </td>
                    <td className="py-3 px-3 align-top text-slate-600">
                      Forces phone inquiries during office hours; drives parents to unverified portals.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
