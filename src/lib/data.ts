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
        // Languages
        "Python", "Java", "SQL",
      
        // Data Engineering
        "PySpark", "Airflow", "dbt", "Snowflake", "Kafka", "Spark",
      
        // AI / ML
        "PyTorch", "LangChain", "RAG", "Transformers",
      
        // Cloud
        "AWS",
      
        // DevOps
        "Docker", "Git",
      
        // Analytics
        "Pandas", "Tableau", "Power BI"
      ];
      
    
    
    export const projects = [
    {
    title: "Sepsis-GNN",
    description:
    "Explainable GNN for sepsis mortality prediction (MIMIC-IV), +AUC vs baselines, SHAP explainability, Gradio UI.",
    tech: ["PyTorch", "GNN", "Transformers", "SHAP", "Python"],
    categories: ["Python","Machine Learning"],
    link: "https://github.com/srushtigm25/SepsisNet",
    image: "/images/sepsis-gnn.jpeg"
    },
    {
    title: "DataFlowX (Modern ELT)",
    description:
    "dbt + Snowflake + Airflow + Docker; CI/CD, tests, snapshots, docs; modular models and data quality checks.",
    tech: ["dbt", "Snowflake", "Airflow", "Docker"],
    categories: ["Data Engineering", "AWS"],
    link: "https://github.com/srushtigm25/DataFlowX-Modern-ELT-Pipeline-with-dbt-Snowflake-Airflow",
    image: "/images/dataflowx.jpeg"
    },
    {
    title: "EventFlow (Serverless ETL)",
    description:
    "S3→Lambda→Glue→Athena serverless ingestion with cost dashboards & alerts (CloudWatch).",
    tech: ["AWS S3", "Lambda", "Glue", "Athena"],
    categories: ["Data Engineering", "AWS"],
    link: "https://github.com/srushtigm25/EventFlow-AWS-Serverless-ETL-with-S3-Lambda-Glue-Athena",
    image: "/images/eventflow.jpeg"
    },
    {
    title: "LLM Video Understanding Agent",
    description:
    "Multimodal LLM-RAG pipeline that analyzes raw videos to extract scenes, emotions, narrative beats, and outputs timestamped JSON edit/story plans. Includes Shotstack automation, evaluation harness, and serverless orchestration.",
    tech: ["LLM", "RAG", "LangChain", "memories.ai", "Python", "Shotstack", "S3", "SQS"],
    categories: ["Agentic AI"],
    link: "https://github.com/srushtigm25/LLM-Video-Understanding-Auto-Editing-Agent",
    image: "/images/video-agent.png"
    },
    {
    title: "RAG Application (PDF Q&A System)",
    description:
    "End-to-end Retrieval-Augmented Generation pipeline for PDF insights. Includes PDF parsing, text chunking, OpenAI embeddings, Chroma vector store, LangChain retriever, and a Streamlit UI with Docker support.",
    tech: ["LangChain", "ChromaDB", "OpenAI", "Streamlit", "Docker", "Python"],
    categories: ["Agentic AI"],
    link: "https://github.com/srushtigm25/RAG_Application",
    image: "/images/rag-app.jpeg"
    },
    {
    title: "Chatbot with Google Sheets Integration",
    description:
    "AI chatbot using GPT-4 + Google Sheets API for real-time spreadsheet-aware responses. Built with Tkinter UI, supports live queries, error handling, and full Google API authentication workflow.",
    tech: ["Python", "GPT-4", "Google Sheets API", "gspread", "Tkinter"],
    categories: ["Agentic AI"],
    link: "https://github.com/srushtigm25/Chatbot-with-Google-Sheets-Integration",
    image: "/images/google-sheets-chatbot.jpeg"
      },
      {
        title: "AWS Serverless Event-Driven App",
        description:
          "Event-driven workflow using AWS Lambda, SQS, and DynamoDB. Processes queued messages, triggers Lambda functions, and stores structured results into DynamoDB. Demonstrates scalable serverless microservice design.",
        tech: ["AWS Lambda", "SQS", "DynamoDB", "Python", "Serverless"],
        categories: ["Data Engineering", "AWS"],
        link: "https://github.com/srushtigm25/aws-serverless-event-driven-app",
        image: "/images/aws-serverless.jpeg"
      },
      {
        title: "Cache Controller Design",
        description:
          "Designed a 4-way set associative cache controller in Java with 4KB page size and 4GB main memory. Simulates cache reads, misses, and proper memory placement for CPU data access workflows.",
        tech: ["Java", "Memory Architecture", "Cache Simulation"],
        categories: ["Java","Software Engineering"],
        link: "https://github.com/srushtigm25/Cache-Controller-Design",
        image: "/images/cache-controller.png" // replace with your image
      },
      {
        title: "Stock Trading Python App",
        description:
          "Automated stock trading workflow using Python, featuring scheduling, data polling, order execution logic, and environment-based configuration. Demonstrates real-time task automation and script orchestration.",
        tech: ["Python", "Scheduling", "Automation"],
        categories: ["Python", "Data Engineering"],
        link: "https://github.com/srushtigm25/stock_trading_python_app",
        image: "/images/stock-trading.png"
      },
      {
        title: "Airbnb NYC Price Analysis",
        description:
          "Performed exploratory data analysis on Airbnb NYC listings to understand price variation across neighborhoods, room types, availability, and host activity. Includes statistical insights and visualizations.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
        categories: ["Python","Data Analysis"],
        link: "https://github.com/srushtigm25/Airbnb_Case_Study",
        image: "/images/airbnb.png"
      },
      {
        title: "A/B Testing & Experiment Analysis",
        description:
          "Implemented statistical A/B testing using t-tests, confidence intervals, and effect size measurement. Evaluated two user groups to determine significance and business impact based on performance metrics.",
        tech: ["Python", "Pandas", "SciPy", "Statistics", "Seaborn"],
        categories: ["Python","Data Analysis"],
        link: "https://github.com/srushtigm25/A-B_TESTING_and_ANALYSIS",
        image: "/images/ab-test.png"
      },
      {
        title: "Pandas EDA & Data Cleaning",
        description:
          "Comprehensive practice repository covering essential pandas operations including filtering, aggregations, joins, datetime handling, feature engineering, and exploratory data analysis.",
        tech: ["Python", "Pandas", "EDA"],
        categories: ["Python","Data Analysis"],
        link: "https://github.com/srushtigm25/pandas-eda-and-data-cleaning",
        image: "/images/pandas-eda.png"
      },
      {
        title: "E-commerce Funnel Analysis",
        description:
          "Analyzed multi-category user funnel behavior to uncover friction points, optimize conversion stages, and identify opportunities for improving user engagement and product performance.",
        tech: ["Python", "Pandas", "Seaborn", "EDA"],
        categories: ["Python","Data Analysis"],
        link: "https://github.com/srushtigm25/Ecommerce-Funnel-Analysis",
        image: "/images/ecommerce.png"
      },
      {
        title: "KPI Dashboard",
        description:
          "Developed a performance KPI dashboard to track metrics across business units. Includes trend visualizations, aggregation logic, and automated data refresh pipelines.",
        tech: ["Python", "Pandas", "Visualization"],
        categories: ["Python","Data Analysis"],
        link: "https://github.com/srushtigm25/KPI_Dashboard",
        image: "/images/kpi-dashboard.png"
      },
      {
        title: "K-Anonymity Data Privacy",
        description:
          "Implemented 3-anonymity using generalization and suppression rules to protect sensitive patient data. Ensured k-anonymous compliance while maintaining analytical usefulness.",
        tech: ["Python", "Privacy", "Generalization"],
        categories: [ "Python","Software Engineering"],
        link: "https://github.com/srushtigm25/K-Anonymity",
        image: "/images/k-anonymity.png"
      },
      {
        title: "Image Captioning with CNN-LSTM",
        description:
          "Built an image captioning system using ResNet-152 CNN encoder and LSTM decoder. Trained on image–text pairs using PyTorch, generating natural language captions from images.",
        tech: ["PyTorch", "CNN", "LSTM", "Deep Learning"],
        categories: ["Python","Machine Learning"],
        link: "https://github.com/srushtigm25/Image-captioning-using-deep-learning",
        image: "/images/image-captioning.png"
      },
      {
        title: "Swift Code Practice",
        description:
          "A collection of Swift coding exercises and implementations across algorithms, data structures, and language fundamentals.",
        tech: ["Swift"],
        categories: ["Java","Software Engineering"],
        link: "https://github.com/srushtigm25/swiftcode-srushti",
        image: "/images/swift.png"
      },
      {
        title: "ToDo App (Django REST API)",
        description:
          "RESTful ToDo application built with Django and DRF featuring CRUD APIs, authentication, SQLite database support, and modular backend structure.",
        tech: ["Python", "Django", "DRF", "SQLite"],
        categories: ["Python", "Software Engineering"],
        link: "https://github.com/srushtigm25/ToDo-App--DRF",
        image: "/images/todo-drf.png"
      },
      
    ];
    
    // experience
    export const experience = [
      {
        company: "Code 4 Hood Edu",
        role: "Software Engineer - Data Platform",
        period: "May 2025 – Present",
        logo: "/logos/code 4 hood  (3.5 x 1.5 in).png",
        bullets: [
          "Integrated donor, operational, and program management systems via backend workflow automation, improving reporting accuracy by 35%.",
          "Built API-driven admin dashboards supporting approval workflows, donor tracking, and operational analytics for nonprofit leadership.",
          "Implemented role-based access control and Azure DevOps deployment pipelines, reducing environment inconsistencies across teams.",
          "Automated forms processing, scheduled reporting, and operational validation using Python, cutting manual effort by 50%.",
        ],
      },
      {
        company: "CSU Sacramento",
        role: "Machine Learning Researcher",
        period: "May 2025 – May 2026",
        logo: "/logos/2.png",
        bullets: [
          "Designed and benchmarked GNN and transformer architectures for large-scale clinical mortality prediction, achieving state-of-the-art performance on 18K+ patient records.",
          "Built end-to-end ML pipelines covering data preprocessing, feature engineering, model evaluation, and explainability to support clinical AI research.",
        ],
      },
      {
        company: "CSU Sacramento – Research & Innovation Dept",
        role: "Data Analyst",
        period: "Jan 2024 – May 2025",
        logo: "/logos/2.png",
        bullets: [
          "Built star-schema models and automated quality checks for 100K+ IRB records, improving compliance and reliability.",
          "Created interactive QuickSight/Tableau dashboards, enabling faster data-driven decisions for research teams."
        ],
      },
      {
        company: "CSU Sacramento",
        role: "Machine Learning Teaching Assistant",
        period: "Aug 2024 – May 2025",
        logo: "/logos/2.png", // upload your logo file
        bullets: [
          "Led advanced PyTorch/TensorFlow labs on transformer optimization & fine-tuning, mentoring 60+ students.",
          "Designed curriculum covering cutting-edge generative AI and multimodal LLM advancements with faculty researchers."
        ],
      },
      {
        company: "Siemens Mobility",
        role: "Data Engineer",
        period: "May 2024 – Aug 2024",
        logo: "/logos/1.png",
        bullets: [
          "Automated ETL with Alteryx, built supplier analytics dashboards in Tableau.",
          "Built Tableau dashboards that improved PO visibility and reduced costs by 40%."
        ],
      },
      {
        company: "E6 Data",
        role: "Product Engineer",
        period: "Jun 2022 – Jul 2023",
        logo: "/logos/e6.png", // upload here
        bullets: [
          "Built ELT pipelines with Airflow + dbt + Snowflake for analytics workloads.",
          "Improved query performance & reliability across distributed SQL execution."
        ],
      },
      {
        company: "KPMG",
        role: "Software Engineer",
        period: "Jun 2019 – Jun 2022",
        logo: "/logos/kpmg.jpeg",
        bullets: [
          "Engineered backend automation, integrated SAP/SQL pipelines and SSAS models.",
          "Accelerated reporting by reducing manual work and improving data freshness."
        ],
      },
    ];