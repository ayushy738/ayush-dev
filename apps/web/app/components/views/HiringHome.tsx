"use client";

import { useState } from "react";
import { profile, experience, projects, skills, education } from "../../data/portfolio";
import { Mail, FileText, ExternalLink, Code2, ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

function ExperienceCard({ exp }: { exp: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/30 group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-2 md:gap-0">
        <div className="flex items-center gap-3">
          <h4 className="text-xl font-bold text-editor-fg group-hover:text-accent transition-colors">{exp.role}</h4>
          <ChevronDown size={20} className={`text-activitybar-fg transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </div>
        <span className="text-[14px] text-activitybar-fg font-medium bg-input-bg/50 px-3 py-1 rounded-full w-fit">
          {exp.period}
        </span>
      </div>
      <div className="text-activitybar-active font-medium mb-2">{exp.company}</div>
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <ul className="list-disc list-outside ml-4 space-y-2.5 text-[15px] text-activitybar-fg leading-relaxed">
          {exp.details?.map((h: string, j: number) => (
            <li key={j} className="pl-1">{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HiringHome() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-24"
      >
          {/* Header Section */}
          <motion.header variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-editor-fg via-editor-fg to-activitybar-fg">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
              {profile.role}
            </h2>
            <p className="text-base text-activitybar-fg leading-relaxed mb-10 max-w-xl mx-auto">
              {profile.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-sidebar-bg/50 border border-border/50 rounded-full text-[14px] font-medium text-editor-fg hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all shadow-sm hover:shadow"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-sidebar-bg/50 border border-border/50 rounded-full text-[14px] font-medium text-editor-fg hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all shadow-sm hover:shadow"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-sidebar-bg/50 border border-border/50 rounded-full text-[14px] font-medium text-editor-fg hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all shadow-sm hover:shadow"
              >
                <Code2 size={18} /> LeetCode
              </a>
              <a
                href="https://drive.google.com/file/d/1vkOmiYMoXXl2_EVJWKdbkLIkiUo0a1Xq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white border border-accent rounded-full text-[14px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                <FileText size={18} /> Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-sidebar-bg/50 border border-border/50 rounded-full text-[14px] font-medium text-editor-fg hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all shadow-sm hover:shadow"
              >
                <Mail size={18} /> Contact
              </a>
            </div>
          </motion.header>

          {/* Experience */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-editor-fg tracking-tight">Experience</h3>
              <div className="h-px bg-border/50 flex-1"></div>
            </div>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-editor-fg tracking-tight">Featured Projects</h3>
              <div className="h-px bg-border/50 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, i) => (
                <div 
                  key={i}
                  className="flex flex-col p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/30 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-editor-fg group-hover:text-accent transition-colors">{proj.name}</h4>
                    {(proj as any).link && (
                      <a
                        href={(proj as any).link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-activitybar-fg hover:text-accent hover:bg-accent/10 rounded-full transition-colors"
                        title="View Project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-[15px] text-activitybar-fg mb-8 flex-1 leading-relaxed">{proj.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.stack?.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-accent/5 border border-accent/20 text-accent rounded-full text-[12px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills & Education Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Skills */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-editor-fg tracking-tight">Skills</h3>
                <div className="h-px bg-border/50 flex-1"></div>
              </div>
              <div className="p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl space-y-8">
                <div>
                  <h4 className="text-[14px] font-bold text-editor-fg uppercase tracking-wider mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages?.items?.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-input-bg border border-border rounded-lg text-[13px] text-activitybar-active">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-editor-fg uppercase tracking-wider mb-3">Frameworks & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills["frameworks-backend"]?.items?.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-input-bg border border-border rounded-lg text-[13px] text-activitybar-active">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-editor-fg uppercase tracking-wider mb-3">Databases & Data</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills["databases-data"]?.items?.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-input-bg border border-border rounded-lg text-[13px] text-activitybar-active">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-editor-fg uppercase tracking-wider mb-3">Infrastructure & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills["infrastructure-tools"]?.items?.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-input-bg border border-border rounded-lg text-[13px] text-activitybar-active">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-editor-fg tracking-tight">Education</h3>
                <div className="h-px bg-border/50 flex-1"></div>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div 
                    key={i} 
                    className="p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2 sm:gap-0">
                      <h4 className="text-lg font-bold text-editor-fg">{edu.degree}</h4>
                      <span className="text-[13px] text-activitybar-fg font-medium bg-input-bg/50 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-[15px] text-activitybar-active mb-3">{edu.institution}</div>
                    {edu.score && (
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-md text-[13px] font-medium">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
    </div>
  );
}
