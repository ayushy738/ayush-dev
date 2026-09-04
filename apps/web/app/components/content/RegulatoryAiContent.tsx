"use client";

import { projects } from "../../data/portfolio";
import { useIDE } from "../../context/IDEContext";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { ArrowRight, Calendar, CircleDot } from "lucide-react";

export default function RegulatoryAiReadmeContent() {
  const project = projects[0]!;
  const { openFile } = useIDE();

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/regulatory-ai/README.md"}
      </div>

      {/* Header */}
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

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Overview
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          {project.overview}
        </p>
      </section>

      {/* Problem */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Problem
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          Government regulatory documents are scattered across 31+ sources, often
          published as scanned PDFs without structured metadata. Organizations need to
          track regulatory changes, extract deadlines, and query regulations in natural
          language — something that requires a robust ingestion, processing, and retrieval pipeline.
        </p>
      </section>

      {/* Features */}
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

      {/* Architecture */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Architecture
        </h2>
        <ArchitectureDiagram
          nodes={project.architectureNodes}
          title="Regulatory AI — Simplified Pipeline Architecture"
        />
      </section>

      {/* What I Learned */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          What I Learned
        </h2>
        <div className="space-y-2 text-[13px] text-terminal-fg leading-relaxed">
          <p>
            → Building RAG pipelines that produce source-grounded answers, not hallucinations
          </p>
          <p>→ Document processing at scale — OCR, classification, and metadata extraction</p>
          <p>→ Incremental crawling with checkpointing for reliable ingestion</p>
          <p>→ Vector embedding strategies for semantic search over regulatory text</p>
        </div>
      </section>

      {/* Navigate to other files */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        <button
          onClick={() =>
            openFile(
              "regulatory-ai-arch",
              "architecture.ts",
              "AYUSH-PORTFOLIO/projects/regulatory-ai/architecture.ts",
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
              "regulatory-ai-stack",
              "stack.json",
              "AYUSH-PORTFOLIO/projects/regulatory-ai/stack.json",
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
