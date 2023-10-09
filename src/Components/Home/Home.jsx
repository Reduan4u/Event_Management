import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </div>
    );
};

export default Home;