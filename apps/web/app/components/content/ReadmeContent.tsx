"use client";

import { useIDE } from "../../context/IDEContext";
import { profile } from "../../data/portfolio";
import {
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ReadmeContent() {
  const { openFile } = useIDE();

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-editor-fg font-sans tracking-tight mb-3">
          {profile.name}
        </h1>
        <div className="space-y-1 mb-5">
          <p className="text-lg text-syntax-keyword font-mono font-medium">
            {profile.role}
          </p>
          <p className="text-[14px] text-activitybar-fg font-sans">
            {profile.education.degree}
          </p>
          <p className="text-[14px] text-activitybar-fg font-sans">
            {profile.education.institute}
          </p>
        </div>
        <p className="text-[15px] text-terminal-fg font-sans leading-relaxed max-w-xl">
          {profile.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() =>
              openFile(
                "regulatory-ai-readme",
                "README.md",
                "AYUSH-PORTFOLIO/projects/regulatory-ai/README.md",
                "markdown"
              )
            }
            className="vscode-btn vscode-btn-primary"
          >
            View Projects
            <ArrowRight size={14} />
          </button>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="vscode-btn vscode-btn-secondary"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="vscode-btn vscode-btn-secondary"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
          <button
            onClick={() =>
              openFile(
                "contact",
                "contact.ts",
                "AYUSH-PORTFOLIO/src/contact.ts",
                "typescript"
              )
            }
            className="vscode-btn vscode-btn-secondary"
          >
            <Mail size={14} />
            Contact
          </button>
          <a
            href="https://drive.google.com/file/d/1vkOmiYMoXXl2_EVJWKdbkLIkiUo0a1Xq/view"
            target="_blank"
            rel="noopener noreferrer"
            className="vscode-btn vscode-btn-secondary opacity-80 hover:opacity-100"
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-border my-8" />

      {/* Currently */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg font-sans mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Currently
        </h2>
        <div className="space-y-2">
          {profile.currently.map((c, i) => (
            <div key={i} className="flex items-center gap-2 text-[14px]">
              <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
              <span className="text-editor-fg font-sans">
                {c.role}
              </span>
              <span className="text-activitybar-fg font-sans">@</span>
              <button
                onClick={() => {
                  if (c.org === "Eduteria") {
                    openFile("eduteria", "eduteria.ts", "AYUSH-PORTFOLIO/experience/eduteria.ts", "typescript");
                  } else {
                    openFile("nitp-web-team", "nitp-web-team.ts", "AYUSH-PORTFOLIO/experience/nitp-web-team.ts", "typescript");
                  }
                }}
                className="text-accent hover:underline font-sans"
              >
                {c.org}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* I work with */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg font-sans mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          I work with
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-input-bg border border-border rounded-sm text-[12px] font-mono text-syntax-variable hover:border-accent/50 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Interested in */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg font-sans mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Interested in
        </h2>
        <div className="space-y-1.5">
          {profile.interests.map((interest) => (
            <div
              key={interest}
              className="flex items-center gap-2.5 text-[13px] text-terminal-fg font-sans"
            >
              <span className="text-syntax-comment">→</span>
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="text-lg font-semibold text-editor-fg font-sans mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Quick Navigation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { label: "About", id: "about", file: "about.ts", path: "AYUSH-PORTFOLIO/src/about.ts", icon: "typescript" },
            { label: "Experience", id: "experience-overview", file: "experience.ts", path: "AYUSH-PORTFOLIO/src/experience.ts", icon: "typescript" },
            { label: "Projects", id: "regulatory-ai-readme", file: "README.md", path: "AYUSH-PORTFOLIO/projects/regulatory-ai/README.md", icon: "markdown" },
            { label: "Skills", id: "skills", file: "skills.ts", path: "AYUSH-PORTFOLIO/src/skills.ts", icon: "typescript" },
            { label: "Education", id: "education", file: "education.ts", path: "AYUSH-PORTFOLIO/src/education.ts", icon: "typescript" },
            { label: "Architecture", id: "architecture", file: "architecture.md", path: "AYUSH-PORTFOLIO/architecture.md", icon: "markdown" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => openFile(item.id, item.file, item.path, item.icon)}
              className="flex items-center justify-between px-3 py-2 bg-input-bg border border-border rounded-sm hover:border-accent/50 hover:bg-hover transition-colors text-left group"
            >
              <span className="text-[13px] text-editor-fg font-sans">
                {item.label}
              </span>
              <ArrowRight
                size={14}
                className="text-activitybar-fg group-hover:text-accent transition-colors"
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
