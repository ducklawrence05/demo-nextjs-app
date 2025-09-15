"use client"
import React from "react"
import { ModalBody, ModalContent, ModalHeader } from "@heroui/react"
import { ModalStyled } from "@/components/styled"
import { UpdatePostForm } from "@/components/shared"
import { UpdatePostRequest } from "@/models/Post/schema/post"
import { useTranslation } from "react-i18next"

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
    const { t } = useTranslation()

    return (
        <ModalStyled isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{t("post.update")}</ModalHeader>
                <ModalBody>
                    <UpdatePostForm post={post} onSuccess={onClose} />
                </ModalBody>
            </ModalContent>
        </ModalStyled>
    )
}
