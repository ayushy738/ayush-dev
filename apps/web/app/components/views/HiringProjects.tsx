"use client";

import { projects } from "../../data/portfolio";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
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

export default function HiringProjects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-editor-fg">
            Featured Projects
          </h1>
          <p className="text-lg text-activitybar-fg mb-12 max-w-2xl">
            A selection of software systems and web applications I&apos;ve built, focusing on scalable backend architecture and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              variants={itemVariants}
              key={proj.id}
            >
              <Link href={`/projects/${proj.id}`} className="block h-full">
                <div className="flex flex-col h-full p-8 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/30 group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-editor-fg group-hover:text-accent transition-colors">{proj.name}</h4>
                    <span className="p-2 text-activitybar-fg group-hover:text-accent group-hover:bg-accent/10 rounded-full transition-colors">
                      <ExternalLink size={18} />
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-input-bg border border-border/50 rounded-md text-[13px] text-activitybar-active font-medium">
                      {proj.status}
                    </span>
                    <span className="text-[13px] text-activitybar-fg">
                      {proj.period}
                    </span>
                  </div>
                  <p className="text-[15px] text-activitybar-fg mb-8 flex-1 leading-relaxed">
                    {proj.overview}
                  </p>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
