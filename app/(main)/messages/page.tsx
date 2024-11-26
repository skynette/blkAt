import React from 'react'
import { Messages } from '../../../components/messages/messages'
import { Sidebar } from '../../../components/messages/sidebar'

interface Message {
    id: number
    sender: {
        name: string
        avatar: string
    }
    content: string
    date: string
}

const MessagesPage: React.FC = () => {
    // In a real application, you might fetch this data from an API
    const messages: Message[] = [
        {
            id: 1,
            sender: {
                name: 'Temidayo Folajin',
                avatar: '/placeholder.svg'
            },
            content: 'Yes, I would love to be your mentor...',
            date: '28 Jun'
        },
        {
            id: 2,
            sender: {
                name: 'Martha Ogbole',
                avatar: '/placeholder.svg'
            },
            content: "I've forwarded my application to ...",
            date: '28 Jun'
        },
        {
            id: 3,
            sender: {
                name: 'Temidayo Folajin',
                avatar: '/placeholder.svg'
            },
            content: 'Yes, I would love to be your mentor...',
            date: '28 Jun'
        }
    ]

    const user = {
        name: "j",
        followers: 2,
        avatar: "url"
    }

    return (
        <>
        <Sidebar user={user}/>
        <Messages messages={messages} />
        </>
    )
}


export default MessagesPage