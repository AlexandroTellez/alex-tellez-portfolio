import { PROJECTS } from '../constants';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 w-full max-w-7xl mx-auto px-4 py-10">
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
                <span className="text-purple-400">Feature</span> Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className={`mb-12 flex flex-wrap items-center justify-center gap-6 lg:gap-12
                            ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    >
                        {/* Image*/}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
                            transition={{ duration: 1 }}
                            className="w-full sm:max-w-[400px] md:max-w-[400px] lg:w-1/3 flex justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className=" border border-purple-500/25 rounded-2xl object-cover max-w-full "
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-2/3">
                            <h6 className="mb-2 font-semibold text-neutral-100 text-xl">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-gray-500 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-gray-700"
                                    >
                                        <FaGithub className="text-lg" />
                                        GitHub
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-emerald-700"
                                    >
                                        <FaGlobe className="text-lg" />
                                        Live Demo
                                    </a>

                                )}
                            </div>

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
