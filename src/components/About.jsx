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
                            Hey, I'm <strong>Alex Tellez</strong>. I’m a <strong>Python Engineer</strong> focused on building secure, scalable backends and AI-powered features that solve real problems. I bridge engineering with product impact—turning ideas into production-ready services.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            I specialize in <strong>Python</strong> and <strong>FastAPI</strong>, designing <strong>REST APIs</strong> with <strong>JWT</strong> and <strong>Domain-Driven Design (DDD)</strong>. I work with <strong>PostgreSQL</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>, <strong>DynamoDB</strong> and <strong>OpenSearch</strong> (vector DB) to deliver robust data layers and search.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            In AI, I build LLM/NLP pipelines using <strong>LangGraph</strong>, <strong>OpenAI embeddings (ADA)</strong> and <strong>BERT</strong>, including RAG systems for document Q&amp;A. I follow modern <strong>MLOps</strong> practices with <strong>MLflow</strong> for model versioning and <strong>Pytest</strong> for reliable testing.
                        </p>

                        <p className="my-2 max-w-xl py-2">
                            For deployment, I use <strong>AWS</strong> (Lambda, AppRunner, S3, CloudFormation, CloudWatch/CloudTrail) and containerization with <strong>Docker/Podman</strong> and <strong>Docker Compose</strong>. I care about clean code and quality: <strong>PEP8</strong>, <strong>pre-commit</strong>, Git best practices and <strong>SonarQube</strong>.
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
                            </a>
                            .
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
