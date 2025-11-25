// components/projects.tsx

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
<Card className="overflow-hidden rounded-2xl border-gray-200">
{p.image && (
<div className="relative h-40">
<Image src={p.image} alt={p.title} fill className="object-cover" />
</div>
)}
<CardContent className="p-5">
<h3 className="text-lg font-semibold">{p.title}</h3>
<p className="mt-2 text-gray-700">{p.description}</p>
<p className="mt-3 text-sm text-gray-600">{p.tech.join(" • ")}</p>
<div className="mt-4">
<Link href={p.link} className="underline">View project</Link>
</div>
</CardContent>
</Card>
</motion.div>
))}
</motion.div>
</Section>
);
}