"use client";

import { useEffect, useState } from 'react';
import {Switch} from "@radix-ui/themes";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const dark = localStorage.getItem('theme') === 'dark';
        setIsDark(dark);
        document.documentElement.classList.toggle('dark', dark);
    }, []);

    const toggleDarkMode = () => {
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setIsDark(!isDark);
    };

    return (
        <div className="flex items-center gap-2">
            <span>☀️</span>
            <Switch
                checked={isDark}
                onCheckedChange={toggleDarkMode}
            />
            <span>🌙</span>
        </div>
    );
}
