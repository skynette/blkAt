import { Image, MoreVertical, Paperclip } from 'lucide-react'
import { useState } from 'react'

interface MediaMessage {
    id: string
    sender: {
        name: string
        avatar: string
    }
    content: {
        text?: string
        media?: {
            type: 'image'
            url: string
            aspectRatio?: number
        }
    }
    timestamp: string
    status: 'sent' | 'delivered' | 'read'
    isSender: boolean
}

interface ChatMediaInterfaceProps {
    recipient: {
        name: string
        avatar: string
        lastSeen: string
        isOnline: boolean
    }
}

export default function Component({
    recipient = {
        name: "Martha Ogbole",
        avatar: "/placeholder.svg",
        lastSeen: "4 days ago",
        isOnline: true
    }
}: ChatMediaInterfaceProps) {
    const [messages] = useState<MediaMessage[]>([
        {
            id: '1',
            sender: {
                name: 'Temidayo Folajin',
                avatar: '/placeholder.svg'
            },
            content: {
                text: 'Brainstorming and designing a new approach to accessing and managing financial loans. I implemented this design...',
                media: {
                    type: 'image',
                    url: '/placeholder.svg',
                    aspectRatio: 16 / 9
                }
            },
            timestamp: '12:00PM',
            status: 'read',
            isSender: true
        },
        {
            id: '2',
            sender: {
                name: 'Temidayo Folajin',
                avatar: '/placeholder.svg'
            },
            content: {
                text: 'Brainstorming and designing a new approach to accessing and managing financial loans. I implemented this design...',
                media: {
                    type: 'image',
                    url: '/placeholder.svg',
                    aspectRatio: 16 / 9
                }
            },
            timestamp: '12:00PM',
            status: 'delivered',
            isSender: true
        }
    ])

    const [newMessage, setNewMessage] = useState('')
    const [showMediaUpload, setShowMediaUpload] = useState(false)

    return (
        <div className="flex h-full flex-col bg-white">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <img
                            src={recipient.avatar}
                            alt=""
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        {recipient.isOnline && (
                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                        )}
                    </div>
                    <div>
                        <h2 className="font-medium">{recipient.name}</h2>
                        <p className="text-sm text-gray-500">
                            Last online {recipient.lastSeen}
                        </p>
                    </div>
                </div>
                <button className="rounded-full p-2 hover:bg-gray-100">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                <div className="mx-auto w-24 rounded-full bg-gray-100 px-4 py-1 text-center text-sm text-gray-500">
                    Today, 12:00 PM
                </div>

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
                    >
                        {!message.isSender && (
                            <img
                                src={message.sender.avatar}
                                alt=""
                                className="mr-2 h-8 w-8 self-end rounded-full object-cover"
                            />
                        )}
                        <div className={`relative max-w-sm rounded-2xl ${message.isSender ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
                            }`}>
                            {message.content.text && (
                                <div className="px-4 pt-3">
                                    <p className="font-medium">{message.sender.name}</p>
                                    <p className="text-sm">{message.content.text}</p>
                                </div>
                            )}
                            {message.content.media && (
                                <div className="mt-2 overflow-hidden">
                                    <img
                                        src={message.content.media.url}
                                        alt=""
                                        className="aspect-video w-full object-cover"
                                    />
                                </div>
                            )}
                            <div className={`px-4 pb-3 pt-2 text-xs ${message.isSender ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                <div className="flex items-center gap-1">
                                    {message.status === 'delivered' && (
                                        <span className="h-2 w-2 rounded-full bg-yellow-500" />
                                    )}
                                    {message.status === 'read' && (
                                        <span className="h-2 w-2 rounded-full bg-green-500" />
                                    )}
                                    <span>{message.timestamp}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Media Upload Interface */}
            {showMediaUpload && (
                <div className="border-t p-4">
                    <div className="rounded-lg border-2 border-dashed border-gray-300 p-6">
                        <div className="flex flex-col items-center">
                            <Image className="mb-2 h-8 w-8 text-gray-400" />
                            <p className="mb-1 text-sm font-medium">Drop your files here</p>
                            <p className="text-xs text-gray-500">Maximum file size: 50MB</p>
                            <button
                                className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                                onClick={() => setShowMediaUpload(false)}
                            >
                                Choose Files
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Message Input */}
            <div className="border-t p-4">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setShowMediaUpload(!showMediaUpload)}
                    >
                        <Paperclip className="h-5 w-5" />
                    </button>
                    <input
                        type="text"
                        placeholder="Type in your comment"
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-600"
                        onClick={() => {
                            setNewMessage('')
                            setShowMediaUpload(false)
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}