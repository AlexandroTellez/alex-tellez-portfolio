import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 w-full max-w-7xl mx-auto">
            <h2 className="my-20 text-center text-4xl shadow-2xl">
                Work<span className="text-purple-400"> Experience</span>
            </h2>
            <div className="relative mt-16 flex flex-col items-center gap-12">
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/60 via-purple-400/30 to-purple-300/10"
                />
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={`${experience.company}-${experience.year}`}
                        className="relative flex w-full max-w-3xl flex-col gap-4 rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md"
                    >
                        <span className="text-sm tracking-wider text-purple-200">{experience.year}</span>
                        <h6 className="text-xl font-semibold text-neutral-100">
                            {experience.role} - <span className="text-purple-200">{experience.company}</span>
                        </h6>
                        <p className="text-neutral-400">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={`${experience.company}-${techIndex}`}
                                    className="rounded bg-neutral-900/80 px-3 py-1 text-sm font-medium text-purple-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {index < EXPERIENCES.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="absolute left-1/2 bottom-0 h-3 w-3 translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.45)] ring-4 ring-purple-500/30"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
