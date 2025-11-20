import { FiMessageCircle } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ContactCTA() {
    return (
        <section className="py-20 bg-3-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Have a project in mind?
                </h2>

                <p className="text-lg text-gray-300 mb-10">
                    Let’s bring your vision to life. Get in touch with us today.
                </p>

                <div className="flex flex-wrap justify-center gap-4">

                    {/* WhatsApp Button */}
                    <button
                        onClick={() => {
                            const msg = encodeURIComponent("Bonjour, je veux plus d'informations !");
                            window.open(`https://wa.me/212687976771?text=${msg}`, "_blank");
                        }}
                        className="group px-6 py-3 bg-gradient-to-r from-[#00C853] to-[#00E676] 
                        text-white rounded-lg font-semibold 
                        hover:shadow-xl hover:shadow-[#00C853]/30 
                        active:scale-95 transition-all duration-300 
                        flex items-center gap-3"
                    >
                        <FiMessageCircle size={20} />
                        WhatsApp Us
                    </button>

                    {/* Email Button */}
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-transparent border-2 border-white 
                        text-white rounded-lg font-semibold 
                        hover:bg-white hover:text-[#111111] 
                        active:scale-95 transition-all duration-300 
                        flex items-center gap-3"
                    >
                        <MdEmail size={20} />
                        Send Email
                    </Link>

                </div>
            </div>
        </section>
    );
}
