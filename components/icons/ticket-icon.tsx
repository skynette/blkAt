import { IconProps } from "@/types/icon"

export const TicketIcon: React.FC<IconProps> = ({
    size = 24,
    color = "#292D32",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5.1499 22C4.7399 22 4.3999 21.66 4.3999 21.25V2.75C4.3999 2.34 4.7399 2 5.1499 2C5.5599 2 5.8999 2.34 5.8999 2.75V21.25C5.8999 21.66 5.5599 22 5.1499 22Z"
                fill={color}
            />
            <path
                opacity="0.4"
                d="M18.02 12.33L16.8 11.11C16.51 10.86 16.34 10.49 16.33 10.08C16.31 9.63 16.49 9.18 16.82 8.85L18.02 7.65C19.06 6.61 19.45 5.61 19.12 4.82C18.8 4.04 17.81 3.61 16.35 3.61H5.15002C4.94002 3.62 4.77002 3.79 4.77002 4V16C4.77002 16.21 4.94002 16.38 5.15002 16.38H16.35C17.79 16.38 18.76 15.94 19.09 15.15C19.42 14.35 19.04 13.36 18.02 12.33Z"
                fill={color}
            />
        </svg>
    )
}

