"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/portfolio";

export default function HiringLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-editor-bg/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-accent transition-colors">
            AYUSH.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  pathname === link.href ? "text-accent" : "text-activitybar-fg hover:text-editor-fg"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/dev-mode"
              className="px-4 py-1.5 bg-sidebar-bg border border-border/50 rounded-full text-[13px] hover:bg-hover transition-all flex items-center gap-2 text-activitybar-fg hover:text-editor-fg hover:border-accent/50 shadow-sm"
            >
              <Code size={14} />
              <span>Dev Mode</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-activitybar-fg hover:text-editor-fg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-editor-bg/95 backdrop-blur-md border-b border-border/50 p-6 flex flex-col gap-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] font-medium ${
                  pathname === link.href ? "text-accent" : "text-activitybar-fg"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border/50">
              <Link
                href="/dev-mode"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-sidebar-bg border border-border/50 rounded-lg text-[14px] font-medium flex justify-center items-center gap-2 text-editor-fg"
              >
                <Code size={16} />
                Explore Dev Mode
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 pt-10 pb-8 text-center text-[13px] text-activitybar-fg border-t border-border/30 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Designed & Built by {profile.name}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-editor-fg">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-editor-fg">LinkedIn</a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-editor-fg">LeetCode</a>
            <a href={profile.links.codeforces} target="_blank" rel="noopener noreferrer" className="hover:text-editor-fg">Codeforces</a>
          </div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
