import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl shadow-2xl transform transition
                duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:text-white">
                <span className="text-blue-400">Featured </span>Projects
            </h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className={`mb-12 flex flex-wrap items-center justify-center gap-6 lg:gap-12 
                            ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    >
                        {/* Imagen*/}
                        <div className="w-full lg:w-1/3 flex justify-center lg:max-w-[300px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded shadow-lg w-full h-auto object-cover lg:max-h-[300px]"
                            />
                        </div>
                        
                        {/* Description */}
                        <div className="w-full max-w-xl lg:w-2/3">
                            <h6 className="mb-2 font-semibold text-neutral-100 text-xl">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition"
                                >
                                    <FaGithub className="text-lg" />
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
