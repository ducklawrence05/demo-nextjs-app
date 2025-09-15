"use client"
import React, { useEffect } from "react"
import { HeroUIProvider } from "@heroui/react"
import { getQueryClient } from "@/utils/helpers/getQueryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { DisclosureProvider } from "@/hooks"
import { usePathname } from "next/navigation"
import i18n from "@/lib/i18n"

export function AppProviders({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient()
    const pathName = usePathname()

    useEffect(() => {
        const segments = pathName.split("/")
        const locale = segments[1]
        if (locale && i18n.language !== locale) {
            i18n.changeLanguage(locale)
        }
    }, [pathName])

    return (
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider>
                <DisclosureProvider>{children}</DisclosureProvider>
            </HeroUIProvider>
        </QueryClientProvider>
    )
}
