"use client";

import { useIDE } from "../context/IDEContext";
import Explorer from "./Explorer";
import SearchPanel from "./SearchPanel";
import GitPanel from "./GitPanel";
import SettingsPanel from "./SettingsPanel";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const { sidebarOpen, activePanel } = useIDE();

  if (!sidebarOpen) return null;

  const panels: Record<string, React.ComponentType> = {
    explorer: Explorer,
    search: SearchPanel,
    git: GitPanel,
    settings: SettingsPanel,
  };

  const Panel = panels[activePanel] || Explorer;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 260, opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="hidden md:flex flex-col border-r border-border bg-sidebar-bg overflow-hidden flex-shrink-0"
        style={{ width: 260 }}
      >
        <Panel />
      </motion.div>
    </AnimatePresence>
  );
}
