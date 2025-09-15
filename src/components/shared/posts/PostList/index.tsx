"use client"
import React, { useCallback, useState } from "react"
import { useCreatePostDisclosureSingleton, useDeletePost, useGetAllPosts } from "@/hooks"
import toast from "react-hot-toast"
import { Post } from "@/models/Post/types/post"
import { PostCard } from "@/components/modules"
import { UpdatePostRequest } from "@/models/Post/schema/post"
import { UpdatePostModal } from "@/components/modals"
import { ButtonStyled } from "@/components/styled"
import { Spinner } from "@heroui/react"
import { useTranslation } from "react-i18next"

function PostListComponent() {
    const { t } = useTranslation()
    const { data: posts, isLoading, isError, refetch } = useGetAllPosts()
    const { onOpen: onOpenCreateModal } = useCreatePostDisclosureSingleton()
    const deleteMutation = useDeletePost()

    // update modal
    const [editingPost, setEditingPost] = useState<UpdatePostRequest | null>(null)
    const [isEditingOpen, setIsEditingOpen] = useState<boolean>(false)

    const handleOpenEdit = (post: UpdatePostRequest) => {
        setEditingPost(() => post)
        setIsEditingOpen(() => true)
    }

    const handleCloseEdit = () => {
        setEditingPost(() => null)
        setIsEditingOpen(() => false)
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
            toast.success(t("success.refresh"))
        } catch {
            toast.error(t("failed.refresh"))
        }
    }, [refetch])

    if (isLoading) return <Spinner />
    if (isError || !posts) return <p className="text-red-500">{t("post.failed_to_load_posts")}</p>
    if (posts.length === 0) return <p className="text-gray-500">{t("post.no_posts_available")}</p>

    return (
        <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <ButtonStyled color="primary" onPress={onOpenCreateModal}>
                    {t("post.create")}
                </ButtonStyled>
                <ButtonStyled onPress={handleRefetch}>{t("post.refresh")}</ButtonStyled>
            </div>

            <div className="grid gap-6">
                {Array.isArray(posts) &&
                    posts
                        .slice()
                        .reverse()
                        .map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onUpdate={handleOpenEdit}
                                onDelete={handleDelete}
                            />
                        ))}
            </div>

            {editingPost && (
                <UpdatePostModal
                    post={editingPost}
                    isOpen={isEditingOpen}
                    onClose={handleCloseEdit}
                />
            )}
        </div>
    )
}

export const PostList = React.memo(PostListComponent)
