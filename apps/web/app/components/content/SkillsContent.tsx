"use client";

import { skills, skillProjectMap } from "../../data/portfolio";
import { useIDE } from "../../context/IDEContext";
import { useState } from "react";

export default function SkillsContent() {
  const { openFile } = useIDE();
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const categories = [
    { key: "languages", label: "Languages" },
    { key: "frameworks-backend", label: skills["frameworks-backend"].label },
    { key: "databases-data", label: skills["databases-data"].label },
    { key: "infrastructure-tools", label: skills["infrastructure-tools"].label },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// src/skills.ts — Skills mapped to real projects"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-6">Skills</h1>

      <div className="space-y-8">
        {categories.map((cat) => {
          const items = skills[cat.key as keyof typeof skills].items;
          return (
            <section key={cat.key}>
              <h2 className="text-[15px] font-semibold text-editor-fg mb-3">
                <span className="text-syntax-comment font-mono text-[13px]">## </span>
                {cat.label}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => {
                  const projects = skillProjectMap[skill];
                  const isActive = activeSkill === skill;
                  return (
                    <div key={skill} className="relative">
                      <button
                        onClick={() =>
                          setActiveSkill(isActive ? null : skill)
                        }
                        className={`
                          px-3 py-1.5 rounded-sm border text-[12px] font-mono transition-all duration-150
                          ${
                            isActive
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border bg-input-bg text-syntax-variable hover:border-accent/50"
                          }
                          ${projects ? "cursor-pointer" : "cursor-default"}
                        `}
                      >
                        {skill}
                      </button>
                      {isActive && projects && (
                        <div className="absolute left-0 top-full mt-1 z-20 bg-dropdown-bg border border-border rounded-sm shadow-lg min-w-[160px]">
                          <div className="px-2.5 py-1.5 text-[10px] text-activitybar-fg font-mono uppercase tracking-wider border-b border-border">
                            Used in
                          </div>
                          {projects.map((proj) => (
                            <div
                              key={proj}
                              className="px-2.5 py-1.5 text-[12px] text-editor-fg font-mono flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-syntax-comment flex-shrink-0" />
                              {proj}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Skills → Projects tree view */}
      <hr className="border-border my-8" />

      <h2 className="text-[15px] font-semibold text-editor-fg mb-4">
        <span className="text-syntax-comment font-mono text-[13px]">## </span>
        Skills → Projects Map
      </h2>

      <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.6]">
        {Object.entries(skillProjectMap)
          .filter(([, projs]) => projs.length > 0)
          .slice(0, 12)
          .map(([skill, projs]) => (
            <div key={skill} className="mb-2">
              <span className="text-syntax-type">{skill}</span>
              {projs.map((proj, i) => (
                <div key={proj} className="pl-3">
                  <span className="text-syntax-punctuation">
                    {i === projs.length - 1 ? "└── " : "├── "}
                  </span>
                  <span className="text-syntax-string">{proj}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
