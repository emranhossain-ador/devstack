import { use, useState } from "react";
import type { TechnologyType } from "../../TechnologyType";
import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";
import { toast } from "react-toastify";


interface TechnologyProps{
    technologies:Promise<TechnologyType[]>
}


const TechnologyGrid = ({technologies}:TechnologyProps) => {

    const [selectedTechnologyIds, seTSelectedTechnologyIds] = useState<number[]>([]);

    const technologyList = use(technologies);

    const handleAddToStack = (id:number):void=>
    {
        if(selectedTechnologyIds.includes(id)){
            return;
        }

        const tName = technologyList.find(t=> t.id === id)?.name;

        toast.success(`${tName} Select Successful`);

        seTSelectedTechnologyIds([...selectedTechnologyIds, id]);
    }

    const selectedTechnologies = technologyList.filter((technology) => selectedTechnologyIds.includes(technology.id));
    // console.log(selectedStacks);


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
            <div className="col-span-1 md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        technologyList.map((technology:TechnologyType)=> 
                            <TechnologyCard 
                                key={technology.id}
                                selected={selectedTechnologyIds.includes(technology.id)} 
                                technology={technology} 
                                handleAddToStack={handleAddToStack} 
                            />
                        )
                    }
                </div>
            </div>
            <div className="col-span-1 sticky top-0">

                <StackPanel selectedTechnologyIds={selectedTechnologyIds} seTSelectedTechIds={seTSelectedTechnologyIds} selectedTechnologies={selectedTechnologies}/>

            </div>
        </div>
    );
};

export default TechnologyGrid;