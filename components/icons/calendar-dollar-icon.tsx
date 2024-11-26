import { IconProps } from "@/types/icon"

export const CalendarDollarIcon: React.FC<IconProps> = ({
    size = 14,
    color = "#EB1D25",
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
                d="M4.6665 1.1665V2.9165"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.3335 1.1665V2.9165"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.33333 2.0415C11.2758 2.1465 12.25 2.88734 12.25 5.629V9.234C12.25 11.6373 11.6667 12.839 8.75 12.839H5.25C2.33333 12.839 1.75 11.6373 1.75 9.234V5.629C1.75 2.88734 2.72417 2.15234 4.66667 2.0415H9.33333Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.1043 10.2666H1.896"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.99984 4.8125C6.28234 4.8125 5.67567 5.20333 5.67567 5.96167C5.67567 6.32333 5.84484 6.5975 6.1015 6.7725C5.74567 6.9825 5.5415 7.32083 5.5415 7.7175C5.5415 8.44083 6.09567 8.89 6.99984 8.89C7.89817 8.89 8.45817 8.44083 8.45817 7.7175C8.45817 7.32083 8.254 6.97667 7.89234 6.7725C8.15484 6.59167 8.31817 6.32333 8.31817 5.96167C8.31817 5.20333 7.71734 4.8125 6.99984 4.8125ZM6.99984 6.46917C6.6965 6.46917 6.47484 6.28833 6.47484 6.0025C6.47484 5.71083 6.6965 5.54167 6.99984 5.54167C7.30317 5.54167 7.52484 5.71083 7.52484 6.0025C7.52484 6.28833 7.30317 6.46917 6.99984 6.46917ZM6.99984 8.16667C6.61484 8.16667 6.33484 7.97417 6.33484 7.62417C6.33484 7.27417 6.61484 7.0875 6.99984 7.0875C7.38484 7.0875 7.66484 7.28 7.66484 7.62417C7.66484 7.97417 7.38484 8.16667 6.99984 8.16667Z"
                fill={color}
            />
        </svg>
    )
}

