import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/Taskprox.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

export const HERO_CONTENT = "Software development is not just a job; it’s a passion that drives innovation.";


export const ABOUT_TEXT = `I am a results-driven Full Stack Developer with experience in building dynamic web applications using React, Next.js, Angular, FastAPI, and Spring Boot. I have worked with databases such as MySQL, PostgreSQL, and MongoDB, as well as deploying applications using Docker and AWS. My goal is to create efficient, scalable, and reliable solutions that help businesses grow and improve user experiences. I am committed to delivering high-quality results and adding value to every project I work on.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - July 2025",
    role: "Full Stack Developer",
    company: "Davara & Davara Asesores Jurídicos S.L. (LegalTech)",
    description: `Contributed to web applications focused on document management and GDPR/LOPDGDD compliance. Built responsive interfaces with React, Next.js, Tailwind CSS and Ant Design. Implemented authentication and access control with FastAPI and JWT. Designed reusable components and scalable structures, collaborating on endpoints and data models with MongoDB under agile workflows.`,
    technologies: ["React", "Next.js", "Tailwind CSS", "Ant Design", "TypeScript", "FastAPI", "JWT", "MongoDB", "Agile", "Git/GitHub"],
  },
  {
    year: "July 2024 - September 2024",
    role: "Java Full Stack Developer (Freelance)",
    company: "LiftEngine (Digital Marketing)",
    description: `Developed scalable applications supporting digital marketing campaigns. Built responsive UIs with Angular and TypeScript. Implemented RESTful APIs with Spring Boot integrated with MySQL, PostgreSQL, and MongoDB. Managed secure authentication with Spring Security and JWT. Deployed solutions with Docker and AWS (EC2, S3, CloudFront), ensuring scalability and global performance.`,
    technologies: ["Angular", "TypeScript", "Spring Boot", "Spring Security", "JWT", "MySQL", "PostgreSQL", "MongoDB", "Docker", "AWS (EC2, S3, CloudFront)"],
  },
  {
    year: "September 2023 - June 2024",
    role: "Java Full Stack Developer (Freelance)",
    company: "Private Clients",
    description: `Delivered portfolio websites and a barbershop booking app. Created responsive UIs with Angular, React, TypeScript, Tailwind CSS and Vite. Implemented authentication with Spring Security and JWT. Developed scalable backends with Spring Boot, PostgreSQL and MongoDB. Deployed with Docker, Vercel and Render. Collaborated using GitHub/GitLab and agile practices.`,
    technologies: ["Angular", "React", "TypeScript", "Tailwind CSS", "Vite", "Spring Boot", "FastAPI", "PostgreSQL", "MongoDB", "Spring Security", "JWT", "Docker", "Vercel", "Render", "GitHub", "GitLab"],
  },
  {
    year: "March 2022 - February 2025",
    role: "Administrative Assistant & Data Analyst",
    company: "Venechar Cocinas",
    description: `Supported production and orders department. Built interactive dashboards and automated reports with Power BI, Excel and Power Query. Monitored KPIs to improve decision-making and optimized workflows through task automation and data structuring.`,
    technologies: ["Power BI", "Excel (Advanced)", "Power Query", "Data Analysis", "Process Automation"],
  },
  {
    year: "October 2021 - March 2022",
    role: "Java Full Stack Developer (Freelance)",
    company: "Institute Dental Espinassi",
    description: `Developed SPAs with React to support marketing and lead generation. Built responsive landing pages optimized for conversion. Implemented REST APIs with Spring Boot and MySQL, applying secure data handling practices. Collaborated directly with the clinic to deliver targeted digital solutions that improved client acquisition.`,
    technologies: ["React", "Spring Boot", "MySQL", "REST APIs", "Responsive Web Design", "Git", "GitHub"],
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
      id: "frontend",
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "TailwindCSS",
        "Ant Design",
        "Framer Motion",
        "HTML",
        "CSS",
        "JavaScript"
      ],
    },
    {
      id: "backend",
      category: "Backend",
      skills: [
        "FastAPI",
        "Python",
        "Java",
        "Spring Boot",
        "JWT",
        "REST APIs"
      ],
    },
    {
      id: "databases",
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "MongoDB Atlas"],
    },
    {
      id: "tools",
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "IntelliJ",
        "Figma",
        "TurboRepo",
        "MongoDB Compass"
      ],
    },
    {
      id: "deployment",
      category: "Deployment",
      skills: ["Docker", "Vercel", "Render"],
    },
    {
      id: "languages",
      category: "Languages",
      skills: ["Spanish (native)", "English (B2 certificate)"],
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
      "Personal portfolio built with React, Tailwind CSS and Framer Motion — fast, responsive, and animated. Designed to highlight my projects and tech stack, and deployed on Vercel for seamless performance.",
    githubUrl: "https://github.com/AlexandroTellez/alex-tellez-portfolio",
    liveUrl: "https://alextellezy.com",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"]
  },
  {
    title: "TaskProX - Project & Task Manager",
    image: project2,
    description:
      "A complete and responsive web application for managing tasks and collaborative projects. Includes user authentication with JWT, role-based permissions, calendar view, Kanban board, file attachments, and dark/light mode support.",
    githubUrl: "https://github.com/AlexandroTellez/TaskProX",
    liveUrl: "https://task-pro-x.vercel.app/login",
    technologies: ["FastAPI", "MongoDB", "React", "Tailwind CSS", "Ant Design", "Render", "Vercel"]
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




