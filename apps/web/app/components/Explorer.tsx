"use client";

import { useIDE } from "../context/IDEContext";
import { fileTree, type FileNode } from "../data/portfolio";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  FileCode2,
  FileJson,
  Folder,
  FolderOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function getFileIcon(icon?: string) {
  switch (icon) {
    case "typescript":
      return <FileCode2 size={14} className="text-syntax-keyword flex-shrink-0" />;
    case "json":
      return <FileJson size={14} className="text-syntax-function flex-shrink-0" />;
    case "markdown":
      return <FileText size={14} className="text-syntax-variable flex-shrink-0" />;
    default:
      return <FileText size={14} className="text-activitybar-fg flex-shrink-0" />;
  }
}

function buildPath(parentPath: string, name: string) {
  return parentPath ? `${parentPath}/${name}` : name;
}

function FileTreeNode({
  node,
  depth,
  parentPath,
}: {
  node: FileNode;
  depth: number;
  parentPath: string;
}) {
  const { openFile, expandedFolders, toggleFolder, activeTabId } = useIDE();
  const currentPath = buildPath(parentPath, node.name);
  const isExpanded = expandedFolders.has(currentPath);
  const isActive = node.contentId === activeTabId;

  const handleClick = () => {
    if (node.type === "folder") {
      toggleFolder(currentPath);
    } else if (node.contentId) {
      openFile(node.contentId, node.name, currentPath, node.icon);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`
          w-full flex items-center gap-1 py-[3px] pr-3 text-left text-[13px]
          transition-colors duration-75 group
          ${isActive ? "bg-selection text-activitybar-active" : "hover:bg-hover text-editor-fg"}
        `}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        aria-label={node.type === "folder" ? `${isExpanded ? "Collapse" : "Expand"} ${node.name}` : `Open ${node.name}`}
      >
        {node.type === "folder" ? (
          <>
            {isExpanded ? (
              <ChevronDown size={14} className="flex-shrink-0 text-activitybar-fg" />
            ) : (
              <ChevronRight size={14} className="flex-shrink-0 text-activitybar-fg" />
            )}
            {isExpanded ? (
              <FolderOpen size={14} className="flex-shrink-0 text-syntax-function" />
            ) : (
              <Folder size={14} className="flex-shrink-0 text-syntax-function" />
            )}
          </>
        ) : (
          <>
            <span className="w-[14px] flex-shrink-0" />
            {getFileIcon(node.icon)}
          </>
        )}
        <span className="truncate font-mono text-[12px]">{node.name}</span>
      </button>
      <AnimatePresence initial={false}>
        {node.type === "folder" && isExpanded && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            {node.children.map((child) => (
              <FileTreeNode
                key={child.name}
                node={child}
                depth={depth + 1}
                parentPath={currentPath}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Explorer() {
  return (
    <div className="h-full flex flex-col bg-sidebar-bg overflow-hidden">
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-activitybar-fg select-none">
        Explorer
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-3 py-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-activitybar-fg mb-1 select-none">
            AYUSH-PORTFOLIO
          </div>
        </div>
        {fileTree.children?.map((child) => (
          <FileTreeNode
            key={child.name}
            node={child}
            depth={0}
            parentPath="AYUSH-PORTFOLIO"
          />
        ))}
      </div>
    </div>
  );
}
