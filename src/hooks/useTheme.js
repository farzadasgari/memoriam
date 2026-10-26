import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "mm-theme"

function readStoredTheme() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
        return null;
    }
}

function getInitialTheme() {
    const stored = readStoredTheme();
    if (stored) return stored;

    return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === 'dark')
        root.style.colorScheme = theme
        document.querySelector('meta[name="theme-color"]') ?.setAttribute('content', theme === 'dark' ? '#0e121a' : '#f9f7f2')
    }, [theme])

    const toggleTheme = useCallback(() => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {

        }
    }, [theme])
    return { theme, toggleTheme }
}
