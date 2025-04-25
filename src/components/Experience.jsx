import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <h2 className="my-20 text-center text-4xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white">
                Work<span className="text-purple-400"> Experience</span>
            </h2>
            <div className="">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 lg:p-6">
                            <p className="mb-2 text-sm text-blue-100">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-neutral-100">
                                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                                                text-purple-500 whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
