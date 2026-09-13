import { IoMdClose } from "react-icons/io";
import type { TechnologyType } from "../../TechnologyType";
import TechnologyIcon from "./TechnologyIcon";

interface SelectedStackProps{
    technology:TechnologyType;
    technologyRemove:(id:number)=> void
}

const SelectedStack = ({technology, technologyRemove}:SelectedStackProps) => {
    return (
        <div className="border border-border rounded-xl flex items-center justify-between px-2 py-2 shadow">
            <div className="flex items-center gap-1.5">
                <TechnologyIcon icon={technology.icon}/>
                <div>
                    <h5 className="text-lg font-semibold text-foreground font-header">{technology.name}</h5>
                    <p className="text-foreground text-[15px]">{technology.category}</p>
                </div>
            </div>
            <button type="button" onClick={()=>technologyRemove(technology.id)} className="p-0 cursor-pointer text-gray-500/80 transition-all hover:text-red-500"><IoMdClose size={30}/></button>
        </div>
    );
};

export default SelectedStack;