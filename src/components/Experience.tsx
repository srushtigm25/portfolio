// // components/experience.tsx
// "use client";

// import { experience } from "@/lib/data";
// import Section from "@/components/section";

// export default function Experience() {
//   return (
//     <Section id="experience" title="Experience">
//       <div className="space-y-6">
//         {experience.map((e) => (
//           <div
//             key={e.company}
//             className="
//               border rounded-2xl p-5
//               bg-white dark:bg-[#111]
//               border-gray-200 dark:border-gray-800
//               shadow-sm dark:shadow-none
//               transition-colors
//             "
//           >
//             <div className="flex items-baseline justify-between gap-4">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
//                 {e.role} · {e.company}
//               </h3>

//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 {e.period}
//               </span>
//             </div>

//             <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300">
//               {e.bullets.map((b: string, i: number) => (
//                 <li key={i}>{b}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// }

"use client";

import Image from "next/image";
import Section from "@/components/section";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="space-y-6">
          {experience.map((e, idx) => (
            <motion.div
              key={e.company + idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <span
                className="
                  absolute left-[10px] md:left-[22px] top-5
                  h-3.5 w-3.5 rounded-full
                  bg-blue-600 ring-4 ring-blue-600/15
                  dark:ring-blue-500/20 dark:bg-blue-500
                "
              />

              {/* Card */}
              <div
                className="
                  border rounded-2xl p-5
                  bg-white dark:bg-[#111]
                  border-gray-200 dark:border-gray-800
                  shadow-sm
                "
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      {e.logo ? (
                        <Image
                          src={e.logo}
                          alt={e.company}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-xs text-gray-500">Logo</span>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {e.role}
                      </h3>
                      <span className="text-gray-400">•</span>
                      <p className="text-gray-700 dark:text-gray-300">{e.company}</p>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {e.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1.5">
                      {e.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          ▸ {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
