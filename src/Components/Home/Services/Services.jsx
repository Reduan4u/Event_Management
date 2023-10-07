import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="w-10/12 m-auto">
            <h1 className="text-center font-inter font-bold text-4xl">Our Services {services.length}</h1>
            <p className="text-center font-inter font-semibold text-xl pt-4 mb-8">We have so many options to make your wedding event special</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 my-20">
                {
                    services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;