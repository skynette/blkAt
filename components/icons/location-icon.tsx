import { IconProps } from "@/types/icon"

export const LocationIcon: React.FC<IconProps> = ({
    size = 14,
    color = "#0075FF",
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
                d="M7.00018 7.83434C8.00533 7.83434 8.82018 7.01949 8.82018 6.01434C8.82018 5.00918 8.00533 4.19434 7.00018 4.19434C5.99502 4.19434 5.18018 5.00918 5.18018 6.01434C5.18018 7.01949 5.99502 7.83434 7.00018 7.83434Z"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            <path
                d="M2.11182 4.95234C3.26099 -0.099328 10.7452 -0.0934946 11.8885 4.95817C12.5593 7.92151 10.716 10.4298 9.10016 11.9815C7.92766 13.1132 6.07266 13.1132 4.89432 11.9815C3.28432 10.4298 1.44099 7.91567 2.11182 4.95234Z"
                stroke={color}
                strokeWidth={strokeWidth}
            />
        </svg>
    )
}

