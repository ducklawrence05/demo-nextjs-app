"use client"
import { CardStyled, TextSkeleton, TitleSkeleton } from "@/components/styled"

import React from "react"

export function PostDetailViewSkeleton() {
    return (
        <CardStyled className="space-y-5 p-4" radius="lg">
            <TitleSkeleton />
            <TextSkeleton className="w-90" />
            <TextSkeleton className="w-40" />
            <TextSkeleton className="w-60" />
        </CardStyled>
    )
}
