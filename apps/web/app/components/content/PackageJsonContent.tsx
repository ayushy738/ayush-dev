"use client";

export default function PackageJsonContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 md:px-10">
      <div className="font-mono text-[13px] text-syntax-comment mb-4">
        {"// package.json"}
      </div>
      <div className="bg-terminal-bg border border-border rounded-sm p-4 font-mono text-[12px] leading-[1.8]">
        <div className="text-syntax-punctuation">{"{"}</div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;name&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;ayush-portfolio&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;version&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;1.0.0&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;description&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;Ayush Raj Yadav — Software Developer Portfolio&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;author&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;Ayush Raj Yadav &lt;ayushy.ug24.cs@nitp.ac.in&gt;&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;keywords&quot;</span>
          <span className="text-syntax-operator">: [</span>
        </div>
        {["software-developer", "backend-engineering", "typescript", "react", "nextjs", "postgresql", "system-design"].map((kw, i) => (
          <div key={kw} className="pl-8">
            <span className="text-syntax-string">&quot;{kw}&quot;</span>
            {i < 6 && <span className="text-syntax-operator">,</span>}
          </div>
        ))}
        <div className="pl-4"><span className="text-syntax-operator">],</span></div>
        <div className="pl-4">
          <span className="text-syntax-property">&quot;scripts&quot;</span>
          <span className="text-syntax-operator">: {"{"}</span>
        </div>
        <div className="pl-8">
          <span className="text-syntax-property">&quot;dev&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;next dev&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-8">
          <span className="text-syntax-property">&quot;build&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;next build&quot;</span>
          <span className="text-syntax-operator">,</span>
        </div>
        <div className="pl-8">
          <span className="text-syntax-property">&quot;deploy&quot;</span>
          <span className="text-syntax-operator">: </span>
          <span className="text-syntax-string">&quot;vercel --prod&quot;</span>
        </div>
        <div className="pl-4"><span className="text-syntax-operator">{"}"}</span></div>
        <div className="text-syntax-punctuation">{"}"}</div>
      </div>
    </div>
  );
}
