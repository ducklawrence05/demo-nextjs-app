import {
    CreatePostRequest,
    CreatePostResponse,
    GetPostsResponse,
    UpdatePostRequest,
    UpdatePostResponse
} from "@/models/Post/schema/post"
import axiosInstance from "@/utils/axios"

/**
 * GET              BASE_URL/posts
 * GET filter       BASE_URL/posts?title=value
 * GET by id        BASE_URL/posts/:id
 * GET paginate     BASE_URL/posts?_page=2&_limit=10
 * POST             BASE_URL/posts
 * PUT              BASE_URL/posts/:id
 * PATCH            BASE_URL/posts/:id
 * DELETE           BASE_URL/posts/:id
 */

export const postApi = {
    getPosts: async (): Promise<GetPostsResponse> => {
        const res = await axiosInstance.get("/posts")
        const backendData = res.data

        const transformedRes: GetPostsResponse = backendData

        return transformedRes
    },

    create: async (req: CreatePostRequest): Promise<CreatePostResponse> => {
        // create json
        const transformedReq = {
            ...req
        }

        const res = await axiosInstance.post("/posts", transformedReq)
        const backendData = res.data

        const transformedRes: CreatePostResponse = {
            ...backendData
        }

        return transformedRes
    },

    update: async (req: UpdatePostRequest): Promise<UpdatePostResponse> => {
        const transformedReq = { ...req }

        const res = await axiosInstance.put(`/posts/${transformedReq.id}`, transformedReq)
        const backendData = res.data

        const transformedRes: UpdatePostResponse = { ...backendData }

        return transformedRes
    },

    delete: async (postId: number): Promise<void> => {
        await axiosInstance.delete(`/posts/${postId}`)
    }
}
