import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelopeOpenText } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">

                        {/* Name */}
                        <motion.h1
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
                            className="pb-6 text-6xl font-thin tracking-tight lg:mt:16 lg:text-7xl shadow-2xl"
                        >
                            Alex Tellez
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.span
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
                            className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                            bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent
                            shadow-xl"
                        >
                            Full Stack Developer
                        </motion.span>
                        {/* Specialisation - Technologies */}
                        {/* <motion.p
                            initial={{ scale: 0.95, opacity: 0.9 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            whileHover={{
                                scale: 1.05,
                                color: "#fff",
                                boxShadow:
                                    "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                            }}
                            transition={{
                                default: { duration: 1.2, ease: "easeOut" },
                                hover: { duration: 0.4 },
                            }}
                            className="my-3 px-2 py-1 text-white text-lg sm:text-xl lg:text-2xl font-medium tracking-tight shadow-md"
                        >
                            | React - Angular - FastAPI - Spring Boot |
                        </motion.p> */}

                        {/* Description */}
                        <motion.p
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            whileHover={{
                                scale: 1.03,
                                color: "#fff",
                                boxShadow:
                                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                            }}
                            transition={{
                                default: { duration: 1.3, ease: "easeOut" },
                                hover: { duration: 0.5 },
                            }}
                            className="max-w-xl py-6 font-light tracking-tighter text-center"
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="mt-6 flex flex-wrap justify-center gap-3 text-base"
                        >
                            <a
                                href="https://github.com/AlexandroTellez"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="inline-flex items-center gap-2 rounded-lg bg-gray-500 px-5 py-2 font-medium text-white shadow-md transition hover:bg-gray-700"
                            >
                                <FaGithub className="text-lg" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alex-tellez-y/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2 font-medium text-white shadow-md transition hover:bg-blue-600"
                            >
                                <FaLinkedin className="text-lg" />
                                LinkedIn
                            </a>
                            <a
                                href="/CV-Alexandro-Tellez.pdf"
                                download
                                rel="noopener noreferrer"
                                aria-label="Download CV"
                                className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-5 py-2 font-medium text-white shadow-md transition hover:bg-purple-600"
                            >
                                <FaFileDownload className="text-lg" />
                                Tech Resume
                            </a>
                            <a
                                href="/Cover-letter-Alexandro-Tellez.pdf"
                                download
                                rel="noopener noreferrer"
                                aria-label="Download Cover Letter"
                                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2 font-medium text-white shadow-md transition hover:bg-indigo-600"
                            >
                                <FaEnvelopeOpenText className="text-lg" />
                                Cover Letter
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;