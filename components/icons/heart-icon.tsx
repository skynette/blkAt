import { IconProps } from "@/types/icon"

export const HeartIcon: React.FC<IconProps> = ({
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
                d="M7.3615 12.5571C7.16317 12.6271 6.8365 12.6271 6.63817 12.5571C4.9465 11.9796 1.1665 9.57048 1.1665 5.48715C1.1665 3.68465 2.619 2.22632 4.40984 2.22632C5.4715 2.22632 6.41067 2.73965 6.99984 3.53298C7.589 2.73965 8.534 2.22632 9.58984 2.22632C11.3807 2.22632 12.8332 3.68465 12.8332 5.48715C12.8332 9.57048 9.05317 11.9796 7.3615 12.5571Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

