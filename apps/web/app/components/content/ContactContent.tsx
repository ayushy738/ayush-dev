"use client";

import { profile } from "../../data/portfolio";
import { useState } from "react";
import {
  Mail,
  Phone,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

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

export default function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true,
    },
    {
      icon: <Phone size={16} />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: <GithubIcon size={16} />,
      label: "GitHub",
      value: "github.com/ayushy738",
      href: profile.links.github,
      external: true,
    },
    {
      icon: <LinkedinIcon size={16} />,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush-raj-yadav-393732326",
      href: profile.links.linkedin,
      external: true,
    },
    {
      icon: <ExternalLink size={16} />,
      label: "Codeforces",
      value: "codeforces.com/profile/a4ayushyadav2007",
      href: profile.links.codeforces,
      external: true,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      {/* Terminal-style header */}
      <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12.5px] leading-relaxed mb-8">
        <div>
          <span className="text-success">ayush@portfolio</span>
          <span className="text-activitybar-fg">:</span>
          <span className="text-syntax-keyword">~</span>
          <span className="text-activitybar-fg">$ </span>
          <span className="text-terminal-fg">./contact</span>
        </div>
        <div className="mt-3 space-y-1">
          {contacts.map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <span className="text-activitybar-fg w-20 text-right">{c.label}:</span>
              <span className="text-terminal-fg">{c.value}</span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-6">Contact</h1>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-accent/30 hover:bg-hover transition-colors group"
          >
            <span className="text-activitybar-fg group-hover:text-accent transition-colors">
              {contact.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-activitybar-fg uppercase tracking-wider">
                {contact.label}
              </div>
              <div className="text-[13px] text-editor-fg font-mono truncate">
                {contact.value}
              </div>
            </div>
            {contact.copyable && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyEmail();
                }}
                className="p-1.5 rounded hover:bg-input-bg transition-colors text-activitybar-fg hover:text-editor-fg"
                aria-label="Copy email"
              >
                {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
              </button>
            )}
            {contact.external && (
              <ExternalLink size={14} className="text-activitybar-fg group-hover:text-accent transition-colors flex-shrink-0" />
            )}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 p-5 bg-sidebar-bg/50 border border-border rounded-sm text-center">
        <p className="text-[14px] text-terminal-fg mb-3">
          Interested in working together?
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="vscode-btn vscode-btn-primary inline-flex"
        >
          <Mail size={14} />
          Send Email
        </a>
      </div>
    </div>
  );
}
