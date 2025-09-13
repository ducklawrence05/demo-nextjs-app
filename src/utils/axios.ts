import { DEFAULT_API_URL } from "@/constants/api"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: DEFAULT_API_URL,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance
