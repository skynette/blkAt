"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { X, Search, Home, MessageSquare, Calendar, Users, Bell, Settings, MoreHorizontal, BookOpen, Users2, Briefcase, GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const mainMenuItems = [
        { href: "/feed", label: "Feeds", icon: Home },
        { href: "/messages", label: "Messages", icon: MessageSquare },
        { href: "/events", label: "Events", icon: Calendar },
        { href: "/connections", label: "My connections", icon: Users },
    ]

    const moreMenuItems = [
        {
            href: "/mentorship",
            label: "Mentorship",
            icon: BookOpen,
            description: "Take mentorship, book sessions"
        },
        {
            href: "/village",
            label: "My Village",
            icon: Users2,
            description: "Join community of likeminds, connect and create magic"
        },
        {
            href: "/jobs",
            label: "Jobs",
            icon: Briefcase,
            description: "Manage your job activities"
        },
        {
            href: "/masterclass",
            label: "Masterclass",
            icon: GraduationCap,
            description: "Select a Masterclass"
        },
    ]

    const bottomMenuItems = [
        { href: "/notifications", label: "Notifications", icon: Bell },
        { href: "/settings", label: "Settings", icon: Settings },
    ]

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <MoreHorizontal className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src="/placeholder.svg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="text-left">
                                <div className="font-semibold">Temidayo Folajin</div>
                                <div className="text-sm text-muted-foreground">View Profile</div>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </SheetTitle>
                </SheetHeader>

                <div className="p-4 border-b">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search for people, events"
                            className="pl-8"
                        />
                    </div>
                </div>

                <nav className="p-2">
                    {mainMenuItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-md",
                                    pathname === item.href ? "bg-gray-100" : "hover:bg-gray-100"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                        )
                    })}

                    <button
                        onClick={() => setIsMoreOpen(!isMoreOpen)}
                        className="flex items-center gap-3 px-3 py-2 w-full rounded-md hover:bg-gray-100"
                    >
                        <MoreHorizontal className="h-5 w-5" />
                        More
                    </button>

                    {isMoreOpen && (
                        <div className="ml-2 border-l pl-2 mt-2">
                            {moreMenuItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                                    >
                                        <Icon className="h-5 w-5 mt-0.5" />
                                        <div>
                                            <div>{item.label}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.description}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )}

                    <div className="mt-2 pt-2 border-t">
                        {bottomMenuItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5" />
                                        {item.label}
                                    </div>
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

