import Link from 'next/link'
import { Home, MessageSquare, Users, Bell, Menu } from 'lucide-react'

export function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
            <div className="flex items-center mb-6">
                <img src="/placeholder.svg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <h2 className="font-semibold">Temidayo Folajin</h2>
                    <p className="text-sm text-gray-500">View Profile</p>
                </div>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link href="/feed" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <Home className="mr-3 h-5 w-5" />
                            Feeds
                        </Link>
                    </li>
                    <li>
                        <Link href="/messages" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <MessageSquare className="mr-3 h-5 w-5" />
                            Messages
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <Users className="mr-3 h-5 w-5" />
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <Bell className="mr-3 h-5 w-5" />
                            My connections
                        </Link>
                    </li>
                    <li>
                        <Link href="/more" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <Menu className="mr-3 h-5 w-5" />
                            More
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

