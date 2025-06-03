import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/Taskprox.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

export const HERO_CONTENT = `"Software development is not just a job; it’s a passion that drives innovation."`;

export const ABOUT_TEXT = `I am a results-driven Junior Web Developer with experience in building dynamic web applications using React, Next.js, Angular, FastAPI, and Spring Boot. I have worked with databases such as MySQL, PostgreSQL, and MongoDB, as well as deploying applications using Docker and AWS. My goal is to create efficient, scalable, and reliable solutions that help businesses grow and improve user experiences. I am committed to delivering high-quality results and adding value to every project I work on.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - Present",
    role: "Junior Web Developer Intern",
    company: "Davara & Davara Asesores Jurídicos S.L.",
    description: `Focused on building and maintaining frontend interfaces using React.js, Next.js, and Tailwind CSS, based on Figma designs. Participated in the initial configuration of the project environment and tooling. Contributed to the backend using FastAPI and MongoDB, implementing RESTful endpoints and assisting in API integration.`,
    technologies: ["Python", "FastAPI", "MongoDB", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    year: "September 2024 - Present",
    role: "Web Developer",
    company: "Freelance",
    description: `Developed and deployed several freelance full stack web applications. Delivered polished, responsive user interfaces while implementing robust backends. Ensured reliable performance and maintainability, adapting to client needs and project goals with agility and precision.`,
    technologies: ["React", "Next.js", "Angular", "Spring Boot", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS"],
  },
  /*{
    year: "May 2021 - March 2022",
    role: "Digital Marketing Specialist",
    company: "Freelance",
    description: `Planned and executed digital campaigns for healthcare clients, focusing on Facebook Ads, email marketing, and sales funnels. Improved data analysis, automation, and client communication through performance-driven strategies.`,
    technologies: ["Facebook Ads", "Email Marketing", "Automation", "Data Analysis", "Digital Tools"]
  },*/
];

export const PROJECTS = [
  {
    title: "Developer Portfolio",
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
    websiteURL: "https://task-pro-x.vercel.app/login",
    technologies: ["FastAPI", "React", "MongoDB", "Tailwind CSS", "Ant Design", "Day.js"],
  },
  /*
    {
      title: "Employee Management System",
      image: project3,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.", //change the description when you finish the project.
      githubUrl: "https://github.com/AlexandroTellez", // change the url when you upload the project to github.
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"], //change the technologies when you finish the project.
    },
    {
      title: "Social-Media Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.", //change the description when you finish the project.
      githubUrl: "https://github.com/AlexandroTellez", // change the url when you upload the project to github.
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"], //change the technologies when you finish the project.
    },
    {
      title: "Quiz App",
      image: project5,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.", //change the description when you finish the project.
      githubUrl: "https://github.com/AlexandroTellez", // change the url when you upload the project to github.
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"], //change the technologies when you finish the project.
    },
  ]; */
];

export const CONTACT = {
  address: "Méntrida, Toledo, Spain",
  phoneNo: "+34 603 16 36 56",
  email: "alextellezyanes@gmail.com",
};
