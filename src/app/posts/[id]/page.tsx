import React from "react"
import { PostDetailView } from "@/components"

export default function PostDetailPage({ params }: { params: { id: string } }) {
    const postId = Number(params.id)

    return <PostDetailView postId={postId} />
}
