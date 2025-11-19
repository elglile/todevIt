import { useParams } from "react-router-dom";
import { servicesData } from "../Data";

export default function ServiceDetails() {
    const { id } = useParams();
    const service = servicesData.find((s) => s.id === Number(id));

    if (!service) return <h2 className="text-center py-20">Service not found.</h2>;

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                {service.icon}
                <h1 className="text-4xl font-bold text-1-900">{service.title}</h1>
            </div>

            <p className="text-1-400 text-lg leading-relaxed">
                {service.longDesc}
            </p>
        </section>
    );
}
