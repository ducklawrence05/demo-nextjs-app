import { Post } from "../types/post"

export type GetPostsResponse = Post[]

// create post
export type CreatePostRequest = {
    title: string
    body?: string
}

export type CreatePostResponse = Post

// update post
export type UpdatePostRequest = {
    id: number
    title: string
    body?: string
}

export type UpdatePostResponse = Post
