import profilePic from "../assets/AlexTellezProfile.png"
import { ABOUT_TEXT } from "../constants"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white">
                About
                <span className="text-blue-300"> Me </span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={profilePic}
                            alt="Alex Tellez"
                            className="rounded-2xl object-cover max-w-full" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-7 ">Hi, I’m Alex Tellez, a passionate and results-driven
                            Junior Web Developer. With hands-on experience in building dynamic and scalable web applications.
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
                                    {""},{" "}
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
                </div>
            </div>
        </div>
    )
}

export default About
