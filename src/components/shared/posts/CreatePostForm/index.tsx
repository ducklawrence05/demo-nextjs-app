"use client"
import React, { useCallback } from "react"
import { useCreatePost } from "@/hooks"
import { CreatePostRequest } from "@/models/Post/schema/post"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ButtonStyled, FormStyled, InputStyled, TextareaStyled } from "@/components/styled"

const CreatePostSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Body is required")
})

export function CreatePostForm({ onSuccess }: { onSuccess?: () => void }) {
    const createMutation = useCreatePost({ onSuccess })

    const handleCreate = useCallback(
        async (values: CreatePostRequest) => {
            await createMutation.mutateAsync(values)
        },
        [createMutation]
    )

    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        validationSchema: CreatePostSchema,
        onSubmit: handleCreate
    })

    return (
        <FormStyled>
            <InputStyled
                label="Title"
                value={formik.values.title}
                onValueChange={(value) => formik.setFieldValue("title", value)}
                isInvalid={!!(formik.touched.title && formik.errors.title)}
                errorMessage={formik.errors.title}
                onBlur={() => {
                    formik.setFieldTouched("title")
                }}
            />
            <TextareaStyled
                label="Body"
                value={formik.values.body}
                onValueChange={(value) => formik.setFieldValue("body", value)}
                isInvalid={!!(formik.touched.body && formik.errors.body)}
                errorMessage={formik.errors.body}
                onBlur={() => {
                    formik.setFieldTouched("body")
                }}
            />

            <ButtonStyled
                isLoading={createMutation.isPending}
                color="primary"
                isDisabled={!formik.isValid || !formik.dirty}
                onPress={() => formik.submitForm()}
            >
                Create Post
            </ButtonStyled>
        </FormStyled>
    )
}
