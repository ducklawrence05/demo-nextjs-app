"use client"

import { useGetPostById } from "@/hooks"
import React from "react"
import { PostDetailViewSkeleton } from "./Skeleton"
import toast from "react-hot-toast"

export function PostDetailView({ postId }: { postId: number }) {
    const { data: post, isLoading, isError } = useGetPostById({ postId })

    if (isLoading) return <PostDetailViewSkeleton />
    if (isError || !post) {
        toast.error("Post not found")
        return null
    }

    return (
        <div className="min-h-[80vh] min-w-[60vw]">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm mt-2 whitespace-pre-wrap break-words">{post.body}</p>
        </div>
    )
}
