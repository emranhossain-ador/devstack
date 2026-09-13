import { RiMenu2Line } from "react-icons/ri";
import Logo from "../../assets/images/logo-text.png";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";


const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full bg-white border-b border-border">
            <div className="container mx-auto w-full py-2.5 px-3 flex items-center justify-between">
                
                <button type="button" className="px-2 py-1.5 border border-gray-500/30 rounded-lg bg-gray-500/10 transition-all hover:scale-105 cursor-pointer inline md:hidden">
                    <RiMenu2Line size={20} />
                </button>
                <img src={Logo} alt="Logo" className="h-6 md:h-11 w-auto" />

                <nav className="md:inline hidden">
                    <ul className="flex items-center gap-3.5">
                        <li>
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li>
                            <a href="" className="navLink">Technologies</a>
                        </li>
                        <li>
                            <a href="" className="navLink">About</a>
                        </li>
                        <li>
                            <a href="" className="navLink">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-1 md:gap-4">
                    <button type="button" className="text-[13px] md:text-base px-4 py-1.5 md:py-2 md:tracking-wide flex items-center gap-2 whitespace-nowrap rounded-xl border border-primary/70 text-primary transition-all hover:bg-primary/10 font-sans font-semibold cursor-pointer">
                        <FiLogIn className="hidden md:inline" /> Sign In
                    </button>
                    <button type="button" className="text-[13px] md:text-base px-4 py-1.5 md:py-2 md:tracking-wide flex items-center gap-2 whitespace-nowrap rounded-xl border border-primary bg-primary text-white transition-all hover:bg-primary/90 font-sans font-semibold cursor-pointer">
                        <FaUserPlus className="hidden md:inline" /> Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;