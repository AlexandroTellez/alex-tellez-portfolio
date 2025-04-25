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
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                height={150}
                                width={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-neutral-100">{project.title}</h6>
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
    )
}

export default Projects;

