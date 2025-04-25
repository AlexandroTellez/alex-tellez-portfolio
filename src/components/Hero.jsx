import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-1/2">
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
                            animate={{ scale: 1.05, opacity: 1 }}
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
                            Junior Software Developer
                        </motion.span>

                        {/* Description */}
                        <motion.p
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
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
                            className="max-w-xl py-6 font-light tracking-tighter text-center shadow-2xl"
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="m-1 flex items-center justify-center gap-6 text-4xl"
                        >
                            <a
                                href="https://github.com/AlexandroTellez"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-gray-300 hover:text-white transition duration-300"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alex-tellez-y/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-blue-400 hover:text-white transition duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="/CV-Alexandro-Tellez.pdf"
                                download
                                rel="noopener noreferrer"
                                aria-label="Download CV"
                                className="text-purple-400 hover:text-white transition duration-300"
                            >
                                <FaFileDownload />
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;