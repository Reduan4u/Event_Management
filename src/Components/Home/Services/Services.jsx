import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="w-10/12 m-auto mt-10">
            <h1 className="text-center font-inter font-bold text-4xl mt-4" data-aos="fade">WEDDING SERVICES</h1>
            <p className="text-center font-inter font-semibold text-xl pt-4 mb-4" data-aos="fade">We have so many options to make your wedding event special</p>
            <div className="flex justify-center mt-4" data-aos="fade">
                <p className="px-3 text-gray-400 font-extrabold" >______________</p>
                <img src="https://wpocean.com/html/tf/loveme/assets/images/section-title.png" alt="" />
                <p className="pl-6 text-gray-400 font-extrabold">______________</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 mb-20 mt-10" data-aos="fade-up">
                {
                    services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;