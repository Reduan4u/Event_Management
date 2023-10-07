import Marquee from "react-fast-marquee";

const Features = () => {
    return (
        <div className="mb-4">
            <Marquee pauseOnHover={true}>
                <div className="grid grid-cols-5 w-full  ">
                    <div className="px-28"><img src="https://wpocean.com/html/tf/loveme/assets/images/partners/1.png" alt="" />  </div>
                    <div className="px-28"><img src="https://wpocean.com/html/tf/loveme/assets/images/partners/2.png" alt="" />  </div>
                    <div className="px-28"><img src="https://wpocean.com/html/tf/loveme/assets/images/partners/3.png" alt="" />  </div>
                    <div className="px-28"><img src="https://wpocean.com/html/tf/loveme/assets/images/partners/4.png" alt="" />  </div>
                    <div className="px-28"><img src="https://wpocean.com/html/tf/loveme/assets/images/partners/5.png" alt="" />  </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Features;