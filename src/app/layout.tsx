// // src/app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/navbar";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from '@vercel/analytics/react';
// import { motion } from "framer-motion";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Srushti GM | ML & Data Engineer",
//   description: "Portfolio — scalable data & ML systems: GNNs, dbt, Snowflake, Airflow, AWS.",
//   openGraph: {
//     title: "Srushti GM | ML & Data Engineer",
//     description: "Projects & experience building scalable data & ML systems.",
//     url: "https://yourdomain.com",
//     siteName: "Srushti GM Portfolio",
//   },
//   twitter: { card: "summary_large_image" },
// };


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100`}
//       >
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Navbar />
//           {children}
//         </ThemeProvider>

//         {/* Vercel Analytics */}
//         <Analytics />
//       </body>
//     </html>
//   );
// }


// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srushti GM | ML & Data Engineer",
  description:
    "Portfolio — scalable data & ML systems: GNNs, dbt, Snowflake, Airflow, AWS.",
  openGraph: {
    title: "Srushti GM | ML & Data Engineer",
    description: "Projects & experience building scalable data & ML systems.",
    url: "https://yourdomain.com",
    siteName: "Srushti GM Portfolio",
  },
  twitter: { card: "summary_large_image" },
};

// src/app/layout.tsx
import PageWrapper from "@/components/PageWrapper";   // <-- add this

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {/* PAGE TRANSITION WRAPPER */}
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
