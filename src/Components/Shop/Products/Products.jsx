import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = ({ product }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (in milliseconds)
        });
    }, []);

    const { name, price, image } = product || {}

    return (
        <div>
            <div className="card bg-base-100" data-aos="fade-up"
            >
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-t-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title ">{name}</h2>
                    <p className="text-gray-400 font-medium text-lg">${price}.00</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-info border-none">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;