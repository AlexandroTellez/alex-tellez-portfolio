import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
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
                <span className="text-blue-400">Path</span>way
            </motion.h2>

            <div className="mt-16 flex flex-col gap-12">
                {EDUCATION.map((education, index) => (
                    <motion.div
                        key={`${education.institution}-${education.year}`}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`flex flex-col gap-4 p-6 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl ${
                            index % 2 === 0 ? "self-start" : "self-end"
                        } w-full max-w-3xl`}
                    >
                        <span className="text-sm tracking-wider text-blue-200">{education.year}</span>
                        <h6 className="text-xl font-semibold text-neutral-100">
                            {education.degree}
                        </h6>
                        <p className="text-base text-blue-200">{education.institution}</p>
                        <p className="text-neutral-400">{education.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {education.highlights.map((highlight, highlightIndex) => (
                                <span
                                    key={`${education.institution}-${highlightIndex}`}
                                    className="rounded bg-neutral-900/80 px-3 py-1 text-sm font-medium text-blue-400"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
