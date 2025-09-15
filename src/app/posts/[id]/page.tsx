import React from "react"
import { PostDetailView } from "@/components"

export default async function PostDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const postId = Number(id)

    return <PostDetailView postId={postId} />
}
