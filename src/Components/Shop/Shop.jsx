import { useEffect, useState } from "react";
import Products from "./Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (in milliseconds)
        });

        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="w-10/12 m-auto mt-10">
                <h1 className="text-center text-gray-500 font-inter font-semibold text-2xl" data-aos="fade">Our Shop</h1>
                <h1 className="text-center font-inter font-bold text-4xl my-4" data-aos="fade">SPECIAL PRODUCT FOR YOU</h1>
                <div className="flex justify-center mt-4" data-aos="fade">
                    <p className="px-3 text-gray-400 font-extrabold">______________</p>
                    <img src="https://wpocean.com/html/tf/loveme/assets/images/section-title.png" alt="" />
                    <p className="px-6 text-gray-400 font-extrabold">______________</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 my-20">
                    {
                        products.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;