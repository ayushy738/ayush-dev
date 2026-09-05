"use client";

import { profile, skills, education } from "../../data/portfolio";
import { motion, Variants } from "framer-motion";

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

export default function HiringAbout() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <motion.section variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-editor-fg">
            About Me
          </h1>
          <div className="prose prose-invert max-w-none text-activitybar-fg leading-relaxed">
            <p className="text-lg mb-6">
              I&apos;m a Computer Science student at NIT Patna with a strong focus on building
              production software. My work spans backend engineering, scalable APIs, database
              architecture, and AI-powered applications.
            </p>
            <p className="text-lg mb-6">
              Currently working as a Software Developer Intern at Eduteria, building
              scalable backend services, and as a Full Stack Developer on the NITP Web Team,
              developing institute-wide platforms.
            </p>
            <p className="text-lg">
              I think a lot about system design — how to structure databases, optimize queries,
              design clean APIs, implement caching, and build systems that handle real load.
            </p>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold text-editor-fg tracking-tight">Skills</h3>
            <div className="h-px bg-border/50 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl">
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
                className="p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 transition-colors"
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
      </motion.div>
    </div>
  );
}
