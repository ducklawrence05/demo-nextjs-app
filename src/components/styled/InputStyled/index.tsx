"use client"
import { Input, InputProps } from "@heroui/react"
import React from "react"

export function InputStyled(props: InputProps) {
    return <Input color="primary" variant="bordered" {...props} />
}
