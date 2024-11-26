'use client'

import { X } from 'lucide-react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface UploadModalProps {
    type: 'media' | 'document'
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function Component({
    type = 'media',
    open = false,
    onOpenChange
}: UploadModalProps) {
    const [text, setText] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (!selectedFile) return

        setFile(selectedFile)

        if (type === 'media' && selectedFile.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(selectedFile)
        }
    }

    const handleClose = () => {
        setText('')
        setFile(null)
        setPreview(null)
        onOpenChange(false)
    }

    const handleDelete = () => {
        setFile(null)
        setPreview(null)
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                        Add {type === 'media' ? 'Media' : 'Document'}
                    </DialogTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4 rounded-full"
                        onClick={handleClose}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {type === 'media' && (
                        <Input
                            type="text"
                            placeholder="Type text here"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="border-0 px-0 text-lg focus-visible:ring-0"
                        />
                    )}

                    {!file && (
                        <label className="group relative flex cursor-pointer flex-col items-center gap-2 rounded-xl bg-gray-50 p-4">
                            <input
                                type="file"
                                accept={type === 'media' ? 'image/*' : '.pdf,.doc,.docx'}
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                                <svg
                                    className="h-6 w-6 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium">
                                    Upload your {type === 'media' ? 'Media' : 'Document'} here
                                </p>
                                <p className="text-xs text-gray-500">Max upload size 20MB</p>
                            </div>
                        </label>
                    )}

                    {file && type === 'media' && preview && (
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-auto"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 rounded-full bg-black/50 hover:bg-black/70"
                                onClick={handleDelete}
                            >
                                <X className="h-4 w-4 text-white" />
                                <span className="sr-only">Remove image</span>
                            </Button>
                        </div>
                    )}

                    {file && type === 'document' && (
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                                    <svg
                                        className="h-5 w-5 text-pink-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">{file.name}</span>
                            </div>
                            <Button
                                variant="ghost"
                                className="text-red-500 hover:text-red-600 hover:bg-transparent"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="flex justify-end">
                    <Button className="rounded-full bg-black px-8 hover:bg-gray-800">
                        Upload
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


// how to use
// const [open, setOpen] = useState(false)
// const [type, setType] = useState<'media' | 'document'>('media')

// // For media upload
// <Button onClick={() => {
//   setType('media')
//   setOpen(true)
// }}>
//   Add Media
// </Button>

// // For document upload
// <Button onClick={() => {
//   setType('document')
//   setOpen(true)
// }}>
//   Add Document
// </Button>

// <Component 
//   type={type}
//   open={open}
//   onOpenChange={setOpen}
// />