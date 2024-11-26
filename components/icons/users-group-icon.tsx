import { IconProps } from "@/types/icon"

export const UsersGroupIcon: React.FC<IconProps> = ({
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
                d="M13.5001 5.37C13.4551 5.3625 13.4026 5.3625 13.3576 5.37C12.3226 5.3325 11.4976 4.485 11.4976 3.435C11.4976 2.3625 12.3601 1.5 13.4326 1.5C14.5051 1.5 15.3676 2.37 15.3676 3.435C15.3601 4.485 14.5351 5.3325 13.5001 5.37Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.7276 10.83C13.7551 11.0025 14.8876 10.8225 15.6826 10.29C16.7401 9.585 16.7401 8.43 15.6826 7.725C14.8801 7.1925 13.7326 7.01249 12.7051 7.19249"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.47736 5.37C4.52236 5.3625 4.57486 5.3625 4.61986 5.37C5.65486 5.3325 6.47986 4.485 6.47986 3.435C6.47986 2.3625 5.61736 1.5 4.54486 1.5C3.47236 1.5 2.60986 2.37 2.60986 3.435C2.61736 4.485 3.44236 5.3325 4.47736 5.37Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.25008 10.83C4.22258 11.0025 3.09008 10.8225 2.29508 10.29C1.23758 9.585 1.23758 8.43 2.29508 7.725C3.09758 7.1925 4.24508 7.01249 5.27258 7.19249"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.00006 10.9725C8.95506 10.965 8.90256 10.965 8.85756 10.9725C7.82256 10.935 6.99756 10.0875 6.99756 9.03751C6.99756 7.96501 7.86006 7.10251 8.93256 7.10251C10.0051 7.10251 10.8676 7.97251 10.8676 9.03751C10.8601 10.0875 10.0351 10.9425 9.00006 10.9725Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.81754 13.335C5.76004 14.04 5.76004 15.195 6.81754 15.9C8.01754 16.7025 9.98254 16.7025 11.1825 15.9C12.24 15.195 12.24 14.04 11.1825 13.335C9.99004 12.54 8.01754 12.54 6.81754 13.335Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

