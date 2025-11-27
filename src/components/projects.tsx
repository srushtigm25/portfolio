// // components/projects.tsx
"use client";

import { projects } from "@/lib/data";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeInUp}>
            <Card
              className="
                overflow-hidden rounded-2xl 
                border border-gray-200 dark:border-gray-800 
                bg-white dark:bg-[#111]
                transition-colors
                h-[420px]      /* 🔥 FIXED CARD HEIGHT */
                flex flex-col  /* allows pushing content to bottom */
              "
            >
              {/* PROJECT IMAGE */}
              <div className="relative h-40 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="
                    object-cover   /* OPTION A: crop to fill, aligned */
                    /* object-contain  OPTION B: show full image */
                  "
                />
              </div>

              {/* CONTENT */}
              <CardContent className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {p.title}
                </h3>

                <p
                  className="
                    mt-2 text-gray-700 dark:text-gray-300
                    line-clamp-3          /* 🔥 LIMIT DESCRIPTION TO 3 LINES */
                  "
                >
                  {p.description}
                </p>

                <p
                  className="
                    mt-3 text-sm text-gray-600 dark:text-gray-400
                    line-clamp-1          /* 🔥 LIMIT TECH STACK TO 1 LINE */
                  "
                >
                  {p.tech.join(" • ")}
                </p>

                {/* PUSH LINK TO BOTTOM */}
                <div className="mt-auto pt-4">
                  <Link
                    href={p.link}
                    className="
                      underline 
                      text-gray-900 dark:text-gray-200 
                      hover:text-blue-600 dark:hover:text-blue-400 
                      transition-colors
                    "
                  >
                    View project
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
