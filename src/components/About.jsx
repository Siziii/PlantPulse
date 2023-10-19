import WhoWeAre from "./about-components/WhoWeAre";
import SmartPlanter from "./about-components/SmartPlanter";
import PlantPulseApp from "./about-components/PlantPulseApp";
import NewsletterSection from "./NewsletterSection";

const About = () => {
    return (
        <div id="about">
            <WhoWeAre/>
            <SmartPlanter/>
            <PlantPulseApp/>
            <NewsletterSection/>
        </div>
    );
}

export default About;
