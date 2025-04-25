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
                <span className="text-blue-400">Tech</span>
                nologies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <RiReactjsLine className="text-7xl text-[#61DAFB]" />
                <RiNextjsFill className="text-7xl text-[#FFFFFF]" />
                <FaAngular className="text-7xl text-[#DD0031]" />
                <SiFastapi className="text-7xl text-[#009688]" />
                <SiSpringboot className="text-7xl text-[#6DB33F]" />
                <SiMysql className="text-7xl text-[#4479A1]" />
                <BiLogoPostgresql className="text-7xl text-[#336791]" />
                <SiMongodb className="text-7xl text-[#47A248]" />
                <FaDocker className="text-7xl text-[#2496ED]" />
                <FaAws className="text-7xl text-[#FF9900]" />
            </div>
        </div>
    )
}

export default Technologies
