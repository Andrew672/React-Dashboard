"use client"

import { useAuth } from "@/app/hooks/useAuth"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import {Flex, Spinner, Text} from "@radix-ui/themes";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    const isLoginPage = pathname === "/login"

    useEffect(() => {
        if (!loading && !user && !isLoginPage) {
            router.push("/login")
        }
    }, [loading, user, isLoginPage, router])

    if (loading && !user && !isLoginPage) {
        return (
            <Flex
                direction="column"
                align="center"
                justify="center"
                height="100vh"
                gap="2"
            >
                <Spinner loading={loading} size="3" />
                <Text size="7" color="gray" className="flex items-center gap-1">
                    En cours de chargement
                    <span className="dot-animate">.</span>
                    <span className="dot-animate delay-200">.</span>
                    <span className="dot-animate delay-400">.</span>
                </Text>
            </Flex>
        )
    }

    return <>{children}</>
}
