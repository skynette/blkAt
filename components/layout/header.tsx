import { MobileNav } from "./mobile-nav";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-14 items-center">
                <MobileNav />
            </div>
        </header>
    )
}

