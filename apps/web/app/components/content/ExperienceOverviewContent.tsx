"use client";

import { experience } from "../../data/portfolio";
import { useIDE } from "../../context/IDEContext";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function ExperienceOverviewContent() {
  const { openFile } = useIDE();

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      {/* Header */}
      <div className="font-mono text-[13px] text-syntax-comment mb-6">
        {"// src/experience.ts — Professional Experience"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-6">Experience</h1>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-border rounded-sm p-5 hover:border-accent/30 transition-colors bg-sidebar-bg/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h2 className="text-[16px] font-semibold text-editor-fg">
                  {exp.role}
                </h2>
                <p className="text-[14px] text-accent">{exp.company}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 text-[12px] text-activitybar-fg">
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

            <p className="text-[13px] text-terminal-fg mb-3 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-input-bg border border-border rounded-sm text-[11px] font-mono text-syntax-variable"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() =>
                openFile(
                  exp.id,
                  `${exp.id === "eduteria" ? "eduteria" : "nitp-web-team"}.ts`,
                  `AYUSH-PORTFOLIO/experience/${exp.id === "eduteria" ? "eduteria" : "nitp-web-team"}.ts`,
                  "typescript"
                )
              }
              className="flex items-center gap-1.5 text-[12px] text-accent hover:text-accent-hover transition-colors group"
            >
              View details
              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
