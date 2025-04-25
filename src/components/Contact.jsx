import { CONTACT } from "../constants/index.js";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl shadow-2xl transform transition
            duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:text-white"
            >Innovate with <span className="text-neutral-400"> Me </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {/* Address */}
                <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <FaMapMarkerAlt className="text-4xl text-neutral-300 mb-4" />
                    <p className="text-neutral-100">{CONTACT.address}</p>
                </div>
                {/* Phone */}
                <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <FaPhoneAlt className="text-4xl text-blue-400 mb-4" />
                    <p className="text-neutral-100">{CONTACT.phoneNo}</p>
                </div>
                {/* Email */}
                <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <FaEnvelope className="text-4xl text-purple-400 mb-4" />
                    <a href="mailto:alextellezyanes@gmail.com" className="text-neutral-100 border-b hover:text-purple-600 transition duration-300">
                        {CONTACT.email}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
