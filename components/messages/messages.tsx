import { Search } from 'lucide-react'

interface Message {
  id: number
  sender: {
    name: string
    avatar: string
  }
  content: string
  date: string
}

interface MessagesProps {
  messages: Message[]
}

export function Messages({ messages }: MessagesProps) {
  return (
    <main className="ml-64 flex h-[calc(100vh-3rem)] pt-4">
      <div className="flex-1 border-r px-4">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Messages</h1>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4 flex gap-4 border-b">
          <button className="border-b-2 border-gray-900 pb-4 text-sm font-medium">
            All <span className="ml-1 rounded-full bg-red-500 px-2 text-xs text-white">100</span>
          </button>
          <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-900">
            Unread
          </button>
          <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-900">
            Archived
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search people"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-400"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="space-y-1">
          {messages.map((message) => (
            <button
              key={message.id}
              className="flex w-full items-start gap-3 rounded-lg p-3 text-left hover:bg-gray-100"
            >
              <img
                src={message.sender.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1 overflow-hidden">
                <p className="font-medium">{message.sender.name}</p>
                <p className="truncate text-sm text-gray-500">{message.content}</p>
              </div>
              <span className="shrink-0 text-xs text-gray-500">{message.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="mb-4 rounded-xl bg-red-100 p-4">
          <svg
            className="mx-auto mb-2 h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-semibold">Start new message</h2>
        <p className="text-center text-sm text-gray-500">
          Messages sent after connecting with a connection will appear here.
        </p>
        <button className="mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
          Start a chat
        </button>
      </div>
    </main>
  )
}