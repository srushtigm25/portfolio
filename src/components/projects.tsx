// // // components/projects.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data"; // Make sure projects have `categories: []`

// ---- CATEGORIES YOU WANT TO SHOW IN FILTER ----
const categories = [
  "All",
  "Agentic AI",
  "Machine Learning",
  "Data Engineering",
  "Data Analysis",
  "Python",
  "Java",
  "AWS",
];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  // ---- FILTER LOGIC FOR MULTIPLE CATEGORIES ----
  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((p) => p.categories?.includes(selected));

  return (
    <Section id="projects" title="Featured Projects">
      
      {/* ---- CATEGORY FILTER BUTTONS ---- */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium border transition-all
              ${
                selected === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-white/10 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ---- PROJECT GRID ---- */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="
                rounded-2xl overflow-hidden 
                border border-gray-200 dark:border-gray-800 
                bg-white dark:bg-[#111] shadow-sm
              "
            >
              {/* ---- PROJECT IMAGE ---- */}
              {p.image && (
                <div className="relative h-40">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-5">

                {/* ---- MULTIPLE CATEGORY BADGES ---- */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.categories?.map((cat) => (
                    <span
                      key={cat}
                      className="
                        inline-block px-3 py-1 text-xs rounded-full
                        bg-gray-200 dark:bg-gray-700 dark:text-gray-300
                      "
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* ---- TITLE ---- */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {p.title}
                </h3>

                {/* ---- DESCRIPTION ---- */}
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {p.description}
                </p>

                {/* ---- TECH STACK ---- */}
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {p.tech.join(" • ")}
                </p>

                {/* ---- LINK ---- */}
                <Link
                  href={p.link}
                  className="inline-block mt-4 text-sm underline text-blue-600 dark:text-blue-400"
                >
                  View project
                </Link>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
