import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/Taskprox.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

export const HERO_CONTENT = "Software development is not just a job; it’s a passion that drives innovation.";

export const ABOUT_TEXT = `I am a results-driven Python Engineer with experience in building dynamic web applications using React, Next.js, Angular, FastAPI, and Spring Boot. I have worked with databases such as MySQL, PostgreSQL, and MongoDB, as well as deploying applications using Docker and AWS. My goal is to create efficient, scalable, and reliable solutions that help businesses grow and improve user experiences. I am committed to delivering high-quality results and adding value to every project I work on.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - June 2025",
    role: "Python Engineer",
    company: "Davara & Davara Asesores Jurídicos S.L. (LegalTech)",
    description: `Contributed to LegalTech solutions for document management and GDPR/LOPDGDD compliance. Developed multi-agent RAG pipelines, authentication with FastAPI and JWT, and scalable backend architectures under DDD. Integrated Generative AI (LangGraph, OpenAI) and NLP (BERT, ADA) with MLOps practices (MLflow, Pytest) and AWS deployments.`,
    technologies: ["Python", "FastAPI", "JWT", "MongoDB", "LangGraph", "OpenAI (Azure)", "BERT", "ADA embeddings", "MLflow", "Pytest", "AWS (Lambda, AppRunner, S3, CloudFormation)", "Docker", "Podman", "Agile", "Git/BitBucket", "SonarQube"],
  },
  {
    year: "March 2022 - February 2025",
    role: "Administrative Assistant & Data Analyst",
    company: "Venechar Cocinas",
    description: `Supported production and orders department. Built interactive dashboards and automated reports with Power BI, Excel and Power Query. Monitored KPIs to improve decision-making and optimized workflows through task automation and data structuring.`,
    technologies: ["Power BI", "Excel (Advanced)", "Power Query", "Data Analysis", "Process Automation"],
  },
  {
    year: "September 2023 - June 2024",
    role: "Python Engineer (Freelance)",
    company: "Private Clients",
    description: `Delivered scalable Python solutions for private clients, including an AI-powered document analyzer, a task management API, and an NLP chatbot for legal queries. Focused on FastAPI backends, secure authentication, AI/NLP integrations, and cloud-ready deployments.`,
    technologies: ["Python", "FastAPI", "JWT", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "OpenSearch", "LangGraph", "OpenAI (Azure)", "BERT", "ADA embeddings", "MLflow", "Pytest", "AWS (Lambda, AppRunner, S3, CloudFormation, CloudWatch, CloudTrail)", "Docker", "Podman", "Docker Compose", "Git/BitBucket", "SonarQube", "Agile"],
  },
  {
    year: "October 2021 - March 2022",
    role: "Python Engineer (Freelance)",
    company: "Institute Dental Espinassi",
    description: `Developed RESTful APIs with FastAPI and JWT for client data management using MySQL. Built responsive landing pages with React to support marketing campaigns and lead capture. Ensured secure handling and centralized storage of patient records under GDPR compliance.`,
    technologies: ["Python", "FastAPI", "JWT", "MySQL", "React", "Docker", "REST APIs", "Agile", "Git/GitHub"],
  },
];
export const EDUCATION = [

  {
    year: "2025 (Current)",
    degree: "Aptis ESOL — Overall B2 (CEFR)",
    institution: "British Council",
    description:
      "English proficiency certification demonstrating professional working proficiency for technical contexts and meetings.",
    highlights: [
      "Top-scoring skill among core areas: Listening — C1 (42/50)",
      "Final Scale Score: 157 (Overall B2)",
      "Test date: 28/03/2025 — Madrid"
    ],
  },
  {
    year: "2023 – 2025",
    degree: "Higher Technician in Web Application Development (DAW)",
    institution: "Cesur Formación (Madrid, Spain)",
    description:
      "Two-year vocational programme focused on frontend, backend, and databases, delivered online with hands-on, project-based learning.",
    highlights: [
      "Client- and server-side development (JavaScript, HTML5/CSS3, web standards; backend fundamentals)",
      "Databases & data modeling (SQL and NoSQL); REST APIs & web services",
      "UI design, accessibility, deployment basics (DevOps/CI-CD) and version control with Git",
      "Capstone & internship (FCT). Personal project: TaskProX (FastAPI, React, MongoDB, JWT)"
    ],
  },
  {
    year: "2023",
    degree: "JavaScript (ES9), HTML5, CSS3 & Node.js — From Scratch",
    institution: "Udemy",
    description:
      "Modern web development foundations across frontend (JavaScript, HTML, CSS) and backend (Node.js/Express) with hands-on projects.",
    highlights: [
      "Modern JavaScript (ES6–ES9): let/const, arrow functions, destructuring, modules, promises & async/await",
      "DOM manipulation, events, forms; working with JSON and basic API consumption (fetch)",
      "Responsive layouts with Flexbox & CSS Grid; reusable utilities/components",
      "Node.js & Express fundamentals: routing, middleware, and RESTful APIs",
      "Project-based learning: building end-to-end mini-apps from UI to simple backend"
    ],
  },
  {
    year: "2023",
    degree: "Foundations: Data, Data, Everywhere (Google Data Analytics)",
    institution: "Coursera",
    description:
      "Fundamentals of data analytics: role of the analyst, data ecosystem, analytical thinking and data-driven decision making.",
    highlights: [
      "Data lifecycle vs. analysis process (Ask, Prepare, Process, Analyze, Share, Act).",
      "Formulation of SMART questions and definition of metrics/KPIs.",
      "Data ethics, privacy and bias.",
      "Data types and formats; data quality control.",
      "Overview of tools: spreadsheets, SQL, R and Tableau (introductory level).",
    ],
  },
  {
    year: "2023",
    degree: "Power BI: Data Analysis and Business Intelligence",
    institution: "Udemy",
    description:
      "Data extraction and transformation (Power Query), star-schema modeling, DAX for metrics, and professional dashboard/report design with publishing to Power BI Service.",
    highlights: [
      "Connect to multiple sources and perform ETL with Power Query (Merge/Append, custom columns).",
      "Data modeling and relationships; best practices (Star Schema).",
      "Essential and advanced DAX: CALCULATE, FILTER, SUMX, variables; row and filter context.",
      "Time intelligence: YTD, MTD, YoY and period comparisons.",
      "Effective visualizations: drill-down/through, tooltips, bookmarks, slicers.",
      "Publishing and sharing in Power BI Service; Row-Level Security (RLS) and scheduled refresh."
    ],
  },
];


export const TECHNICAL_SKILLS = {
  title: "Technical Skills",
  sections: [
    {
      id: "programming",
      category: "Programming Languages",
      skills: ["Python", "FastAPI", "SQL", "Bash"],
    },
    {
      id: "backend",
      category: "Backend / APIs",
      skills: [
        "FastAPI",
        "REST APIs",
        "JWT",
        "Domain-Driven Design (DDD)"
      ],
    },
    {
      id: "databases",
      category: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "RDS",
        "OpenSearch (Vector DB)"
      ],
    },
    {
      id: "ai-mlops",
      category: "AI / NLP / MLOps",
      skills: [
        "Generative AI",
        "LangGraph",
        "OpenAI models (Azure)",
        "NLP (BERT, ADA embeddings)",
        "MLflow",
        "MLOps lifecycle",
        "Pytest (unit testing)"
      ],
    },
    {
      id: "cloud-deployment",
      category: "Cloud & Deployment",
      skills: [
        "AWS (Lambda, AppRunner, S3, CloudFormation, CloudWatch, CloudTrail)",
        "Docker",
        "Podman",
        "Docker Compose",
        "Localstack"
      ],
    },
    {
      id: "tools-platforms",
      category: "Tools & Platforms",
      skills: [
        "Git",
        "BitBucket",
        "Pre-commit",
        "Git best practices",
        "SonarQube",
        "VS Code"
      ],
    },
    {
      id: "good-practices",
      category: "Good Practices",
      skills: ["PEP8", "Clean Code", "Scalable architectures"],
    },
    {
      id: "languages",
      category: "Languages",
      skills: ["Spanish (Native)", "English (B2 Certificate)"],
    },
    {
      id: "pluses",
      category: "Pluses",
      skills: ["Bedrock", "SageMaker", "LangGraph", "LangFuse", "Kubernetes"],
    },

  ],
};


/*
      {
      id: "cloud",
      category: "Cloud & Services",
      skills: [ "MongoDB Atlas"],
    },
  */


export const PROJECTS = [
  {
    title: "Alex Tellez – Personal Developer Portfolio",
    image: project1,
    description:
      "Personal portfolio built with React and TailwindCSS, integrated with a FastAPI + PostgreSQL backend. Features a dynamic blog system and an AI-powered search bar using OpenAI embeddings. Deployed with Docker and AWS AppRunner for scalability.",
    githubUrl: "https://github.com/AlexandroTellez/alex-tellez-portfolio",
    liveUrl: "https://alextellezy.com",
    technologies: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "OpenAI embeddings", "Docker", "AWS AppRunner"]
  },
  {
    title: "TaskProX - Project & Task Manager",
    image: project2,
    description:
      "Complete and responsive web application for collaborative project and task management. Features JWT authentication, role-based permissions, calendar view, Kanban board, file upload, dark/light mode, and an AI-powered chatbot built with LangGraph + OpenAI on Azure.",
    githubUrl: "https://github.com/AlexandroTellez/TaskProX",
    liveUrl: "https://task-pro-x.vercel.app/login",
    technologies: ["FastAPI", "MongoDB", "React", "TailwindCSS", "Ant Design", "LangGraph", "OpenAI (Azure)", "Docker", "AWS"]
  },
  /*
  {
    title: "AlteyaHR - Employee Management System",
    image: project3,
    description:
      "A full stack and responsive web application for managing employee records. Built with Angular and Spring Boot, it allows users to add, update, delete, and search employees, with persistent data storage in MySQL. The project is currently in development and features a clean UI and modern design components.",
    githubUrl: "https://github.com/AlexandroTellez/AlteyaHR",
    technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Render", "Vercel"]
  },
  
{
  title: "Social-Media Platform",
  image: project4,
  description:
    "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  githubUrl: "https://github.com/AlexandroTellez",
  technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"]
},
{
  title: "Quiz App",
  image: project5,
  description:
    "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  githubUrl: "https://github.com/AlexandroTellez",
  technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"]
}
*/
];


export const CONTACT = {
  address: "Madrid, Spain",
  phoneNo: "+34 603 16 36 56",
  email: "alextellezyanes@gmail.com",
};




