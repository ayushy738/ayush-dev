"use client";

import { education } from "../../data/portfolio";
import { GraduationCap } from "lucide-react";

export default function EducationContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// src/education.ts"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-6">Education</h1>

      {/* TypeScript representation */}
      <div className="bg-terminal-bg border border-border rounded-sm p-4 mb-8 font-mono text-[12px] leading-[1.8]">
        <div className="text-syntax-keyword">const</div>
        <div>
          <span className="text-syntax-variable"> education</span>
          <span className="text-syntax-type">: Education[]</span>
          <span className="text-syntax-operator"> = [</span>
        </div>
        {education.map((edu, i) => (
          <div key={i} className="pl-4">
            <span className="text-syntax-punctuation">{"{"}</span>
            <div className="pl-4">
              <span className="text-syntax-property">institution</span>
              <span className="text-syntax-operator">: </span>
              <span className="text-syntax-string">&quot;{edu.institution}&quot;</span>
              <span className="text-syntax-operator">,</span>
            </div>
            <div className="pl-4">
              <span className="text-syntax-property">degree</span>
              <span className="text-syntax-operator">: </span>
              <span className="text-syntax-string">&quot;{edu.degree}&quot;</span>
              <span className="text-syntax-operator">,</span>
            </div>
            <div className="pl-4">
              <span className="text-syntax-property">score</span>
              <span className="text-syntax-operator">: </span>
              <span className="text-syntax-string">&quot;{edu.score}&quot;</span>
              <span className="text-syntax-operator">,</span>
            </div>
            <div className="pl-4">
              <span className="text-syntax-property">period</span>
              <span className="text-syntax-operator">: </span>
              <span className="text-syntax-string">&quot;{edu.period}&quot;</span>
            </div>
            <span className="text-syntax-punctuation">{"}"}</span>
            {i < education.length - 1 && <span className="text-syntax-operator">,</span>}
          </div>
        ))}
        <span className="text-syntax-operator">];</span>
      </div>

      {/* Visual timeline */}
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-[1.5px] bg-border" />
        {education.map((edu, i) => (
          <div key={i} className="relative pl-10 pb-8 last:pb-0">
            <div className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center
              ${edu.current ? "border-accent bg-accent/10" : "border-border bg-sidebar-bg"}`}>
              <GraduationCap size={13} className={edu.current ? "text-accent" : "text-activitybar-fg"} />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-editor-fg">
                {edu.institution}
              </h3>
              <p className="text-[13px] text-syntax-keyword font-mono mt-0.5">
                {edu.degree}
              </p>
              <div className="flex flex-wrap gap-3 mt-1 text-[12px] text-activitybar-fg">
                <span>{edu.score}</span>
                <span>{edu.period}</span>
              </div>
              {edu.current && (
                <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 bg-accent/10 text-accent text-[11px] font-mono rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Current
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
