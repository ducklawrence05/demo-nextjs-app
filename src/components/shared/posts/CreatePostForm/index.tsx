"use client"
import React, { useCallback } from "react"
import { useCreatePost } from "@/hooks"
import { CreatePostRequest } from "@/models/Post/schema/post"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ButtonStyled, FormStyled, InputStyled, TextareaStyled } from "@/components/styled"
import { useTranslation } from "react-i18next"

export function CreatePostForm({ onSuccess }: { onSuccess?: () => void }) {
    const { t } = useTranslation()

    const createMutation = useCreatePost({ onSuccess })

    const handleCreate = useCallback(
        async (values: CreatePostRequest) => {
            await createMutation.mutateAsync(values)
        },
        [createMutation]
    )

    const CreatePostSchema = Yup.object().shape({
        title: Yup.string().required(t("post.title_is_required")),
        body: Yup.string().required(t("post.body_is_required"))
    })

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
                label={t("post.title")}
                value={formik.values.title}
                onValueChange={(value) => formik.setFieldValue("title", value)}
                isInvalid={!!(formik.touched.title && formik.errors.title)}
                errorMessage={formik.errors.title}
                onBlur={() => {
                    formik.setFieldTouched("title")
                }}
            />
            <TextareaStyled
                label={t("post.body")}
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
                {t("post.create")}
            </ButtonStyled>
        </FormStyled>
    )
}
