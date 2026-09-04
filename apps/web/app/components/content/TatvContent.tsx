"use client";

import { projects } from "../../data/portfolio";
import { useIDE } from "../../context/IDEContext";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

export default function TatvReadmeContent() {
  const project = projects[2]!;
  const { openFile } = useIDE();

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// projects/tatv/README.md"}
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-editor-fg mb-2">{project.name}</h1>
        <div className="flex flex-wrap items-center gap-3 text-[12px] mb-3">
          <span className="flex items-center gap-1.5 text-activitybar-fg">
            <CheckCircle size={12} />
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
          {project.overview} This project represents the starting point of building
          and deploying complete production applications.
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
          title="Tatv — Simplified Architecture"
        />
      </section>

      {/* Deployment */}
      {project.deployment && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-editor-fg mb-3">
            <span className="text-syntax-comment font-mono text-[13px]">## </span>
            Deployment
          </h2>
          <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
            <div className="text-syntax-comment">{"// Deployment stack"}</div>
            {project.deployment.map((item, i) => (
              <div key={i} className="mt-1">
                <span className="text-syntax-comment">{`${i + 1}. `}</span>
                <span className="text-terminal-fg">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          What I Learned
        </h2>
        <div className="space-y-2 text-[13px] text-terminal-fg leading-relaxed">
          <p>→ End-to-end full-stack development from schema design to deployment</p>
          <p>→ Payment gateway integration and secure transaction handling</p>
          <p>→ Production deployment on AWS EC2 with Nginx and PM2</p>
          <p>→ MongoDB schema optimization for e-commerce use cases</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
        <button
          onClick={() =>
            openFile(
              "tatv-arch",
              "architecture.ts",
              "AYUSH-PORTFOLIO/projects/tatv/architecture.ts",
              "typescript"
            )
          }
          className="flex items-center gap-1.5 text-[12px] text-accent hover:text-accent-hover transition-colors group"
        >
          View architecture.ts
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
