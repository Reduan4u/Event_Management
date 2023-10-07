import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedService from "./SelectedService";

const Service = () => {
    const [selectedService, setSelectedService] = useState();
    const { service_id } = useParams();
    const service = useLoaderData();

    useEffect(() => {
        const findService = service.find((selectedService) => selectedService.service_id == service_id);
        setSelectedService(findService);
    }, [service_id, service])

    return (
        <div className="my-10 w-10/12 m-auto">
            <SelectedService selectedService={selectedService}></SelectedService>
        </div>
    );
}
export default Service;