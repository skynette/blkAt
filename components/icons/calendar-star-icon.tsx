import { IconProps } from "@/types/icon"

export const CalendarStarIcon: React.FC<IconProps> = ({
    size = 14,
    color = "#797979",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M4.6665 1.16667V2.91667"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.3335 1.16667V2.91667"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.25 4.95833V7.95084C11.7308 7.53667 11.0717 7.29167 10.3542 7.29167C9.63667 7.29167 8.96583 7.54249 8.44083 7.96832C7.735 8.52249 7.29167 9.39167 7.29167 10.3542C7.29167 10.9258 7.45501 11.4742 7.73501 11.9292C7.95084 12.285 8.23083 12.5942 8.56333 12.8333H4.66667C2.625 12.8333 1.75 11.6667 1.75 9.91667V4.95833C1.75 3.20833 2.625 2.04167 4.66667 2.04167H9.33333C11.375 2.04167 12.25 3.20833 12.25 4.95833Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.0835 6.41667H7.5835"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.0835 9.33333H5.61183"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.4165 10.3542C13.4165 10.9258 13.2532 11.4742 12.9732 11.9292C12.8098 12.2092 12.6057 12.4542 12.3665 12.6525C11.8298 13.1308 11.1298 13.4167 10.354 13.4167C9.68317 13.4167 9.06483 13.2008 8.56317 12.8333C8.23067 12.5942 7.95068 12.285 7.73484 11.9292C7.45484 11.4742 7.2915 10.9258 7.2915 10.3542C7.2915 9.39167 7.73484 8.52248 8.44067 7.96832C8.96567 7.54248 9.6365 7.29167 10.354 7.29167C11.0715 7.29167 11.7307 7.53667 12.2498 7.95084C12.9615 8.51084 13.4165 9.38 13.4165 10.3542Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.3543 11.8125C10.3543 11.0075 11.0077 10.3542 11.8127 10.3542C11.0077 10.3542 10.3543 9.70083 10.3543 8.89583C10.3543 9.70083 9.701 10.3542 8.896 10.3542C9.701 10.3542 10.3543 11.0075 10.3543 11.8125Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

