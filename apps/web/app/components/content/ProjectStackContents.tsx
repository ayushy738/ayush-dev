"use client";

import { projects } from "../../data/portfolio";

function StackJsonView({ project, path }: { project: typeof projects[number]; path: string }) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {`// ${path}`}
      </div>
      <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
        <div className="text-syntax-punctuation">{"{"}</div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;name&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;{project.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;status&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;{project.status}&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;period&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;{project.period}&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;stack&quot;</span>
          <span className="text-syntax-operator">: [</span>
        </div>
        {project.stack.map((tech, i) => (
          <div key={tech} className="pl-8">
            <span className="text-syntax-string">&quot;{tech}&quot;</span>
            {i < project.stack.length - 1 && <span className="text-syntax-operator">,</span>}
          </div>
        ))}
        <div className="pl-4">
          <span className="text-syntax-operator">]</span>
        </div>
        <div className="text-syntax-punctuation">{"}"}</div>
      </div>
    </div>
  );
}

export function RegulatoryAiStackContent() {
  return <StackJsonView project={projects[0]!} path="projects/regulatory-ai/stack.json" />;
}

export function RecruitmentStackContent() {
  return <StackJsonView project={projects[1]!} path="projects/recruitment-portal/stack.json" />;
}

export function TatvStackContent() {
  return <StackJsonView project={projects[2]!} path="projects/tatv/stack.json" />;
}
