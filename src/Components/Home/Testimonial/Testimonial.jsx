import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (in milliseconds)
        });
    }, []);

    return (
        <div className="mb-10">
            <p className="text-center mb-4 text-3xl font-semibold" data-aos="fade">WHAT OUR CLIENT SAY </p>
            <svg data-aos="fade" className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>

            <div className="carousel w-full">

                <div id="item1" className="carousel-item w-full my-6">
                    <figure className="max-w-screen-md mx-auto">
                        <div className="grid grid-cols-4">
                            <div data-aos="fade-right" className="col-span-3"><p className="text-2xl font-normal text-gray-500 ">Choosing RR Wedding Planner was the best decision we made for our wedding! From the moment we reached out, their team embraced our vision and turned it into a breathtaking reality. Our wedding day was not just beautiful; it was magical, and we owe it all to this agency. Thank you for making our dream wedding come true!</p>
                            </div>
                            <div data-aos="fade-left">
                                <img className="h-full" src="https://wpocean.com/html/tf/loveme/assets/images//testimonial/shape2.png" alt="" />
                            </div>
                        </div>
                        <figcaption data-aos="fade-down" className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-20 h-20 rounded-full border-gray-400 border-4" src="https://wpocean.com/html/tf/loveme/assets/images/testimonial/img-1.jpg" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 ">
                                <div className="pr-3 text-lg font-medium text-gray-500 ">Anika tahsin

                                </div>
                                <div className="pl-3 text-sm font-normal text-gray-500 ">Wedding 12/12/19</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div id="item2" className="carousel-item w-full my-6">
                    <figure className="max-w-screen-md mx-auto">
                        <div className="grid grid-cols-4">
                            <div className="col-span-3"><p className="text-2xl font-normal text-gray-500 ">Choosing RR Wedding Planner was the best decision we made for our wedding! From the moment we reached out, their team embraced our vision and turned it into a breathtaking reality. Our wedding day was not just beautiful; it was magical, and we owe it all to this agency. Thank you for making our dream wedding come true!</p></div>
                            <div>
                                <img className="h-full" src="https://wpocean.com/html/tf/loveme/assets/images//testimonial/shape2.png" alt="" />
                            </div>
                        </div>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-20 h-20 rounded-full border-gray-400 border-4" src="https://wpocean.com/html/tf/loveme/assets/images/testimonial/img-2.jpg" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 ">
                                <div className="pr-3 font-medium text-gray-500 ">Noshin Tabassum Ritu


                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 ">Wedding 15/09/21
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div id="item3" className="carousel-item w-full my-6">
                    <figure className="max-w-screen-md mx-auto">
                        <div className="grid grid-cols-4">
                            <div className="col-span-3"><p className="text-2xl font-normal text-gray-500 ">Choosing RR Wedding Planner was the best decision we made for our wedding! From the moment we reached out, their team embraced our vision and turned it into a breathtaking reality. Our wedding day was not just beautiful; it was magical, and we owe it all to this agency. Thank you for making our dream wedding come true!</p></div>
                            <div>
                                <img className="h-full" src="https://wpocean.com/html/tf/loveme/assets/images//testimonial/shape2.png" alt="" />
                            </div>
                        </div>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-20 h-20 rounded-full border-gray-400 border-4" src="https://wpocean.com/html/tf/loveme/assets/images/testimonial/img-3.jpg" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 ">
                                <div className="pr-3 font-medium text-gray-500 ">Sazzad bin jahid

                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 ">Wedding 08/10/22</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>


            </div>
            <div data-aos="zoom-out" className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-md">1</a>
                <a href="#item2" className="btn btn-md">2</a>
                <a href="#item3" className="btn btn-md">3</a>
            </div>
        </div>
    );
};

export default Testimonial;