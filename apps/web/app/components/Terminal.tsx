"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useIDE } from "../context/IDEContext";
import { terminalCommands } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Maximize2 } from "lucide-react";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

const INITIAL_LINES: TerminalLine[] = [
  { type: "input", content: "whoami" },
  { type: "output", content: "Ayush Raj Yadav" },
  { type: "input", content: "cat role.txt" },
  {
    type: "output",
    content: "Software Developer\nComputer Science & Engineering\nNIT Patna",
  },
  { type: "input", content: "ls projects" },
  {
    type: "output",
    content: "regulatory-ai\nrecruitment-portal\ntatv",
  },
];

export default function Terminal() {
  const { terminalOpen, setTerminalOpen, openFile } = useIDE();
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (terminalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOpen]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      setLines((prev) => [...prev, { type: "input", content: cmd.trim() }]);

      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      const match = terminalCommands[trimmed];
      if (match) {
        setLines((prev) => [...prev, { type: "output", content: match.output }]);
        if (match.action) {
          if (match.action.startsWith("open:")) {
            const fileId = match.action.replace("open:", "");
            // Delay to let the output render first
            setTimeout(() => {
              // Map fileId to file info
              const fileMap: Record<string, { name: string; path: string; icon: string }> = {
                about: { name: "about.ts", path: "AYUSH-PORTFOLIO/src/about.ts", icon: "typescript" },
                "experience-overview": { name: "experience.ts", path: "AYUSH-PORTFOLIO/src/experience.ts", icon: "typescript" },
                skills: { name: "skills.ts", path: "AYUSH-PORTFOLIO/src/skills.ts", icon: "typescript" },
                education: { name: "education.ts", path: "AYUSH-PORTFOLIO/src/education.ts", icon: "typescript" },
                contact: { name: "contact.ts", path: "AYUSH-PORTFOLIO/src/contact.ts", icon: "typescript" },
                achievements: { name: "achievements.ts", path: "AYUSH-PORTFOLIO/src/achievements.ts", icon: "typescript" },
                "regulatory-ai-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/regulatory-ai/README.md", icon: "markdown" },
                "recruitment-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/recruitment-portal/README.md", icon: "markdown" },
                "tatv-readme": { name: "README.md", path: "AYUSH-PORTFOLIO/projects/tatv/README.md", icon: "markdown" },
                eduteria: { name: "eduteria.ts", path: "AYUSH-PORTFOLIO/experience/eduteria.ts", icon: "typescript" },
                "nitp-web-team": { name: "nitp-web-team.ts", path: "AYUSH-PORTFOLIO/experience/nitp-web-team.ts", icon: "typescript" },
              };
              const f = fileMap[fileId];
              if (f) openFile(fileId, f.name, f.path, f.icon);
            }, 200);
          } else if (match.action.startsWith("link:")) {
            const url = match.action.replace("link:", "");
            window.open(url, "_blank", "noopener,noreferrer");
          }
        }
      } else if (trimmed === "") {
        // Empty command, do nothing
      } else {
        setLines((prev) => [
          ...prev,
          {
            type: "output",
            content: `command not found: ${cmd.trim()}\nType "help" for available commands.`,
          },
        ]);
      }
    },
    [openFile]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setHistory((prev) => [...prev, input.trim()]);
        setHistoryIdx(-1);
      }
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIdx = historyIdx < 0 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(newIdx);
        setInput(history[newIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx >= 0) {
        const newIdx = historyIdx + 1;
        if (newIdx >= history.length) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setHistoryIdx(newIdx);
          setInput(history[newIdx] || "");
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {terminalOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          exit={{ height: 0 }}
          transition={{ duration: 0.15 }}
          className="flex flex-col bg-terminal-bg border-t border-border overflow-hidden flex-shrink-0"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-3 py-1 bg-titlebar-bg border-b border-border flex-shrink-0">
            <div className="flex items-center gap-4">
              <span className="text-[12px] text-editor-fg font-sans uppercase tracking-wide border-b border-accent pb-0.5">
                Terminal
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTerminalOpen(false)}
                className="p-1 rounded hover:bg-hover transition-colors text-activitybar-fg hover:text-editor-fg"
                aria-label="Minimize Terminal"
              >
                <Minus size={13} />
              </button>
              <button
                className="p-1 rounded hover:bg-hover transition-colors text-activitybar-fg hover:text-editor-fg"
                aria-label="Maximize Terminal"
              >
                <Maximize2 size={13} />
              </button>
              <button
                onClick={() => setTerminalOpen(false)}
                className="p-1 rounded hover:bg-hover transition-colors text-activitybar-fg hover:text-editor-fg"
                aria-label="Close Terminal"
              >
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-2 font-mono text-[12.5px] leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">
                {line.type === "input" ? (
                  <div>
                    <span className="text-success">ayush@portfolio</span>
                    <span className="text-activitybar-fg">:</span>
                    <span className="text-syntax-keyword">~</span>
                    <span className="text-activitybar-fg">$ </span>
                    <span className="text-terminal-fg">{line.content}</span>
                  </div>
                ) : (
                  <div className="text-terminal-fg pl-0 mb-1">{line.content}</div>
                )}
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center">
              <span className="text-success">ayush@portfolio</span>
              <span className="text-activitybar-fg">:</span>
              <span className="text-syntax-keyword">~</span>
              <span className="text-activitybar-fg">$ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-terminal-fg font-mono text-[12.5px] caret-terminal-fg"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
