// import { Quote } from 'lucide-react';
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";


export default function Partners() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    
                    {/* TEXT SIDE */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-start gap-4">
                            
                            <div>
                                <h2 className="text-3xl font-bold text-[#111111] mb-4">
                                    Founder Message
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    "At TodevIt, we believe technology should empower businesses, not complicate them. 
                                    Our mission is to transform your vision into digital reality with precision, 
                                    creativity, and dedication."
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    "Every project we undertake is a partnership. We focus on understanding your challenges 
                                    and delivering solutions that go beyond expectations."
                                </p>

                                {/* NAME */}
                                <div>
                                    <p className="font-bold text-[#111111]">Ayoub El-Glile</p>
                                    <p className="text-sm text-gray-500">Founder & CEO</p>

                                    <div className="mt-4 h-16 flex items-end">
                                        <div className="text-4xl font-signature text-[#00C853] italic">
                                            Ayoub El-Glile
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE + SOCIALS */}
                    <div className="flex flex-col items-center">
                        
                        {/* IMAGE */}
                        <div className="relative mb-6">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#00C853] shadow-lg">
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocIoKka8FH5pZja4jbKlA0_xAyWYVeLDigVprXY6ITJ62lBNht8G=s288-c-no"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-2xl opacity-20"></div>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-[#00C853] hover:border-[#00C853] transition"
                            >
                                <FiLinkedin size={22} />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-[#00C853] hover:border-[#00C853] transition"
                            >
                                <FiInstagram size={22} />
                            </a>

                            <a
                                href="mailto:contact@todevit.com"
                                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-[#00C853] hover:border-[#00C853] transition"
                            >
                                <FiMail size={22} />
                            </a>
                        </div>

                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}