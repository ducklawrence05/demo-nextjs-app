"use client"
import React from "react"
import { Button, ButtonProps } from "@heroui/react"

export function ButtonStyled(props: ButtonProps) {
    return <Button color="primary" className="font-medium text-base" {...props} />
}
