// components/skills.tsx
// import { skills } from "@/lib/data";
// import Section from "@/components/section";

// export default function Skills() {
//   return (
//     <Section id="skills" title="Skills">
//       <div className="flex flex-wrap gap-2">
//         {skills.map((s) => (
//           <span
//             key={s}
//             className="
//               px-3 py-1 rounded-full text-sm
//               bg-gray-200 text-gray-800
//               dark:bg-gray-800 dark:text-gray-200
//             "
//           >
//             {s}
//           </span>
//         ))}
//       </div>
//     </Section>
//   );
// }

import Section from "@/components/section";

const skills = {
  Languages: [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
  ],

  "AI & Machine Learning": [
    { name: "PyTorch", level: "Advanced" },
    { name: "LangChain", level: "Advanced" },
    { name: "RAG Pipelines", level: "Advanced" },
    { name: "Transformers / LLMs", level: "Advanced" },
    { name: "Data Modeling", level: "Advanced" },
  ],

  "Data Engineering": [
    { name: "PySpark", level: "Advanced" },
    { name: "Airflow", level: "Advanced" },
    { name: "dbt", level: "Advanced" },
    { name: "Snowflake", level: "Advanced" },
    { name: "Kafka", level: "Intermediate" },
    { name: "ETL / ELT", level: "Advanced" },
    { name: "Distributed Systems", level: "Intermediate" },
  ],

  "Cloud Platforms": [
    { name: "AWS (S3, Lambda, Glue, Athena, EMR)", level: "Intermediate–Advanced" },
    { name: "Serverless Architecture", level: "Intermediate" },
  ],

  "DevOps & CI/CD": [
    { name: "Docker", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "CI/CD Pipelines", level: "Advanced" },
  ],

  "Analytics / BI": [
    { name: "Pandas", level: "Advanced" },
    { name: "Tableau", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
  ],
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8 mt-6">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">{category}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex justify-between bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md"
                >
                  <span className="text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>

                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
}
