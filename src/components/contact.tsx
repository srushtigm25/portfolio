// // components/contact.tsx

"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Section from "@/components/section";

export default function Contact() {
  return (
    <Section id="contact" title="Let’s Connect ✨">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          border rounded-2xl p-6 md:p-8
          bg-white dark:bg-[#111]
          border-gray-200 dark:border-gray-800
          max-w-5xl mx-auto
          text-center
          shadow-sm dark:shadow-none
        "
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I’m currently exploring new opportunities in software, data and AI.
          Whether you have a question, a project, or just want to say hi, feel free
          to reach out — I’d love to hear from you!
        </p>

        {/* EMAIL BUTTON */}
        {/* EMAIL BUTTON — MATCHING RESUME BUTTON */}
        <div className="mt-6">
        <a
            href="mailto:srushtigm25@gmail.com"
            className="
            inline-flex items-center gap-2 
            px-6 py-3 rounded-xl 
            bg-[#0a1220]/70 
            border border-teal-400/40 
            text-white 
            hover:bg-[#0a1220]/90 
            transition-colors
            shadow-sm
            "
        >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
      />
    </svg>
    Email Me
  </a>
</div>


        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-6 text-2xl mt-6">
          
          <a
            href="https://www.linkedin.com/in/srushti-gm/"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/srushtigm25"
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
