import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 w-full max-w-7xl mx-auto">
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
                className="my-20 text-center text-4xl shadow-2xl"
            >
                Work<span className="text-blue-400"> Experience</span>
            </motion.h2>
            <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
                {EXPERIENCES.map((experience, index) => (
                    <div className="mb-8 flex flex-col lg:flex-row px-4 mx-auto items-center gap-4">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 lg:p-6"
                        >
                            <div className="w-full max-w-xl mx-auto text-left">
                                <p className="text-md text-blue-100">{experience.year}</p>
                            </div>
                        </motion.div>



                        {/* Detalles */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-3/4 max-w-3xl"
                        >
                            <h6 className="mb-2 text-xl font-semibold text-neutral-100">
                                {experience.role} - <span className=" text-blue-200">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Experience;
