"use client"
import React from "react"
import { Textarea, TextAreaProps } from "@heroui/react"

export function TextareaStyled(props: TextAreaProps) {
    return <Textarea variant="bordered" color="primary" {...props} />
}
