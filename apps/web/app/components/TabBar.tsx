"use client";

import { useIDE } from "../context/IDEContext";
import { X, FileText, FileCode2, FileJson } from "lucide-react";

function getTabIcon(icon?: string) {
  switch (icon) {
    case "typescript":
      return <FileCode2 size={14} className="text-syntax-keyword" />;
    case "json":
      return <FileJson size={14} className="text-syntax-function" />;
    case "markdown":
      return <FileText size={14} className="text-syntax-variable" />;
    default:
      return <FileText size={14} className="text-activitybar-fg" />;
  }
}

export default function TabBar() {
  const { tabs, activeTabId, setActiveTab, closeTab } = useIDE();

  if (tabs.length === 0) return null;

  return (
    <div className="flex bg-tab-inactive-bg border-b border-border overflow-x-auto scrollbar-none flex-shrink-0">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <div
            key={tab.id}
            className={`
              group flex items-center gap-1.5 px-3 py-[6px] min-w-0
              cursor-pointer border-r border-tab-border text-[13px]
              transition-colors duration-75 select-none flex-shrink-0
              ${
                isActive
                  ? "bg-tab-active-bg text-activitybar-active border-t-[1.5px] border-t-accent"
                  : "bg-tab-inactive-bg text-activitybar-fg hover:bg-hover border-t-[1.5px] border-t-transparent"
              }
            `}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={isActive}
          >
            {getTabIcon(tab.icon)}
            <span className="truncate max-w-[140px] font-mono text-[12px]">
              {tab.fileName}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className={`
                ml-1 p-[2px] rounded-sm transition-opacity duration-75
                ${isActive ? "opacity-60 hover:opacity-100 hover:bg-hover" : "opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:bg-hover"}
              `}
              aria-label={`Close ${tab.fileName}`}
            >
              <X size={13} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
