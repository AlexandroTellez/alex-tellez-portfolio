import logo from "../assets/Logo-white.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-90 w-auto" />
        </div>
        <div className=" m-8 flex items center justify-center gap-4 text-2xl">
        <a
                    href="https://github.com/AlexandroTellez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
            <FaGithub />
            </a>
            <a
                    href="https://www.linkedin.com/in/alex-tellez-y/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
            <FaLinkedin />
            </a>
            <a
                    href="/CV-Alexandro-Tellez.pdf"
                    download
                    rel="noopener noreferrer"
                    aria-label="Download CV"
                >
            <FaFileDownload />
            </a>
        </div>
    </nav>
}

export default navbar
