import React from "react"
import { ButtonStyled, PostDetailView } from "@/components"
import Link from "next/link"
import { useParams } from "next/navigation"

export default async function PostDetailPage() {
    const { id } = useParams()
    const postId = Number(id)

    return (
        <div>
            <PostDetailView postId={postId} />
            <Link href={"/posts"}>
                <ButtonStyled>Back to Post list page</ButtonStyled>
            </Link>
        </div>
    )
}
