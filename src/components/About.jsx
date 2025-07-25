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
                            Hey, I'm <strong>Alex Tellez</strong>. I don’t just build web applications, I'm focused on crafting digital experiences that solve real-world problems. From frontend to backend, I’ve learned to bridge the gap between user needs and business goals.
                        </p>
                        <p className="my-2 max-w-xl py-2">
                            I specialize in <strong>Angular</strong>, <strong>React</strong> and <strong>Spring Boot,</strong> building full stack applications with strong UI and backend logic. I also have experience using <strong>FastAPI</strong> and
                            databases like <strong>MongoDB</strong>, <strong>PostgreSQL</strong> and <strong>MySQL</strong>. My Higher National Degree in Web Application Development gave me the foundation, but real growth came through hands-on projects, curiosity, and continuous learning.
                        </p>
                        <p className="my-2 max-w-xl py-2">
                            But beyond tech stacks, what really drives me is the thrill of creating and solving problems, seeing a feature come to life, collaborating on meaningful projects, and building things that matter.
                        </p>
                        <p className="my-2 max-w-xl py-2">
                            I also bring a background in business, which helps me approach software not only as a technical solution but as a strategic tool. This perspective fuels my creativity and helps me design products that are not just functional but aligned with business impact and user value.
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
                            </a>. Curious to know more about me? Feel free to{" "}
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
