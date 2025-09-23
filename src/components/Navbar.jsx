import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiTranslate } from "react-icons/ri";
import logo from "../assets/Logo-white.png";

const NAV_ITEMS = [
    { label: "About Me", href: "#about_me", hoverColor: "hover:text-purple-400" },
    { label: "Pathway", href: "#education", hoverColor: "hover:text-blue-400" },
    { label: "Technical Skills", href: "#technical_skills", hoverColor: "hover:text-purple-400" },
    { label: "Technologies", href: "#technologies", hoverColor: "hover:text-blue-400" },
    { label: "Work Experience", href: "#work_experience", hoverColor: "hover:text-purple-400" },
    { label: "Feature Projects", href: "#feature_projects", hoverColor: "hover:text-blue-400" },
    { label: "Innovate with Me", href: "#innovate_with_me", hoverColor: "hover:text-purple-400 underline underline-offset-8 decoration-white " },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation();
    const isEnglish = i18n.language === "en";

    const handleToggle = () => {
        i18n.changeLanguage(isEnglish ? "es" : "en");
    };

    const buttonLabel = isEnglish ? "Spanish" : "Inglés";

    return (
        <nav className="mb-20 py-6 relative z-50 ">
            <div className="flex flex-wrap items-center justify-between">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <a href="#top">
                        <img src={logo} alt="logo" className="h-auto w-auto cursor-pointer" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-wrap gap-6 text-neutral-200 font-semibold">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`transition duration-300 ${item.hoverColor}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="inline-flex items-center gap-1.5 rounded-md bg-neutral-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-500"
                        aria-label={buttonLabel}
                    >
                        <RiTranslate aria-hidden="true" className="h-3.5 w-3.5" />
                        <span>{buttonLabel}</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-neutral-200 focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="mt-4 flex flex-col items-center space-y-4 py-4 rounded-md lg:hidden">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-neutral-200 font-semibold transition duration-300 ${item.hoverColor}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={() => {
                            handleToggle();
                            setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-md bg-neutral-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-500"
                        aria-label={buttonLabel}
                    >
                        <RiTranslate aria-hidden="true" className="h-3.5 w-3.5" />
                        <span>{buttonLabel}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;