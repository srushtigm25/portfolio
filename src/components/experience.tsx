// components/experience.tsx
import { experience } from "@/lib/data";
import Section from "@/components/section";


export default function Experience() {
return (
<Section id="experience" title="Experience">
<div className="space-y-6">
{experience.map((e) => (
<div key={e.company} className="border rounded-2xl p-5">
<div className="flex items-baseline justify-between gap-4">
<h3 className="text-lg md:text-xl font-semibold">{e.role} · {e.company}</h3>
<span className="text-sm text-gray-600">{e.period}</span>
</div>
<ul className="list-disc ml-6 mt-3 text-gray-700">
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