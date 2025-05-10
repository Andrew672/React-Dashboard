"use client"

import { useEffect, useState } from "react"
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth"
import { auth, provider } from "@/app/utils/firebase"
import * as Avatar from "@radix-ui/react-avatar"
import {Button, Flex} from "@radix-ui/themes";
import GithubButton from "react-github-login-button";

export default function LoginPage() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
        })
        return () => unsubscribe()
    }, [])

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            setUser(result.user)
        } catch (error) {
            console.error("GitHub login failed", error)
        }
    }

    const handleLogout = () => {
        signOut(auth)
        setUser(null)
    }

    return (
        <Flex
            height="50vh"
            align="center"
            justify="center"
            className="relative px-4 overflow-hidden"
        >


            <section className="relative z-10 bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-zinc-200 dark:border-zinc-700">
                {user ? (
                    <>
                        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
                            Votre compte
                        </h1>
                        <Avatar.Root className="AvatarRoot">
                            <Avatar.Image
                                src={user.photoURL ?? undefined}
                                alt={user.displayName || "User avatar"}
                                className="w-full h-full object-cover"
                            />
                            <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-zinc-700 text-xl">
                                {user.displayName?.[0] || "?"}
                            </Avatar.Fallback>
                        </Avatar.Root>

                        <p className="text-lg font-semibold text-zinc-800 dark:text-white">{user.displayName}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-4">{user.email}</p>

                        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700">
                            Se déconnecter
                        </Button>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
                            Connectez-vous à votre compte
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-300 mb-4">Veuillez vous connecter avec votre compte GitHub</p>
                        <Flex
                            align="center"
                            justify="center">
                            <GithubButton onClick={handleLogin} />
                        </Flex>

                    </>
                )}
            </section>
        </Flex>
    )
}
