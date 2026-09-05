import { Metadata } from "next";
import { Hammer } from "lucide-react";
import HiringLayout from "../components/layouts/HiringLayout";

export const metadata: Metadata = {
  title: "Blog — Ayush Raj Yadav",
  description: "Technical blog by Ayush Raj Yadav.",
};

export default function BlogPage() {
  return (
    <HiringLayout>
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-sidebar-bg/50 backdrop-blur-sm border border-border/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
          <Hammer size={32} className="text-activitybar-fg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-editor-fg">
          Technical Blog
        </h1>
        <p className="text-lg text-activitybar-fg max-w-lg leading-relaxed">
          I am currently working on this section. I will be sharing my thoughts on system design, database architecture, and backend engineering soon.
        </p>
      </div>
    </HiringLayout>
  );
}
