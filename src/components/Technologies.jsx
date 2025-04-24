import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className=" my-20 text-center text-4xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white">
                <span className="text-blue-300">Tech</span>
                nologies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <RiReactjsLine className="text-7xl text-[#61DAFB] animate-bounce-slow" />
                <RiNextjsFill className="text-7xl text-black animate-bounce-slow" />
                <FaAngular className="text-7xl text-[#DD0031] animate-bounce-slow" />
                <SiFastapi className="text-7xl text-[#009688] animate-bounce-slow" />
                <SiSpringboot className="text-7xl text-[#6DB33F] animate-bounce-slow" />
                <SiMysql className="text-7xl text-[#4479A1] animate-bounce-slow" />
                <BiLogoPostgresql className="text-7xl text-[#336791] animate-bounce-slow" />
                <SiMongodb className="text-7xl text-[#47A248] animate-bounce-slow" />
                <FaDocker className="text-7xl text-[#2496ED] animate-bounce-slow" />
                <FaAws className="text-7xl text-[#FF9900] animate-bounce-slow" />
            </div>
        </div>
    )
}

export default Technologies
