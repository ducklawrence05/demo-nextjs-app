"use client"
import React from "react"
import { useCreatePostDisclosureSingleton } from "@/hooks"
import { ModalBody, ModalContent, ModalHeader } from "@heroui/react"
import { ModalStyled } from "@/components/styled"
import { CreatePostForm } from "@/components/shared"

export function CreatePostModal() {
    const { isOpen, onOpenChange, onClose } = useCreatePostDisclosureSingleton()

    return (
        <ModalStyled isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Create Post</ModalHeader>
                <ModalBody>
                    <CreatePostForm onSuccess={onClose} />
                </ModalBody>
            </ModalContent>
        </ModalStyled>
    )
}
