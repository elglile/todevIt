import { servicesDat } from "../Data";

export default function HeroServices() {
    return (
        <div className="hidden lg:grid grid-cols-2 gap-4 ">

            {/* COLUMN 1 */}
            <div className="space-y-4">
                {servicesDat
                    .filter((_, i) => i % 2 === 0) // even 0,2,4...
                    .slice(0, 2)                  // show ONLY 2 cards
                    .map((service) => (
                        <div
                            key={service.id}
                            className="bg-gradient-to-br from-1-900 to-1-700/10
                            backdrop-blur-sm border border-1-800 p-5 rounded-2xl 
                            hover:scale-105 transition-transform duration-300"
                        >
                            {service.icon}
                            <h3 className="font-semibold text-[15px] mt-2">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.shortDesc}</p>
                        </div>
                    ))}
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-4 pt-8">
                {servicesDat
                    .filter((_, i) => i % 2 !== 0) // odd 1,3,5...
                    .slice(0, 1)                  // show ONLY 2 cards
                    .map((service) => (
                        <div
                            key={service.id}
                            className="bg-gradient-to-br from-1-900 to-1-700/10
                            backdrop-blur-sm border border-1-800 p-6 rounded-2xl 
                            hover:scale-105 transition-transform duration-300"
                        >
                            {service.icon}
                            <h3 className="font-semibold text-[14px] mt-2">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.shortDesc}</p>
                        </div>
                    ))}

                {/* LAST PLACEHOLDER CIRCLE */}
                <div className="bg-gradient-to-br from-1-800 to-transparent rounded-2xl h-32 flex items-center justify-center border border-1-800">
                    <div className="w-16 h-16 rounded-full bg-1-700/30 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

