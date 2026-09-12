import { FaStar } from "react-icons/fa";
import ReactLogo from "../../assets/images/react.png"


const TechnologySection = () => {
    return (
        <section className="space-y-10 md:space-y-14">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground font-header">
                    Explore The 
                    <span className="text-primary"> Technologies</span>
                </h1>
                <p className="text-[15px] text-foreground">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
                <div className="col-span-3">
                    
                </div>
                <div className="col-span-1">


                </div>
            </div>
            
        </section>
    );
};

export default TechnologySection;