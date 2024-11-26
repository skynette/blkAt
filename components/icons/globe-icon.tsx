import { IconProps } from "@/types/icon"

export const GlobeIcon: React.FC<IconProps> = ({
    size = 14,
    color = "#656565",
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
                d="M6.99984 13.3333C10.2215 13.3333 12.8332 10.7217 12.8332 7.5C12.8332 4.27834 10.2215 1.66667 6.99984 1.66667C3.77818 1.66667 1.1665 4.27834 1.1665 7.5C1.1665 10.7217 3.77818 13.3333 6.99984 13.3333Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.66676 2.25H5.2501C4.1126 5.65667 4.1126 9.34333 5.2501 12.75H4.66676"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.75 2.25C9.8875 5.65667 9.8875 9.34333 8.75 12.75"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.75 9.83333V9.25C5.15667 10.3875 8.84333 10.3875 12.25 9.25V9.83333"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.75 5.75C5.15667 4.6125 8.84333 4.6125 12.25 5.75"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

