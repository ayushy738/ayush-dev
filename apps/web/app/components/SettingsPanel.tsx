"use client";

import { useState } from "react";
import { useIDE } from "../context/IDEContext";

export default function SettingsPanel() {
  const [fontSize, setFontSize] = useState(13);
  const { theme, setTheme } = useIDE();

  const themes = [
    { id: "dark+", name: "Dark+" },
    { id: "light+", name: "Light+" },
    { id: "monokai", name: "Monokai" },
    { id: "github-dark", name: "GitHub Dark" },
  ];

  return (
    <div className="h-full flex flex-col bg-sidebar-bg overflow-hidden">
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-activitybar-fg select-none">
        Settings
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
        <div>
          <div className="text-[12px] text-editor-fg mb-1.5 font-sans">
            Color Theme
          </div>
          <div className="flex flex-col gap-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-sm text-[12px] font-mono border transition-colors ${
                  theme === t.id
                    ? "bg-selection text-editor-fg border-border"
                    : "text-activitybar-fg border-transparent hover:bg-hover"
                }`}
              >
                {t.name} {theme === t.id && "(Active)"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[12px] text-editor-fg mb-1.5 font-sans">
            Font Size
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFontSize((s) => Math.max(10, s - 1))}
              className="px-2 py-1 bg-input-bg border border-input-border rounded-sm text-[12px] hover:bg-hover transition-colors"
            >
              −
            </button>
            <span className="text-[12px] font-mono text-editor-fg w-8 text-center">
              {fontSize}
            </span>
            <button
              onClick={() => setFontSize((s) => Math.min(20, s + 1))}
              className="px-2 py-1 bg-input-bg border border-input-border rounded-sm text-[12px] hover:bg-hover transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <div className="text-[12px] text-editor-fg mb-1.5 font-sans">
            Keyboard Shortcuts
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between text-activitybar-fg">
              <span>Command Palette</span>
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px] font-mono">
                Ctrl+K
              </kbd>
            </div>
            <div className="flex justify-between text-activitybar-fg">
              <span>Toggle Terminal</span>
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px] font-mono">
                Ctrl+`
              </kbd>
            </div>
            <div className="flex justify-between text-activitybar-fg">
              <span>Toggle Sidebar</span>
              <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[10px] font-mono">
                Ctrl+B
              </kbd>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[12px] text-editor-fg mb-1.5 font-sans">
            About
          </div>
          <div className="text-[11px] text-activitybar-fg leading-relaxed">
            <p>Ayush&apos;s Portfolio IDE v1.0</p>
            <p className="mt-1">
              Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
