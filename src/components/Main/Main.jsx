import Footer from "../Footer/Footer";
import CardSection from "../Sections/CardsSection/CardSection";
import ComentsSection from "../Sections/Coments/ComentsSection";
import InfoSection from "../Sections/InfoSection/InfoSection";
import JoinUsSection from "../Sections/JoinUs/JoinUsSection";
import PlansSection from "../Sections/Plans/PlansSection";

const Main = () => {
    return (
        <main>
            <CardSection />
            <InfoSection />
            <JoinUsSection />
            <PlansSection />
            <ComentsSection />
            <Footer />
        </main>
    )
}

export default Main;