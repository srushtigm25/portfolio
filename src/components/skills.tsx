// components/skills.tsx
import { skills } from "@/lib/data";
import Section from "@/components/section";


export default function Skills() {
return (
<Section id="skills" title="Skills">
<div className="flex flex-wrap gap-2">
{skills.map((s) => (
<span key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>
))}
</div>
</Section>
);
}