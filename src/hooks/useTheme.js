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