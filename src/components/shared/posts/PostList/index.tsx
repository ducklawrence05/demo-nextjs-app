"use client"
import React, { useCallback, useState } from "react"
import { useCreatePostDisclosureSingleton, useDeletePost, useGetPosts } from "@/hooks"
import toast from "react-hot-toast"
import { Post } from "@/models/Post/types/post"
import { PostCard } from "@/components/modules"
import { UpdatePostRequest } from "@/models/Post/schema/post"
import { UpdatePostModal } from "@/components/modals"
import { ButtonStyled } from "@/components/styled"
import { Spinner } from "@heroui/react"

export function PostList() {
    const { data: posts, isLoading, isError, refetch } = useGetPosts()
    const { onOpen } = useCreatePostDisclosureSingleton()
    const deleteMutation = useDeletePost()
    const [editingPost, setEditingPost] = useState<UpdatePostRequest | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleEdit = (post: UpdatePostRequest) => {
        setEditingPost(() => post)
        setIsOpen(() => true)
    }

    const handleClose = () => {
        setEditingPost(() => null)
        setIsOpen(() => false)
    }

    const handleDelete = useCallback(
        async (post: Post) => {
            await deleteMutation.mutateAsync(post.id)
        },
        [deleteMutation]
    )

    const handleRefetch = useCallback(async () => {
        try {
            await refetch()
            toast.success("Refreshed!")
        } catch {
            toast.error("Failed to refresh")
        }
    }, [refetch])

    if (isLoading) return <Spinner />
    if (isError || !posts) return <p className="text-red-500">Failed to load posts.</p>
    if (posts.length === 0) return <p className="text-gray-500">No posts available.</p>

    return (
        <div className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <ButtonStyled onPress={onOpen}>Create Post</ButtonStyled>
                <ButtonStyled onPress={handleRefetch}>Refresh Post</ButtonStyled>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(posts) &&
                    posts
                        .slice()
                        .reverse()
                        .map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onUpdate={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
            </div>

            {editingPost && (
                <UpdatePostModal post={editingPost} isOpen={isOpen} onClose={handleClose} />
            )}
        </div>
    )
}
