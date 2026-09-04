"use client";

import { useState } from "react";
import { gitTimeline } from "../data/portfolio";
import { GitCommitHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GitPanel() {
  const [expandedHash, setExpandedHash] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-sidebar-bg overflow-hidden">
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-activitybar-fg select-none">
        Source Control
      </div>
      <div className="px-3 py-1 text-[11px] text-activitybar-fg select-none">
        Portfolio Timeline
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-border" />

          {gitTimeline.map((commit, i) => (
            <div key={commit.hash} className="relative pl-7 pb-5">
              {/* Commit dot */}
              <div
                className={`absolute left-0 top-[3px] w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center
                  ${i === 0 ? "border-accent bg-accent/20" : "border-activitybar-fg bg-sidebar-bg"}
                `}
              >
                <div
                  className={`w-[5px] h-[5px] rounded-full ${
                    i === 0 ? "bg-accent" : "bg-activitybar-fg"
                  }`}
                />
              </div>

              <button
                onClick={() =>
                  setExpandedHash(expandedHash === commit.hash ? null : commit.hash)
                }
                className="w-full text-left group"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-mono text-syntax-keyword">
                    {commit.date}
                  </span>
                  <span className="text-[11px] font-mono text-activitybar-fg">
                    {commit.hash}
                  </span>
                </div>
                <div className="text-[12px] text-editor-fg group-hover:text-accent transition-colors">
                  {commit.message}
                </div>
              </button>

              <AnimatePresence>
                {expandedHash === commit.hash && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 p-2 bg-editor-bg rounded border border-border text-[11px] text-terminal-fg leading-relaxed">
                      {commit.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
