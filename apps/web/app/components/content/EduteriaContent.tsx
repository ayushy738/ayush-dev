"use client";

import { experience } from "../../data/portfolio";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { MapPin, Calendar } from "lucide-react";

export default function EduteriaContent() {
  const exp = experience[0]!; // Eduteria

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// experience/eduteria.ts"}
      </div>

      {/* Header */}
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

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Overview
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          {exp.description} The platform is a Quiz & Current Affairs application
          built for scale — supporting 10K concurrent users and leaderboards
          across 100K+ student records.
        </p>
      </section>

      {/* Engineering Work */}
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

      {/* Architecture */}
      {exp.architectureNodes && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-editor-fg mb-3">
            <span className="text-syntax-comment font-mono text-[13px]">## </span>
            Simplified Architecture
          </h2>
          <ArchitectureDiagram
            nodes={exp.architectureNodes}
            title="Eduteria Quiz Platform — Simplified Architecture"
          />
        </section>
      )}

      {/* Stack */}
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

      {/* Key engineering decisions as code */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Engineering Decisions
        </h2>
        <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
          <div className="text-syntax-comment">{"// Key decisions"}</div>
          <div className="mt-2">
            <span className="text-syntax-keyword">const</span>{" "}
            <span className="text-syntax-variable">decisions</span>{" "}
            <span className="text-syntax-operator">=</span>{" "}
            <span className="text-syntax-punctuation">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">caching</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Redis for session data, leaderboard rankings, quiz metadata&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">database</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;PostgreSQL with query optimization and indexing&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">auth</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Role-based access control (RBAC)&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">processing</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Async leaderboard computation for 100K+ records&quot;</span>
            <span className="text-syntax-operator">,</span>
          </div>
          <div className="pl-4">
            <span className="text-syntax-property">scale</span>
            <span className="text-syntax-operator">: </span>
            <span className="text-syntax-string">&quot;Designed for 10K concurrent users&quot;</span>
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
