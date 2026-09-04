"use client";

import { useIDE } from "../context/IDEContext";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const { tabs, activeTabId } = useIDE();
  const activeTab = tabs.find((t) => t.id === activeTabId);

  if (!activeTab) return null;

  const parts = activeTab.filePath.split("/");

  return (
    <div className="flex items-center gap-1 px-4 py-1 bg-editor-bg border-b border-border-subtle text-[12px] text-activitybar-fg font-mono overflow-x-auto scrollbar-none flex-shrink-0">
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-1 flex-shrink-0">
          {i > 0 && <ChevronRight size={12} className="text-activitybar-fg opacity-50" />}
          <span
            className={
              i === parts.length - 1
                ? "text-editor-fg"
                : "hover:text-editor-fg cursor-pointer transition-colors"
            }
          >
            {part}
          </span>
        </span>
      ))}
    </div>
  );
}
