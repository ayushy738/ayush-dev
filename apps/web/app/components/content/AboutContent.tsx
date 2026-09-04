"use client";

import { profile } from "../../data/portfolio";

export default function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10">
      {/* Line numbers + code */}
      <div className="font-mono text-[13px] leading-[1.8]">
        <Line n={1}>
          <span className="text-syntax-comment">
            {"// src/about.ts"}
          </span>
        </Line>
        <Line n={2}>
          <span className="text-syntax-comment">
            {"// Profile — sourced from resume"}
          </span>
        </Line>
        <Line n={3} />
        <Line n={4}>
          <K>const</K> <V>ayush</V> <O>=</O> <P>{"{"}</P>
        </Line>
        <Line n={5}>
          <Indent />
          <Prop>name</Prop>
          <O>: </O>
          <S>{`"${profile.name}"`}</S>
          <O>,</O>
        </Line>
        <Line n={6}>
          <Indent />
          <Prop>role</Prop>
          <O>: </O>
          <S>{`"${profile.role}"`}</S>
          <O>,</O>
        </Line>
        <Line n={7}>
          <Indent />
          <Prop>education</Prop>
          <O>: </O>
          <S>{`"${profile.education.degree}"`}</S>
          <O>,</O>
        </Line>
        <Line n={8}>
          <Indent />
          <Prop>institute</Prop>
          <O>: </O>
          <S>{`"${profile.education.institute}"`}</S>
          <O>,</O>
        </Line>
        <Line n={9}>
          <Indent />
          <Prop>cgpa</Prop>
          <O>: </O>
          <N>{profile.education.cgpa}</N>
          <O>,</O>
        </Line>
        <Line n={10}>
          <Indent />
          <Prop>graduation</Prop>
          <O>: </O>
          <N>2028</N>
          <O>,</O>
        </Line>
        <Line n={11}>
          <Indent />
          <Prop>interests</Prop>
          <O>: [</O>
        </Line>
        {profile.interests.map((interest, i) => (
          <Line n={12 + i} key={interest}>
            <Indent />
            <Indent />
            <S>{`"${interest}"`}</S>
            <O>,</O>
          </Line>
        ))}
        <Line n={12 + profile.interests.length}>
          <Indent />
          <O>],</O>
        </Line>
        <Line n={13 + profile.interests.length}>
          <Indent />
          <Prop>links</Prop>
          <O>{": {"}</O>
        </Line>
        <Line n={14 + profile.interests.length}>
          <Indent />
          <Indent />
          <Prop>github</Prop>
          <O>: </O>
          <S>{`"${profile.links.github}"`}</S>
          <O>,</O>
        </Line>
        <Line n={15 + profile.interests.length}>
          <Indent />
          <Indent />
          <Prop>linkedin</Prop>
          <O>: </O>
          <S>{`"${profile.links.linkedin}"`}</S>
          <O>,</O>
        </Line>
        <Line n={16 + profile.interests.length}>
          <Indent />
          <Indent />
          <Prop>codeforces</Prop>
          <O>: </O>
          <S>{`"${profile.links.codeforces}"`}</S>
          <O>,</O>
        </Line>
        <Line n={17 + profile.interests.length}>
          <Indent />
          <O>{"}"}</O>
        </Line>
        <Line n={18 + profile.interests.length}>
          <P>{"}"}</P>
          <O>;</O>
        </Line>
      </div>

      {/* Human-readable section */}
      <hr className="border-border my-8" />

      <div className="font-sans">
        <h2 className="text-lg font-semibold text-editor-fg mb-4">
          About
        </h2>
        <p className="text-[14px] text-terminal-fg leading-relaxed mb-4">
          I&apos;m a Computer Science student at NIT Patna with a strong focus on building
          production software. My work spans backend engineering, scalable APIs, database
          architecture, and AI-powered applications.
        </p>
        <p className="text-[14px] text-terminal-fg leading-relaxed mb-4">
          Currently working as a Software Developer Intern at Eduteria, building
          scalable backend services, and as a Full Stack Developer on the NITP Web Team,
          developing institute-wide platforms.
        </p>
        <p className="text-[14px] text-terminal-fg leading-relaxed">
          I think a lot about system design — how to structure databases, optimize queries,
          design clean APIs, implement caching, and build systems that handle real load.
        </p>
      </div>
    </div>
  );
}

// Helper components for syntax highlighting
function Line({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="inline-block w-10 text-right text-line-number select-none pr-4 flex-shrink-0">
        {n}
      </span>
      <span>{children}</span>
    </div>
  );
}

function K({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-keyword">{children} </span>;
}
function V({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-variable">{children} </span>;
}
function S({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-string">{children}</span>;
}
function N({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-number">{children}</span>;
}
function O({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-operator">{children}</span>;
}
function P({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-punctuation">{children}</span>;
}
function Prop({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-property">{children}</span>;
}
function Indent() {
  return <span className="inline-block w-6" />;
}
