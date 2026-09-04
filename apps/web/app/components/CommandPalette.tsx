"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useIDE } from "../context/IDEContext";
import { commandPaletteItems } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  User,
  Briefcase,
  Folder,
  Code,
  GraduationCap,
  Trophy,
  Mail,
  GitBranch,
  Clock,
  GitCommitHorizontal,
  Search,
  Terminal,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  file: <FileText size={14} />,
  user: <User size={14} />,
  briefcase: <Briefcase size={14} />,
  folder: <Folder size={14} />,
  code: <Code size={14} />,
  "graduation-cap": <GraduationCap size={14} />,
  trophy: <Trophy size={14} />,
  mail: <Mail size={14} />,
  "git-branch": <GitBranch size={14} />,
  clock: <Clock size={14} />,
  "git-commit-horizontal": <GitCommitHorizontal size={14} />,
  search: <Search size={14} />,
  terminal: <Terminal size={14} />,
};

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

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen, openFile, setActivePanel, setSidebarOpen, toggleTerminal, setHiringMode } = useIDE();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const filtered = commandPaletteItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (commandPaletteOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
      setSelectedIdx(0);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  const execute = useCallback(
    (fileId: string) => {
      setCommandPaletteOpen(false);
      if (fileId === "toggle-terminal") {
        toggleTerminal();
        return;
      }
      if (fileId === "search") {
        setActivePanel("search");
        setSidebarOpen(true);
        return;
      }
      if (fileId === "git-timeline") {
        setActivePanel("git");
        setSidebarOpen(true);
        return;
      }
      if (fileId === "download-resume") {
        window.open("https://drive.google.com/file/d/1vkOmiYMoXXl2_EVJWKdbkLIkiUo0a1Xq/view", "_blank");
        return;
      }
      if (fileId === "enable-hiring-mode") {
        setHiringMode(true);
        return;
      }
      if (fileId === "disable-hiring-mode") {
        setHiringMode(false);
        return;
      }
      const f = fileMap[fileId];
      if (f) {
        openFile(fileId, f.name, f.path, f.icon);
      }
    },
    [openFile, setCommandPaletteOpen, toggleTerminal, setActivePanel, setSidebarOpen, setHiringMode]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIdx]) {
      execute(filtered[selectedIdx].fileId);
    }
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setCommandPaletteOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[90%] max-w-[520px] z-50 bg-dropdown-bg border border-border rounded-md shadow-2xl overflow-hidden"
          >
            <div className="px-3 py-2 border-b border-border">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="w-full bg-transparent text-editor-fg outline-none text-[13px] font-sans placeholder:text-activitybar-fg"
                spellCheck={false}
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto py-1">
              {filtered.map((item, i) => (
                <button
                  key={item.fileId}
                  onClick={() => execute(item.fileId)}
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-[6px] text-[13px] text-left
                    transition-colors duration-75
                    ${i === selectedIdx ? "bg-selection text-activitybar-active" : "text-editor-fg hover:bg-hover"}
                  `}
                >
                  <span className="text-activitybar-fg">
                    {iconMap[item.icon] || <FileText size={14} />}
                  </span>
                  {item.label}
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-3 py-4 text-center text-activitybar-fg text-[13px]">
                  No matching commands
                </div>
              )}
            </div>
            <div className="px-3 py-1.5 border-t border-border text-[11px] text-activitybar-fg flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px]">↑↓</kbd> navigate
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px]">↵</kbd> open
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px]">esc</kbd> close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
