import { IconProps } from "@/types/icon"

export const CubeIcon: React.FC<IconProps> = ({
    size = 18,
    color = "#959595",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7.53764 1.8975L3.02264 4.845C1.57514 5.79 1.57514 7.905 3.02264 8.85L7.53764 11.7975C8.34764 12.33 9.68264 12.33 10.4926 11.7975L14.9851 8.85C16.4251 7.905 16.4251 5.7975 14.9851 4.8525L10.4926 1.905C9.68264 1.365 8.34764 1.365 7.53764 1.8975Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.22234 9.81L4.21484 13.3275C4.21484 14.28 4.94984 15.3 5.84984 15.6L8.24234 16.395C8.65484 16.53 9.33734 16.53 9.75734 16.395L12.1498 15.6C13.0498 15.3 13.7848 14.28 13.7848 13.3275V9.8475"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.0498 11.25V6.75"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

