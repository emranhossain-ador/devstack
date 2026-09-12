import TechnologyGrid from "../technology/TechnologyGrid";


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

            <TechnologyGrid/>
            
        </section>
    );
};

export default TechnologySection;