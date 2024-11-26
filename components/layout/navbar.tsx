import Link from "next/link"
import { Bell, Home, Search, Users2, Briefcase } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileNav } from "./mobile-nav"

interface NavbarProps {
    user: {
        name: string
        followers: number
        avatar: string
    }
}

export function Navbar({ user }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-14 max-w-[1400px] mx-auto items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <MobileNav />
                    <Link href="/" className="hidden items-center space-x-2 md:flex">
                        <span className="font-bold text-xl">BLK@</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/feed"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            FEED
                        </Link>
                        <Link
                            href="/village"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Users2 className="mr-2 h-4 w-4" />
                            MY VILLAGE
                        </Link>
                        <Link
                            href="/jobs"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Briefcase className="mr-2 h-4 w-4" />
                            JOBS
                        </Link>
                    </nav>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center px-6">
                    <div className="flex h-9 w-full max-w-[500px] items-center rounded-md border bg-white px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search for people, events"
                            className="h-9 w-full border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-4 w-4" />
                        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-600 text-[10px] font-medium text-white flex items-center justify-center">
                            2
                        </span>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>
                                {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="hidden md:flex flex-col">
                            <span className="text-sm font-medium leading-none">{user.name}</span>
                            <span className="text-xs text-muted-foreground">{user.followers} Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

