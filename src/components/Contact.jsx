import { CONTACT } from "../constants/index.js";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
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
                Innovate with<span className="text-neutral-400"> Me</span>
            </motion.h2>
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {/* Address */}
                <div className="flex flex-col items-center p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <FaMapMarkerAlt className="text-4xl text-neutral-200 mb-4" />
                    <p className="text-neutral-100">{CONTACT.address}</p>
                </div>
                {/* Phone */}
                <div className="flex flex-col items-center p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <FaPhoneAlt className="text-4xl text-neutral-200 mb-4" />
                    <p className="text-neutral-100">{CONTACT.phoneNo}</p>
                </div>
                {/* Email */}
                <div className="flex flex-col items-center p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <FaEnvelope className="text-4xl text-neutral-200 mb-4" />
                    <a href="mailto:alextellezyanes@gmail.com" className="text-neutral-100 border-b hover:text-blue-400 transition duration-300">
                        {CONTACT.email}
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
