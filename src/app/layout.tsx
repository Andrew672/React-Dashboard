import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import ThemeSwitcher from "@/app/dashboard/components/DarkModeToggle";
import CommandMenu from "@/app/dashboard/components/CommandMenu";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
    title: "Dashboard",
    description: "Dashboard pour la gesstion de votre équipe",
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Theme accentColor="grass" appearance="inherit">
                        <div className="relative min-h-screen">
                            <div className="absolute top-4 right-4 z-50">
                                <ThemeSwitcher />
                            </div>
                            <CommandMenu />
                            {children}
                        </div>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
