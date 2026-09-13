import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../TechnologyType";
import TechnologyIcon from "./TechnologyIcon";
import TBadgeTypeColor from "./TBadgeTypeColor";



interface TechnologyProps{
    technology: TechnologyType
    handleAddToStack: (id:number) => void
    selected:boolean;
}

const TechnologyCard = ({technology, selected, handleAddToStack}:TechnologyProps) => {

    const color = TBadgeTypeColor({color:technology.badgeType});
    // console.log(color);

    return (
        <div className={`border ${selected ? 'border-primary':'border-border shadow-[0_3px_10px] shadow-gray-500/10'}  bg-white rounded-2xl overflow-hidden p-4 md:p-5 space-y-8 transition-all hover:shadow-none flex flex-col`}>
            {/* Header */}
            <div className="flex items-start justify-between">
                <TechnologyIcon icon={technology.icon} />
                <span className="px-3 py-1 text-sm font-semibold tracking-wide rounded-full"
                    style={{
                        color: color,
                        backgroundColor: `${color}15`,
                        border: `1px solid ${color}33`,
                    }}
                >
                    {technology.badge}
                </span>
            </div>

            {/* Body */}
            <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground ">{technology.name}</h4>
                <p className="text-foreground">{technology.description}</p>
            </div>

            {/* Footer */}
            <div className="space-y-5 mt-auto">
                <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-gray-600/10 border border-border font-semibold rounded text-[14px]">{technology.category}</span>
                    <p className="text-[13px] text-foreground font-semibold">{technology.level}</p>
                    <span className="font-bold text-[15px] flex items-center gap-1"><FaStar className="text-orange-400" /> {technology.rating}</span>
                </div>

                <button type="button" disabled={selected ? true:false } onClick={()=>handleAddToStack(technology.id)} className="w-full py-3 font-semibold bg-gray-900 transition-all hover:bg-gray-900/90 cursor-pointer text-white rounded-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900">Add To Stack</button>
            </div>

        </div>
    );
};

export default TechnologyCard;