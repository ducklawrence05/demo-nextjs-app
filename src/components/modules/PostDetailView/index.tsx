"use client"

import { useGetPostById } from "@/hooks"
import React from "react"
import { PostDetailViewSkeleton } from "./Skeleton"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"

export function PostDetailView({ postId }: { postId: number }) {
    const { t } = useTranslation()

    const { data: post, isLoading, isError } = useGetPostById({ postId })

    if (isLoading) return <PostDetailViewSkeleton />
    if (isError || !post) {
        toast.error(t("post.not_found"))
        return null
    }

    return (
        <div>
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm mt-2 whitespace-pre-wrap break-words">{post.body}</p>
        </div>
    )
}
