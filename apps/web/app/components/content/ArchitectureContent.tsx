"use client";

export default function ArchitectureContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10 font-sans">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// architecture.md — How I Build"}
      </div>

      <h1 className="text-2xl font-bold text-editor-fg mb-2">How I Build</h1>
      <p className="text-[14px] text-activitybar-fg mb-8">
        Engineering patterns and thinking across my projects
      </p>

      {/* API Design */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          API Design
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed mb-3">
          I build modular REST APIs using Fastify with clear route separation, request
          validation, and middleware-based authentication. In Eduteria and the Recruitment
          Portal, each domain (quizzes, users, documents) has its own isolated route module.
        </p>
        <div className="bg-terminal-bg border border-border rounded-sm p-3 font-mono text-[12px] leading-[1.8]">
          <div className="text-syntax-comment">{"// Route structure pattern"}</div>
          <div className="text-terminal-fg">routes/</div>
          <div className="pl-3 text-terminal-fg">├── auth/</div>
          <div className="pl-3 text-terminal-fg">├── quizzes/</div>
          <div className="pl-3 text-terminal-fg">├── users/</div>
          <div className="pl-3 text-terminal-fg">├── documents/</div>
          <div className="pl-3 text-terminal-fg">└── admin/</div>
        </div>
      </section>

      {/* Database Design */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Database Schema Design
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed mb-3">
          I think carefully about schema design — relationships, indexes, and query
          patterns. In the Eduteria platform, the quiz lifecycle state machine drives
          the schema. In the Recruitment Portal, application snapshots are designed
          for audit trail requirements.
        </p>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          I use Prisma for schema management where possible, allowing type-safe
          database access and migration management.
        </p>
      </section>

      {/* Caching */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Caching
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          Redis caching at Eduteria handles session data, leaderboard rankings, and
          frequently accessed quiz metadata. The key challenge is cache invalidation —
          knowing when quiz data changes and leaderboard rankings need recalculation.
        </p>
      </section>

      {/* Auth */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Authentication & RBAC
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          Role-based access control in both Eduteria (admin/student roles) and the
          Recruitment Portal (admin/candidate roles). JWT-based authentication in Tatv.
          Each system has different access patterns, but the principle is the same:
          validate identity, check permissions, authorize access.
        </p>
      </section>

      {/* Async */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Asynchronous Processing
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          Leaderboard computation at Eduteria aggregates across 100K+ student records.
          This cannot happen synchronously in an API request. Asynchronous processing
          decouples the computation from the request cycle.
        </p>
      </section>

      {/* Performance */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Performance
        </h2>
        <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
          <div className="text-syntax-comment">{"// Things I think about"}</div>
          <div className="mt-2 space-y-0.5">
            <div className="text-terminal-fg">→ Request latency</div>
            <div className="text-terminal-fg">→ Database indexes and query patterns</div>
            <div className="text-terminal-fg">→ Cache hit rates</div>
            <div className="text-terminal-fg">→ Asynchronous workloads</div>
            <div className="text-terminal-fg">→ Concurrency considerations</div>
            <div className="text-terminal-fg">→ N+1 query prevention</div>
          </div>
        </div>
      </section>

      {/* AI / RAG */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          AI / RAG Pipelines
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          In Regulatory AI, the RAG pipeline connects document ingestion → OCR →
          classification → embedding generation → vector retrieval → context-grounded
          response generation. The key challenge is ensuring answers are grounded in
          source documents rather than hallucinated.
        </p>
      </section>

      {/* Deployment */}
      <section>
        <h2 className="text-lg font-semibold text-editor-fg mb-3">
          <span className="text-syntax-comment font-mono text-[13px]">## </span>
          Deployment
        </h2>
        <p className="text-[13px] text-terminal-fg leading-relaxed">
          Docker containerization for the Recruitment Portal deployed on AWS EC2.
          Tatv was deployed with a more manual stack — Ubuntu, Nginx, PM2 — which
          taught me what containerization actually abstracts away.
        </p>
      </section>
    </div>
  );
}
