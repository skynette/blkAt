import { CreatePost } from "./create-post"
import { PostItem } from "./post-item"

export function FeedContent() {
    const posts = [
        {
            id: 1,
            author: {
                name: 'Martha Ogbole',
                username: '@marthogbole',
                avatar: '/placeholder.svg'
            },
            content: 'I BELEIVE remote workers Temidayo Folajin some of the most resourceful people you can hire.\n\nWhy?\n\nBecause remote Workers are:',
            likes: 12,
            comments: 129,
            location: 'Lagos, NG'
        },
        {
            id: 2,
            author: {
                name: 'Peter Ukhurebon',
                username: '@peterblack',
                avatar: '/placeholder.svg'
            },
            content: 'I BELEIVE remote workers are some of the most resourceful people you can hire.\n\nWhy?\n\nBecause remote Workers are:',
            image: '/placeholder.svg',
            likes: 12,
            comments: 129,
            location: 'Lagos, NG'
        }
    ]

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <CreatePost />
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

