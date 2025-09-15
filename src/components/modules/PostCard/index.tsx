"use client"

import React from "react"
import { CardProps } from "@heroui/react"
import { Post } from "@/models/Post/types/post"
import { ButtonStyled, CardStyled } from "@/components/styled"
import Link from "next/link"

interface PostCardProps extends CardProps {
    post: Post
    onUpdate: (post: Post) => void
    onDelete: (post: Post) => void
}

function PostCardComponent({ post, onUpdate, onDelete }: PostCardProps) {
    return (
        <CardStyled className="flex flex-col justify-between p-4">
            <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                {post.body && (
                    <p className="text-sm mt-2 whitespace-pre-wrap break-words text-gray-600">
                        {post.body}
                    </p>
                )}
            </div>
            <div className="flex gap-2 justify-end mt-4">
                <Link href={`/posts/${post.id}`}>
                    <ButtonStyled color="primary" size="sm">
                        View detail
                    </ButtonStyled>
                </Link>
                {onUpdate && (
                    <ButtonStyled size="sm" onPress={() => onUpdate(post)}>
                        Update
                    </ButtonStyled>
                )}
                {onDelete && (
                    <ButtonStyled size="sm" onPress={() => onDelete(post)}>
                        Delete
                    </ButtonStyled>
                )}
            </div>
        </CardStyled>
    )
}

export const PostCard = React.memo(PostCardComponent)
