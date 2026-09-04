"use client";

export default function NowContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// now.md — Things I'm currently exploring"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-2">Now</h1>
      <p className="text-[14px] text-activitybar-fg mb-6">
        Updated Sep 2026
      </p>

      <div className="space-y-4">
        {[
          {
            topic: "System Design",
            note: "Thinking about how to design systems that scale — load balancing, database sharding, message queues, service boundaries.",
          },
          {
            topic: "Event-Driven Architecture",
            note: "Understanding when to move beyond request-response — event sourcing, pub-sub patterns, eventual consistency.",
          },
          {
            topic: "AI Application Architecture",
            note: "Building production RAG systems, not just demos. How to make retrieval reliable and answers grounded.",
          },
          {
            topic: "Document Processing",
            note: "OCR, PDF extraction, document classification — the unglamorous but critical infrastructure behind AI applications.",
          },
          {
            topic: "Backend Scalability",
            note: "Moving from 'it works' to 'it works at scale' — connection pooling, query optimization, caching strategies.",
          },
          {
            topic: "Performance Engineering",
            note: "Profiling, measuring, optimizing. Understanding where time actually goes in a request lifecycle.",
          },
        ].map((item) => (
          <div
            key={item.topic}
            className="border-l-2 border-border pl-4 py-1 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-[14px] font-semibold text-editor-fg">
              {item.topic}
            </h3>
            <p className="text-[13px] text-terminal-fg mt-1 leading-relaxed">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
