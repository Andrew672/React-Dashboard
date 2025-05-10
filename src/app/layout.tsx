import "./globals.css"
import "@radix-ui/themes/styles.css"

import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Flex, Theme } from "@radix-ui/themes"
import ThemeSwitcher from "@/app/dashboard/components/DarkModeToggle"
import CommandMenu from "@/app/dashboard/components/CommandMenu"
import DynamicBreadcrumbs from "@/app/dashboard/components/DynamicBreadcrumbs"
import AuthGuard from "@/app/components/AuthGuard"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata = {
    title: "Dashboard",
    description: "Dashboard pour la gestion de votre équipe",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Theme accentColor="grass" appearance="inherit">
                <AuthGuard>
                    <div className="relative min-h-screen">
                        <div className="absolute top-4 right-4 z-50">
                            <ThemeSwitcher />
                        </div>
                        <CommandMenu />
                        <Flex height="10%" px="4" align="center">
                            <DynamicBreadcrumbs />
                        </Flex>
                        {children}
                    </div>
                </AuthGuard>
            </Theme>
        </ThemeProvider>
        </body>
        </html>
    )
}
