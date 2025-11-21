import { FiCheckCircle } from "react-icons/fi";
import { benefits, imgWhyChooseUs } from "../Data";



export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-4/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 order-2  md:order-2">
            {imgWhyChooseUs.map((col, colIndex) => (
              <div key={colIndex} className={col.extraClass}>
                {col.images.map((img, index) => (
                  <div
                    key={index}
                    className={`${img.h} bg-gradient-to-br ${img.gradient} rounded-2xl overflow-hidden`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>


          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#111111]">
              Why Choose Us?
            </h2>
            <p className="md:text-[12px] lg:text-[14px] text-gray-600 leading-relaxed">
              We blend modern creativity with reliable execution to build digital solutions that genuinely move your business forward. As a growing digital agency, we focus on delivering real value, clean user experiences, and long-term partnerships.            </p>
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheckCircle
                    className="text-[#00C853] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-[#111111] font-medium md:text-[13px] lg:text-[14px]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}