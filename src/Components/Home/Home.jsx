import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";
import OurTeam from "./Team/OurTeam";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <OurTeam></OurTeam>
            <Contact></Contact>

        </div>
    );
};

export default Home;