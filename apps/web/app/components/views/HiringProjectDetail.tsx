"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

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

export default function HiringProjectDetail({ project }: { project: any }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[14px] font-medium text-activitybar-fg hover:text-editor-fg transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-editor-fg">
            {project.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-input-bg border border-border/50 rounded-md text-[13px] text-activitybar-active font-medium">
              {project.status}
            </span>
            <span className="text-[14px] font-medium text-activitybar-fg">
              {project.period}
            </span>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-[14px] font-medium text-accent hover:text-accent-hover transition-colors ml-auto md:ml-0"
              >
                <ExternalLink size={16} />
                View Live Project
              </a>
            )}
          </div>
        </motion.div>

        <motion.section variants={itemVariants} className="prose prose-invert max-w-none">
          <p className="text-lg text-activitybar-fg leading-relaxed">
            {project.overview}
          </p>
        </motion.section>

        {project.features && (
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-editor-fg tracking-tight">Key Features</h3>
              <div className="h-px bg-border/50 flex-1"></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                  <span className="text-[15px] text-activitybar-active leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-editor-fg tracking-tight">Tech Stack</h3>
            <div className="h-px bg-border/50 flex-1"></div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.stack?.map((tag: string, j: number) => (
              <span
                key={j}
                className="px-4 py-2 bg-input-bg border border-border/50 text-editor-fg rounded-lg text-[14px] font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {project.deployment && (
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-editor-fg tracking-tight">Deployment & Infrastructure</h3>
              <div className="h-px bg-border/50 flex-1"></div>
            </div>
            <ul className="space-y-4">
              {project.deployment.map((dep: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-activitybar-active leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">→</span>
                  <span>{dep}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}
