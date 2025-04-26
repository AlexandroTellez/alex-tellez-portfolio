import profilePic from "../assets/AlexTellezProfile.png"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ scale: 0.95, opacity: 0.9 }}
                animate={{ scale: 1.2, opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    color: "#fff",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{
                    default: { duration: 1.2, ease: "easeOut" },
                    hover: { duration: 0.5 }
                }}
                className="my-20 text-center text-4xl shadow-2xl "
            >
                About<span className="text-neutral-400"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={profilePic}
                            alt="Alex Tellez"
                            className="rounded-2xl object-cover max-w-full" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-7 ">Hi, I’m Alex Tellez, a passionate and results-driven
                            Junior Software Developer. With hands-on experience in building dynamic and scalable web applications.
                            I specialize in technologies like React, Next.js, Angular, FastAPI, and Spring Boot.
                            I have developed proficiency in working with databases such as MySQL, PostgreSQL, and MongoDB,
                            and I’m comfortable with deployment strategies using Docker and AWS.
                            <span>
                                <p className="my-2 max-w-xl  ">
                                    I’m committed to creating efficient, maintainable, and user-centric solutions
                                    that not only meet but exceed business needs. I believe in continuous learning
                                    and strive to deliver high-quality code that drives business growth and enhances
                                    user experiences.
                                </p>
                            </span>
                            <span>
                                <p className="my-2 max-w-xl  ">
                                    On my journey to becoming a full-stack developer,
                                    I focus on solving real-world problems through clean, optimized code.
                                    If you want to see more of my work or connect, feel free to visit
                                    my <a
                                        href="https://github.com/AlexandroTellez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="text-blue-300 hover:text-blue-700"
                                    >GitHub</a>
                                    {""} and{" "}
                                    <a
                                        href="https://www.linkedin.com/in/alex-tellez-y/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="text-blue-300 hover:text-blue-700"
                                    >LinkedIn.</a>
                                    {" "}Additionally, If you're interested in my experience, you can also {" "}
                                    <a
                                        href="/CV-Alexandro-Tellez.pdf"
                                        download
                                        rel="noopener noreferrer"
                                        aria-label="Download CV"
                                        className="text-blue-300 hover:text-blue-700"
                                    >download my CV</a>
                                    {" "} for a detailed overview of my skills and projects. {" "}
                                </p>
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
