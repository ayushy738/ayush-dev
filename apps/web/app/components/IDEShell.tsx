"use client";

import { useEffect } from "react";
import { useIDE } from "../context/IDEContext";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import Breadcrumbs from "./Breadcrumbs";
import EditorContent from "./content/EditorContent";
import Terminal from "./Terminal";
import StatusBar from "./StatusBar";
import CommandPalette from "./CommandPalette";
import MobileHeader from "./MobileHeader";

export default function IDEShell() {
  const { setSidebarOpen, toggleTerminal, sidebarOpen, setHiringMode } = useIDE();

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ctrl+B to toggle sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
      // Ctrl+` to toggle terminal
      if ((e.metaKey || e.ctrlKey) && e.key === "`") {
        e.preventDefault();
        toggleTerminal();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setSidebarOpen, toggleTerminal, sidebarOpen]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-editor-bg">
      {/* Title bar */}
      <div className="hidden md:flex items-center h-8 px-3 bg-titlebar-bg border-b border-border select-none flex-shrink-0">
        <div className="flex-1 flex items-center">
          <button
            onClick={() => setHiringMode(true)}
            className="text-[11px] text-activitybar-fg hover:text-editor-fg bg-transparent hover:bg-hover px-2 py-0.5 rounded transition-colors"
          >
            Hiring Mode
          </button>
        </div>
        <div className="flex-1 text-center text-[12px] text-activitybar-fg font-sans">
          Ayush Raj Yadav — Portfolio IDE
        </div>
        <div className="flex-1 flex justify-end text-[11px] text-activitybar-fg/60 font-mono">
          <span>
            <kbd className="px-1 py-0.5 bg-input-bg/50 rounded text-[10px]">Ctrl+K</kbd>
            {" "}Command Palette
          </span>
        </div>
      </div>

      {/* Mobile header */}
      <MobileHeader />

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar />

        {/* Sidebar */}
        <Sidebar />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Desktop tab bar */}
          <div className="hidden md:block">
            <TabBar />
            <Breadcrumbs />
          </div>

          {/* Editor content */}
          <EditorContent />

          {/* Terminal */}
          <Terminal />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />

      {/* Command Palette */}
      <CommandPalette />
    </div>
  );
}
