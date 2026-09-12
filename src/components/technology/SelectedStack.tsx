import { IoMdClose } from "react-icons/io";
import LogoReact from "../../assets/images/react.png";

const SelectedStack = () => {
    return (
        <div className="border border-border rounded-xl flex items-center justify-between px-2 py-2 shadow">
            <div className="flex items-center gap-1.5">
                <img src={LogoReact} alt="logo" className="w-12 h-12 object-cover shrink-0" />
                <div>
                    <h5 className="text-lg font-semibold text-foreground font-header">React</h5>
                    <p className="text-foreground text-[15px]">Frontend</p>
                </div>
            </div>
            <button type="button" className="p-0 cursor-pointer text-gray-500/80 transition-all hover:text-red-500"><IoMdClose size={30}/></button>
        </div>
    );
};

export default SelectedStack;