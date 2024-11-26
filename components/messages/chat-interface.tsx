import { MoreVertical, Paperclip } from 'lucide-react'
import { useState } from 'react'

interface Message {
    id: string
    content: string
    timestamp: string
    status: 'sent' | 'received' | 'read'
    sender: 'user' | 'other'
}

interface ChatInterfaceProps {
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
}: ChatInterfaceProps) {
    const [messages] = useState<Message[]>([
        {
            id: '1',
            content: 'Thank you very much Mr Temidayo! Your explanation was great. But I did not quite understand the method you used',
            timestamp: '12:00 PM',
            status: 'received',
            sender: 'other'
        },
        {
            id: '2',
            content: 'Thank you very much Mr Temidayo! Your explanation was great. But I did not quite understand the method you used',
            timestamp: '12:00 PM',
            status: 'read',
            sender: 'user'
        },
        {
            id: '3',
            content: 'Thank you very much Mr Temidayo! Your explanation was great',
            timestamp: '12:00 PM',
            status: 'sent',
            sender: 'user'
        },
        {
            id: '4',
            content: 'Thank you very much Mr Temidayo! Your explanation was great. But I did not quite understand the method you used',
            timestamp: '12:00 PM',
            status: 'sent',
            sender: 'user'
        },
        {
            id: '5',
            content: 'Thank you very much Mr Temidayo! Your explanation was great. But I did not quite understand the method you used',
            timestamp: '12:00 PM',
            status: 'received',
            sender: 'other'
        }
    ])

    const [newMessage, setNewMessage] = useState('')

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
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        {message.sender === 'other' && (
                            <img
                                src={recipient.avatar}
                                alt=""
                                className="mr-2 h-8 w-8 self-end rounded-full object-cover"
                            />
                        )}
                        <div
                            className={`relative max-w-[70%] rounded-2xl px-4 py-2 ${message.sender === 'user'
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-900'
                                }`}
                        >
                            <p className="text-sm">{message.content}</p>
                            <div
                                className={`mt-1 flex items-center gap-1 text-xs ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                                    }`}
                            >
                                {message.sender === 'user' && (
                                    <>
                                        {message.status === 'read' && (
                                            <span className="h-2 w-2 rounded-full bg-green-500" />
                                        )}
                                        <span className="capitalize">{message.status}</span>
                                    </>
                                )}
                                <span>{message.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="border-t p-4">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <button className="text-gray-500 hover:text-gray-700">
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
                        onClick={() => setNewMessage('')}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}