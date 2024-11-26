import { IconProps } from "@/types/icon"

export const VideoPlayIcon: React.FC<IconProps> = ({
    size = 22,
    color = "#959595",
    className = "",
    strokeWidth = 1.5
}) => {
    return (
        <svg
            width={size}
            height={size * 19 / 22}
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8.25016 17.4167H13.7502C18.3335 17.4167 20.1668 15.8333 20.1668 11.875V7.12501C20.1668 3.16668 18.3335 1.58334 13.7502 1.58334H8.25016C3.66683 1.58334 1.8335 3.16668 1.8335 7.12501V11.875C1.8335 15.8333 3.66683 17.4167 8.25016 17.4167Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.3418 9.49999V8.32833C8.3418 6.81624 9.5793 6.20666 11.0918 6.95874L12.2651 7.54458L13.4385 8.13041C14.951 8.88249 14.951 10.1175 13.4385 10.8696L12.2651 11.4554L11.0918 12.0412C9.5793 12.7933 8.3418 12.1758 8.3418 10.6717V9.49999Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

