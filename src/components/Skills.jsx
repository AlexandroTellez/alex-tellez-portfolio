import { TECHNICAL_SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="technical_skills" className="text-white w-full max-w-7xl mx-auto px-4 py-10">
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
                Technical <span className="text-purple-400">Skills</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECHNICAL_SKILLS.sections.map(({ id, category, skills }, index) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + index * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-400/30"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-purple-400/10 text-sm text-white px-3 py-1 rounded-full border border-purple-300/20 hover:bg-purple-400/20 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
