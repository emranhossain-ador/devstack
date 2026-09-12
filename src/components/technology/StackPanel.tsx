import SelectedStack from "./SelectedStack";


const StackPanel = () => {
    return (
        <div className="border border-border bg-white rounded-2xl overflow-hidden p-4 md:p-5 shadow-[0_3px_10px] shadow-gray-500/10 space-y-10">
                {/* Header */}
            <div>
                <h4 className="font-bold text-2xl text-foreground font-header">Your Stack</h4>
                <p className="text-foreground/70 font-semibold">2 Technology Selected</p>
            </div>

            <div className="space-y-3">

                <SelectedStack/>

            </div>

            <button type="button" className="w-full py-2.5 cursor-pointer border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white font-bold rounded-2xl">Remove All</button>
        
        </div>
    );
};

export default StackPanel;