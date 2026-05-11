import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Design Speed Trainer — Learn Web Design in Minutes",
  description: "Interactive 4-minute micro-lessons teaching typography, color theory, layout, and UI patterns. Master web design fundamentals fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1b40eda1-1f3d-4ca0-9926-fa56dba68833"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
