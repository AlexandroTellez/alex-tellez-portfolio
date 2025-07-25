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
    year: "October 2021 - Present",
    role: "Freelance Java Full Stack Developer | Web Applications & Scalable Solutions",
    company: "Independent Projects",
    description: `Designed and built several full stack web applications as part of personal learning and development. Gained hands-on experience with modern frontend and backend frameworks, implementing responsive interfaces and robust APIs. These projects helped solidify my understanding of scalable architecture, deployment strategies, and effective state and data management.`,
    technologies: ["React", "Next.js", "Angular", "Spring Boot", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Docker"],
  },
  {
    year: "March 2025 - June 2025",
    role: "Full Stack Developer Intern",
    company: "Davara & Davara Asesores Jurídicos S.L.",
    description: `Focused on building and maintaining frontend interfaces using React.js, Next.js, and Tailwind CSS, based on Figma designs. Participated in the initial configuration of the project environment and tooling. Contributed to the backend using FastAPI and MongoDB, implementing RESTful endpoints and assisting in API integration.`,
    technologies: ["Python", "FastAPI", "MongoDB", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  /*{
    year: "May 2021 - March 2022",
    role: "Digital Marketing Specialist",
    company: "Freelance",
    description: `Planned and executed digital campaigns for healthcare clients, focusing on Facebook Ads, email marketing, and sales funnels. Improved data analysis, automation, and client communication through performance-driven strategies.`,
    technologies: ["Facebook Ads", "Email Marketing", "Automation", "Data Analysis", "Digital Tools"]
  },*/
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
  technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL","Render", "Vercel"]
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
  address: "Méntrida, Toledo, Spain",
  phoneNo: "+34 603 16 36 56",
  email: "alextellezyanes@gmail.com",
};
