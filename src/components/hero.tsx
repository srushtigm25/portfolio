// components/hero.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/data";


export default function Hero() {
return (
<header className="max-w-5xl mx-auto px-6 pt-20 pb-10">
<div className="gradient-line mb-6" />
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">{siteConfig.name}</h1>
<p className="mt-3 text-xl text-gray-800">{siteConfig.role}</p>
<p className="mt-2 text-gray-600 max-w-2xl">{siteConfig.tagline}</p>


<div className="mt-6 flex flex-wrap gap-4 text-sm">
<Link href={siteConfig.socials.github} className="underline">GitHub</Link>
<Link href={siteConfig.socials.linkedin} className="underline">LinkedIn</Link>
<Link href={siteConfig.socials.resume} className="underline">Resume</Link>
<span className="text-gray-500">{siteConfig.location}</span>
</div>
</header>
);
}