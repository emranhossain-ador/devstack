import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../TechnologyType";
import SelectedStack from "./SelectedStack";
import { toast } from "react-toastify";

interface StackPanelProps{
    selectedTechnologies:TechnologyType[];
    seTSelectedTechIds: Dispatch<SetStateAction<number[]>>
    selectedTechnologyIds:number[];
}

const StackPanel = ({selectedTechnologies, selectedTechnologyIds, seTSelectedTechIds}:StackPanelProps) => {

    const removeAllTechnology = ()=>{
        toast.info('All Technologies Remove Successful');
        seTSelectedTechIds([]);
    }

    const technologyRemoveById = (id:number)=> 
    {
        const tName = selectedTechnologies.find(t=> t.id === id)?.name;
        const remove = selectedTechnologyIds.filter((tId)=> tId !== id);
        
        toast.error(`${tName} Remove Successful`);

        seTSelectedTechIds([...remove]);
    }

    return (
        <div className="border border-border sticky top-18 bg-white rounded-2xl overflow-hidden p-4 md:p-5 shadow-[0_3px_10px] shadow-gray-500/10 space-y-10">
                {/* Header */}
            <div>
                <h4 className="font-bold text-2xl text-foreground font-header">Your Stack</h4>
                <p className="text-foreground/70 font-semibold">
                    {
                        selectedTechnologies.length === 0?
                        "No Technologies Selected Yet"
                        :
                        `${selectedTechnologies.length} Technology Selected`
                    }
                </p>
            </div>

            {selectedTechnologies.length > 0 ?(
                <>
                    <div className="space-y-3">

                        {
                            selectedTechnologies.map((technology:TechnologyType)=> 
                                <SelectedStack key={technology.id} technology={technology} technologyRemove={technologyRemoveById}/>
                            )
                        }

                    </div>

                    <button type="button" onClick={removeAllTechnology} className="w-full py-2.5 cursor-pointer border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white font-bold rounded-2xl">Remove All</button>
                </>
                )
                :(

                <div className="px-4 py-5 border border-border rounded-2xl text-center">
                    <h6>Your Stack Is Empty</h6>
                </div>                  

            )}
            
        
        </div>
    );
};

export default StackPanel;