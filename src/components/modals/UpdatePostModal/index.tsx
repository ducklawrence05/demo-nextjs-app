"use client"
import React from "react"
import { ModalBody, ModalContent, ModalHeader } from "@heroui/react"
import { ModalStyled } from "@/components/styled"
import { UpdatePostForm } from "@/components/shared"
import { UpdatePostRequest } from "@/models/Post/schema/post"

export function UpdatePostModal({
    post,
    isOpen,
    onClose
}: {
    post: UpdatePostRequest | null
    isOpen: boolean
    onClose: () => void
}) {
    if (!post) return null

    return (
        <ModalStyled isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Update Post</ModalHeader>
                <ModalBody>
                    <UpdatePostForm post={post} onSuccess={onClose} />
                </ModalBody>
            </ModalContent>
        </ModalStyled>
    )
}
