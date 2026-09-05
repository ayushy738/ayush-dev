"use client";

import { useState } from "react";
import { experience } from "../../data/portfolio";
import { ChevronDown } from "lucide-react";
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

export default function HiringExperience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <motion.section variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-editor-fg">
            Experience
          </h1>
          <p className="text-lg text-activitybar-fg mb-12">
            Professional engineering roles and responsibilities.
          </p>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
            {experience.map((exp, i) => (
              <TimelineExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

function TimelineExperienceCard({ exp, index }: { exp: any, index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Timeline dot */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-sidebar-bg text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
        <div className="w-3 h-3 bg-accent rounded-full"></div>
      </div>
      
      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-sidebar-bg/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-accent/30">
        <div className="flex flex-col mb-2">
          <div className="flex items-center gap-3">
            <h4 className="text-xl font-bold text-editor-fg group-hover:text-accent transition-colors">{exp.role}</h4>
            <ChevronDown size={20} className={`text-activitybar-fg transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
          <div className="text-activitybar-active font-medium mt-1 mb-2">{exp.company}</div>
          <span className="text-[13px] text-activitybar-fg font-medium bg-input-bg/50 px-3 py-1 rounded-full w-fit">
            {exp.period} • {exp.location}
          </span>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <ul className="list-disc list-outside ml-4 space-y-2.5 text-[14px] text-activitybar-fg leading-relaxed">
            {exp.details?.map((h: string, j: number) => (
              <li key={j} className="pl-1">{h}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {exp.stack?.map((tag: string, j: number) => (
              <span
                key={j}
                className="px-2.5 py-1 bg-accent/5 border border-accent/20 text-accent rounded-md text-[12px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
