"use client";

import { ReactNode, useState, useEffect } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id={id}
      className="max-w-5xl mx-auto px-6 py-20 scroll-mt-20"
    >
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}

      <div>{children}</div>
    </section>
  );
}
