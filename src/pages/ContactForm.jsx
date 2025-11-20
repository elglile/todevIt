import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend, FiMessageCircle } from "react-icons/fi";
import { socialMedia } from "../Data";
import PageHeader from "../components/PageHeader";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message,
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setSent(true);
                setLoading(false);
                setFormData({ name: "", phone: "", message: "" });
            })
            .catch(() => setLoading(false));
    };

    return (
        <>
            <section className="w-4/5 md:flex md:items-center md:justify-between mx-auto py-8 my-20">
                <div className="md:w-[145vh]">
                    <div className="flex items-center justify-start space-x-3 mb-2">
                        <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
                        <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
                        <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
                    </div>
                    <h2 className="text-4xl md:text-4xl font-bold text-1-900 mb-4">
                        Get in touch
                    </h2>
                    <p className="w-5/6 mb-5 text-[18px] leading-[30px] align-baselin outline-0 text-gray-400"
                    style={{fontFamily: 'inherit', fontWeight : 'inherit', fontStyle: 'inherit', boxSizing: 'border-box' }}>
                        TodevIt is a modern digital agency specializing in creating web solutions and managing online communication. We offer web development, UI/UX design, digital marketing, social media management, content creation, and comprehensive support to strengthen your company's digital presence.
                    </p>
                    <div className="space-y-4">
                    {socialMedia
                        .filter((item) => item.name === "phone" || item.name === "email")
                        .map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 space-y-3"
                        >
                            <span className="px-2 py-3 shadow shadow-gray-200 rounded-xs">
                                {item.icon}
                            </span>
                            <div className="flex flex-col">
                            <span className="text-xl font-semibold ">{item.title}:</span>
                            <span className="text-lg font-medium text-gray-500">{item.text}</span>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>
                <form
                    onSubmit={sendEmail}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-[0_3px_15px_rgba(0,0,0,0.08)] "
                >
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Write to us :</h3>

                    {/* Inputs */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom *"
                        className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Téléphone"
                        className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Message..."
                        rows={5}
                        className="w-full p-3 border border-gray-100 bg-gray-200/50 rounded-sm focus:border-gray-300 focus:ring-gray-300 focus:ring-1 outline-none transition"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    {/* Buttons */}
                    <div className="flex items-center gap-4 pt-2">
                        <button
                            type="submit"
                            className="bg-[#ff7b00] flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg shadow-sm 
          hover:bg-[#ff6a00] transition"
                        >
                            <FiSend size={18} />
                            {loading ? "Envoi..." : "Envoyer"}
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                const text = `Nom: ${formData.name}%0ATel: ${formData.phone}%0AMessage: ${formData.message}`;
                                window.open(`https://wa.me/212687976771?text=${text}`, "_blank");
                            }}
                            className="bg-green-600 flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg shadow-sm 
          hover:bg-green-700 transition"
                        >
                            <FiMessageCircle size={18} />
                            WhatsApp
                        </button>
                    </div>

                    {/* Success message */}
                    {sent && (
                        <p className="text-green-600 font-semibold mt-2">
                            Message envoyé avec succès !
                        </p>
                    )}
                </form>
            </section>

        </>

    );
}
