import React from 'react';
import { PEER_BENCHMARK_DATA, HIDDEN_REVIEWS_PREMIUM_PEERS } from '../data/auditData';
import { AlertCircle, CheckCircle2, ShieldAlert, Star, ExternalLink } from 'lucide-react';

export const PeerBenchmarkView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span>Competitive Landscape</span>
          <span aria-hidden="true">·</span>
          <span>Sample of 29 Schools across 18 Networks</span>
          <span aria-hidden="true">·</span>
          <span>Mumbai MMR & Chennai</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Google Review Visibility Follows Category Exactly — And Hiranandani Is on the Wrong Side
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          On April 30, 2025, Google disabled public ratings and reviews on institutional school categories (<em>ICSE school, CBSE school, Secondary school, General education school</em>). Catchment competitors who switched to <strong>"Education center"</strong> or <strong>"Educational institution"</strong> kept their public reviews intact.
        </p>
      </div>

      {/* Critical Comparison Hero Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
              Hiranandani Network (6 Campuses)
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-200 text-rose-800">
              0 Reviews Displayed
            </span>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900">
            0 <span className="text-sm font-sans font-normal text-slate-500">visible reviews on Google Maps</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            All 6 campuses are categorized as <em>ICSE school, International school, General education school, Secondary school, or Building</em>. When parents search "Hiranandani Foundation School Powai", "Thane", or "HUS Chennai", no star rating or review quote appears in the Google Knowledge Panel.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              Direct Catchment Peers (10 Campuses)
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-800">
              2,595 Reviews Displayed
            </span>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900">
            2,595 <span className="text-sm font-sans font-normal text-slate-500">visible reviews (Mean: 4.25★)</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Every peer filed under <strong>"Education center"</strong> or <strong>"Educational institution"</strong> displays hundreds of social reviews (Podar Powai: 589 reviews at 4.4★; Podar Nerul: 781 reviews at 4.2★; Billabong Malad: 500 reviews at 4.3★).
          </p>
        </div>
      </div>

      {/* Table: Peers with Visible Reviews */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          Catchment Competitors With Fully Visible Google Reviews
        </h3>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">School & Campus</th>
                <th className="py-3 px-3">Network</th>
                <th className="py-3 px-3">City / Locality</th>
                <th className="py-3 px-3">Google Category</th>
                <th className="py-3 px-3 text-center">Rating</th>
                <th className="py-3 px-3 text-right">Review Count</th>
                <th className="py-3 px-3 text-right">Photos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {PEER_BENCHMARK_DATA.map((peer, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    {peer.name}
                  </td>
                  <td className="py-3 px-3">{peer.network}</td>
                  <td className="py-3 px-3">{peer.city}</td>
                  <td className="py-3 px-3">
                    <span className="font-mono text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {peer.category}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{peer.rating}</span>
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-semibold">
                    {peer.verificationUrl ? (
                      <a
                        href={peer.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-900 hover:text-emerald-700 hover:underline"
                        title={`Verify reviews for ${peer.name} on Google Maps`}
                      >
                        <span>{peer.reviewsCount} reviews</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <span className="text-slate-900">{peer.reviewsCount} reviews</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-slate-600">
                    {peer.photosCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Strategic Opportunity: Premium Peers Also Asleep */}
      <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
            Strategic Window of Opportunity
          </span>
          <h3 className="text-lg font-bold">
            Elite Premium Peers Are Also Trapped in Hidden Categories
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Dhirubhai Ambani International School (DAIS), Oberoi International, Smt. Sulochanadevi Singhania School, and Bombay Scottish also suffer from 0 visible reviews because they are classified as "International school" or "ICSE school".
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {HIDDEN_REVIEWS_PREMIUM_PEERS.map((school, i) => (
            <div key={i} className="bg-slate-800/80 border border-slate-700 rounded-lg p-2.5 text-xs space-y-1">
              <span className="font-semibold text-white block truncate" title={school.name}>
                {school.name}
              </span>
              <span className="text-[11px] text-slate-400 block">{school.city}</span>
              <span className="text-[10px] text-rose-400 font-mono block">0 reviews visible</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-emerald-400 font-medium pt-1">
          ✓ First-Mover Advantage: By switching category to "Educational institution" in Week 1, Hiranandani will become the FIRST elite brand in its tier to display authentic reviews and ratings.
        </p>
      </div>
    </div>
  );
};
