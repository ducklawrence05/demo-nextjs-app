"use client"

import React from "react"
import { ButtonStyled } from "@/components"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Home() {
    const { t } = useTranslation()

    return (
        <div>
            <Link href="/posts">
                <ButtonStyled color="primary" className="mt-24 text-lg">
                    {t("post.go_to_list_page")}
                </ButtonStyled>
            </Link>
        </div>
    )
}
