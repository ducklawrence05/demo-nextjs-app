"use client"
import React, { useCallback } from "react"
import { useUpdatePost } from "@/hooks"
import { UpdatePostRequest } from "@/models/Post/schema/post"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ButtonStyled, FormStyled, InputStyled, TextareaStyled } from "@/components/styled"
import { useTranslation } from "react-i18next"

export function UpdatePostForm({
    post,
    onSuccess
}: {
    post: UpdatePostRequest
    onSuccess: () => void
}) {
    const { t } = useTranslation()

    const updateMutation = useUpdatePost({ onSuccess })

    const handleUpdate = useCallback(
        async (values: UpdatePostRequest) => {
            await updateMutation.mutateAsync(values)
        },
        [updateMutation]
    )

    const UpdatePostSchema = Yup.object().shape({
        title: Yup.string().required(t("post.title_is_required")),
        body: Yup.string().required(t("post.body_is_required"))
    })

    const formik = useFormik({
        initialValues: {
            id: post.id,
            title: post.title,
            body: post.body
        },
        validationSchema: UpdatePostSchema,
        onSubmit: handleUpdate
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
                isLoading={updateMutation.isPending}
                color="primary"
                isDisabled={!formik.isValid || !formik.dirty}
                onPress={() => formik.submitForm()}
            >
                {t("post.update")}
            </ButtonStyled>
        </FormStyled>
    )
}
