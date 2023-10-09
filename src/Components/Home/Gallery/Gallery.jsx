import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (in milliseconds)
        });
    }, []);
    return (
        <div className="w-10/12 m-auto">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <h1 className="text-center text-gray-500 font-inter font-semibold text-2xl" data-aos="fade">Portfolio</h1>
                    <h1 className="text-center font-inter font-bold text-4xl my-4" data-aos="fade">OUR AMAZING WORK</h1>
                    <div className="flex justify-center mt-4" data-aos="fade">
                        <p className="px-3 text-gray-400 font-extrabold">______________</p>
                        <img src="https://wpocean.com/html/tf/loveme/assets/images/section-title.png" alt="" />
                        <p className="px-6 text-gray-400 font-extrabold">______________</p>
                    </div>
                    <div className="lg:flex items-stretch md:mt-12 mt-8">
                        <div className="lg:w-1/2" data-aos="fade-down">
                            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                                <div className="sm:w-1/2 relative group">
                                    <img
                                        src="https://wpocean.com/html/tf/loveme/assets/images/portfolio/1.jpg"
                                        className="w-full rounded-t-lg transform scale-100 hover:scale-105 transition-transform duration-300"
                                        alt="chair"
                                    />
                                </div>
                                <div className="sm:w-1/2 relative group">
                                    <img src="https://wpocean.com/html/tf/loveme/assets/images/blog/img-3.jpg" className="w-full rounded-t-lg transform transition-transform duration-300 scale-100 group-hover:scale-105" alt="chair" />
                                </div>
                            </div>
                            <div className="relative">
                                <img src="https://wpocean.com/html/tf/loveme/assets/images/portfolio-single/4.jpg" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block rounded-t-3xl transform scale-100 hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between" data-aos="fade-up">
                            <div className="relative">
                                <img
                                    src="https://wpocean.com/html/tf/loveme/assets/images/portfolio-single/2.jpg"
                                    className="w-full rounded-t-3xl transform scale-100 hover:scale-105 transition-transform duration-300"
                                    alt="sitting place"
                                />
                            </div>
                            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 ">
                                <div className="sm:w-1/2 relative group">
                                    <img src="https://wpocean.com/html/tf/loveme/assets/images/blog/img-2.jpg" className="w-full rounded-t-lg transform transition-transform duration-300 scale-100 group-hover:scale-105" alt="chair" />
                                </div>
                                <div className="sm:w-1/2 relative group">
                                    <img
                                        src="https://wpocean.com/html/tf/loveme/assets/images/portfolio/9.jpg"
                                        className="w-full rounded-t-lg transform scale-100 hover:scale-105 transition-transform duration-300"
                                        alt="chair"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;