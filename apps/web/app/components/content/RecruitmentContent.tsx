"use client";

import { projects } from "../../data/portfolio";
import { useIDE } from "../../context/IDEContext";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { ArrowRight, Calendar, CircleDot } from "lucide-react";

export default function RecruitmentReadmeContent() {
  const project = projects[1]!;
  const { openFile } = useIDE();

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/recruitment-portal/README.md"}
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-editor-fg mb-2">{project.name}</h1>
        <div className="flex flex-wrap items-center gap-3 text-[12px] mb-3">
          <span className="flex items-center gap-1.5 text-success">
            <CircleDot size={12} />
            {project.status}
          </span>
          <span className="flex items-center gap-1 text-activitybar-fg">
            <Calendar size={12} />
            {project.period}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-input-bg border border-border rounded-sm text-[11px] font-mono text-syntax-variable"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Overview
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          {project.overview}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Engineering Work
        </h2>
        <div className="space-y-2.5">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[13px] text-terminal-fg leading-relaxed">
              <span className="text-syntax-comment mt-0.5 flex-shrink-0">→</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Architecture
        </h2>
        <ArchitectureDiagram
          nodes={project.architectureNodes}
          title="Recruitment Portal — Simplified Architecture"
        />
      </section>

      {/* Presigned URL flow */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Document Access Flow
        </h2>
        <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
          <div className="text-syntax-comment">{"// Presigned URL document access"}</div>
          <div className="mt-2 space-y-1">
            <div>
              <span className="text-syntax-comment">1. </span>
              <span className="text-terminal-fg">Client requests document access</span>
            </div>
            <div>
              <span className="text-syntax-comment">2. </span>
              <span className="text-terminal-fg">Fastify API validates RBAC permissions</span>
            </div>
            <div>
              <span className="text-syntax-comment">3. </span>
              <span className="text-terminal-fg">API generates presigned URL from MinIO</span>
            </div>
            <div>
              <span className="text-syntax-comment">4. </span>
              <span className="text-terminal-fg">Client downloads directly from MinIO</span>
            </div>
            <div>
              <span className="text-syntax-comment">5. </span>
              <span className="text-terminal-fg">URL expires after configured TTL</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] text-activitybar-fg mt-2 font-mono">
          Simplified flow — based on resume description
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          What I Learned
        </h2>
        <div className="space-y-2 text-[13px] text-terminal-fg leading-relaxed">
          <p>→ Building secure document management with object storage and presigned URLs</p>
          <p>→ Multi-step application workflows with data validation at each stage</p>
          <p>→ Production deployment with Docker on AWS EC2</p>
          <p>→ Working on software that real people depend on for career-critical processes</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        <button
          onClick={() =>
            openFile(
              "recruitment-arch",
              "architecture.ts",
              "AYUSH-PORTFOLIO/projects/recruitment-portal/architecture.ts",
              "typescript"
            )
          }
          className="flex items-center gap-1.5 text-[12px] text-accent hover:text-accent-hover transition-colors group"
        >
          View architecture.ts
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() =>
            openFile(
              "recruitment-stack",
              "stack.json",
              "AYUSH-PORTFOLIO/projects/recruitment-portal/stack.json",
              "json"
            )
          }
          className="flex items-center gap-1.5 text-[12px] text-accent hover:text-accent-hover transition-colors group"
        >
          View stack.json
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
