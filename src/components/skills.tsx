// components/skills.tsx
import { skills } from "@/lib/data";
import Section from "@/components/section";


export default function Skills() {
return (
<Section id="skills" title="Skills">
<div className="flex flex-wrap gap-2">
{skills.map((s) => (
//<span key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>
<span
  key={s}
  className="
    px-3 py-1 rounded-full text-sm
    bg-gray-200 text-gray-800
    dark:bg-gray-800 dark:text-gray-200
  "
>
  {s}
</span>

))}
</div>
</Section>
);
}