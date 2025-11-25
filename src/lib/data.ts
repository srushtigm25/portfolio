// lib/data.ts
export const siteConfig = {
    name: "Srushti G M",
    role: "Machine Learning & Data Engineer",
    tagline: "I build scalable data pipelines & ML systems that drive real impact.",
    location: "San Jose, CA",
    email: "your_email@example.com",
    socials: {
    linkedin: "https://www.linkedin.com/in/srushti-gm/",
    github: "https://github.com/srushtigm25",
    resume: "/resume.pdf" // place resume.pdf in /public later
    }
    };
    
    
    export const skills = [
    "Python", "SQL", "PySpark", "Airflow", "dbt", "Snowflake",
    "AWS (S3, Lambda, Glue, Athena)", "Kafka", "Spark",
    "LangChain", "RAG", "GNNs", "Transformers"
    ];
    
    
    export const projects = [
    {
    title: "Sepsis-GNN",
    description:
    "Explainable GNN for sepsis mortality prediction (MIMIC-IV), +AUC vs baselines, SHAP explainability, Gradio UI.",
    tech: ["PyTorch", "GNN", "Transformers", "SHAP", "Python"],
    link: "https://github.com/srushtigm25/SepsisNet",
    image: "/images/sepsis-gnn.png"
    },
    {
    title: "DataFlowX (Modern ELT)",
    description:
    "dbt + Snowflake + Airflow + Docker; CI/CD, tests, snapshots, docs; modular models and data quality checks.",
    tech: ["dbt", "Snowflake", "Airflow", "Docker"],
    link: "https://github.com/srushtigm25/DataFlowX-Modern-ELT-Pipeline-with-dbt-Snowflake-Airflow",
    image: "/images/dataflowx.png"
    },
    {
    title: "EventFlow (Serverless ETL)",
    description:
    "S3→Lambda→Glue→Athena serverless ingestion with cost dashboards & alerts (CloudWatch).",
    tech: ["AWS S3", "Lambda", "Glue", "Athena"],
    link: "https://github.com/srushtigm25/EventFlow-AWS-Serverless-ETL-with-S3-Lambda-Glue-Athena",
    image: "/images/eventflow.png"
    }
    ];
    
    
    export const experience = [
    {
    company: "KPMG",
    role: "Software/Data Engineer",
    period: "Jul 2019 – Jun 2022",
    bullets: [
    "Built ETL pipelines & SSAS models; automated audits (−40% manual effort).",
    "Optimized SQL workloads; cut report latency by ~60% across key dashboards."
    ]
    },
    {
    company: "E6 Data",
    role: "Product Engineer",
    period: "Jun 2022 – Oct 2022",
    bullets: [
    "Orchestrated Airflow DAGs on AWS EMR/S3; observability with Grafana/Prometheus.",
    "Improved distributed query performance; reduced job times by double digits."
    ]
    },
    {
    company: "CSU Sacramento (RA/TA)",
    role: "Graduate Research/Teaching Assistant",
    period: "2024 – 2025",
    bullets: [
    "Sepsis-GNN research on MIMIC-IV; explainability (SHAP) & interactive Gradio UI.",
    "Supported deep learning coursework & project mentorship (GNNs/Transformers)."
    ]
    }
    ];