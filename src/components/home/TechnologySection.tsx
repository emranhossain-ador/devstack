import { Suspense } from "react";
import type { TechnologyType } from "../../TechnologyType";
import TechnologyGrid from "../technology/TechnologyGrid";


const TechnologySection = () => {

    const technologyPromise = async():Promise<TechnologyType[]>=>
    {
        const res = await fetch('/data.json');
        const data = await res.json();
        return data;
    }



    return (
        <section className="space-y-10 md:space-y-14">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground font-header">
                    Explore The 
                    <span className="text-primary"> Technologies</span>
                </h1>
                <p className="text-[15px] text-foreground">Pick one technology per category to build your ideal stack.</p>
            </div>

            <Suspense fallback={
                <div className="flex items-center justify-center w-full h-screen">
                    <div className="h-15 w-15 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                </div>
            }>
                <TechnologyGrid technologies={technologyPromise()} />
            </Suspense>
            
        </section>
    );
};

export default TechnologySection;