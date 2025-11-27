// components/experience.tsx
"use client";

import { experience } from "@/lib/data";
import Section from "@/components/section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((e) => (
          <div
            key={e.company}
            className="
              border rounded-2xl p-5
              bg-white dark:bg-[#111]
              border-gray-200 dark:border-gray-800
              shadow-sm dark:shadow-none
              transition-colors
            "
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {e.role} · {e.company}
              </h3>

              <span className="text-sm text-gray-600 dark:text-gray-400">
                {e.period}
              </span>
            </div>

            <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300">
              {e.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
