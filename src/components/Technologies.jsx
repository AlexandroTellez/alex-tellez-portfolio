import { RiReactjsLine } from "react-icons/ri";
import {
    SiPython,
    SiFastapi,
    SiMysql,
    SiMongodb,
    SiOpensearch,
    SiGit,
    SiGnubash,
    SiOpenai,
    SiMlflow,
    SiBitbucket,
    SiVercel,
    SiMilvus,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
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
                    boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                transition={{
                    default: { duration: 1.2, ease: "easeOut" },
                    hover: { duration: 0.5 },
                }}
                className="my-20 text-center text-4xl shadow-2xl"
            >
                <span className="text-blue-400">Tech</span>nologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {/* React */}
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-full border-4 border-[#61DAFB] p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]" />
                </motion.div>

                {/* Python */}
                <motion.div variants={iconVariants(3.0)} initial="initial" animate="animate" className="rounded-full border-4 border-[#3776AB] p-4">
                    <SiPython className="text-7xl text-[#3776AB]" />
                </motion.div>

                {/* FastAPI */}
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-full border-4 border-[#009688] p-4">
                    <SiFastapi className="text-7xl text-[#009688]" />
                </motion.div>

                {/* PostgreSQL */}
                <motion.div variants={iconVariants(4.0)} initial="initial" animate="animate" className="rounded-full border-4 border-[#336791] p-4">
                    <BiLogoPostgresql className="text-7xl text-[#336791]" />
                </motion.div>

                {/* MySQL */}
                <motion.div variants={iconVariants(4.2)} initial="initial" animate="animate" className="rounded-full border-4 border-[#4479A1] p-4">
                    <SiMysql className="text-7xl text-[#4479A1]" />
                </motion.div>

                {/* MongoDB */}
                <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-full border-4 border-[#47A248] p-4">
                    <SiMongodb className="text-7xl text-[#47A248]" />
                </motion.div>

                {/* Milvus */}
                <motion.div
                    variants={iconVariants(3.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full border-4 border-[#00BFA5] p-4" // color verde/teal acorde a Milvus branding
                >
                    <SiMilvus className="text-7xl text-[#00BFA5]" />
                </motion.div>

                {/* OpenAI */}
                <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className="rounded-full border-4 border-[#412991] p-4">
                    <SiOpenai className="text-7xl text-[#412991]" />
                </motion.div>

                {/* MLflow */}
                <motion.div variants={iconVariants(3.7)} initial="initial" animate="animate" className="rounded-full border-4 border-[#0194E2] p-4">
                    <SiMlflow className="text-7xl text-[#0194E2]" />
                </motion.div>

                {/* Docker */}
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-full border-4 border-[#2496ED] p-4">
                    <FaDocker className="text-7xl text-[#2496ED]" />
                </motion.div>

                {/* Git */}
                <motion.div variants={iconVariants(3.9)} initial="initial" animate="animate" className="rounded-full border-4 border-[#F05032] p-4">
                    <SiGit className="text-7xl text-[#F05032]" />
                </motion.div>

                {/* BitBucket */}
                <motion.div variants={iconVariants(3.4)} initial="initial" animate="animate" className="rounded-full border-4 border-[#205081] p-4">
                    <SiBitbucket className="text-7xl text-[#205081]" />
                </motion.div>

                {/* Bash */}
                <motion.div variants={iconVariants(4.1)} initial="initial" animate="animate" className="rounded-full border-4 border-[#4EAA25] p-4">
                    <SiGnubash className="text-7xl text-[#4EAA25]" />
                </motion.div>

                {/* Vercel */}
                <motion.div variants={iconVariants(3.6)} initial="initial" animate="animate" className="rounded-full border-4 border-[#ffffff] p-4">
                    <SiVercel className="text-7xl text-[#ffffff]" />
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;
