import { TECHNICAL_SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="technical_skills" className="text-white max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECHNICAL_SKILLS.sections.map(({ id, category, skills }, index) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + index * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-blue-400/30"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-blue-300">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-blue-400/10 text-sm text-blue-200 px-3 py-1 rounded-full border border-blue-300/20 hover:bg-blue-400/20 transition"
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
