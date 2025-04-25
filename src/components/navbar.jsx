import logo from "../assets/Logo-white.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="h-90 w-auto" />
            </div>
    
            {/* Links */}
            <div className=" m-8 flex items center justify-center gap-4 text-2xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white">
                <a
                    href="https://github.com/AlexandroTellez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-300 hover:text-gray-500"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/alex-tellez-y/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-blue-400 hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="/CV-Alexandro-Tellez.pdf"
                    download
                    rel="noopener noreferrer"
                    aria-label="Download CV"
                    className="text-purple-400 hover:text-purple-700"
                >
                    <FaFileDownload />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
