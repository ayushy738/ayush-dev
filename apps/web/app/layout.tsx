import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  return (
    <html lang="en">
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
