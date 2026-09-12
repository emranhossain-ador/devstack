import FooterLogo from "../../assets/images/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto px-3 mt-32 py-10 border-t border-border">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-border pb-10">

                <div >
                    <img src={FooterLogo} alt="logo" className="h-auto md:h-11 w-auto" />
                    <p className="text-foreground/80 text-[15px] py-5">Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className="flex items-center gap-3.5">
                        <a href="" className="font-semibold text-[15px] text-sky-500 hover:text-sky-600">GitHub</a>
                        <a href="" className="font-semibold text-[15px] text-sky-500 hover:text-sky-600">Twitter</a>
                        <a href="" className="font-semibold text-[15px] text-sky-500 hover:text-sky-600">Linked</a>
                    </div>
                </div>

                <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-foreground">Product</h5>
                    <ul className="space-y-3">
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Home</li>
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Technologies</li>
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Projects</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-foreground">Company</h5>
                    <ul className="space-y-3">
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">About</li>
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Contact</li>
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Careers</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-foreground">Legal</h5>
                    <ul className="space-y-3">
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Privacy Policy</li>
                        <li className="text-[15px] cursor-pointer w-fit font-medium text-foreground/85 transition-all hover:text-sky-500">Terms Of Service</li>
                    </ul>
                </div>

           </div>

            <div className="flex items-center justify-between pt-8">
                <p className="text-foreground/80 text-[15px]">© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="" className="text-[15px] text-foreground/90">Privacy</a>
                    <a href="" className="text-[15px] text-foreground/90">Terms</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;