import HeroSection from "../components/home/HeroSection";
import TechnologySection from "../components/home/TechnologySection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
    return (
        <>
            {/* Navbar   */}
            <Navbar/>

            <main className="space-y-10 container mx-auto py-10 md:py-14 px-3">

                {/* Hero section */}
                <HeroSection/>

                {/* Technologies section */}
                <TechnologySection/>

            </main>

            <Footer/>

        </>
    );
};

export default HomePage;