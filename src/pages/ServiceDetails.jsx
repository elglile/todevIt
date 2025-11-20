import { useParams } from "react-router-dom";
import { servicesData } from "../Data";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === Number(id));

  if (!service) return <h2 className="text-center py-20">Service not found.</h2>;

  return (
    <>
      <PageHeader />
      <section className="py-20 max-w-4xl mx-auto">
      <div>
        <div className="flex items-center justify-start space-x-3 mb-2">
          <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
          <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
        </div>
        <h2 className="text-4xl md:text-4xl font-bold text-1-900 mb-8">
          {service.title}
        </h2>
        <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE BOX */}
          <div className="relative mx-auto">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-orange-500 rounded-xl"></div>

            <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
              {service.icon}
            </div>
          </div>

          {/* TEXT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              {service.shortDesc}
            </h2>

            <p className="text-gray-600 mb-8">
              {service.longDesc}
            </p>

            <div className="flex gap-4">

              {/* WHATSAPP BUTTON */}
              <button
                onClick={() => {
                  const msg = encodeURIComponent("Bonjour, je veux plus d'informations !");
                  window.open(`https://wa.me/212687976771?text=${msg}`, "_blank");
                }}
                className="group px-8 py-3 bg-green-500 text-white rounded-full 
        font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-md"
              >
                <span className="text-lg"><FaWhatsapp /></span>
                WhatsApp
              </button>

              {/* PHONE BUTTON */}
              <a
                href="tel:212687976771"
                className="px-6 py-3 border border-gray-400 rounded-full 
        text-gray-700 font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-sm"
              >
                <FaPhoneAlt /> Phone number
              </a>

            </div>
          </div>

        </div>
      </div>
      {/* TOOLS SECTION - Only if service has tools */}
      </section>
{service.Tools && service.Tools.length > 0 && (
  <div className="mt-20 bg-black py-16 w-full">
    <h3 className="text-3xl font-bold text-white text-center mb-10">
      Technologies We Use
    </h3>

    <div className="flex flex-wrap justify-center gap-6">
      {service.Tools.map((tool, index) => (
        <div
          key={index}
          className="group w-28 h-20 bg-white rounded-2xl shadow-lg 
                    flex flex-col items-center justify-center gap-2 
                    hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {/* ICON */}
          <div className="text-3xl transition-colors duration-300 group-hover:text-inherit">
            {tool.icon}
          </div>

        </div>
      ))}
    </div>
  </div>
)}


{/* STEPS SECTION - Only if service has steps */}
{service.Steps && service.Steps.length > 0 && (
  <div className="max-w-2/3 mx-auto py-30">
    <h3 className="text-3xl font-bold text-center mb-10 text-1-900">
      Work Process
    </h3>

    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full -translate-x-1/2"></div>

      <div className="space-y-20">
        {service.Steps.map((step, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 relative">

            {/* LEFT TEXT */}
            <div className="text-right pr-6 hidden md:block">
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </div>

            {/* CENTER (number + line) */}
            <div className="flex flex-col items-center relative">
              {/* Number Circle */}
              <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center 
                              rounded-full font-bold text-lg z-10">
                {i + 1}
              </div>

              {/* Connector Line */}
              <div className="w-1 bg-orange-500 h-full"></div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex flex-col items-start gap-3">
              <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
                {step.icon}
                <h4 className="font-semibold text-lg">{step.title}</h4>
              </div>

              {/* TEXT for mobile under card */}
              <div className="block md:hidden">
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
)}

    </>
  );
}
