"use client"
import React from "react"
import { Card, CardProps } from "@heroui/react"

export function CardStyled(props: CardProps) {
    return <Card className="p-4 spcae-y-2" {...props} />
}
