import { useState } from "react";
import { CONTACT } from "../constants/index.js";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileDownload, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!subject.trim() || !message.trim()) {
            return;
        }
        const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
        setSubject("");
        setMessage("");
    };

    const isDisabled = !subject.trim() || !message.trim();

    return (
        <div className="border-b border-neutral-900 pb-20 w-full max-w-7xl mx-auto px-4 py-10">

            {/* Contact Title */}
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

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 w-full backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl"
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                            <FaEnvelope className="text-3xl text-neutral-100" />
                            <h3 className="text-2xl font-semibold text-neutral-100">Let's Work Together!</h3>
                        </div>
                        <p className="mt-2 text-neutral-300 text-sm">
                            Share your idea or project and I will get back to you as soon as possible.
                        </p>
                    </div>

                    <label className="flex flex-col gap-2 text-neutral-200">
                        <span>Subject</span>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            placeholder="What do you want to talk about?"
                            className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            required
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-neutral-200">
                        <span>Message</span>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Tell me the details of the project or inquiry."
                            className="h-40 w-full resize-none rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Send mail
                    </button>
                    <p className="text-xs text-neutral-400 text-center">This will open your email client to complete the sending.</p>
                </form>
            </motion.div>

            {/* Contact Details */}
            <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-start">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Address */}
                        <div className="flex flex-col items-center p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                            <FaMapMarkerAlt className="text-4xl text-neutral-200 mb-4" />
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open address on Google Maps"
                                className="text-neutral-100 text-center hover:text-blue-400 underline-offset-4 hover:underline"
                            >
                                {CONTACT.address}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                            <FaPhoneAlt className="text-4xl text-neutral-200 mb-4" />
                            <a
                                href={`tel:${CONTACT.phoneNo.replace(/[^\d+]/g, '')}`}
                                aria-label="Calling by phone"
                                className="text-neutral-100 text-center hover:text-blue-400 underline-offset-4 hover:underline"
                            >
                                {CONTACT.phoneNo}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* Social Links */}
            <div className="flex flex-col items-center justify-center p-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="m-1 flex items-center justify-center gap-6 text-4xl"
                >
                    <a
                        href="https://github.com/AlexandroTellez"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-gray-100 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alex-tellez-y/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-blue-500 hover:text-blue-100 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="/CV-Alexandro-Tellez.pdf"
                        download
                        rel="noopener noreferrer"
                        aria-label="Download CV"
                        className="text-purple-500 hover:text-purple-100 transition duration-300"
                    >
                        <FaFileDownload />
                    </a>
                    <a
                        href="/Cover-letter-Alexandro-Tellez.pdf"
                        download
                        rel="noopener noreferrer"
                        aria-label="Download Cover Letter"
                        className="text-indigo-500 hover:text-indigo-100 transition duration-300"
                    >
                        <FaEnvelopeOpenText />
                    </a>
                </motion.div>

                {/* Footer text */}
                <p className="mt-6 text-sm text-center text-neutral-300">
                    &copy; {new Date().getFullYear()} Alex Tellez. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default Contact;
