"use client";

import { experience } from "../../data/portfolio";
import { MapPin, Calendar } from "lucide-react";

export default function NitpWebTeamContent() {
  const exp = experience[1]!;

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// experience/nitp-web-team.ts"}
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-editor-fg mb-1">{exp.company}</h1>
        <p className="text-[16px] text-syntax-keyword font-mono">{exp.role}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-[12px] text-activitybar-fg">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {exp.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {exp.location}
          </span>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Overview
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          Production engineering for institute-wide platforms serving 6,000+ students
          and 300+ faculty members at NIT Patna.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Engineering Work
        </h2>
        <div className="space-y-3">
          {exp.details.map((detail, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[13px] text-terminal-fg leading-relaxed">
              <span className="text-syntax-comment mt-0.5 flex-shrink-0">→</span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-input-bg border border-border rounded-sm text-[12px] font-mono text-syntax-variable"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Impact
        </h2>
        <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
          <div className="text-syntax-comment">{"// Platform reach"}</div>
          <div className="mt-1">
            <span className="text-syntax-keyword">const</span>{" "}
            <span className="text-syntax-variable">platform</span>{" "}
            <span className="text-syntax-operator">=</span>{" "}
            <span className="text-syntax-punctuation">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">students</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;6,000+&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">faculty</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;300+&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">type</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Academic & administrative platforms&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">environment</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Shared production codebase&quot;</span>
          </div>
          <div>
            <span className="text-syntax-punctuation">{"}"}</span>
            <span className="text-syntax-operator">;</span>
          </div>
        </div>
      </section>
    </div>
  );
}
