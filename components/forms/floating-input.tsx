import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { forwardRef } from "react"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: LucideIcon
    error?: boolean
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
    ({ label, icon: Icon, className, type, error, ...props }, ref) => {
        return (
            <div className="relative">
                <Input
                    type={type}
                    className={cn(
                        "h-[50px] bg-[#fafafa] border-[#eeeeee] rounded-xl peer placeholder:text-transparent",
                        "focus:border-[#eeeeee] focus:ring-0 focus:ring-offset-0",
                        "focus-visible:ring-0 focus-visible:ring-offset-0 pt-4 focus:pt-4 not-placeholder-shown:pt-4",
                        Icon ? "pr-3 not-placeholder-shown:pl-10" : "px-4",
                        error && [
                            "border-[#FF3B30]",
                            "focus:border-[#FF3B30]",
                            "text-[#FF3B30]",
                            "focus:text-[#FF3B30]"
                        ],
                        className
                    )}
                    placeholder={label}
                    ref={ref}
                    {...props}
                />
                {Icon && (
                    <Icon className={cn(
                        "absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#999999] transition-all duration-200 pointer-events-none peer-focus:top-3 peer-focus:h-[14px] peer-focus:w-[14px] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:h-[14px] peer-[:not(:placeholder-shown)]:w-[14px]",
                        error && "text-[#FF3B30]",
                    )} />
                )}
                <span
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 text-[#999999] transition-all duration-200 pointer-events-none",
                        "peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#666666]",
                        "peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#666666]",
                        Icon ? "left-10 peer-focus:left-10 peer-[:not(:placeholder-shown)]:left-10" : "left-4 peer-focus:left-4 peer-[:not(:placeholder-shown)]:left-4",
                        error && "text-[#FF3B30] peer-focus:text-[#FF3B30] peer-[:not(:placeholder-shown)]:text-[#FF3B30]"
                    )}
                >
                    {label}
                </span>
            </div>
        )
    }
)
FloatingInput.displayName = "FloatingInput"

export { FloatingInput }

