
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/1669678194915-1SKOTN97T3871MXKATCO/2022-EmmaRose-Gabriel-1094.jpg?format=2500w)' }}>
                <div className="hero-overlay bg-white bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p className="mb-5 w-3/4 m-auto text-center text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Welcome to RR Wedding Planner, where your dream wedding begins its extraordinary journey.</p>
                        <button style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Contact Us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/1635541761564-SBIR3GNG1JR8LGA6O559/RYP_J%2BK_Previews-082.jpg?format=2500w)' }}>
                <div className="hero-overlay bg-white bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Welcome to RR Wedding Planner, <br /> where your dream wedding begins its extraordinary journey.</p>
                        <form className="flex flex-col sm:flex-row lg:flex-row md:flex-row justify-center mx-2 mt-5 relative z-10 pt-6 gap-2 lg:gap-0 md:gap-0 sm:gap-0">
                            <button style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Contact Us</button>
                        </form>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/1696267981469-BTBC26TU0NLVV20X2X64/139A2032-2.jpg?format=2500w)' }}>
                <div className="hero-overlay bg-white bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Welcome to RR Wedding Planner, <br /> where your dream wedding begins its extraordinary journey.</p>
                        <form className="flex flex-col sm:flex-row lg:flex-row md:flex-row justify-center mx-2 mt-5 relative z-10 pt-6 gap-2 lg:gap-0 md:gap-0 sm:gap-0">
                            <button style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Contact Us</button>
                        </form>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative mb-10 hero min-h-screen" style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/1696268323397-YC8XQWCL2B2NDHWXAJEF/Mel%2BMatt_Wedding-5.jpg?format=2500w)' }}>
                <div className="hero-overlay bg-white bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Welcome to RR Wedding Planner, <br /> where your dream wedding begins its extraordinary journey.</p>
                        <form className="flex flex-col sm:flex-row lg:flex-row md:flex-row justify-center mx-2 mt-5 relative z-10 pt-6 gap-2 lg:gap-0 md:gap-0 sm:gap-0">
                            <button style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold px-7 border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Contact Us</button>
                        </form>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;