"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Globe, Image, Calendar } from 'lucide-react'

export function CreatePost() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card>
            <CardContent className="p-4">
                {!isExpanded ? (
                    <div className="flex items-center space-x-4">
                        <img src="/placeholder.svg" alt="Profile" className="w-10 h-10 rounded-full" />
                        <Input
                            placeholder="Create a post"
                            className="flex-grow"
                            onFocus={() => setIsExpanded(true)}
                        />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <img src="/placeholder.svg" alt="Profile" className="w-10 h-10 rounded-full" />
                            <textarea
                                className="flex-grow p-2 border rounded-md"
                                placeholder="What's on your mind?"
                                rows={3}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Public
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Image className="w-4 h-4 mr-2" />
                                    Add media
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Create an event
                                </Button>
                            </div>
                            <Button>Post</Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

