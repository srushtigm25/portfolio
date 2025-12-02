// components/skills.tsx
//without animation
// import Section from "@/components/section";

// const skills = {
//   Languages: [
//     { name: "Python", level: "Advanced" },
//     { name: "Java", level: "Advanced" },
//     { name: "SQL", level: "Advanced" },
//   ],

//   "AI & Machine Learning": [
//     { name: "PyTorch", level: "Advanced" },
//     { name: "LangChain", level: "Advanced" },
//     { name: "RAG Pipelines", level: "Advanced" },
//     { name: "Transformers / LLMs", level: "Advanced" },
//     { name: "Data Modeling", level: "Advanced" },
//   ],

//   "Data Engineering": [
//     { name: "PySpark", level: "Advanced" },
//     { name: "Airflow", level: "Advanced" },
//     { name: "dbt", level: "Advanced" },
//     { name: "Snowflake", level: "Advanced" },
//     { name: "Kafka", level: "Intermediate" },
//     { name: "ETL / ELT", level: "Advanced" },
//     { name: "Distributed Systems", level: "Intermediate" },
//   ],

//   "Cloud Platforms": [
//     { name: "AWS (S3, Lambda, Glue, Athena, EMR)", level: "Intermediate–Advanced" },
//     { name: "Serverless Architecture", level: "Intermediate" },
//   ],

//   "DevOps & CI/CD": [
//     { name: "Docker", level: "Intermediate" },
//     { name: "Git & GitHub", level: "Advanced" },
//     { name: "CI/CD Pipelines", level: "Advanced" },
//   ],

//   "Analytics / BI": [
//     { name: "Pandas", level: "Advanced" },
//     { name: "Tableau", level: "Intermediate" },
//     { name: "Power BI", level: "Intermediate" },
//   ],
// };

// export default function Skills() {
//   return (
//     <Section id="skills" title="Skills">
//       <div className="space-y-8 mt-6">

//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category}>
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{category}</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {items.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex justify-between bg-gray-200 dark:bg-gray-900 px-4 py-2 rounded-md"
//                 >
//                   <span className="text-gray-800 dark:text-gray-200">
//                     {skill.name}
//                   </span>

//                   <span className="text-sm text-gray-600 dark:text-gray-400">
//                     {skill.level}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//       </div>
//     </Section>
//   );
// }

//with animation
"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
  ],

  "AI & Machine Learning": [
    { "name": "LangChain", "level": "Advanced" },
    { "name": "RAG Pipelines", "level": "Advanced" },
    { "name": "Prompt Engineering", "level": "Advanced" },
    { "name": "Model Context Protocol (MCP)", "level": "Intermediate" },
    { "name": "Graph Neural Networks (GNNs)", "level": "Intermediate" },
    { "name": "NLP (Embeddings, Text Classification)", "level": "Advanced" },
    { "name": "Scikit-Learn", "level": "Advanced" },
  ],

  "Data Engineering": [
    { name: "PySpark", level: "Intermediate" },
    { name: "Airflow", level: "Advanced" },
    { name: "dbt", level: "Intermediate" },
    { name: "Snowflake", level: "Advanced" },
    { name: "Kafka", level: "Intermediate" },
    { name: "ETL / ELT", level: "Advanced" },
    { name: "Distributed Systems", level: "Intermediate" },
    { name: "Data Modeling", level: "Advanced" },
  ],
"Frameworks & Libraries": [
  { "name": "PyTorch", "level": "Advanced" },
  { "name": "TensorFlow", "level": "Intermediate" },
  { "name": "FastAPI", "level": "Advanced" },
  { "name": "Flask", "level": "Intermediate" },
  { "name": "Django REST Framework", "level": "Intermediate" },
  { "name": "Spring Boot", "level": "Intermediate" },
  { "name": "Kafka", "level": "Intermediate" },
  
],
  "Cloud Platforms": [
    {
      name: "AWS", level: "Advanced",
    },
    { name: "Azure", level: "Intermediate" },
  ],

  "DevOps & CI/CD": [
    { name: "Docker", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Jenkins", level: "Intermediate" },
    { name: "Azure Devops", level: "Intermediate" },
    
  ],

  "Analytics / BI": [
    { name: "Pandas", level: "Advanced" },
    { name: "Tableau", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Amazon QuickSight", level: "Intermediate" },
  ],
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8 mt-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }} // repeat animation
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex justify-between bg-gray-200 dark:bg-gray-900 px-4 py-2 rounded-md"
                >
                  <span className="text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>

                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
