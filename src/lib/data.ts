// lib/data.ts
export const siteConfig = {
    name: "Srushti G M",
    role: "Software • Data • AI Engineer",
    tagline: "Building intelligent, scalable and user-focused systems.",
    location: "San Jose, CA",
    email: "srugm25@gmail.com",
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
    image: "/images/sepsis-gnn.jpeg"
    },
    {
    title: "DataFlowX (Modern ELT)",
    description:
    "dbt + Snowflake + Airflow + Docker; CI/CD, tests, snapshots, docs; modular models and data quality checks.",
    tech: ["dbt", "Snowflake", "Airflow", "Docker"],
    link: "https://github.com/srushtigm25/DataFlowX-Modern-ELT-Pipeline-with-dbt-Snowflake-Airflow",
    image: "/images/dataflowx.jpeg"
    },
    {
    title: "EventFlow (Serverless ETL)",
    description:
    "S3→Lambda→Glue→Athena serverless ingestion with cost dashboards & alerts (CloudWatch).",
    tech: ["AWS S3", "Lambda", "Glue", "Athena"],
    link: "https://github.com/srushtigm25/EventFlow-AWS-Serverless-ETL-with-S3-Lambda-Glue-Athena",
    image: "/images/eventflow.jpeg"
    },
    {
    title: "LLM Video Understanding Agent",
    description:
    "Multimodal LLM-RAG pipeline that analyzes raw videos to extract scenes, emotions, narrative beats, and outputs timestamped JSON edit/story plans. Includes Shotstack automation, evaluation harness, and serverless orchestration.",
    tech: ["LLM", "RAG", "LangChain", "memories.ai", "Python", "Shotstack", "S3", "SQS"],
    link: "https://github.com/srushtigm25/LLM-Video-Understanding-Auto-Editing-Agent",
    image: "/images/video-agent.png"
    },
    {
    title: "RAG Application (PDF Q&A System)",
    description:
    "End-to-end Retrieval-Augmented Generation pipeline for PDF insights. Includes PDF parsing, text chunking, OpenAI embeddings, Chroma vector store, LangChain retriever, and a Streamlit UI with Docker support.",
    tech: ["LangChain", "ChromaDB", "OpenAI", "Streamlit", "Docker", "Python"],
    link: "https://github.com/srushtigm25/RAG_Application",
    image: "/images/rag-app.jpeg"
    },
    {
    title: "Chatbot with Google Sheets Integration",
    description:
    "AI chatbot using GPT-4 + Google Sheets API for real-time spreadsheet-aware responses. Built with Tkinter UI, supports live queries, error handling, and full Google API authentication workflow.",
    tech: ["Python", "GPT-4", "Google Sheets API", "gspread", "Tkinter"],
    link: "https://github.com/srushtigm25/Chatbot-with-Google-Sheets-Integration",
    image: "/images/google-sheets-chatbot.jpeg"
      },
      {
        title: "AWS Serverless Event-Driven App",
        description:
          "Event-driven workflow using AWS Lambda, SQS, and DynamoDB. Processes queued messages, triggers Lambda functions, and stores structured results into DynamoDB. Demonstrates scalable serverless microservice design.",
        tech: ["AWS Lambda", "SQS", "DynamoDB", "Python", "Serverless"],
        link: "https://github.com/srushtigm25/aws-serverless-event-driven-app",
        image: "/images/aws-serverless.jpeg"
      },
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
    period: "Aug 2024 – May 2025",
    bullets: [
    "Sepsis-GNN research on MIMIC-IV; explainability (SHAP) & interactive Gradio UI.",
    "Supported deep learning coursework & project mentorship (GNNs/Transformers)."
    ]
    }
    ];