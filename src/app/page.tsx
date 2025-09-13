"use client"
import React from "react"
import { ButtonStyled } from "@/components"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Link href="/posts">
                <ButtonStyled className="mt-24 text-lg">Go to All Posts</ButtonStyled>
            </Link>
        </>
    )
}
