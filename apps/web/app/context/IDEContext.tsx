"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

export interface Tab {
  id: string;
  fileName: string;
  filePath: string;
  contentId: string;
  icon?: string;
}

interface IDEContextType {
  // Tabs
  tabs: Tab[];
  activeTabId: string | null;
  openFile: (
    contentId: string,
    fileName: string,
    filePath: string,
    icon?: string
  ) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;

  // Sidebar
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activePanel: string;
  setActivePanel: (panel: string) => void;

  // Terminal
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  toggleTerminal: () => void;

  // Command palette
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;

  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  // Explorer
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;

  // Mobile
  mobileExplorerOpen: boolean;
  setMobileExplorerOpen: (open: boolean) => void;

  // Theme
  theme: string;
  setTheme: (theme: string) => void;

  // Mode
  hiringMode: boolean;
  setHiringMode: (mode: boolean) => void;
}

const IDEContext = createContext<IDEContextType | null>(null);

export function IDEProvider({ children }: { children: ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "readme",
      fileName: "README.md",
      filePath: "AYUSH-PORTFOLIO/README.md",
      contentId: "readme",
      icon: "markdown",
    },
  ]);
  const [activeTabId, setActiveTabId] = useState<string | null>("readme");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePanel, setActivePanel] = useState("explorer");
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExplorerOpen, setMobileExplorerOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["AYUSH-PORTFOLIO", "AYUSH-PORTFOLIO/src", "AYUSH-PORTFOLIO/projects"])
  );
  const [theme, setTheme] = useState("dark+");
  const [hiringMode, setHiringMode] = useState(false);

  // Sync theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const openFile = useCallback(
    (contentId: string, fileName: string, filePath: string, icon?: string) => {
      setTabs((prev) => {
        const exists = prev.find((t) => t.contentId === contentId);
        if (exists) {
          setActiveTabId(exists.id);
          return prev;
        }
        const newTab: Tab = {
          id: contentId,
          fileName,
          filePath,
          contentId,
          icon,
        };
        setActiveTabId(contentId);
        return [...prev, newTab];
      });
      setMobileExplorerOpen(false);
    },
    []
  );

  const closeTab = useCallback(
    (tabId: string) => {
      setTabs((prev) => {
        const idx = prev.findIndex((t) => t.id === tabId);
        const newTabs = prev.filter((t) => t.id !== tabId);
        if (tabId === activeTabId && newTabs.length > 0) {
          const newIdx = Math.min(idx, newTabs.length - 1);
          setActiveTabId(newTabs[newIdx]!.id);
        } else if (newTabs.length === 0) {
          setActiveTabId(null);
        }
        return newTabs;
      });
    },
    [activeTabId]
  );

  const setActiveTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
  }, []);

  const toggleTerminal = useCallback(() => {
    setTerminalOpen((prev) => !prev);
  }, []);

  const toggleFolder = useCallback((path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  return (
    <IDEContext.Provider
      value={{
        tabs,
        activeTabId,
        openFile,
        closeTab,
        setActiveTab,
        sidebarOpen,
        setSidebarOpen,
        activePanel,
        setActivePanel,
        terminalOpen,
        setTerminalOpen,
        toggleTerminal,
        commandPaletteOpen,
        setCommandPaletteOpen,
        searchOpen,
        setSearchOpen,
        expandedFolders,
        toggleFolder,
        mobileExplorerOpen,
        setMobileExplorerOpen,
        theme,
        setTheme,
        hiringMode,
        setHiringMode,
      }}
    >
      {children}
    </IDEContext.Provider>
  );
}

export function useIDE() {
  const ctx = useContext(IDEContext);
  if (!ctx) throw new Error("useIDE must be used within IDEProvider");
  return ctx;
}
