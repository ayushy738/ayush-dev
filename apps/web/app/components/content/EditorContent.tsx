"use client";

import { useIDE } from "../../context/IDEContext";
import { motion, AnimatePresence } from "framer-motion";
import ReadmeContent from "./ReadmeContent";
import AboutContent from "./AboutContent";
import ExperienceOverviewContent from "./ExperienceOverviewContent";
import EduteriaContent from "./EduteriaContent";
import NitpWebTeamContent from "./NitpWebTeamContent";
import RegulatoryAiReadmeContent from "./RegulatoryAiContent";
import RecruitmentReadmeContent from "./RecruitmentContent";
import TatvReadmeContent from "./TatvContent";
import EducationContent from "./EducationContent";
import SkillsContent from "./SkillsContent";
import AchievementsContent from "./AchievementsContent";
import ContactContent from "./ContactContent";
import ArchitectureContent from "./ArchitectureContent";
import NowContent from "./NowContent";
import PackageJsonContent from "./PackageJsonContent";
import {
  RegulatoryAiArchContent,
  RecruitmentArchContent,
  TatvArchContent,
} from "./ProjectArchContents";
import {
  RegulatoryAiStackContent,
  RecruitmentStackContent,
  TatvStackContent,
} from "./ProjectStackContents";

const contentMap: Record<string, React.ComponentType> = {
  readme: ReadmeContent,
  about: AboutContent,
  "experience-overview": ExperienceOverviewContent,
  eduteria: EduteriaContent,
  "nitp-web-team": NitpWebTeamContent,
  "regulatory-ai-readme": RegulatoryAiReadmeContent,
  "recruitment-readme": RecruitmentReadmeContent,
  "tatv-readme": TatvReadmeContent,
  education: EducationContent,
  skills: SkillsContent,
  achievements: AchievementsContent,
  contact: ContactContent,
  architecture: ArchitectureContent,
  now: NowContent,
  "package-json": PackageJsonContent,
  "regulatory-ai-arch": RegulatoryAiArchContent,
  "regulatory-ai-stack": RegulatoryAiStackContent,
  "recruitment-arch": RecruitmentArchContent,
  "recruitment-stack": RecruitmentStackContent,
  "tatv-arch": TatvArchContent,
  "tatv-stack": TatvStackContent,
};

export default function EditorContent() {
  const { activeTabId } = useIDE();

  if (!activeTabId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-editor-bg">
        <div className="text-center">
          <p className="text-activitybar-fg text-[14px] mb-2">
            No file open
          </p>
          <p className="text-activitybar-fg/60 text-[12px]">
            Open a file from the Explorer or use{" "}
            <kbd className="px-1.5 py-0.5 bg-input-bg rounded text-[11px] font-mono">
              Ctrl+K
            </kbd>{" "}
            to open the command palette
          </p>
        </div>
      </div>
    );
  }

  const Content = contentMap[activeTabId];

  if (!Content) {
    return (
      <div className="flex-1 flex items-center justify-center bg-editor-bg">
        <p className="text-activitybar-fg text-[13px]">
          Content not found: {activeTabId}
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTabId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="flex-1 overflow-y-auto bg-editor-bg"
      >
        <Content />
      </motion.div>
    </AnimatePresence>
  );
}
