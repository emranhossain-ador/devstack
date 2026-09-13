interface BadgeTypeColorProps{
    color: string;
}

const TBadgeTypeColor = ({color}:BadgeTypeColorProps) => 
{
    const colors: Record<string, string> ={
        blue:"#0EA5E9",
        green: "#059669",
        orange: "#EA580C",
        purple: "#7E22CE",
        red: "#DC2626",
        yellow: "#D97706",
    };

    return colors[color] ?? null;
};

export default TBadgeTypeColor;