import { IconProps } from "@/types/icon"

export const RepeatIcon: React.FC<IconProps> = ({
    size = 14,
    color = "#292D32",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size * 15 / 14}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M2.08838 3.42798H10.1617C11.1301 3.42798 11.9117 4.20965 11.9117 5.17798V7.11465"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.93171 1.58466L2.08838 3.42797L3.93171 5.27133"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.9117 11.408H3.83838C2.87005 11.408 2.08838 10.6263 2.08838 9.65798V7.72131"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.0684 13.2513L11.9117 11.408L10.0684 9.56464"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

