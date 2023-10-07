import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { service_id, service_name, service_image, service_title, service_cost } = service || {}
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="rounded-xl" src={service_image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-center">{service_name}</h2>
                <p>{service_title}</p>
                <h1>Price: {service_cost}$</h1>
                <Link to={`/service/${service_id}`}>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;