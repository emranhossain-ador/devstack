import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";


const TechnologyGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <TechnologyCard/>
                    <TechnologyCard/>
                    <TechnologyCard/>
                    <TechnologyCard/>
                    <TechnologyCard/>

                </div>
            </div>
            <div className="col-span-1">

                <StackPanel/>

            </div>
        </div>
    );
};

export default TechnologyGrid;