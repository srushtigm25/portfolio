// components/hero.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-20 pb-10 transition-colors">
      <div className="gradient-line mb-6" />

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {siteConfig.name}
      </h1>

      {/* Role */}
      <p className="mt-3 text-xl text-gray-800 dark:text-gray-200">
        {siteConfig.role}
      </p>

      {/* Tagline */}
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
        {siteConfig.tagline}
      </p>

      {/* Social Links */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href={siteConfig.socials.github} className="underline">
          GitHub
        </Link>
        <Link href={siteConfig.socials.linkedin} className="underline">
          LinkedIn
        </Link>
        <Link href={siteConfig.socials.resume} className="underline">
          Resume
        </Link>
        <span className="text-gray-500 dark:text-gray-400">
          {siteConfig.location}
        </span>
      </div>
    </header>
  );
}
