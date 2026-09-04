"use client";

import { useState, useRef, useEffect } from "react";
import { useIDE } from "../context/IDEContext";
import { searchIndex } from "../data/portfolio";
import { FileText, FileCode2 } from "lucide-react";

const fileMap: Record<string, { name: string; path: string; icon: string }> = {
  readme: { name: "README.md", path: "AYUSH-PORTFOLIO/README.md", icon: "markdown" },
  about: { name: "about.ts", path: "AYUSH-PORTFOLIO/src/about.ts", icon: "typescript" },
  "experience-overview": { name: "experience.ts", path: "AYUSH-PORTFOLIO/src/experience.ts", icon: "typescript" },
  eduteria: { name: "eduteria.ts", path: "AYUSH-PORTFOLIO/experience/eduteria.ts", icon: "typescript" },
  "nitp-web-team": { name: "nitp-web-team.ts", path: "AYUSH-PORTFOLIO/experience/nitp-web-team.ts", icon: "typescript" },
  "regulatory-ai-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/regulatory-ai/README.md", icon: "markdown" },
  "recruitment-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/recruitment-portal/README.md", icon: "markdown" },
  "tatv-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/tatv/README.md", icon: "markdown" },
  skills: { name: "skills.ts", path: "AYUSH-PORTFOLIO/src/skills.ts", icon: "typescript" },
  education: { name: "education.ts", path: "AYUSH-PORTFOLIO/src/education.ts", icon: "typescript" },
  achievements: { name: "achievements.ts", path: "AYUSH-PORTFOLIO/src/achievements.ts", icon: "typescript" },
  contact: { name: "contact.ts", path: "AYUSH-PORTFOLIO/src/contact.ts", icon: "typescript" },
  architecture: { name: "architecture.md", path: "AYUSH-PORTFOLIO/architecture.md", icon: "markdown" },
  now: { name: "now.md", path: "AYUSH-PORTFOLIO/now.md", icon: "markdown" },
};

export default function SearchPanel() {
  const { openFile } = useIDE();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = query.trim().length > 0
    ? searchIndex.filter((item) =>
        item.text.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Deduplicate by fileId + title
  const seen = new Set<string>();
  const uniqueResults = results.filter((r) => {
    const key = `${r.fileId}:${r.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const handleOpen = (fileId: string) => {
    const f = fileMap[fileId];
    if (f) openFile(fileId, f.name, f.path, f.icon);
  };

  return (
    <div className="h-full flex flex-col bg-sidebar-bg overflow-hidden">
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-activitybar-fg select-none">
        Search
      </div>
      <div className="px-3 pb-2">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search portfolio..."
          className="w-full bg-input-bg border border-input-border rounded-sm px-2 py-1.5 text-[12px] text-editor-fg outline-none focus:border-focus font-sans placeholder:text-activitybar-fg"
          spellCheck={false}
        />
      </div>
      <div className="flex-1 overflow-y-auto px-1">
        {query.trim().length === 0 && (
          <div className="px-3 py-4 text-[12px] text-activitybar-fg">
            Type to search across the portfolio.
          </div>
        )}
        {query.trim().length > 0 && uniqueResults.length === 0 && (
          <div className="px-3 py-4 text-[12px] text-activitybar-fg">
            No results found for &quot;{query}&quot;
          </div>
        )}
        {uniqueResults.map((result, i) => (
          <button
            key={`${result.fileId}-${i}`}
            onClick={() => handleOpen(result.fileId)}
            className="w-full flex items-start gap-2 px-3 py-2 text-left hover:bg-hover transition-colors rounded-sm"
          >
            {result.fileName.endsWith(".ts") ? (
              <FileCode2 size={14} className="text-syntax-keyword mt-0.5 flex-shrink-0" />
            ) : (
              <FileText size={14} className="text-syntax-variable mt-0.5 flex-shrink-0" />
            )}
            <div className="min-w-0">
              <div className="text-[12px] text-editor-fg truncate font-sans">
                {result.title}
              </div>
              <div className="text-[11px] text-activitybar-fg truncate font-mono">
                {result.fileName}
              </div>
            </div>
          </button>
        ))}
        {uniqueResults.length > 0 && (
          <div className="px-3 py-2 text-[11px] text-activitybar-fg">
            {uniqueResults.length} result{uniqueResults.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>
    </div>
  );
}
