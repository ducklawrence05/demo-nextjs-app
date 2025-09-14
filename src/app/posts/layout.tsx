import React from "react"

export default function PostsLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="w-[60vw]">{children}</div>
}
