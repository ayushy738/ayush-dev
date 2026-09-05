import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushydv.me"),
  title: "Ayush Raj Yadav — Software Developer",
  description:
    "Software Developer specializing in backend engineering, scalable APIs, databases, and AI-powered applications. B.Tech CSE at NIT Patna.",
  keywords: [
    "Ayush Raj Yadav",
    "Software Developer",
    "Backend Engineer",
    "NIT Patna",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "System Design",
  ],
  openGraph: {
    title: "Ayush Raj Yadav — Software Developer",
    description:
      "Building scalable software systems and turning complex problems into reliable products.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Raj Yadav",
    url: "https://ayushydv.me",
    jobTitle: "Software Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "NIT Patna",
    },
    sameAs: [
      "https://github.com/ayushy738",
      "https://linkedin.com/in/ayush-raj-yadav-393732326",
    ],
  };

  return (
    <html lang="en" data-theme="dark+">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased h-screen overflow-y-auto selection:bg-selection selection:text-editor-fg bg-editor-bg text-editor-fg font-sans relative">
        {/* Subtle Background Glows */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />
        {children}
      </body>
    </html>
  );
}
