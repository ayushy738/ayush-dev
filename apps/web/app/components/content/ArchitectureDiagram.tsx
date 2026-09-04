"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ArchNode {
  id: string;
  label: string;
  description: string;
}

export default function ArchitectureDiagram({
  nodes,
  title,
}: {
  nodes: ArchNode[];
  title: string;
}) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="my-6">
      <div className="text-[11px] text-activitybar-fg font-mono mb-3 uppercase tracking-wider">
        {title}
      </div>
      <div className="bg-editor-bg border border-border rounded-sm p-4 md:p-6">
        <div className="flex flex-col items-center gap-0">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center w-full max-w-xs">
              {/* Node */}
              <button
                onClick={() =>
                  setActiveNode(activeNode === node.id ? null : node.id)
                }
                className={`
                  w-full px-4 py-2.5 rounded-sm border text-[13px] font-mono text-center
                  transition-all duration-150 cursor-pointer
                  ${
                    activeNode === node.id
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-editor-fg hover:border-accent/50 hover:bg-hover"
                  }
                `}
              >
                {node.label}
              </button>

              {/* Description tooltip */}
              {activeNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full mt-1 mb-1 px-3 py-2 bg-dropdown-bg border border-border rounded-sm"
                >
                  <p className="text-[12px] text-terminal-fg font-sans leading-relaxed">
                    {node.description}
                  </p>
                </motion.div>
              )}

              {/* Connector */}
              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-[1.5px] h-4 bg-border" />
                  <div className="text-activitybar-fg text-[10px]">↓</div>
                  <div className="w-[1.5px] h-1 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-[10px] text-activitybar-fg mt-2 font-mono">
        Click a component to see its responsibility
      </div>
    </div>
  );
}
