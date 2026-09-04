"use client";

import { profile } from "../../data/portfolio";
import { ExternalLink } from "lucide-react";

export default function AchievementsContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// src/achievements.ts"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-6">Achievements</h1>

      <div className="space-y-4">
        <div className="border border-border rounded-sm p-4 bg-sidebar-bg/50">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[15px] font-semibold text-editor-fg">
                Pupil on Codeforces
              </h3>
              <p className="text-[13px] text-activitybar-fg mt-1">
                Competitive programming practice on Codeforces
              </p>
            </div>
            <a
              href={profile.links.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[12px] text-accent hover:text-accent-hover transition-colors flex-shrink-0"
            >
              Profile <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
        <div className="text-syntax-keyword">const</div>
        <div>
          <span className="text-syntax-variable"> achievements</span>
          <span className="text-syntax-operator"> = [</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-punctuation">{"{"}</span>
          <div className="pl-4">
            <span className="text-syntax-property">platform</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Codeforces&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">rank</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Pupil&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">profile</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;codeforces.com/profile/a4ayushyadav2007&quot;</span>
          </div>
          <span className="text-syntax-punctuation">{"}"}</span>
        </div>
        <span className="text-syntax-operator">];</span>
      </div>
    </div>
  );
}
