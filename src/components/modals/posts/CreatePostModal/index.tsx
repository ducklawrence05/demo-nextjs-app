"use client"
import React from "react"
import { useCreatePostDisclosureSingleton } from "@/hooks"
import { ModalBody, ModalContent, ModalHeader } from "@heroui/react"
import { ModalStyled } from "@/components/styled"
import { CreatePostForm } from "@/components/shared"
import { useTranslation } from "react-i18next"

export function CreatePostModal() {
    const { t } = useTranslation()
    const { isOpen, onOpenChange, onClose } = useCreatePostDisclosureSingleton()

    return (
        <ModalStyled isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{t("post.create")}</ModalHeader>
                <ModalBody>
                    <CreatePostForm onSuccess={onClose} />
                </ModalBody>
            </ModalContent>
        </ModalStyled>
    )
}
