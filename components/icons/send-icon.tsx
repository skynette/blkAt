import { IconProps } from "@/types/icon"

export const SendIcon: React.FC<IconProps> = ({
    size = 18,
    color = "white",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size * 19 / 18}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5.54977 5.24L11.9173 3.1175C14.7748 2.165 16.3273 3.725 15.3823 6.5825L13.2598 12.95C11.8348 17.2325 9.49477 17.2325 8.06977 12.95L7.43977 11.06L5.54977 10.43C1.26727 9.005 1.26727 6.6725 5.54977 5.24Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.58252 10.7375L10.2675 8.045"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

