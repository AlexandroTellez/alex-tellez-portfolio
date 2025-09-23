import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws, FaCloudversify, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24 w-full max-w-7xl mx-auto px-4">
            <motion.h2
                initial={{ scale: 0.95, opacity: 0.9 }}
                animate={{ scale: 1.2, opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    color: "#fff",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{
                    default: { duration: 1.2, ease: "easeOut" },
                    hover: { duration: 0.5 }
                }}
                className="my-20 text-center text-4xl shadow-2xl"
            >
                <span className="text-blue-400">Tech</span>nologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#61DAFB] p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#FFFFFF] p-4">
                    <RiNextjsFill className="text-7xl text-[#FFFFFF]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#DD0031] p-4">
                    <FaAngular className="text-7xl text-[#DD0031]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#009688] p-4">
                    <SiFastapi className="text-7xl text-[#009688]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#6DB33F] p-4">
                    <SiSpringboot className="text-7xl text-[#6DB33F]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#4479A1] p-4">
                    <SiMysql className="text-7xl text-[#4479A1]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#336791] p-4">
                    <BiLogoPostgresql className="text-7xl text-[#336791]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#47A248] p-4">
                    <SiMongodb className="text-7xl text-[#47A248]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#2496ED] p-4">
                    <FaDocker className="text-7xl text-[#2496ED]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-purple-500 p-4"
                >
                    <FaCloudversify className="text-7xl text-purple-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4.0)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-gray-200 p-4"
                >
                    <FaRocket className="text-7xl text-white" />
                </motion.div>

                {/*
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#FF9900] p-4">
                    <FaAws className="text-7xl text-[#FF9900]" />
                </motion.div>
                */}
            </motion.div>
        </div>
    )
}

export default Technologies
