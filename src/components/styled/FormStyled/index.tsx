"use client"
import React from "react"
import { Form, FormProps } from "@heroui/react"

export function FormStyled(props: FormProps) {
    return <Form className="space-y-4" {...props} />
}
