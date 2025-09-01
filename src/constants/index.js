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
    role: "Java Full Stack Developer",
    company: "Davara & Davara Asesores Jurídicos S.L. (LegalTech)",
    description: `Contributed to web applications focused on document management and GDPR/LOPDGDD compliance. Built responsive interfaces with React, Next.js, Tailwind CSS and Ant Design. Implemented authentication and access control with FastAPI and JWT. Designed reusable components and scalable structures, collaborating on endpoints and data models with MongoDB under agile workflows.`,
    technologies: ["React", "Next.js", "Tailwind CSS", "Ant Design", "TypeScript", "FastAPI", "JWT", "MongoDB", "Agile", "Git/GitHub"],
  },
  {
    year: "July 2024 - October 2024",
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

{/*
      {
      id: "cloud",
      category: "Cloud & Services",
      skills: [ "MongoDB Atlas"],
    },
  */}


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
  {
    title: "AlteyaHR - Employee Management System",
    image: project3,
    description:
      "A full stack and responsive web application for managing employee records. Built with Angular and Spring Boot, it allows users to add, update, delete, and search employees, with persistent data storage in MySQL. The project is currently in development and features a clean UI and modern design components.",
    githubUrl: "https://github.com/AlexandroTellez/AlteyaHR",
    technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Render", "Vercel"]
  },
  /*
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
  address: "Carabanchel Alto, Madrid (28044), Spain",
  phoneNo: "+34 603 16 36 56",
  email: "alextellezyanes@gmail.com",
};
