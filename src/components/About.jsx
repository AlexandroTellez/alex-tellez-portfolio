import profilePic from "../assets/AlexTellezProfile.png";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ scale: 0.95, opacity: 0.9 }}
                animate={{ scale: 1.2, opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    color: "#fff",
                    boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                transition={{
                    default: { duration: 1.2, ease: "easeOut" },
                    hover: { duration: 0.5 },
                }}
                className="my-20 text-center text-4xl shadow-2xl "
            >
                <span className="text-neutral-400">About </span>Me
            </motion.h2>

            <div className="flex flex-wrap mx-auto px-4">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img
                            src={profilePic}
                            alt="Alex Tellez"
                            className="rounded-2xl object-cover max-w-full border border-gray-400/20"
                        />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex flex-col items-center text-left lg:items-start lg:text-left p-3 px-2">
                        <p className="my-2 max-w-xl py-2">
                            Hey, I'm <strong>Alex Tellez</strong>. I’m a <strong>Python Engineer</strong> with professional experience in <strong>LegalTech, healthcare, and freelance projects</strong>. I focus on building scalable backends, AI-driven systems, and digital solutions that connect technical depth with real business impact.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            At <strong>Davara & Davara</strong>, I worked on LegalTech platforms, developing <strong>FastAPI</strong> services with <strong>JWT</strong> authentication and integrating <strong>LangGraph</strong> and <strong>OpenAI models</strong> for document workflows. For private clients, I delivered solutions such as an <strong>AI-powered document analyzer</strong>, a <strong>task management API</strong>, and an <strong>NLP chatbot</strong>, applying <strong>DDD</strong>, relational and NoSQL databases, and modern MLOps with <strong>MLflow</strong> and <strong>Pytest</strong>.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            In healthcare, I collaborated with <strong>Institute Dental Espinassi</strong> to design APIs and landing systems that centralized patient records and supported marketing campaigns using <strong>FastAPI</strong>, <strong>MySQL</strong>, <strong>React</strong> and <strong>Docker</strong>.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            My academic background includes a <strong>Higher Technician in Web Application Development (DAW)</strong> at Cesur Formación, where I built <strong>TaskProX</strong> (FastAPI, React, MongoDB, JWT) as a capstone project. I also hold a <strong>B2 Aptis ESOL certification</strong> (C1 in listening) and have completed technical training in <strong>JavaScript/Node.js</strong>, <strong>Google Data Analytics</strong>, and <strong>Power BI</strong>.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            Beyond client work and studies, I’ve built personal projects such as my <strong>Developer Portfolio</strong>, <strong>TaskProX</strong>, and an <strong>AI Document Analyzer</strong>, integrating <strong>FastAPI</strong>, <strong>React</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and deployment on <strong>Render</strong> and <strong>Vercel</strong>.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            Explore my projects on{" "}
                            <a
                                href="https://github.com/AlexandroTellez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-blue-500"
                            >
                                GitHub
                            </a>{" "}
                            or connect with me on{" "}
                            <a
                                href="https://www.linkedin.com/in/alex-tellez-y/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-blue-500"
                            >
                                LinkedIn
                            </a>
                            . Curious to know more about me? Feel free to{" "}
                            <a
                                href="/CV-Alexandro-Tellez.pdf"
                                download
                                className="text-purple-300 hover:text-blue-500"
                            >
                                download my CV
                            </a>{" "}
                            and{" "}
                            <a
                                href="/Cover-letter-Alexandro-Tellez.pdf"
                                download
                                className="text-purple-300 hover:text-blue-500"
                            >
                                cover letter
                            </a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
