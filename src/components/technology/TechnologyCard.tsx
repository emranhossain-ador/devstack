import { FaStar } from "react-icons/fa";
import ReactLogo from "../../assets/images/react.png"


const TechnologyCard = () => {
    return (
        <div className="border border-border bg-white rounded-2xl overflow-hidden p-4 md:p-5 shadow-[0_3px_10px] shadow-gray-500/10 space-y-8 transition-all hover:shadow-none">
            {/* Header */}
            <div className="flex items-start justify-between">
                <img src={ReactLogo} className="w-15 h-15 object-cover" alt="logo" />
                <span className="px-3 py-1 border border-[#0EA5E9]/20 text-sm font-semibold bg-[#0EA5E9]/10 text-[#0EA5E9] tracking-wide rounded-full">Popular</span>
            </div>

            {/* Body */}
            <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground ">ReactJs</h4>
                <p className="text-foreground">A declarative, component-based JavaScript library for building modern user interfaces.</p>
            </div>

            {/* Footer */}
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-gray-600/10 border border-border font-semibold tracking-wide rounded text-[15px]">Frontend</span>
                    <p className="text-[15px] text-foreground font-semibold">Beginner-Friendly</p>
                    <span className="font-bold text-[15px] flex items-center gap-1"><FaStar className="text-orange-400" /> 4.9</span>
                </div>

                <button type="button" className="w-full py-3 font-semibold bg-gray-900 transition-all hover:bg-gray-900/90 cursor-pointer text-white rounded-lg tracking-wide">Add To Stack</button>
            </div>

        </div>
    );
};

export default TechnologyCard;