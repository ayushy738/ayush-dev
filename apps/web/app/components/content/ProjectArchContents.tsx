"use client";

import { projects } from "../../data/portfolio";
import ArchitectureDiagram from "./ArchitectureDiagram";

export function RegulatoryAiArchContent() {
  const project = projects[0]!;
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/regulatory-ai/architecture.ts"}
      </div>
      <h1 className="text-xl font-bold text-editor-fg mb-4">
        Regulatory AI — Architecture
      </h1>
      <ArchitectureDiagram
        nodes={project.architectureNodes}
        title="Regulatory AI — Full Pipeline"
      />
      <div className="mt-8 bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
        <div className="text-syntax-comment">{"// Pipeline summary"}</div>
        <div className="mt-2 text-terminal-fg space-y-0.5">
          <div>Data flows from 31+ government sources</div>
          <div>→ through incremental crawling with checkpointing</div>
          <div>→ through OCR and document classification</div>
          <div>→ into structured storage with metadata extraction</div>
          <div>→ through vector embedding generation</div>
          <div>→ enabling semantic retrieval</div>
          <div>→ powering RAG-based natural language querying</div>
        </div>
      </div>
    </div>
  );
}

export function RecruitmentArchContent() {
  const project = projects[1]!;
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/recruitment-portal/architecture.ts"}
      </div>
      <h1 className="text-xl font-bold text-editor-fg mb-4">
        Recruitment Portal — Architecture
      </h1>
      <ArchitectureDiagram
        nodes={project.architectureNodes}
        title="Recruitment Portal — System Architecture"
      />
    </div>
  );
}

export function TatvArchContent() {
  const project = projects[2]!;
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/tatv/architecture.ts"}
      </div>
      <h1 className="text-xl font-bold text-editor-fg mb-4">
        Tatv — Architecture
      </h1>
      <ArchitectureDiagram
        nodes={project.architectureNodes}
        title="Tatv E-Commerce — System Architecture"
      />
    </div>
  );
}
