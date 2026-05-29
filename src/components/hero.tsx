
"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import FloatingBlobs from "@/components/FloatingBlobs";

export default function Hero() {
  return (
    <header className="relative max-w-5xl mx-auto px-6 pt-20 pb-10 transition-colors">

      {/* Floating Background */}
      <FloatingBlobs />

      <div className="gradient-line mb-6" />

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 relative z-10">
        {siteConfig.name}
      </h1>

      <p className="mt-3 text-xl text-gray-800 dark:text-gray-200 relative z-10">
        {siteConfig.role}
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl relative z-10">
        {siteConfig.tagline}
      </p>

      <div className="mt-6 flex items-center gap-6 text-2xl relative z-10">

        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* RESUME BUTTON — NO <Link>, NO HYDRATION ISSUES */}
      {/* <div className="mt-6 relative z-10">
        <a
          href={siteConfig.socials.resume}
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-teal-400/50 bg-gray-900 dark:bg-gray-800 text-gray-100 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <FaDownload className="text-lg" />
          <span>Download Resume</span>
        </a> */}


      {/* </div> */}

    </header>
  );
}
