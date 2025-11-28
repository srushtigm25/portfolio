
"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          flex flex-col md:flex-row 
          items-center md:items-start 
          gap-10 md:gap-14
          p-6 md:p-8 
          rounded-3xl
          border border-gray-200 dark:border-gray-800
          bg-white/40 dark:bg-white/5 
          backdrop-blur-md
        "
      >
        {/* PROFILE PHOTO */}
        <div className="flex-shrink-0">
          <div className="
            relative 
            h-40 w-40 md:h-48 md:w-48 
            rounded-full 
            overflow-hidden 
            ring-2 ring-gray-300 dark:ring-gray-700 shadow-md
          ">
            <Image
              src="/IMG1.png"          // <--- UPDATE THIS
              alt="Srushti profile photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ABOUT TEXT */}
        <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          <p>
            Hi! I’m <span className="font-semibold text-gray-900 dark:text-gray-100">Srushti</span>, a recent CS graduate from 
            <span className="font-medium"> California State University, Sacramento</span>, bringing 
            <span className="font-medium"> 5+ years of experience</span> working across 
            <span className="font-medium"> software, data, and AI systems</span>. 
            I focus on designing <span className="font-medium">scalable data pipelines</span>, 
            <span className="font-medium"> AI-powered applications</span> and 
            <span className="font-medium"> reliable backend services</span>.
          </p>

          <p>
            🚀 I’ve delivered <span className="font-medium">production-grade solutions</span> with teams at 
            <span className="font-medium"> Siemens Mobility</span>, 
            <span className="font-medium"> KPMG</span>, 
            <span className="font-medium"> E6 Data</span> and CSU’s 
            <span className="font-medium"> Research & Innovation</span> group. My work includes 
            <span className="font-medium"> RAG systems</span>, 
            <span className="font-medium"> multimodal video agents</span>, 
            <span className="font-medium"> ETL pipelines</span>, 
            <span className="font-medium"> dbt/Snowflake models</span>, 
            <span className="font-medium"> PyTorch ML models</span> and 
            <span className="font-medium"> Java microservices</span>.
          </p>

          <p>
            🌄 Outside work, I love <span className="font-medium">exploring trails</span>, 
            <span className="font-medium"> playing badminton</span>, 
            <span className="font-medium"> hitting the gym</span>, and experimenting with personal 
            projects and new tools.
          </p>

          <p>
            <span className="font-semibold text-gray-900 dark:text-gray-100">⚙️ Recent technologies I’ve been working with:</span><br />
            Python · SQL · Java · PyTorch · LangChain · AWS · Airflow · dbt · Snowflake · Spark
          </p>

          <p>
            💼 I’m open to roles in 
            <span className="font-medium"> Software Engineering</span>, 
            <span className="font-medium"> Data Engineering</span>, 
            <span className="font-medium"> ML/AI Engineering</span>, and 
            <span className="font-medium"> Analytics Engineering</span> — roles where I can 
            collaborate effectively, stay customer-focused, and build systems 
            that deliver real impact.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

