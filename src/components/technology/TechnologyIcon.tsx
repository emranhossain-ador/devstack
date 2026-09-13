import { FaDocker, FaJava, FaJsSquare, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiRedis, SiSvelte, SiTailwindcss, SiTypescript } from "react-icons/si";

interface TechnologyIconProps {
    icon: string;
}

const TechnologyIcon = ({icon}:TechnologyIconProps) => 
{
    const icons: Record<string, React.ReactNode> = {
        react: <FaReact size={55} className="text-[#61DAFB]" />,
        vue: <FaVuejs size={55} className="text-[#42B883]" />,
        svelte: <SiSvelte size={55} className="text-[#FF3E00]" />,
        nextjs: <SiNextdotjs size={55} className="text-black" />,
        nodejs: <FaNodeJs size={55} className="text-[#68A063]" />,
        postgresql: <SiPostgresql size={55} className="text-[#336791]" />,
        redis: <SiRedis size={55} className="text-[#DC382D]" />,
        javascript: <FaJsSquare size={55} className="text-[#F0DB4F]" />,
        typescript: <SiTypescript size={55} className="text-[#3178C6]" />,
        java: <FaJava size={55} className="text-[#ED8B00]" />,
        tailwind: <SiTailwindcss size={55} className="text-[#06B6D4]" />,
        docker: <FaDocker size={55} className="text-[#2496ED]" />,
    }
    return icons[icon] ?? null;
};

export default TechnologyIcon;