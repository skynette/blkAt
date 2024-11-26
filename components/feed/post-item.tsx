import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, MessageSquare, Repeat2, MoreHorizontal } from 'lucide-react'

interface PostItemProps {
    post: {
        author: {
            name: string
            username: string
            avatar: string
        }
        content: string
        image?: string
        likes: number
        comments: number
        location: string
    }
}

export function PostItem({ post }: PostItemProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <h3 className="font-semibold">{post.author.name}</h3>
                            <p className="text-sm text-gray-500">{post.author.username}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
                <p className="mb-4">{post.content}</p>
                {post.image && (
                    <img src={post.image} alt="Post content" className="w-full rounded-md mb-4" />
                )}
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t">
                <div className="flex space-x-4">
                    <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        Like
                    </Button>
                    <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Repeat2 className="h-4 w-4 mr-2" />
                        Repost
                    </Button>
                </div>
                <span className="text-sm text-gray-500">{post.location}</span>
            </CardFooter>
        </Card>
    )
}

