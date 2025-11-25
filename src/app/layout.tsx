// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Your custom metadata (KEEP THIS)
export const metadata: Metadata = {
  title: "Srushti GM | ML & Data Engineer",
  description: "Portfolio — scalable data & ML systems: GNNs, dbt, Snowflake, Airflow, AWS.",
  openGraph: {
    title: "Srushti GM | ML & Data Engineer",
    description: "Projects & experience building scalable data & ML systems.",
    url: "https://yourdomain.com",
    siteName: "Srushti GM Portfolio",
  },
  twitter: { card: "summary_large_image" },
};

// ✅ Single RootLayout (KEEP ONLY THIS ONE)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
