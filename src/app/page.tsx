"use client"
import React from "react"
import { ButtonStyled } from "@/components"
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <Link href="/posts">
                <ButtonStyled className="px-6 py-3 text-lg">Go to All Posts</ButtonStyled>
            </Link>
        </div>
    )
}
