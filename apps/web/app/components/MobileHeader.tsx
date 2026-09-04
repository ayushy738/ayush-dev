"use client";

import { useIDE } from "../context/IDEContext";
import { Menu, Search, Terminal as TermIcon, X, User } from "lucide-react";
import Explorer from "./Explorer";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileHeader() {
  const {
    mobileExplorerOpen,
    setMobileExplorerOpen,
    setCommandPaletteOpen,
    toggleTerminal,
    tabs,
    activeTabId,
    setActiveTab,
    setHiringMode,
  } = useIDE();

  return (
    <>
      {/* Top bar */}
      <div className="flex md:hidden items-center justify-between h-10 px-3 bg-titlebar-bg border-b border-border flex-shrink-0">
        <button
          onClick={() => setMobileExplorerOpen(!mobileExplorerOpen)}
          className="p-1.5 rounded hover:bg-hover transition-colors text-activitybar-fg"
          aria-label="Toggle Explorer"
        >
          {mobileExplorerOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <span className="text-[12px] text-activitybar-fg font-mono truncate px-2">
          AYUSH-PORTFOLIO
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setHiringMode(true)}
            className="p-1.5 rounded hover:bg-hover transition-colors text-activitybar-fg"
            aria-label="Hiring Mode"
          >
            <User size={16} />
          </button>
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="p-1.5 rounded hover:bg-hover transition-colors text-activitybar-fg"
            aria-label="Command Palette"
          >
            <Search size={16} />
          </button>
          <button
            onClick={toggleTerminal}
            className="p-1.5 rounded hover:bg-hover transition-colors text-activitybar-fg"
            aria-label="Toggle Terminal"
          >
            <TermIcon size={16} />
          </button>
        </div>
      </div>

      {/* Mobile tabs */}
      {tabs.length > 0 && (
        <div className="flex md:hidden overflow-x-auto scrollbar-none border-b border-border bg-tab-inactive-bg flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-3 py-1.5 text-[12px] font-mono whitespace-nowrap flex-shrink-0
                ${
                  tab.id === activeTabId
                    ? "bg-tab-active-bg text-editor-fg border-t border-t-accent"
                    : "text-activitybar-fg"
                }
              `}
            >
              {tab.fileName}
            </button>
          ))}
        </div>
      )}

      {/* Mobile explorer drawer */}
      <AnimatePresence>
        {mobileExplorerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-10 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileExplorerOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.2 }}
              className="fixed top-10 left-0 bottom-0 w-[280px] z-50 bg-sidebar-bg border-r border-border md:hidden overflow-y-auto"
            >
              <Explorer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
