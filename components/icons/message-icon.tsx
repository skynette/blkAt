import { IconProps } from "@/types/icon"

export const MessageIcon: React.FC<IconProps> = ({
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
                d="M4.95817 11.5013H4.6665C2.33317 11.5013 1.1665 10.918 1.1665 8.00132V5.08466C1.1665 2.75132 2.33317 1.58466 4.6665 1.58466H9.33317C11.6665 1.58466 12.8332 2.75132 12.8332 5.08466V8.00132C12.8332 10.3347 11.6665 11.5013 9.33317 11.5013H9.0415C8.86067 11.5013 8.68567 11.5888 8.57484 11.7347L7.69984 12.9013C7.31484 13.4147 6.68484 13.4147 6.29984 12.9013L5.42484 11.7347C5.3315 11.6063 5.11567 11.5013 4.95817 11.5013Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.0835 5.08466H9.91683"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.0835 8.00128H7.5835"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

