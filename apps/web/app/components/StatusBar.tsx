"use client";

import { useIDE } from "../context/IDEContext";
import {
  GitBranch,
  Bell,
  Check,
  Terminal as TerminalIcon,
} from "lucide-react";

export default function StatusBar() {
  const { tabs, activeTabId, toggleTerminal } = useIDE();
  const activeTab = tabs.find((t) => t.id === activeTabId);

  return (
    <div className="flex items-center justify-between h-[22px] px-2 bg-statusbar-bg text-statusbar-fg text-[11px] font-sans select-none flex-shrink-0">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={12} />
          main
        </span>
        <span className="flex items-center gap-1">
          <Check size={12} />
          0 problems
        </span>
      </div>
      <div className="flex items-center gap-3">
        {activeTab && (
          <>
            <span className="hidden sm:inline">
              {activeTab.icon === "typescript"
                ? "TypeScript"
                : activeTab.icon === "json"
                ? "JSON"
                : "Markdown"}
            </span>
            <span className="hidden sm:inline">UTF-8</span>
          </>
        )}
        <button
          onClick={toggleTerminal}
          className="flex items-center gap-1 hover:bg-white/10 px-1 rounded transition-colors"
          aria-label="Toggle Terminal"
        >
          <TerminalIcon size={12} />
          <span className="hidden sm:inline">Terminal</span>
        </button>
        <span className="flex items-center gap-1">
          <Bell size={12} />
        </span>
      </div>
    </div>
  );
}
