import React from 'react';
import { SchoolAudit } from '../data/auditData';
import { CAMPUS_COMPETITORS } from './ApplePresentation';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  MapPin, 
  GraduationCap, 
  Phone, 
  Globe,
  Camera,
  Star
} from 'lucide-react';

interface SchoolDetailModalProps {
  school: SchoolAudit | null;
  onClose: () => void;
}

export const SchoolDetailModal: React.FC<SchoolDetailModalProps> = ({ school, onClose }) => {
  if (!school) return null;

  const competitorData = CAMPUS_COMPETITORS[school.id] || CAMPUS_COMPETITORS['hfs-thane'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <span>{school.city}</span>
              <span aria-hidden="true">·</span>
              <span>{school.curriculum}</span>
              <span aria-hidden="true">·</span>
              <span className={`font-semibold font-mono ${
                school.score >= 80 ? 'text-emerald-400' : school.score >= 60 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                Score: {school.score} / 100 ({school.band})
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              {school.name}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {school.locality}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600">
          {/* Quick links & Disaggregated Platform presence */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-slate-400 text-[11px] block font-medium">Official Website</span>
              <a
                href={school.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span className="truncate">{school.websiteUrl.replace('https://', '')}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {competitorData.websiteGalleryPhotos} gallery photos
              </span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block font-medium">Google Maps Profile</span>
              <a
                href={competitorData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-rose-600 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span className="truncate">0 reviews (Suppressed)</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Category: {school.googleCategory}
              </span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block font-medium">Photo Density (Target: 100+)</span>
              <span className={`font-semibold font-mono block mt-0.5 ${
                school.googlePhotosCount >= 100 ? 'text-emerald-700' : 'text-amber-700'
              }`}>
                {school.googlePhotosCount} / 100 photos
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {competitorData.photoScore}
              </span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block font-medium">Verified Directory (Justdial)</span>
              <a
                href={competitorData.directoryUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>{competitorData.directoryRatingText}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Independent platform proof
              </span>
            </div>
          </div>

          {/* The 4 Core Admissions Dimensions */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
              The Four Core Admissions Dimensions (Verified Ground Truth)
            </h3>

            {/* 1. Admissions Status */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">1. Admissions Open & Cycle Signalling:</span>
                {school.admissionsStatus.mentions2027_28 ? (
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-semibold text-[11px] border border-amber-200">
                    2027-28 in Image Only
                  </span>
                ) : (
                  <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-semibold text-[11px] border border-rose-200">
                    No 2027-28 Mention
                  </span>
                )}
              </div>
              <p className="text-slate-700">
                <strong>Advertised Cycle:</strong> {school.admissionsStatus.cycleAdvertised}
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-600">
                {school.admissionsStatus.evidenceText}
              </div>
            </div>

            {/* 2. Teachers / Faculty */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">2. Teachers & Faculty Disclosure:</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px] border border-emerald-200">
                  Principal Named
                </span>
              </div>
              <p className="text-slate-700">
                <strong>Head of School:</strong> {school.teachersFacultyStatus.principalName}
              </p>
              <p className="text-slate-500">
                <strong>Estimated Ratio:</strong> {school.teachersFacultyStatus.teacherStudentRatio}
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-600">
                {school.teachersFacultyStatus.evidenceText}
              </div>
            </div>

            {/* 3. Board Marks */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">3. Board Marks & Academic Results:</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px] border border-emerald-200">
                  {school.boardMarksStatus.displayFormat}
                </span>
              </div>
              <p className="text-slate-700">
                <strong>Highlights ({school.boardMarksStatus.latestBatch}):</strong> {school.boardMarksStatus.highlights}
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-600">
                {school.boardMarksStatus.evidenceText}
              </div>
            </div>

            {/* 4. Fee Structure */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">4. Fee Structure Disclosure:</span>
                <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-semibold text-[11px] border border-rose-200">
                  0 Tuition Disclosed
                </span>
              </div>
              <p className="text-slate-700">
                <strong>Website Stated:</strong> {school.feeStructureStatus.statedFees}
              </p>
              <p className="text-slate-500">
                <strong>Aggregator Estimate:</strong> {school.feeStructureStatus.thirdPartyAggregatorRange}
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-600">
                {school.feeStructureStatus.evidenceText}
              </div>
            </div>
          </div>

          {/* Local Competitors Photo & Rating Comparison Table in Modal */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Catchment Micro-Market Competitor Verification Table:
            </h4>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">School Name</th>
                    <th className="py-2.5 px-2">Google Category</th>
                    <th className="py-2.5 px-2 text-center">Maps Photos</th>
                    <th className="py-2.5 px-2">Google Maps Rating</th>
                    <th className="py-2.5 px-2">Justdial Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {competitorData.competitors.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-semibold text-slate-800">{c.schoolName}</td>
                      <td className="py-2 px-2 font-mono text-[11px]">{c.googleCategory}</td>
                      <td className="py-2 px-2 text-center font-mono font-bold text-slate-900">
                        {c.googlePhotosCount}
                      </td>
                      <td className="py-2 px-2">
                        <a
                          href={c.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-700 hover:underline font-mono text-[11px] inline-flex items-center gap-1"
                        >
                          <span>{c.googleRatingText}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      </td>
                      <td className="py-2 px-2">
                        <a
                          href={c.directoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-700 hover:underline font-mono text-[11px] inline-flex items-center gap-1"
                        >
                          <span>{c.directoryRatingText}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Audit evidence captured 27 Sep 2026, re-verified 30 Sep 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
