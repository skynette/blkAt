import { FeedContent } from '../../../components/feed/feed-content'
import { SuggestedConnections } from '../../../components/feed/suggested-connections'
import { Sidebar } from '../../../components/layout/sidebar'

export default function FeedPage() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-grow p-6">
                <FeedContent />
            </main>
            <aside className="w-80 p-6 bg-white border-l border-gray-200">
                <SuggestedConnections />
            </aside>
        </div>
    )
}

