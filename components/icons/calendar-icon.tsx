import { IconProps } from "@/types/icon"

export const CalendarIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = "#4E4E4E",
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
        d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.91 14.64 21.16 15.65 21.98C15.44 22 15.22 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.52002 7.10999H21.48"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52002 2.10999V6.96997"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.48 2.10999V6.52002"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 18.5C23 19.85 22.4 21.05 21.47 21.88C20.67 22.57 19.64 23 18.5 23C17.42 23 16.42 22.62 15.65 21.98C14.64 21.16 14 19.91 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7799 17.09V18.78L17.3799 19.62"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

