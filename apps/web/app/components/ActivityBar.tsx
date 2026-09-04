"use client";

import { useIDE } from "../context/IDEContext";
import {
  Files,
  Search,
  GitBranch,
  Play,
  User,
  Settings,
} from "lucide-react";

const activities = [
  { id: "explorer", icon: Files, label: "Explorer" },
  { id: "search", icon: Search, label: "Search" },
  { id: "git", icon: GitBranch, label: "Source Control" },
  { id: "run", icon: Play, label: "Projects / Run" },
  { id: "profile", icon: User, label: "About / Profile" },
];

const bottomActivities = [
  { id: "settings", icon: Settings, label: "Settings" },
];

export default function ActivityBar() {
  const { activePanel, setActivePanel, setSidebarOpen, sidebarOpen, openFile } =
    useIDE();

  const handleClick = (id: string) => {
    if (id === "profile") {
      openFile("about", "about.ts", "AYUSH-PORTFOLIO/src/about.ts", "typescript");
      return;
    }
    if (id === "run") {
      openFile(
        "regulatory-ai-readme",
        "README.md",
        "AYUSH-PORTFOLIO/projects/regulatory-ai/README.md",
        "markdown"
      );
      return;
    }
    if (activePanel === id && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setActivePanel(id);
      setSidebarOpen(true);
    }
  };

  return (
    <div className="hidden md:flex flex-col items-center w-12 bg-activitybar-bg border-r border-border flex-shrink-0 justify-between py-1">
      <div className="flex flex-col items-center gap-0.5">
        {activities.map(({ id, icon: Icon, label }) => {
          const isActive = activePanel === id && sidebarOpen;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              title={label}
              aria-label={label}
              className={`
                relative w-12 h-12 flex items-center justify-center
                transition-colors duration-100
                ${
                  isActive
                    ? "text-activitybar-active"
                    : "text-activitybar-fg hover:text-activitybar-active"
                }
              `}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-activitybar-active rounded-r" />
              )}
              <Icon size={22} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-0.5 pb-1">
        {bottomActivities.map(({ id, icon: Icon, label }) => {
          const isActive = activePanel === id && sidebarOpen;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              title={label}
              aria-label={label}
              className={`
                relative w-12 h-12 flex items-center justify-center
                transition-colors duration-100
                ${
                  isActive
                    ? "text-activitybar-active"
                    : "text-activitybar-fg hover:text-activitybar-active"
                }
              `}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-activitybar-active rounded-r" />
              )}
              <Icon size={22} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
