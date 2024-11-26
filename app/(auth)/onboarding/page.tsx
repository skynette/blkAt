"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mail, Lock, AlertTriangle, AtSign, Check, X, Pencil, CheckCircle, CheckCircle2 } from 'lucide-react'
import { FloatingInput } from "@/components/forms/floating-input"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function OnboardingPage() {
    const router = useRouter()

    const [showPassword, setShowPassword] = React.useState(false)
    const [activeTab, setActiveTab] = React.useState("signin")
    const [error, setError] = React.useState(false)
    const [trialsLeft, setTrialsLeft] = React.useState(2)

    // Create account states
    const [createStep, setCreateStep] = React.useState(1)
    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [otp, setOtp] = React.useState("")
    const [otpError, setOtpError] = React.useState(false)
    const [isCheckingUsername, setIsCheckingUsername] = React.useState(false)
    const [isUsernameAvailable, setIsUsernameAvailable] = React.useState<boolean | null>(null)
    const [createAccountError, setCreateAccountError] = React.useState(false)


    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordRequirements, setPasswordRequirements] = React.useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    })

    // Validation functions
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const isValidName = (name: string) => {
        return name.trim().length >= 2
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setCreateAccountError(!isValidEmail(e.target.value) && e.target.value !== "")
    }

    const handleEmailSubmit = () => {
        if (isValidEmail(email)) {
            setCreateStep(2)
        }
    }

    const handleNameSubmit = () => {
        if (isValidName(firstName) && isValidName(lastName)) {
            setCreateStep(3)
        }
    }

    const handleUsernameSubmit = () => {
        if (isUsernameAvailable && username.length >= 3) {
            setCreateStep(4)
            // Simulate sending OTP
            setOtpError(false)
        }
    }

    // Simulated username suggestions based on name
    const getUsernameSuggestions = (firstName: string, lastName: string) => {
        const base = firstName.toLowerCase() + lastName.toLowerCase()
        return [
            base,
            `${base}${Math.floor(Math.random() * 10000)}`,
            `${firstName.toLowerCase()}.${lastName.toLowerCase()}`
        ]
    }

    // Simulated username availability check
    const checkUsernameAvailability = React.useCallback(
        async (username: string) => {
            if (username.length < 3) {
                setIsUsernameAvailable(null)
                return
            }

            setIsCheckingUsername(true)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500))
            setIsCheckingUsername(false)
            // For demo, let's say usernames containing 'taken' are unavailable
            setIsUsernameAvailable(!username.includes('taken'))
        },
        []
    )

    React.useEffect(() => {
        const timer = setTimeout(() => {
            checkUsernameAvailability(username)
        }, 300)

        return () => clearTimeout(timer)
    }, [username, checkUsernameAvailability])

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))
    }

    const handleOtpSubmit = () => {
        // Simulate OTP verification
        if (otp === "123456") {
            // Success - proceed to next step
            setCreateStep(5)
            setOtpError(false)
            // Handle successful verification
        } else {
            setOtpError(true)
        }
    }

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText()
            setOtp(text)
        } catch (err) {
            console.error('Failed to read clipboard')
        }
    }



    // Password validation functions
    const checkPasswordRequirements = (value: string) => {
        setPasswordRequirements({
            length: value.length >= 6 && value.length <= 12,
            uppercase: /[A-Z]/.test(value),
            lowercase: /[a-z]/.test(value),
            number: /[0-9]/.test(value),
            special: /[@#$&*^!]/.test(value)
        })
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPassword(value)
        checkPasswordRequirements(value)
        if (confirmPassword) {
            setPasswordError(confirmPassword !== value)
        }
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setConfirmPassword(value)
        setPasswordError(password !== value)
    }

    const isPasswordValid = () => {
        return Object.values(passwordRequirements).every(Boolean) && !passwordError
    }

    const handleCreateAccount = () => {
        if (isPasswordValid()) {
            setCreateStep(6)
        }
    }

    const handleExplore = () => {
        router.push('/feed')
    }

    const renderCreateAccountStep = () => {
        switch (createStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                Create new account
                            </h1>
                            <p className="text-[15px] leading-normal text-[#666666]">
                                Enter your email to get started and create your account.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <FloatingInput
                                type="email"
                                label="Enter email"
                                icon={Mail}
                                error={createAccountError}
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <Button
                            onClick={handleEmailSubmit}
                            className={cn(
                                "w-full h-11 rounded-full text-white transition-all duration-300",
                                isValidEmail(email)
                                    ? "bg-gradient-to-b from-[#333333] to-[#1a1a1a] hover:from-[#1a1a1a] hover:to-black shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0] hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                    : "bg-[#1a1a1a]/10 cursor-not-allowed"
                            )}
                            disabled={!isValidEmail(email)}
                        >
                            Get started
                        </Button>
                    </div>
                )
            case 2:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                Enter your name
                            </h1>
                            <p className="text-[15px] leading-normal text-[#666666]">
                                Let us know your name to personalize your experience
                            </p>
                        </div>

                        <div className="space-y-4">
                            <FloatingInput
                                label="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <FloatingInput
                                label="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <Button
                            onClick={handleNameSubmit}
                            className={cn(
                                "w-full h-11 rounded-full text-white transition-all duration-300",
                                isValidName(firstName) && isValidName(lastName)
                                    ? "bg-gradient-to-b from-[#333333] to-[#1a1a1a] hover:from-[#1a1a1a] hover:to-black shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0] hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                    : "bg-[#1a1a1a]/10 cursor-not-allowed"
                            )}
                            disabled={!isValidName(firstName) || !isValidName(lastName)}
                        >
                            Continue
                        </Button>
                    </div>
                )
            case 3:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                Set your username
                            </h1>
                            <p className="text-[15px] leading-normal text-[#666666]">
                                Choose a unique username to represent you
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <div className="relative">
                                    <AtSign className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#999999]" />
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        className="h-11 w-full rounded-xl bg-[#fafafa] pl-10 pr-24 border border-[#eeeeee] focus:outline-none focus:ring-0"
                                        placeholder="username"
                                    />
                                    {username && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {isCheckingUsername ? (
                                                <div className="text-[13px] text-[#999999]">Checking...</div>
                                            ) : isUsernameAvailable ? (
                                                <div className="flex items-center gap-1 px-2 py-1 text-[13px] rounded-full bg-[#E2F4E1] text-[#0FBA00]">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    Available
                                                </div>
                                            ) : isUsernameAvailable === false ? (
                                                <div className="flex items-center gap-1 text-[13px] text-[#FF3B30]">
                                                    <X className="h-4 w-4" />
                                                    Unavailable
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {username && !isUsernameAvailable && !isCheckingUsername && (
                                <div className="flex justify-between w-full">
                                    <div className="text-[13px] text-[#666666]">
                                        Suggested usernames:
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {getUsernameSuggestions(firstName, lastName).map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => setUsername(suggestion)}
                                                className="text-[13px] text-[#0066FF] hover:underline"
                                            >
                                                {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Button
                            onClick={handleUsernameSubmit}
                            className={cn(
                                "w-full h-11 rounded-full text-white transition-all duration-300",
                                isUsernameAvailable && username.length >= 3
                                    ? "bg-gradient-to-b from-[#333333] to-[#1a1a1a] hover:from-[#1a1a1a] hover:to-black shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0] hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                    : "bg-[#1a1a1a]/10 cursor-not-allowed"
                            )}
                            disabled={!isUsernameAvailable || username.length < 3}
                        >
                            Continue
                        </Button>
                    </div>
                )
            case 4:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                Verify One-Time-Password
                            </h1>
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] leading-normal text-[#666666]">
                                    We sent a OTP to {email.replace(/(.{2})(.+)(@.+)/, "$1***$3")}
                                </p>
                            </div>
                            <button
                                onClick={() => setCreateStep(1)}
                                className="inline-flex items-center text-[13px] text-black hover:text-black rounded-full bg-gray-100 px-2 py-1"
                            >
                                <Pencil className="h-3 w-3 mr-1" />
                                Edit email
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <FloatingInput
                                    type="text"
                                    label="Enter code"
                                    value={otp}
                                    onChange={(e) => {
                                        setOtp(e.target.value.replace(/[^0-9]/g, ''))
                                        setOtpError(false)
                                    }}
                                    maxLength={6}
                                    error={otpError}
                                // className="text-center text-lg tracking-[0.2em] font-medium"
                                />
                                <button
                                    onClick={handlePaste}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-medium hover:text-black"
                                >
                                    <span className="inline-flex items-center justify-center w-[34px] h-[22px] rounded-full border border-[#e6e6e6] px-1">
                                        Paste
                                    </span>
                                </button>
                            </div>

                            <div className="flex items-center justify-between text-[13px]">
                                <span className="text-[#666666]">Did not receive your code yet?</span>
                                <button className="font-medium text-black hover:underline">
                                    Resend
                                </button>
                            </div>
                        </div>

                        <Button
                            onClick={handleOtpSubmit}
                            className={cn(
                                "w-full h-11 rounded-full text-white transition-all duration-300",
                                otp.length === 6
                                    ? "bg-gradient-to-b from-[#333333] to-[#1a1a1a] hover:from-[#1a1a1a] hover:to-black shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0] hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                    : "bg-[#1a1a1a]/10 cursor-not-allowed"
                            )}
                            disabled={otp.length !== 6}
                        >
                            Verify
                        </Button>
                    </div>
                )
            case 5:
                return (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                Select your password
                            </h1>
                            <p className="text-[15px] leading-normal text-[#666666]">
                                Create a strong password to keep your account secure
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <FloatingInput
                                    type={showPassword ? "text" : "password"}
                                    label="Enter password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    error={passwordError}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-medium hover:text-black"
                                >
                                    <span className={cn(
                                        "inline-flex items-center justify-center w-[34px] h-[22px] rounded-full border",
                                        passwordError ? "border-[#FF3B30]" : "border-[#e6e6e6]"
                                    )}>
                                        {showPassword ? "Hide" : "Show"}
                                    </span>
                                </button>
                            </div>

                            <div className="relative">
                                <FloatingInput
                                    type={showConfirmPassword ? "text" : "password"}
                                    label="Enter password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    error={passwordError}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-medium hover:text-black"
                                >
                                    <span className={cn(
                                        "inline-flex items-center justify-center w-[34px] h-[22px] rounded-full border",
                                        passwordError ? "border-[#FF3B30]" : "border-[#e6e6e6]"
                                    )}>
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </span>
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className={cn(
                                        "flex items-center gap-2 text-[13px]",
                                        passwordRequirements.length ? "text-[#34C759]" : "text-[#666666]"
                                    )}>
                                        <CheckCircle2 className="h-4 w-4" />
                                        6-12 characters
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-2 text-[13px]",
                                        passwordRequirements.uppercase ? "text-[#34C759]" : "text-[#666666]"
                                    )}>
                                        <CheckCircle2 className="h-4 w-4" />
                                        Upper case
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-2 text-[13px]",
                                        passwordRequirements.lowercase ? "text-[#34C759]" : "text-[#666666]"
                                    )}>
                                        <CheckCircle2 className="h-4 w-4" />
                                        Lower case
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-2 text-[13px]",
                                        passwordRequirements.number ? "text-[#34C759]" : "text-[#666666]"
                                    )}>
                                        <CheckCircle2 className="h-4 w-4" />
                                        Numeric character
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-2 text-[13px]",
                                        passwordRequirements.special ? "text-[#34C759]" : "text-[#666666]"
                                    )}>
                                        <CheckCircle2 className="h-4 w-4" />
                                        Special characters @#$&*^!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleCreateAccount}
                            className={cn(
                                "w-full h-11 rounded-full text-white transition-all duration-300",
                                isPasswordValid()
                                    ? "bg-gradient-to-b from-primary to-[#7a0202] hover:from-primary-hover hover:to-[#7a0202] shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0] hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                    : "bg-[#1a1a1a]/10 cursor-not-allowed"
                            )}
                            disabled={!isPasswordValid()}
                        >
                            Create account
                        </Button>
                    </div>
                )
            default:
                return null
        }
    }

    if (createStep === 6) {
        return (
            <div className="w-full mx-auto max-w-[440px] space-y-8 text-center flex flex-col items-center justify-center">
                <div className="flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images/success.svg"
                            alt="Success Icon"
                            width={93}
                            height={93}
                            className="h-full w-auto"
                            priority
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                        Welcome to BlackAt
                    </h1>
                    <p className="text-[15px] leading-normal text-[#666666]">
                        Your account has been created successfully
                    </p>
                </div>

                <Button
                    onClick={handleExplore}
                    className="w-[60%] h-11 rounded-full text-white
                                 bg-gradient-to-b from-[#333333] to-[#1a1a1a] 
                                 hover:from-[#1a1a1a] hover:to-black 
                                 transition-all duration-300
                                 shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0]
                                 hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                >
                    Explore
                </Button>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-[440px]">
                <div className="flex justify-start mb-4">
                    <div className="inline-flex bg-[#f5f5f5] rounded-full p-1">
                        <button
                            onClick={() => {
                                setActiveTab("signin")
                                setCreateStep(1)
                            }}
                            className={cn(
                                "px-2 py-1 text-sm font-medium rounded-full transition-all",
                                activeTab === "signin"
                                    ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                                    : "bg-transparent text-[#666666] hover:bg-white/50"
                            )}
                        >
                            Sign in
                        </button>
                        <button
                            onClick={() => setActiveTab("create")}
                            className={cn(
                                "px-2 py-1 text-sm font-medium rounded-full transition-all",
                                activeTab === "create"
                                    ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                                    : "bg-transparent text-[#666666] hover:bg-white/50"
                            )}
                        >
                            Create account
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className={cn(
                        "rounded-[20px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] min-w-[425px] mx-auto",
                        "relative z-10",
                        (error || createAccountError) && "rounded-b-none shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_0_0_#FF3B30]"
                    )}>
                        {activeTab === "signin" ? (
                            // Sign in form content (unchanged)
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-black">
                                        Sign in with email
                                    </h1>
                                    <p className="text-[15px] leading-normal text-[#666666]">
                                        Access your account quickly and securely using your email.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <FloatingInput
                                        type="email"
                                        label="Enter email"
                                        icon={Mail}
                                        error={error}
                                    />
                                    <div className="relative">
                                        <FloatingInput
                                            type={showPassword ? "text" : "password"}
                                            label="Enter password"
                                            icon={Lock}
                                            error={error}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className={cn(
                                                "absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-medium hover:text-black",
                                                error ? "text-[#FF3B30]" : "text-[#666666]"
                                            )}
                                        >
                                            <span className={cn(
                                                "inline-flex items-center justify-center w-[34px] h-[22px] rounded-full border",
                                                error ? "border-[#FF3B30]" : "border-[#e6e6e6]"
                                            )}>
                                                {showPassword ? "Hide" : "Show"}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-11 rounded-full text-white
                                     bg-gradient-to-b from-[#333333] to-[#1a1a1a] 
                                     hover:from-[#1a1a1a] hover:to-black 
                                     transition-all duration-300
                                     shadow-[0_1px_3px_0_#e0e0e0,0_1px_2px_-1px_#e0e0e0]
                                     hover:shadow-[0_2px_4px_0_#d0d0d0,0_2px_3px_-2px_#d0d0d0]"
                                >
                                    Sign in
                                </Button>

                                <div className="flex items-center justify-between text-[13px]">
                                    <span className="text-[#666666]">Forgot password?</span>
                                    <button className="font-medium text-black hover:underline">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        ) : (
                            renderCreateAccountStep()
                        )}
                    </div>

                    {error && activeTab === "signin" && (
                        <div className="relative -mt-[12px] flex items-center justify-between bg-[#FF3B30] text-white px-4 py-3 text-[13px] rounded-b-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2 mt-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Incorrect email or password. Try again.</span>
                            </div>
                            <span>{trialsLeft} trials left</span>
                        </div>
                    )}

                    {createAccountError && activeTab === "create" && createStep === 1 && (
                        <div className="relative -mt-[12px] flex items-center justify-between bg-[#FF3B30] text-white px-4 py-3 text-[13px] rounded-b-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2 mt-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Please enter a valid email address.</span>
                            </div>
                        </div>
                    )}

                    {otpError && activeTab === "create" && createStep === 4 && (
                        <div className="relative -mt-[12px] flex items-center justify-between bg-[#FF3B30] text-white px-4 py-3 text-[13px] rounded-b-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2 mt-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>The OTP you entered is incorrect. Please try again.</span>
                            </div>
                        </div>
                    )}

                    {passwordError && activeTab === "create" && createStep === 5 && (
                        <div className="relative -mt-[12px] flex items-center justify-between bg-[#FF3B30] text-white px-4 py-3 text-[13px] rounded-b-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2 mt-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Your passwords don't match. Please try again.</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

