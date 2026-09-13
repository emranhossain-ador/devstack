import BannerImg from "../../assets/images/banner-stack.png";

const HeroSection = () => {
    return (
        <section className="flex items-center flex-col md:flex-row justify-between gap-1 md:gap-10 w-full">
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start gap-10 md:gap-16 md:w-1/2 w-full">
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground font-header md:leading-14">
                        Build Your Ideal <br/>
                        <span className="gradient-text">Development Stack</span>
                    </h1>

                    <p className="max-w-xl px-2 md:px-0">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                </div>

                <div className="w-full flex items-center gap-2 md:gap-4 px-4 md:px-0">

                    <button type="button" className="w-full  md:w-fit px-3 md:px-6 py-2.5 md:py-3 rounded-md gradient-btn text-white text-[12px] md:text-[15px] font-semibold md:tracking-wide shadow-[0_3px_6px] shadow-[#EC4899]/50 transition-all hover:shadow-none cursor-pointer">Explore Technologies</button>

                    <button type="button" className="w-full  md:w-fit px-3 md:px-6 py-2.5 md:py-3 rounded-md border border-border bg-white text-foreground text-[12px] md:text-[15px] font-semibold md:tracking-wide transition-all hover:text-primary hover:border-primary cursor-pointer shadow">Learn More</button>

                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center ">
                <img src={BannerImg} alt="banner" className="w-auto h-auto object-cover" />
            </div>

        </section>
    );
};

export default HeroSection;